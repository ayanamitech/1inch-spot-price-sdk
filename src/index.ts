import OffchainABI from '../data/OffchainOracle.json';
import MulticallABI from '../data/Multicall.json';
import { get } from 'axios-auto';
import { ethers, BigNumber as BN } from 'ethers';
import Web3AxiosProvider from 'web3-providers-axios';
import { BigNumber } from 'bignumber.js';
import type { Provider } from '@ethersproject/abstract-provider';
import type { BigNumberish } from 'ethers';
import type { fetchConfig } from 'axios-auto';
import type { HttpProviderOptions, AxiosAutoOptions } from 'web3-providers-axios';

BigNumber.config({
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  DECIMAL_PLACES: 1000,
  EXPONENTIAL_AT: 1000
});

type tokens = {
  [key: string]: any;
};

type Config = {
  name: string,
  coin: string,
  chainId: number,
  oracle: string,
  wrappedToken: string,
  multicall: string,
  rpc: string[],
  tokens: tokens
};

export default class OneInchSpotPrice {
  public chainId: number;
  public provider: Provider;
  private configURL = 'https://raw.githubusercontent.com/ayanamitech/1inch-spot-price-sdk/main/data/1inch.json';
  private config: Config;
  private initializer: () => void;
  private isInititialized: boolean;

  public constructor(chainId?: number, provider?: Provider, axiosConfig?: fetchConfig, providerOptions?: HttpProviderOptions, axiosOptions?: AxiosAutoOptions) {
    // Mock value to address Property has no initializer and is not definitely assigned in the constructor. error
    this.chainId = 1;
    this.provider = new ethers.providers.Web3Provider(new Web3AxiosProvider(''));
    this.config = {
      'name': '',
      'coin': '',
      'chainId': 1,
      'oracle': '',
      'wrappedToken': '',
      'multicall': '',
      'rpc': [''],
      'tokens': [{'': {}}]
    };
    this.isInititialized = false;
    this.initializer = () => this.init(chainId, provider, axiosConfig, providerOptions, axiosOptions)
      .then(init => {
        this.chainId = init[0];
        this.provider = init[1];
        this.config = init[2];
        this.isInititialized = true;
      });
  }

  private async init(chainId?: number, provider?: Provider, axiosConfig?: fetchConfig, providerOptions?: HttpProviderOptions, axiosOptions?: AxiosAutoOptions): Promise<[number, Provider, Config]> {
    const ChainID = chainId ? chainId : provider ? await provider.getNetwork().then((r) => r.chainId) : 1;
    const getConfig: Config | undefined = await get(this.configURL, axiosConfig).then(config => config.find((cfg: Config) => cfg.chainId === ChainID));
    if (getConfig === undefined) {
      throw new Error(`ChainID ${ChainID} not supported`);
    }

    const Provider: Provider = provider ? provider : new ethers.providers.Web3Provider(new Web3AxiosProvider(getConfig.rpc.join(', '), providerOptions, axiosOptions));

    return [
      ChainID,
      Provider,
      getConfig
    ];
  }

  private getDecimals(tokens: tokens, tokenAddr: string): number {
    return tokens[`${tokenAddr.toLowerCase()}`].decimals;
  }

  private getTokenAddress(tokens: tokens, type: string, chainId: number, symbol: string): string {
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

  private getTokens(tokens: tokens, wrappedToken: string, srcToken: string, dstToken: string, chainId: number): [string, string, number, number] {
    // Check srcToken / dstToken is tokenAddress, if not assume it is token symbol (ETH, USDT) and find the address
    let SrcToken: string = ethers.utils.isAddress(srcToken) ? srcToken : this.getTokenAddress(tokens, 'src', chainId, srcToken);
    let DstToken: string = ethers.utils.isAddress(dstToken) ? dstToken : this.getTokenAddress(tokens, 'dst', chainId, dstToken);

    if (SrcToken.includes('0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')) {
      SrcToken = wrappedToken;
    }

    if (DstToken.includes('0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')) {
      DstToken = wrappedToken;
    }

    const SrcTokenDecimals = this.getDecimals(tokens, SrcToken);
    const DstTokenDecimals = this.getDecimals(tokens, DstToken);

    return [
      SrcToken,
      DstToken,
      SrcTokenDecimals,
      DstTokenDecimals
    ];
  }

  /**
   * (Optional) Initialize class
   */
  public async initialize(): Promise<void> {
    if (!this.isInititialized) {
      await this.initializer();
    }
  }

  /**
   * Get Liquidity-weighted dex price from on-chain aggregator contract
   * @param srcToken ERC20 address or ERC20 symbol value of srcToken to query
   * @param dstToken ERC20 address or ERC20 symbol value of dstToken to query
   * @returns price of srcToken against dstToken wrapped by string after the promise is resolved.
   */
  public async getRate(srcToken: string, dstToken: string): Promise<string> {
    await this.initialize();
    const config = this.config;
    const [SrcToken, DstToken, SrcTokenDecimals, DstTokenDecimals] = this.getTokens(config.tokens, config.wrappedToken, srcToken, dstToken, this.chainId);

    const OffchainOracle = new ethers.Contract(config.oracle, OffchainABI, this.provider);

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
   * @returns Array of price for srcTokens against dstTokens wrapped by string after the promise is resolved.
   */
  public async getMultiRates(srcToken: string[], dstToken: string[]): Promise<string[]> {
    await this.initialize();
    const config = this.config;
    if (srcToken.length !== dstToken.length) {
      throw new Error('Invalid token length');
    }

    const tokens: [string, string, number, number][] = [];

    for (let i = 0; i < srcToken.length; i++) {
      tokens.push(this.getTokens(config.tokens, config.wrappedToken, srcToken[i], dstToken[i], this.chainId));
    }

    const OffchainOracle = new ethers.Contract(config.oracle, OffchainABI, this.provider);
    const Multicall = new ethers.Contract(config.multicall, MulticallABI, this.provider);

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
}
