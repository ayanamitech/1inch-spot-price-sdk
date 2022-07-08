/*!
 * MIT License
 * 
 * Copyright (c) 2022 AyanamiTech
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
'use strict';

var axiosAuto = require('axios-auto');
var ethers = require('ethers');
var AxiosProvider = require('ethers-axios-provider');
var bignumber_js = require('bignumber.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var AxiosProvider__default = /*#__PURE__*/_interopDefaultLegacy(AxiosProvider);

var OffchainABI = [
	{
		inputs: [
			{
				internalType: "contract MultiWrapper",
				name: "_multiWrapper",
				type: "address"
			},
			{
				internalType: "contract IOracle[]",
				name: "existingOracles",
				type: "address[]"
			},
			{
				internalType: "enum OffchainOracle.OracleType[]",
				name: "oracleTypes",
				type: "uint8[]"
			},
			{
				internalType: "contract IERC20[]",
				name: "existingConnectors",
				type: "address[]"
			},
			{
				internalType: "contract IERC20",
				name: "wBase",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "contract IERC20",
				name: "connector",
				type: "address"
			}
		],
		name: "ConnectorAdded",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "contract IERC20",
				name: "connector",
				type: "address"
			}
		],
		name: "ConnectorRemoved",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "contract MultiWrapper",
				name: "multiWrapper",
				type: "address"
			}
		],
		name: "MultiWrapperUpdated",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "contract IOracle",
				name: "oracle",
				type: "address"
			},
			{
				indexed: false,
				internalType: "enum OffchainOracle.OracleType",
				name: "oracleType",
				type: "uint8"
			}
		],
		name: "OracleAdded",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "contract IOracle",
				name: "oracle",
				type: "address"
			},
			{
				indexed: false,
				internalType: "enum OffchainOracle.OracleType",
				name: "oracleType",
				type: "uint8"
			}
		],
		name: "OracleRemoved",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "connector",
				type: "address"
			}
		],
		name: "addConnector",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IOracle",
				name: "oracle",
				type: "address"
			},
			{
				internalType: "enum OffchainOracle.OracleType",
				name: "oracleKind",
				type: "uint8"
			}
		],
		name: "addOracle",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "connectors",
		outputs: [
			{
				internalType: "contract IERC20[]",
				name: "allConnectors",
				type: "address[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "srcToken",
				type: "address"
			},
			{
				internalType: "contract IERC20",
				name: "dstToken",
				type: "address"
			},
			{
				internalType: "bool",
				name: "useWrappers",
				type: "bool"
			}
		],
		name: "getRate",
		outputs: [
			{
				internalType: "uint256",
				name: "weightedRate",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "srcToken",
				type: "address"
			},
			{
				internalType: "bool",
				name: "useSrcWrappers",
				type: "bool"
			}
		],
		name: "getRateToEth",
		outputs: [
			{
				internalType: "uint256",
				name: "weightedRate",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "multiWrapper",
		outputs: [
			{
				internalType: "contract MultiWrapper",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "oracles",
		outputs: [
			{
				internalType: "contract IOracle[]",
				name: "allOracles",
				type: "address[]"
			},
			{
				internalType: "enum OffchainOracle.OracleType[]",
				name: "oracleTypes",
				type: "uint8[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IERC20",
				name: "connector",
				type: "address"
			}
		],
		name: "removeConnector",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract IOracle",
				name: "oracle",
				type: "address"
			},
			{
				internalType: "enum OffchainOracle.OracleType",
				name: "oracleKind",
				type: "uint8"
			}
		],
		name: "removeOracle",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "contract MultiWrapper",
				name: "_multiWrapper",
				type: "address"
			}
		],
		name: "setMultiWrapper",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var MulticallABI = [
	{
		constant: true,
		inputs: [
		],
		name: "getCurrentBlockTimestamp",
		outputs: [
			{
				name: "timestamp",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				components: [
					{
						name: "target",
						type: "address"
					},
					{
						name: "callData",
						type: "bytes"
					}
				],
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "aggregate",
		outputs: [
			{
				name: "blockNumber",
				type: "uint256"
			},
			{
				name: "returnData",
				type: "bytes[]"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getLastBlockHash",
		outputs: [
			{
				name: "blockHash",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "addr",
				type: "address"
			}
		],
		name: "getEthBalance",
		outputs: [
			{
				name: "balance",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getCurrentBlockDifficulty",
		outputs: [
			{
				name: "difficulty",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getCurrentBlockGasLimit",
		outputs: [
			{
				name: "gaslimit",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getCurrentBlockCoinbase",
		outputs: [
			{
				name: "coinbase",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "blockNumber",
				type: "uint256"
			}
		],
		name: "getBlockHash",
		outputs: [
			{
				name: "blockHash",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

bignumber_js.BigNumber.config({
  ROUNDING_MODE: bignumber_js.BigNumber.ROUND_DOWN,
  DECIMAL_PLACES: 1e3,
  EXPONENTIAL_AT: 1e3
});
class OneInchSpotPrice {
  constructor(chainId, provider, axiosConfig, axiosOptions) {
    this.configURL = "https://raw.githubusercontent.com/ayanamitech/1inch-spot-price-sdk/main/data/1inch.json";
    this.chainId = 1;
    this.provider = new AxiosProvider__default["default"]("");
    this.config = {
      "name": "",
      "coin": "",
      "chainId": 1,
      "oracle": "",
      "wrappedToken": "",
      "multicall": "",
      "rpc": [""],
      "tokens": [{ "": {} }]
    };
    this.isInititialized = false;
    this.initializer = () => this.init(chainId, provider, axiosConfig, axiosOptions).then((init) => {
      this.chainId = init[0];
      this.provider = init[1];
      this.config = init[2];
      this.isInititialized = true;
    });
  }
  async init(chainId, provider, axiosConfig, axiosOptions) {
    const ChainID = chainId ? chainId : provider ? await provider.getNetwork().then((r) => r.chainId) : 1;
    const getConfig = await axiosAuto.get(this.configURL, axiosConfig).then((config) => config.find((cfg) => cfg.chainId === ChainID));
    if (getConfig === void 0) {
      throw new Error(`ChainID ${ChainID} not supported`);
    }
    const Provider = provider ? provider : new AxiosProvider__default["default"](getConfig.rpc.join(", "), axiosOptions);
    return [
      ChainID,
      Provider,
      getConfig
    ];
  }
  getDecimals(tokens, tokenAddr) {
    return tokens[`${tokenAddr.toLowerCase()}`].decimals;
  }
  getTokenAddress(tokens, type, chainId, symbol) {
    let token;
    Object.keys(tokens).forEach((tokenAddr) => {
      if (tokens[tokenAddr].symbol === symbol) {
        token = tokens[tokenAddr].address;
      }
    });
    if (token === void 0) {
      throw new Error(`${type}Token ${symbol} undefined for ${chainId} chain`);
    }
    return token;
  }
  getTokens(tokens, wrappedToken, srcToken, dstToken, chainId) {
    let SrcToken = ethers.ethers.utils.isAddress(srcToken) ? srcToken : this.getTokenAddress(tokens, "src", chainId, srcToken);
    let DstToken = ethers.ethers.utils.isAddress(dstToken) ? dstToken : this.getTokenAddress(tokens, "dst", chainId, dstToken);
    if (SrcToken.includes("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")) {
      SrcToken = wrappedToken;
    }
    if (DstToken.includes("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")) {
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
  async initialize() {
    if (!this.isInititialized) {
      await this.initializer();
    }
  }
  async getRate(srcToken, dstToken) {
    await this.initialize();
    const config = this.config;
    const [SrcToken, DstToken, SrcTokenDecimals, DstTokenDecimals] = this.getTokens(config.tokens, config.wrappedToken, srcToken, dstToken, this.chainId);
    const OffchainOracle = new ethers.ethers.Contract(config.oracle, OffchainABI, this.provider);
    const result = await OffchainOracle.getRate(SrcToken, DstToken, false).then((rate) => {
      const numerator = new bignumber_js.BigNumber(10).pow(SrcTokenDecimals);
      const denumerator = new bignumber_js.BigNumber(10).pow(DstTokenDecimals);
      const price = new bignumber_js.BigNumber(ethers.BigNumber.from(rate).toString()).times(numerator).div(denumerator);
      return price.div(new bignumber_js.BigNumber(10).pow(18)).toString();
    });
    return result;
  }
  async getMultiRates(srcToken, dstToken) {
    await this.initialize();
    const config = this.config;
    if (srcToken.length !== dstToken.length) {
      throw new Error("Invalid token length");
    }
    const tokens = [];
    for (let i = 0; i < srcToken.length; i++) {
      tokens.push(this.getTokens(config.tokens, config.wrappedToken, srcToken[i], dstToken[i], this.chainId));
    }
    const OffchainOracle = new ethers.ethers.Contract(config.oracle, OffchainABI, this.provider);
    const Multicall = new ethers.ethers.Contract(config.multicall, MulticallABI, this.provider);
    const callData = tokens.map((token) => ({
      target: config.oracle,
      callData: OffchainOracle.interface.encodeFunctionData("getRate", [token[0], token[1], false])
    }));
    return await Multicall.aggregate(callData).then((result) => {
      const returnData = result[1];
      return returnData.map((rate) => {
        const i = returnData.indexOf(rate);
        const SrcTokenDecimals = tokens[i][2];
        const DstTokenDecimals = tokens[i][3];
        const numerator = new bignumber_js.BigNumber(10).pow(SrcTokenDecimals);
        const denumerator = new bignumber_js.BigNumber(10).pow(DstTokenDecimals);
        const price = new bignumber_js.BigNumber(ethers.BigNumber.from(rate).toString()).times(numerator).div(denumerator);
        return price.div(new bignumber_js.BigNumber(10).pow(18)).toString();
      });
    });
  }
}

module.exports = OneInchSpotPrice;
