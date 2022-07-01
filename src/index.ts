import OffchainABI from '../data/OffchainOracle.json';
import MulticallABI from '../data/Multicall.json';
import Config from '../data/1inch.json';
import { ethers, BigNumber as BN } from 'ethers';
import Web3AxiosProvider from 'web3-providers-axios';
import { BigNumber } from 'bignumber.js';
import type { Provider } from '@ethersproject/abstract-provider';
import type { BigNumberish } from 'ethers';

BigNumber.config({
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  DECIMAL_PLACES: 1000,
  EXPONENTIAL_AT: 1000
});

type tokens = {
  [key: string]: any;
};

function getDecimals(tokens: tokens, tokenAddr: string): number {
  return tokens[`${tokenAddr.toLowerCase()}`].decimals;
}

function getTokenAddress(tokens: tokens, type: string, chainId: number, symbol: string): string {
  let token: string | undefined;

  Object.keys(tokens).forEach(tokenAddr => {
    if (tokens[tokenAddr].symbol === symbol) {
      token = tokens[tokenAddr].address;
    }
  });

  if (token === undefined) {
    throw new Error(`${type}Token ${symbol} undefined for ${chainId} chain`);
  }

  return token;
}

function getTokens(tokens: tokens, wrappedToken: string, srcToken: string, dstToken: string, chainId: number): [string, string, number, number] {
  // Check srcToken / dstToken is tokenAddress, if not assume it is token symbol (ETH, USDT) and find the address
  let SrcToken: string = ethers.utils.isAddress(srcToken) ? srcToken : getTokenAddress(tokens, 'src', chainId, srcToken);
  let DstToken: string = ethers.utils.isAddress(dstToken) ? dstToken : getTokenAddress(tokens, 'dst', chainId, dstToken);

  if (SrcToken.includes('0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')) {
    SrcToken = wrappedToken;
  }

  if (DstToken.includes('0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')) {
    DstToken = wrappedToken;
  }

  const SrcTokenDecimals = getDecimals(tokens, SrcToken);
  const DstTokenDecimals = getDecimals(tokens, DstToken);

  return [
    SrcToken,
    DstToken,
    SrcTokenDecimals,
    DstTokenDecimals
  ];
}

/**
 * Get Liquidity-weighted dex price from on-chain aggregator contract
 * @param srcToken ERC20 address or ERC20 symbol value of srcToken to query
 * @param dstToken ERC20 address or ERC20 symbol value of dstToken to query
 * @param chainId (Optional) Number value of chainId for supported network,
 * default to chainId of network connected by provider or 1 for mainnet
 * @param provider Ethers.js compatible provider (for full list please refer https://docs.ethers.io/v5/api/providers/)
 * @returns price of srcToken against dstToken wrapped by string after the promise is resolved.
 */
export async function getRate(srcToken: string, dstToken: string, chainId?: number, provider?: Provider): Promise<string> {
  const ChainID = chainId ? chainId : provider ? await provider.getNetwork().then((r) => r.chainId) : 1;
  const config = Config.find(cfg => cfg.chainId === ChainID);
  if (config === undefined) {
    throw new Error(`ChainID ${ChainID} not supported`);
  }

  const [SrcToken, DstToken, SrcTokenDecimals, DstTokenDecimals] = getTokens(config.tokens, config.wrappedToken, srcToken, dstToken, ChainID);

  let Provider: Provider | undefined = provider;
  if (provider === undefined) {
    Provider = new ethers.providers.Web3Provider(new Web3AxiosProvider(config.rpc.join(', ')));
  }

  const OffchainOracle = new ethers.Contract(config.oracle, OffchainABI, Provider);

  const result = await OffchainOracle.getRate(SrcToken, DstToken, false).then((rate: BigNumberish) => {
    const numerator = new BigNumber(10).pow(SrcTokenDecimals);
    const denumerator = new BigNumber(10).pow(DstTokenDecimals);
    const price = new BigNumber(BN.from(rate).toString()).times(numerator).div(denumerator);
    return price.div(new BigNumber(10).pow(18)).toString();
  });

  return result;
}

/**
 * Get array of Liquidity-weighted dex prices from on-chain aggregator contract
 * @param srcToken Array of ERC20 addresses or ERC20 symbol values of srcToken to query
 * @param dstToken Array of ERC20 addresses or ERC20 symbol values of dstToken to query
 * @param chainId (Optional) Number value of chainId for supported network,
 * default to chainId of network connected by provider or 1 for mainnet
 * @param provider Ethers.js compatible provider (for full list please refer https://docs.ethers.io/v5/api/providers/)
 * @returns Array of price for srcTokens against dstTokens wrapped by string after the promise is resolved.
 */
export async function getMultiRates(srcToken: string[], dstToken: string[], chainId?: number, provider?: Provider): Promise<string[]> {
  const ChainID = chainId ? chainId : provider ? await provider.getNetwork().then((r) => r.chainId) : 1;
  const config = Config.find(cfg => cfg.chainId === ChainID);
  if (config === undefined) {
    throw new Error(`ChainID ${ChainID} not supported`);
  }
  if (srcToken.length !== dstToken.length) {
    throw new Error('Invalid token length');
  }

  const tokens: [string, string, number, number][] = [];

  for (let i = 0; i < srcToken.length; i++) {
    tokens.push(getTokens(config.tokens, config.wrappedToken, srcToken[i], dstToken[i], ChainID));
  }

  let Provider: Provider | undefined = provider;
  if (provider === undefined) {
    Provider = new ethers.providers.Web3Provider(new Web3AxiosProvider(config.rpc.join(', ')));
  }

  const OffchainOracle = new ethers.Contract(config.oracle, OffchainABI, Provider);
  const Multicall = new ethers.Contract(config.multicall, MulticallABI, Provider);

  const callData = tokens.map((token) => ({
    target: config.oracle,
    callData: OffchainOracle.interface.encodeFunctionData('getRate', [ token[0], token[1], false ])
  }));

  return await Multicall.aggregate(callData).then((result: [number, BigNumberish[]]) => {
    const returnData = result[1];

    return returnData.map((rate: BigNumberish) => {
      const i = returnData.indexOf(rate);
      const SrcTokenDecimals = tokens[i][2];
      const DstTokenDecimals = tokens[i][3];
      const numerator = new BigNumber(10).pow(SrcTokenDecimals);
      const denumerator = new BigNumber(10).pow(DstTokenDecimals);
      const price = new BigNumber(BN.from(rate).toString()).times(numerator).div(denumerator);
      return price.div(new BigNumber(10).pow(18)).toString();
    });
  });
}

export default {
  getRate,
  getMultiRates
};
