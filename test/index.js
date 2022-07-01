'use strict';

var ethers = require('ethers');
var Web3AxiosProvider = require('web3-providers-axios');
var bignumber_js = require('bignumber.js');
var assert = require('assert');
var axios = require('axios-auto');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var Web3AxiosProvider__default = /*#__PURE__*/_interopDefaultLegacy(Web3AxiosProvider);
var axios__namespace = /*#__PURE__*/_interopNamespace(axios);

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

var Config = [
	{
		name: "Ethereum Mainnet",
		coin: "ETH",
		chainId: 1,
		oracle: "0x07D91f5fb9Bf7798734C3f606dB065549F6893bb",
		wrappedToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
		multicall: "0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441",
		rpc: [
			"https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
			"wss://mainnet.infura.io/ws/v3/9aa3d95b3bc440fa88ea12eaa4456161",
			"https://api.mycryptoapi.com/eth",
			"https://cloudflare-eth.com",
			"https://rpc.flashbots.net",
			"https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
			"https://mainnet-nethermind.blockscout.com",
			"https://nodes.mewapi.io/rpc/eth",
			"https://main-rpc.linkpool.io",
			"https://mainnet.eth.cloud.ava.do",
			"https://ethereumnodelight.app.runonflux.io",
			"https://rpc.ankr.com/eth",
			"https://eth-rpc.gateway.pokt.network",
			"https://main-light.eth.linkpool.io",
			"https://eth-mainnet.public.blastapi.io",
			"https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
			"wss://eth-mainnet.nodereal.io/ws/v1/1659dfb40aa24bbb8153a677b98064d7"
		],
		tokens: {
			"0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd": {
				symbol: "BTC++",
				name: "PieDAO BTC++",
				decimals: 18,
				address: "0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd",
				logoURI: "https://tokens.1inch.io/0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd.png",
				tags: [
					"tokens"
				]
			},
			"0x04fa0d235c4abf4bcf4787af4cf447de572ef828": {
				symbol: "UMA",
				name: "UMA Voting Token v1",
				decimals: 18,
				address: "0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
				logoURI: "https://tokens.1inch.io/0x04fa0d235c4abf4bcf4787af4cf447de572ef828.png",
				tags: [
					"tokens"
				]
			},
			"0x08d967bb0134f2d07f7cfb6e246680c53927dd30": {
				symbol: "MATH",
				name: "MATH Token",
				address: "0x08d967bb0134f2d07f7cfb6e246680c53927dd30",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png",
				tags: [
					"tokens"
				]
			},
			"0x0a913bead80f321e7ac35285ee10d9d922659cb7": {
				symbol: "DOS",
				name: "DOS Network Token",
				decimals: 18,
				address: "0x0a913bead80f321e7ac35285ee10d9d922659cb7",
				logoURI: "https://tokens.1inch.io/0x0a913bead80f321e7ac35285ee10d9d922659cb7.png",
				tags: [
					"tokens"
				]
			},
			"0x0ae055097c6d159879521c384f1d2123d1f195e6": {
				symbol: "STAKE",
				name: "STAKE",
				address: "0x0ae055097c6d159879521c384f1d2123d1f195e6",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x0ae055097c6d159879521c384f1d2123d1f195e6.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0": {
				symbol: "TRB",
				name: "Tellor Tributes",
				address: "0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5.png",
				tags: [
					"tokens"
				]
			},
			"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e": {
				symbol: "YFI",
				name: "yearn.finance",
				decimals: 18,
				address: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
				logoURI: "https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png",
				tags: [
					"tokens"
				]
			},
			"0x0d438f3b5175bebc262bf23753c1e53d03432bde": {
				symbol: "wNXM",
				name: "Wrapped NXM",
				decimals: 18,
				address: "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
				logoURI: "https://tokens.1inch.io/0x0d438f3b5175bebc262bf23753c1e53d03432bde.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0d8775f648430679a709e98d2b0cb6250d2887ef": {
				symbol: "BAT",
				name: "Basic Attention Token",
				address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png",
				tags: [
					"tokens"
				]
			},
			"0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6": {
				symbol: "ABYSS",
				name: "Abyss",
				decimals: 18,
				address: "0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6",
				logoURI: "https://tokens.1inch.io/0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6.png",
				tags: [
					"tokens"
				]
			},
			"0x0f5d2fb29fb7d3cfee444a200298f468908cc942": {
				symbol: "MANA",
				name: "Mana",
				address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png",
				tags: [
					"tokens"
				]
			},
			"0x0f7f961648ae6db43c75663ac7e5414eb79b5704": {
				symbol: "XIO",
				name: "XIO Network",
				address: "0x0f7f961648ae6db43c75663ac7e5414eb79b5704",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x0f7f961648ae6db43c75663ac7e5414eb79b5704.png",
				tags: [
					"tokens"
				]
			},
			"0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd": {
				symbol: "GRID",
				name: "GRID",
				address: "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
				decimals: 12,
				logoURI: "https://tokens.1inch.io/0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd.png",
				tags: [
					"tokens"
				]
			},
			"0x12f649a9e821f90bb143089a6e56846945892ffb": {
				symbol: "uDOO",
				name: "uDOO",
				address: "0x12f649a9e821f90bb143089a6e56846945892ffb",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x12f649a9e821f90bb143089a6e56846945892ffb.png",
				tags: [
					"tokens"
				]
			},
			"0x1776e1f26f98b1a5df9cd347953a26dd3cb46671": {
				symbol: "NMR",
				name: "Numeraire",
				address: "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x1776e1f26f98b1a5df9cd347953a26dd3cb46671.png",
				tags: [
					"tokens"
				]
			},
			"0x178c820f862b14f316509ec36b13123da19a6054": {
				symbol: "EWTB",
				name: "Energy Web Token Bridged",
				address: "0x178c820f862b14f316509ec36b13123da19a6054",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x178c820f862b14f316509ec36b13123da19a6054.png",
				tags: [
					"tokens"
				]
			},
			"0x1a5f9352af8af974bfc03399e3767df6370d82e4": {
				symbol: "OWL",
				name: "OWL Token",
				address: "0x1a5f9352af8af974bfc03399e3767df6370d82e4",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x1a5f9352af8af974bfc03399e3767df6370d82e4.png",
				tags: [
					"tokens"
				]
			},
			"0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06": {
				symbol: "PAR",
				name: "Parachute",
				address: "0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06.png",
				tags: [
					"tokens"
				]
			},
			"0x196f4727526ea7fb1e17b2071b3d8eaa38486988": {
				symbol: "RSV",
				name: "Reserve",
				address: "0x196f4727526ea7fb1e17b2071b3d8eaa38486988",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x196f4727526ea7fb1e17b2071b3d8eaa38486988.png",
				tags: [
					"tokens"
				]
			},
			"0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c": {
				symbol: "BNT",
				name: "Bancor",
				address: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c.png",
				tags: [
					"tokens"
				]
			},
			"0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a": {
				symbol: "SPN",
				name: "Sapien Network",
				address: "0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a",
				decimals: 6,
				logoURI: "https://tokens.1inch.io/0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a.png",
				tags: [
					"tokens"
				]
			},
			"0x221657776846890989a759ba2973e427dff5c9bb": {
				symbol: "REPv2",
				name: "Reputation V2",
				decimals: 18,
				address: "0x221657776846890989a759ba2973e427dff5c9bb",
				logoURI: "https://tokens.1inch.io/0x221657776846890989a759ba2973e427dff5c9bb.png",
				tags: [
					"tokens"
				]
			},
			"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": {
				symbol: "WBTC",
				name: "Wrapped BTC",
				address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
				decimals: 8,
				logoURI: "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
				tags: [
					"tokens"
				]
			},
			"0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6": {
				symbol: "RDN",
				name: "Raiden Network Token",
				address: "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6.png",
				tags: [
					"tokens"
				]
			},
			"0x27054b13b1b798b345b591a4d22e6562d47ea75a": {
				symbol: "AST",
				name: "AirSwap",
				decimals: 4,
				address: "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
				logoURI: "https://tokens.1inch.io/0x27054b13b1b798b345b591a4d22e6562d47ea75a.png",
				tags: [
					"tokens"
				]
			},
			"0x28cb7e841ee97947a86b06fa4090c8451f64c0be": {
				symbol: "YFL",
				name: "YFLink",
				address: "0x28cb7e841ee97947a86b06fa4090c8451f64c0be",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x28cb7e841ee97947a86b06fa4090c8451f64c0be.png",
				tags: [
					"tokens"
				]
			},
			"0x28dee01d53fed0edf5f6e310bf8ef9311513ae40": {
				symbol: "XBP",
				name: "BlitzPredict",
				address: "0x28dee01d53fed0edf5f6e310bf8ef9311513ae40",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x28dee01d53fed0edf5f6e310bf8ef9311513ae40.png",
				tags: [
					"tokens"
				]
			},
			"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39": {
				symbol: "HEX",
				name: "HEX",
				address: "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
				decimals: 8,
				logoURI: "https://tokens.1inch.io/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png",
				tags: [
					"tokens"
				]
			},
			"0x2ba592f78db6436527729929aaf6c908497cb200": {
				symbol: "CREAM",
				name: "Cream",
				address: "0x2ba592f78db6436527729929aaf6c908497cb200",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x2ba592f78db6436527729929aaf6c908497cb200.png",
				tags: [
					"tokens"
				]
			},
			"0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724": {
				symbol: "VIB",
				name: "Viberate",
				address: "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724.png",
				tags: [
					"tokens"
				]
			},
			"0x301c755ba0fca00b1923768fffb3df7f4e63af31": {
				symbol: "GDC",
				name: "Global Digital Content",
				address: "0x301c755ba0fca00b1923768fffb3df7f4e63af31",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x301c755ba0fca00b1923768fffb3df7f4e63af31.png",
				tags: [
					"tokens"
				]
			},
			"0x309627af60f0926daa6041b8279484312f2bf060": {
				symbol: "USDB",
				name: "USDB",
				address: "0x309627af60f0926daa6041b8279484312f2bf060",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x309627af60f0926daa6041b8279484312f2bf060.png",
				tags: [
					"tokens"
				]
			},
			"0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3": {
				symbol: "DEC",
				name: "Decentr",
				address: "0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3.png",
				tags: [
					"tokens"
				]
			},
			"0x340d2bde5eb28c1eed91b2f790723e3b160613b7": {
				symbol: "VEE",
				name: "BLOCKv",
				address: "0x340d2bde5eb28c1eed91b2f790723e3b160613b7",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x340d2bde5eb28c1eed91b2f790723e3b160613b7.png",
				tags: [
					"tokens"
				]
			},
			"0x3c6ff50c9ec362efa359317009428d52115fe643": {
				symbol: "PERX",
				name: "PeerEx Network",
				address: "0x3c6ff50c9ec362efa359317009428d52115fe643",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x3c6ff50c9ec362efa359317009428d52115fe643.png",
				tags: [
					"tokens"
				]
			},
			"0x408e41876cccdc0f92210600ef50372656052a38": {
				symbol: "REN",
				name: "Republic",
				address: "0x408e41876cccdc0f92210600ef50372656052a38",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x408e41876cccdc0f92210600ef50372656052a38.png",
				tags: [
					"tokens"
				]
			},
			"0x40fd72257597aa14c7231a7b1aaa29fce868f677": {
				symbol: "XOR",
				name: "Sora Token",
				address: "0x40fd72257597aa14c7231a7b1aaa29fce868f677",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x40fd72257597aa14c7231a7b1aaa29fce868f677.png",
				tags: [
					"tokens"
				]
			},
			"0x419d0d8bdd9af5e606ae2232ed285aff190e711b": {
				symbol: "FUN",
				name: "FunFair",
				address: "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
				decimals: 8,
				logoURI: "https://tokens.1inch.io/0x419d0d8bdd9af5e606ae2232ed285aff190e711b.png",
				tags: [
					"tokens"
				]
			},
			"0x41e5560054824ea6b0732e656e3ad64e20e94e45": {
				symbol: "CVC",
				name: "Civic",
				address: "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
				decimals: 8,
				logoURI: "https://tokens.1inch.io/0x41e5560054824ea6b0732e656e3ad64e20e94e45.png",
				tags: [
					"tokens"
				]
			},
			"0x42d6622dece394b54999fbd73d108123806f6a18": {
				symbol: "SPANK",
				name: "SPANK",
				address: "0x42d6622dece394b54999fbd73d108123806f6a18",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x42d6622dece394b54999fbd73d108123806f6a18.png",
				tags: [
					"tokens"
				]
			},
			"0x43044f861ec040db59a7e324c40507addb673142": {
				symbol: "CAP",
				name: "Cap",
				address: "0x43044f861ec040db59a7e324c40507addb673142",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x43044f861ec040db59a7e324c40507addb673142.png",
				tags: [
					"tokens"
				]
			},
			"0xfef4185594457050cc9c23980d301908fe057bb1": {
				symbol: "VIDT",
				name: "VIDT Datalink",
				address: "0xfef4185594457050cc9c23980d301908fe057bb1",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xfef4185594457050cc9c23980d301908fe057bb1.png",
				tags: [
					"tokens"
				]
			},
			"0x456ae45c0ce901e2e7c99c0718031cec0a7a59ff": {
				symbol: "VSN",
				name: "Vision Network",
				address: "0x456ae45c0ce901e2e7c99c0718031cec0a7a59ff",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x456ae45c0ce901e2e7c99c0718031cec0a7a59ff.png",
				tags: [
					"tokens"
				]
			},
			"0x49184e6dae8c8ecd89d8bdc1b950c597b8167c90": {
				symbol: "LIBERTAS",
				name: "LIBERTAS",
				address: "0x49184e6dae8c8ecd89d8bdc1b950c597b8167c90",
				decimals: 2,
				logoURI: "https://tokens.1inch.io/0x49184e6dae8c8ecd89d8bdc1b950c597b8167c90.png",
				tags: [
					"tokens"
				]
			},
			"0x4946fcea7c692606e8908002e55a582af44ac121": {
				symbol: "FOAM",
				name: "FOAM Token",
				address: "0x4946fcea7c692606e8908002e55a582af44ac121",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x4946fcea7c692606e8908002e55a582af44ac121.png",
				tags: [
					"tokens"
				]
			},
			"0x4a220e6096b25eadb88358cb44068a3248254675": {
				symbol: "QNT",
				name: "Quant",
				address: "0x4a220e6096b25eadb88358cb44068a3248254675",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x4a220e6096b25eadb88358cb44068a3248254675.png",
				tags: [
					"tokens"
				]
			},
			"0x4da9b813057d04baef4e5800e36083717b4a0341": {
				symbol: "aTUSDv1",
				name: "Aave Interest bearing TUSD",
				decimals: 18,
				address: "0x4da9b813057d04baef4e5800e36083717b4a0341",
				logoURI: "https://tokens.1inch.io/0x4da9b813057d04baef4e5800e36083717b4a0341.png",
				tags: [
					"tokens"
				]
			},
			"0x4e352cf164e64adcbad318c3a1e222e9eba4ce42": {
				symbol: "MCB",
				name: "MCDEX Token",
				address: "0x4e352cf164e64adcbad318c3a1e222e9eba4ce42",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x4e352cf164e64adcbad318c3a1e222e9eba4ce42.png",
				tags: [
					"tokens"
				]
			},
			"0x4fabb145d64652a948d72533023f6e7a623c7c53": {
				symbol: "BUSD",
				name: "Binance USD",
				decimals: 18,
				address: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
				logoURI: "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png",
				tags: [
					"tokens"
				]
			},
			"0x514910771af9ca656af840dff83e8264ecf986ca": {
				symbol: "LINK",
				name: "Chain Link",
				address: "0x514910771af9ca656af840dff83e8264ecf986ca",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
				tags: [
					"tokens"
				]
			},
			"0x543ff227f64aa17ea132bf9886cab5db55dcaddf": {
				symbol: "GEN",
				name: "DAOStack",
				address: "0x543ff227f64aa17ea132bf9886cab5db55dcaddf",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x543ff227f64aa17ea132bf9886cab5db55dcaddf.png",
				tags: [
					"tokens"
				]
			},
			"0x56d811088235f11c8920698a204a5010a788f4b3": {
				symbol: "BZRX",
				name: "bZx Protocol Token",
				decimals: 18,
				address: "0x56d811088235f11c8920698a204a5010a788f4b3",
				logoURI: "https://tokens.1inch.io/0x56d811088235f11c8920698a204a5010a788f4b3.png",
				tags: [
					"tokens"
				]
			},
			"0x5732046a883704404f284ce41ffadd5b007fd668": {
				symbol: "BLZ",
				name: "Bluzelle",
				address: "0x5732046a883704404f284ce41ffadd5b007fd668",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x5732046a883704404f284ce41ffadd5b007fd668.png",
				tags: [
					"tokens"
				]
			},
			"0x57700244b20f84799a31c6c96dadff373ca9d6c5": {
				symbol: "TRUST",
				name: "TRUST DAO",
				address: "0x57700244b20f84799a31c6c96dadff373ca9d6c5",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x57700244b20f84799a31c6c96dadff373ca9d6c5.png",
				tags: [
					"tokens"
				]
			},
			"0x58b6a8a3302369daec383334672404ee733ab239": {
				symbol: "LPT",
				name: "Livepeer Token",
				decimals: 18,
				address: "0x58b6a8a3302369daec383334672404ee733ab239",
				logoURI: "https://tokens.1inch.io/0x58b6a8a3302369daec383334672404ee733ab239.png",
				tags: [
					"tokens"
				]
			},
			"0x595832f8fc6bf59c85c527fec3740a1b7a361269": {
				symbol: "POWR",
				name: "Power Ledger",
				address: "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
				decimals: 6,
				logoURI: "https://tokens.1inch.io/0x595832f8fc6bf59c85c527fec3740a1b7a361269.png",
				tags: [
					"tokens"
				]
			},
			"0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190": {
				symbol: "DTH",
				name: "Dether",
				address: "0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190.png",
				tags: [
					"tokens"
				]
			},
			"0x5c872500c00565505f3624ab435c222e558e9ff8": {
				symbol: "COT",
				name: "CoTrader",
				address: "0x5c872500c00565505f3624ab435c222e558e9ff8",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x5c872500c00565505f3624ab435c222e558e9ff8.png",
				tags: [
					"tokens"
				]
			},
			"0x5caf454ba92e6f2c929df14667ee360ed9fd5b26": {
				symbol: "DEV",
				name: "Dev",
				address: "0x5caf454ba92e6f2c929df14667ee360ed9fd5b26",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x5caf454ba92e6f2c929df14667ee360ed9fd5b26.png",
				tags: [
					"tokens"
				]
			},
			"0x5d3a536e4d6dbd6114cc1ead35777bab948e3643": {
				symbol: "cDAI",
				name: "Compound Dai",
				decimals: 8,
				address: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
				logoURI: "https://tokens.1inch.io/0x5d3a536e4d6dbd6114cc1ead35777bab948e3643.png",
				tags: [
					"savings"
				]
			},
			"0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc": {
				symbol: "MYB",
				name: "MyBit",
				address: "0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc.png",
				tags: [
					"tokens"
				]
			},
			"0x607c794cda77efb21f8848b7910ecf27451ae842": {
				symbol: "PIE",
				name: "DeFiPIE Token",
				decimals: 18,
				address: "0x607c794cda77efb21f8848b7910ecf27451ae842",
				logoURI: "https://tokens.1inch.io/0x607c794cda77efb21f8848b7910ecf27451ae842.png",
				tags: [
					"tokens"
				]
			},
			"0x607f4c5bb672230e8672085532f7e901544a7375": {
				symbol: "RLC",
				name: "iExec RLC",
				address: "0x607f4c5bb672230e8672085532f7e901544a7375",
				decimals: 9,
				logoURI: "https://tokens.1inch.io/0x607f4c5bb672230e8672085532f7e901544a7375.png",
				tags: [
					"tokens"
				]
			},
			"0x6226caa1857afbc6dfb6ca66071eb241228031a1": {
				symbol: "LAR",
				name: "Linkart",
				address: "0x6226caa1857afbc6dfb6ca66071eb241228031a1",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x6226caa1857afbc6dfb6ca66071eb241228031a1.png",
				tags: [
					"tokens"
				]
			},
			"0x6251e725cd45fb1af99354035a414a2c0890b929": {
				symbol: "MXT",
				name: "MixTrust",
				address: "0x6251e725cd45fb1af99354035a414a2c0890b929",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x6251e725cd45fb1af99354035a414a2c0890b929.png",
				tags: [
					"tokens"
				]
			},
			"0x625ae63000f46200499120b906716420bd059240": {
				symbol: "aSUSDv1",
				name: "Aave Interest bearing SUSD",
				decimals: 18,
				address: "0x625ae63000f46200499120b906716420bd059240",
				logoURI: "https://tokens.1inch.io/0x625ae63000f46200499120b906716420bd059240.png",
				tags: [
					"savings"
				]
			},
			"0x6710c63432a2de02954fc0f851db07146a6c0312": {
				symbol: "MFG",
				name: "Smart MFG",
				address: "0x6710c63432a2de02954fc0f851db07146a6c0312",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x6710c63432a2de02954fc0f851db07146a6c0312.png",
				tags: [
					"tokens"
				]
			},
			"0x6810e776880c02933d47db1b9fc05908e5386b96": {
				symbol: "GNO",
				name: "Gnosis",
				address: "0x6810e776880c02933d47db1b9fc05908e5386b96",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x6810e776880c02933d47db1b9fc05908e5386b96.png",
				tags: [
					"tokens"
				]
			},
			"0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25": {
				symbol: "SRN",
				name: "Sirin Labs",
				address: "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25.png",
				tags: [
					"tokens"
				]
			},
			"0x6b785a0322126826d8226d77e173d75dafb84d11": {
				symbol: "VLT",
				name: "Bankroll Vault",
				address: "0x6b785a0322126826d8226d77e173d75dafb84d11",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x6b785a0322126826d8226d77e173d75dafb84d11.png",
				tags: [
					"tokens"
				]
			},
			"0x6b9f031d718dded0d681c20cb754f97b3bb81b78": {
				symbol: "GEEQ",
				name: "Geeq",
				address: "0x6b9f031d718dded0d681c20cb754f97b3bb81b78",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x6b9f031d718dded0d681c20cb754f97b3bb81b78.png",
				tags: [
					"tokens"
				]
			},
			"0x6c6ee5e31d828de241282b9606c8e98ea48526e2": {
				symbol: "HOT",
				name: "HoloToken",
				address: "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x6c6ee5e31d828de241282b9606c8e98ea48526e2.png",
				tags: [
					"tokens"
				]
			},
			"0x6f87d756daf0503d08eb8993686c7fc01dc44fb1": {
				symbol: "TRADE",
				name: "UniTrade",
				decimals: 18,
				address: "0x6f87d756daf0503d08eb8993686c7fc01dc44fb1",
				logoURI: "https://tokens.1inch.io/0x6f87d756daf0503d08eb8993686c7fc01dc44fb1.png",
				tags: [
					"tokens"
				]
			},
			"0x71fc860f7d3a592a4a98740e39db31d25db65ae8": {
				symbol: "aUSDTv1",
				name: "Aave Interest bearing USDT",
				decimals: 6,
				address: "0x71fc860f7d3a592a4a98740e39db31d25db65ae8",
				logoURI: "https://tokens.1inch.io/0x71fc860f7d3a592a4a98740e39db31d25db65ae8.png",
				tags: [
					"savings"
				]
			},
			"0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c": {
				symbol: "AMN",
				name: "Amon",
				address: "0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c.png",
				tags: [
					"tokens"
				]
			},
			"0x744d70fdbe2ba4cf95131626614a1763df805b9e": {
				symbol: "SNT",
				name: "Status",
				address: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x744d70fdbe2ba4cf95131626614a1763df805b9e.png",
				tags: [
					"tokens"
				]
			},
			"0x7b0c06043468469967dba22d1af33d77d44056c8": {
				symbol: "MRPH",
				name: "Morpheus Network",
				address: "0x7b0c06043468469967dba22d1af33d77d44056c8",
				decimals: 4,
				logoURI: "https://tokens.1inch.io/0x7b0c06043468469967dba22d1af33d77d44056c8.png",
				tags: [
					"tokens"
				]
			},
			"0x7b123f53421b1bf8533339bfbdc7c98aa94163db": {
				symbol: "buidl_1",
				name: "dfohub",
				decimals: 18,
				address: "0x7b123f53421b1bf8533339bfbdc7c98aa94163db",
				logoURI: "https://tokens.1inch.io/0x7b123f53421b1bf8533339bfbdc7c98aa94163db.png",
				tags: [
					"tokens"
				]
			},
			"0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098": {
				symbol: "SAN",
				name: "Santiment",
				address: "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098.png",
				tags: [
					"tokens"
				]
			},
			"0x7de91b204c1c737bcee6f000aaa6569cf7061cb7": {
				symbol: "XRT",
				name: "Robonomics",
				address: "0x7de91b204c1c737bcee6f000aaa6569cf7061cb7",
				decimals: 9,
				logoURI: "https://tokens.1inch.io/0x7de91b204c1c737bcee6f000aaa6569cf7061cb7.png",
				tags: [
					"tokens"
				]
			},
			"0x80fb784b7ed66730e8b1dbd9820afd29931aab03": {
				symbol: "LEND",
				name: "EthLend",
				address: "0x80fb784b7ed66730e8b1dbd9820afd29931aab03",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x80fb784b7ed66730e8b1dbd9820afd29931aab03.png",
				tags: [
					"tokens"
				]
			},
			"0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26": {
				symbol: "MDT_1",
				name: "Measurable Data Token",
				address: "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26.png",
				tags: [
					"tokens"
				]
			},
			"0x8207c1ffc5b6804f6024322ccf34f29c3541ae26": {
				symbol: "OGN",
				name: "Origin Protocol",
				address: "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x8207c1ffc5b6804f6024322ccf34f29c3541ae26.png",
				tags: [
					"tokens"
				]
			},
			"0x821144518dfe9e7b44fcf4d0824e15e8390d4637": {
				symbol: "ATIS",
				name: "ATIS Token",
				address: "0x821144518dfe9e7b44fcf4d0824e15e8390d4637",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x821144518dfe9e7b44fcf4d0824e15e8390d4637.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e": {
				symbol: "UBT",
				name: "UniBright",
				decimals: 8,
				address: "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e",
				logoURI: "https://tokens.1inch.io/0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e.png",
				tags: [
					"tokens"
				]
			},
			"0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419": {
				symbol: "DIA",
				name: "DIAToken",
				decimals: 18,
				address: "0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419",
				logoURI: "https://tokens.1inch.io/0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419.png",
				tags: [
					"tokens"
				]
			},
			"0x8762db106b2c2a0bccb3a80d1ed41273552616e8": {
				symbol: "RSR",
				name: "Reserve Rights",
				address: "0x8762db106b2c2a0bccb3a80d1ed41273552616e8",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x8762db106b2c2a0bccb3a80d1ed41273552616e8.png",
				tags: [
					"tokens"
				]
			},
			"0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed": {
				symbol: "PNT",
				name: "pNetwork Token",
				address: "0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed.png",
				tags: [
					"tokens"
				]
			},
			"0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7": {
				symbol: "AKRO",
				name: "Akropolis",
				address: "0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7.png",
				tags: [
					"tokens"
				]
			},
			"0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9": {
				symbol: "SXP",
				name: "Swipe",
				address: "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png",
				tags: [
					"tokens"
				]
			},
			"0x8e870d67f660d95d5be530380d0ec0bd388289e1": {
				symbol: "USDP",
				name: "Pax Dollar",
				address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1_1.png",
				tags: [
					"tokens"
				]
			},
			"0x8eb24319393716668d768dcec29356ae9cffe285": {
				symbol: "AGI",
				name: "SingularityNET Token",
				address: "0x8eb24319393716668d768dcec29356ae9cffe285",
				decimals: 8,
				logoURI: "https://tokens.1inch.io/0x8eb24319393716668d768dcec29356ae9cffe285.png",
				tags: [
					"tokens"
				]
			},
			"0x8f8221afbb33998d8584a2b05749ba73c37a938a": {
				symbol: "REQ",
				name: "Request",
				address: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x8f8221afbb33998d8584a2b05749ba73c37a938a.png",
				tags: [
					"tokens"
				]
			},
			"0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a": {
				symbol: "ORN",
				name: "Orion Protocol",
				address: "0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a",
				decimals: 8,
				logoURI: "https://tokens.1inch.io/0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a.png",
				tags: [
					"tokens"
				]
			},
			"0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d": {
				symbol: "PNK",
				name: "Kleros",
				address: "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d.png",
				tags: [
					"tokens"
				]
			},
			"0x95172ccbe8344fecd73d0a30f54123652981bd6f": {
				symbol: "LOCK",
				name: "Meridian Network",
				address: "0x95172ccbe8344fecd73d0a30f54123652981bd6f",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x95172ccbe8344fecd73d0a30f54123652981bd6f.png",
				tags: [
					"tokens"
				]
			},
			"0x960b236a07cf122663c4303350609a66a7b288c0": {
				symbol: "ANTv1",
				name: "Aragon Network Token",
				address: "0x960b236a07cf122663c4303350609a66a7b288c0",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x960b236a07cf122663c4303350609a66a7b288c0.png",
				tags: [
					"tokens"
				]
			},
			"0x967da4048cd07ab37855c090aaf366e4ce1b9f48": {
				symbol: "OCEAN",
				name: "OceanToken",
				address: "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png",
				tags: [
					"tokens"
				]
			},
			"0x990f341946a3fdb507ae7e52d17851b87168017c": {
				symbol: "STRONG",
				name: "Strong",
				address: "0x990f341946a3fdb507ae7e52d17851b87168017c",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x990f341946a3fdb507ae7e52d17851b87168017c.png",
				tags: [
					"tokens"
				]
			},
			"0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec": {
				symbol: "POLY",
				name: "Polymath",
				address: "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec.png",
				tags: [
					"tokens"
				]
			},
			"0x9ba00d6856a4edf4665bca2c2309936572473b7e": {
				symbol: "aUSDCv1",
				name: "Aave Interest bearing USDC",
				decimals: 6,
				address: "0x9ba00d6856a4edf4665bca2c2309936572473b7e",
				logoURI: "https://tokens.1inch.io/0x9ba00d6856a4edf4665bca2c2309936572473b7e.png",
				tags: [
					"tokens"
				]
			},
			"0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c": {
				symbol: "DZAR",
				name: "Digital Rand",
				decimals: 6,
				address: "0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c",
				logoURI: "https://tokens.1inch.io/0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c.png",
				tags: [
					"tokens"
				]
			},
			"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2": {
				symbol: "MKR",
				name: "Maker",
				address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png",
				tags: [
					"tokens"
				]
			},
			"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": {
				symbol: "USDC",
				name: "USD Coin",
				address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
				decimals: 6,
				logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
				tags: [
					"tokens"
				]
			},
			"0xa1d0e215a23d7030842fc67ce582a6afa3ccab83": {
				symbol: "YFII",
				name: "YFII.finance",
				address: "0xa1d0e215a23d7030842fc67ce582a6afa3ccab83",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xa1d0e215a23d7030842fc67ce582a6afa3ccab83.png",
				tags: [
					"tokens"
				]
			},
			"0xa1d65e8fb6e87b60feccbc582f7f97804b725521": {
				symbol: "DXD",
				name: "DXdao",
				address: "0xa1d65e8fb6e87b60feccbc582f7f97804b725521",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xa1d65e8fb6e87b60feccbc582f7f97804b725521.png",
				tags: [
					"tokens"
				]
			},
			"0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2": {
				symbol: "MTA",
				name: "Meta",
				decimals: 18,
				address: "0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2",
				logoURI: "https://tokens.1inch.io/0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2.png",
				tags: [
					"tokens"
				]
			},
			"0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e": {
				symbol: "MET",
				name: "Metronome",
				decimals: 18,
				address: "0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e",
				logoURI: "https://tokens.1inch.io/0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e.png",
				tags: [
					"tokens"
				]
			},
			"0xa462d0e6bb788c7807b1b1c96992ce1f7069e195": {
				symbol: "EQMT",
				name: "EQUUSMiningToken",
				address: "0xa462d0e6bb788c7807b1b1c96992ce1f7069e195",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xa462d0e6bb788c7807b1b1c96992ce1f7069e195.png",
				tags: [
					"tokens"
				]
			},
			"0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe": {
				symbol: "USDS",
				name: "StableUSD",
				address: "0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe",
				decimals: 6,
				logoURI: "https://tokens.1inch.io/0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe.png",
				tags: [
					"tokens"
				]
			},
			"0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84": {
				symbol: "aLINKv1",
				name: "Aave Interest bearing LINK",
				decimals: 18,
				address: "0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84",
				logoURI: "https://tokens.1inch.io/0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84.png",
				tags: [
					"savings"
				]
			},
			"0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9": {
				symbol: "AGRI",
				name: "AgriChain",
				address: "0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9.png",
				tags: [
					"tokens"
				]
			},
			"0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d": {
				symbol: "CEL",
				name: "Celsius",
				address: "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
				decimals: 4,
				logoURI: "https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png",
				tags: [
					"tokens"
				]
			},
			"0xaaaf91d9b90df800df4f55c205fd6989c977e73a": {
				symbol: "TKN",
				name: "Monolith",
				address: "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
				decimals: 8,
				logoURI: "https://tokens.1inch.io/0xaaaf91d9b90df800df4f55c205fd6989c977e73a.png",
				tags: [
					"tokens"
				]
			},
			"0xb056c38f6b7dc4064367403e26424cd2c60655e1": {
				symbol: "CEEK",
				name: "CEEK VR",
				address: "0xb056c38f6b7dc4064367403e26424cd2c60655e1",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xb056c38f6b7dc4064367403e26424cd2c60655e1.png",
				tags: [
					"tokens"
				]
			},
			"0xb4272071ecadd69d933adcd19ca99fe80664fc08": {
				symbol: "XCHF",
				name: "CryptoFranc",
				address: "0xb4272071ecadd69d933adcd19ca99fe80664fc08",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xb4272071ecadd69d933adcd19ca99fe80664fc08.png",
				tags: [
					"tokens"
				]
			},
			"0xb4efd85c19999d84251304bda99e90b92300bd93": {
				symbol: "RPL",
				name: "Rocket Pool",
				address: "0xb4efd85c19999d84251304bda99e90b92300bd93",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xb4efd85c19999d84251304bda99e90b92300bd93.png",
				tags: [
					"tokens"
				]
			},
			"0xeca82185adce47f39c684352b0439f030f860318": {
				symbol: "PERL",
				name: "Perlin",
				address: "0xeca82185adce47f39c684352b0439f030f860318",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xeca82185adce47f39c684352b0439f030f860318.png",
				tags: [
					"tokens"
				]
			},
			"0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec": {
				symbol: "REL",
				name: "Relevant",
				address: "0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec.png",
				tags: [
					"tokens"
				]
			},
			"0xba100000625a3754423978a60c9317c58a424e3d": {
				symbol: "BAL",
				name: "Balancer",
				decimals: 18,
				address: "0xba100000625a3754423978a60c9317c58a424e3d",
				logoURI: "https://tokens.1inch.io/0xba100000625a3754423978a60c9317c58a424e3d.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xba11d00c5f74255f56a5e366f4f77f5a186d7f55": {
				symbol: "BAND",
				name: "Band Protocol",
				address: "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png",
				tags: [
					"tokens"
				]
			},
			"0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82": {
				symbol: "XPAT",
				name: "Bitnation",
				address: "0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82.png",
				tags: [
					"tokens"
				]
			},
			"0xbbbbca6a901c926f240b89eacb641d8aec7aeafd": {
				symbol: "LRC",
				name: "Loopring",
				address: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xbbbbca6a901c926f240b89eacb641d8aec7aeafd.png",
				tags: [
					"tokens"
				]
			},
			"0xbc86727e770de68b1060c91f6bb6945c73e10388": {
				symbol: "XNK",
				name: "Ink Protocol",
				address: "0xbc86727e770de68b1060c91f6bb6945c73e10388",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xbc86727e770de68b1060c91f6bb6945c73e10388.png",
				tags: [
					"tokens"
				]
			},
			"0xbd2949f67dcdc549c6ebe98696449fa79d988a9f": {
				symbol: "eMTRG",
				name: "Meter Governance mapped by Meter.io",
				address: "0xbd2949f67dcdc549c6ebe98696449fa79d988a9f",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xbd2949f67dcdc549c6ebe98696449fa79d988a9f.png",
				tags: [
					"tokens"
				]
			},
			"0xbe9375c6a420d2eeb258962efb95551a5b722803": {
				symbol: "STMX",
				name: "Kyber StormX Token",
				address: "0xbe9375c6a420d2eeb258962efb95551a5b722803",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xbe9375c6a420d2eeb258962efb95551a5b722803.png",
				tags: [
					"tokens"
				]
			},
			"0xbf2179859fc6d5bee9bf9158632dc51678a4100e": {
				symbol: "ELF",
				name: "Aelf",
				address: "0xbf2179859fc6d5bee9bf9158632dc51678a4100e",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xbf2179859fc6d5bee9bf9158632dc51678a4100e.png",
				tags: [
					"tokens"
				]
			},
			"0xc00e94cb662c3520282e6f5717214004a7f26888": {
				symbol: "COMP",
				name: "Compound",
				decimals: 18,
				address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
				logoURI: "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
				tags: [
					"tokens"
				]
			},
			"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f": {
				symbol: "SNX",
				name: "Synthetix Network Token",
				decimals: 18,
				address: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
				logoURI: "https://tokens.1inch.io/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.png",
				tags: [
					"tokens"
				]
			},
			"0x27702a26126e0b3702af63ee09ac4d1a084ef628": {
				symbol: "ALEPH",
				name: "aleph.im v2",
				address: "0x27702a26126e0b3702af63ee09ac4d1a084ef628",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x27702a26126e0b3702af63ee09ac4d1a084ef628.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
				symbol: "WETH",
				name: "Wrapped Ether",
				address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
				tags: [
					"tokens"
				]
			},
			"0xc11b1268c1a384e55c48c2391d8d480264a3a7f4": {
				symbol: "cWBTC",
				name: "Compound Wrapped BTC",
				decimals: 8,
				address: "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4",
				logoURI: "https://tokens.1inch.io/0xc11b1268c1a384e55c48c2391d8d480264a3a7f4.png",
				tags: [
					"tokens"
				]
			},
			"0xc12d099be31567add4e4e4d0d45691c3f58f5663": {
				symbol: "AUC",
				name: "Auctus",
				address: "0xc12d099be31567add4e4e4d0d45691c3f58f5663",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xc12d099be31567add4e4e4d0d45691c3f58f5663.png",
				tags: [
					"tokens"
				]
			},
			"0xc28e931814725bbeb9e670676fabbcb694fe7df2": {
				symbol: "EQUAD",
				name: "Quadrant Protocol",
				address: "0xc28e931814725bbeb9e670676fabbcb694fe7df2",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xc28e931814725bbeb9e670676fabbcb694fe7df2.png",
				tags: [
					"tokens"
				]
			},
			"0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb": {
				symbol: "TRND",
				name: "Trendering",
				address: "0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb.png",
				tags: [
					"tokens"
				]
			},
			"0xcc4304a31d09258b0029ea7fe63d032f52e44efe": {
				symbol: "SWAP",
				name: "TrustSwap Token",
				address: "0xcc4304a31d09258b0029ea7fe63d032f52e44efe",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xcc4304a31d09258b0029ea7fe63d032f52e44efe.png",
				tags: [
					"tokens"
				]
			},
			"0xcc80c051057b774cd75067dc48f8987c4eb97a5e": {
				symbol: "NEC",
				name: "Ethfinex Nectar Token",
				address: "0xcc80c051057b774cd75067dc48f8987c4eb97a5e",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xcc80c051057b774cd75067dc48f8987c4eb97a5e.png",
				tags: [
					"tokens"
				]
			},
			"0xcd62b1c403fa761baadfc74c525ce2b51780b184": {
				symbol: "ANJ",
				name: "Aragon Network Juror",
				address: "0xcd62b1c403fa761baadfc74c525ce2b51780b184",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xcd62b1c403fa761baadfc74c525ce2b51780b184.png",
				tags: [
					"tokens"
				]
			},
			"0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2": {
				symbol: "CBIX7",
				name: "CBI Index 7",
				address: "0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2.png",
				tags: [
					"tokens"
				]
			},
			"0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8": {
				symbol: "MCX",
				name: "MachiX Token",
				address: "0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8.png",
				tags: [
					"tokens"
				]
			},
			"0xd26114cd6ee289accf82350c8d8487fedb8a0c07": {
				symbol: "OMG",
				name: "OmiseGO",
				address: "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xd26114cd6ee289accf82350c8d8487fedb8a0c07.png",
				tags: [
					"tokens"
				]
			},
			"0xd46ba6d942050d489dbd938a2c909a5d5039a161": {
				symbol: "AMPL",
				name: "Ampleforth",
				address: "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
				decimals: 9,
				logoURI: "https://tokens.1inch.io/0xd46ba6d942050d489dbd938a2c909a5d5039a161.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xd4c435f5b09f855c3317c8524cb1f586e42795fa": {
				symbol: "CND",
				name: "Cindicator",
				address: "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xd4c435f5b09f855c3317c8524cb1f586e42795fa.png",
				tags: [
					"tokens"
				]
			},
			"0xd559f20296ff4895da39b5bd9add54b442596a61": {
				symbol: "FTX",
				name: "FintruX",
				address: "0xd559f20296ff4895da39b5bd9add54b442596a61",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xd559f20296ff4895da39b5bd9add54b442596a61.png",
				tags: [
					"tokens"
				]
			},
			"0xd6f0bb2a45110f819e908a915237d652ac7c5aa8": {
				symbol: "BUIDL_2",
				name: "DFOHub",
				address: "0xd6f0bb2a45110f819e908a915237d652ac7c5aa8",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xd6f0bb2a45110f819e908a915237d652ac7c5aa8.png",
				tags: [
					"tokens"
				]
			},
			"0xd8912c10681d8b21fd3742244f44658dba12264e": {
				symbol: "PLU",
				name: "Pluton",
				address: "0xd8912c10681d8b21fd3742244f44658dba12264e",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xd8912c10681d8b21fd3742244f44658dba12264e.png",
				tags: [
					"tokens"
				]
			},
			"0xdac17f958d2ee523a2206206994597c13d831ec7": {
				symbol: "USDT",
				name: "Tether USD",
				address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
				decimals: 6,
				logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
				tags: [
					"tokens"
				]
			},
			"0xdb25f211ab05b1c97d595516f45794528a807ad8": {
				symbol: "EURS",
				name: "STASIS EURS",
				address: "0xdb25f211ab05b1c97d595516f45794528a807ad8",
				decimals: 2,
				logoURI: "https://tokens.1inch.io/0xdb25f211ab05b1c97d595516f45794528a807ad8.png",
				tags: [
					"tokens"
				]
			},
			"0xdd974d5c2e2928dea5f71b9825b8b646686bd200": {
				symbol: "KNCL",
				name: "KyberNetwork Legacy",
				address: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xdd974d5c2e2928dea5f71b9825b8b646686bd200.png",
				tags: [
					"tokens"
				]
			},
			"0xdf2c7238198ad8b389666574f2d8bc411a4b7428": {
				symbol: "MFT",
				name: "Mainframe",
				address: "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xdf2c7238198ad8b389666574f2d8bc411a4b7428.png",
				tags: [
					"tokens"
				]
			},
			"0xdf574c24545e5ffecb9a659c229253d4111d87e1": {
				symbol: "HUSD",
				name: "HUSD",
				decimals: 8,
				address: "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
				logoURI: "https://tokens.1inch.io/0xdf574c24545e5ffecb9a659c229253d4111d87e1.png",
				tags: [
					"tokens"
				]
			},
			"0xdfe691f37b6264a90ff507eb359c45d55037951c": {
				symbol: "KARMA",
				name: "Karma",
				address: "0xdfe691f37b6264a90ff507eb359c45d55037951c",
				decimals: 4,
				logoURI: "https://tokens.1inch.io/0xdfe691f37b6264a90ff507eb359c45d55037951c.png",
				tags: [
					"tokens"
				]
			},
			"0xe17f017475a709de58e976081eb916081ff4c9d5": {
				symbol: "RMPL",
				name: "RMPL",
				address: "0xe17f017475a709de58e976081eb916081ff4c9d5",
				decimals: 9,
				logoURI: "https://tokens.1inch.io/0xe17f017475a709de58e976081eb916081ff4c9d5.png",
				tags: [
					"tokens"
				]
			},
			"0xe3818504c1b32bf1557b16c238b2e01fd3149c17": {
				symbol: "PLR",
				name: "Pillar",
				address: "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xe3818504c1b32bf1557b16c238b2e01fd3149c17.png",
				tags: [
					"tokens"
				]
			},
			"0xe41d2489571d322189246dafa5ebde1f4699f498": {
				symbol: "ZRX",
				name: "0x Protocol",
				address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xe41d2489571d322189246dafa5ebde1f4699f498.png",
				tags: [
					"tokens"
				]
			},
			"0xe48972fcd82a274411c01834e2f031d4377fa2c0": {
				symbol: "2KEY",
				name: "2key.network",
				address: "0xe48972fcd82a274411c01834e2f031d4377fa2c0",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xe48972fcd82a274411c01834e2f031d4377fa2c0.png",
				tags: [
					"tokens"
				]
			},
			"0xeb4c2781e4eba804ce9a9803c67d0893436bb27d": {
				symbol: "renBTC",
				name: "renBTC",
				decimals: 8,
				address: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
				logoURI: "https://tokens.1inch.io/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xec67005c4e498ec7f55e092bd1d35cbc47c91892": {
				symbol: "MLN",
				name: "Melon Token",
				address: "0xec67005c4e498ec7f55e092bd1d35cbc47c91892",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xec67005c4e498ec7f55e092bd1d35cbc47c91892.png",
				tags: [
					"tokens"
				]
			},
			"0xeeee2a622330e6d2036691e983dee87330588603": {
				symbol: "ASKO",
				name: "Askobar Network",
				address: "0xeeee2a622330e6d2036691e983dee87330588603",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xeeee2a622330e6d2036691e983dee87330588603.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xef9cd7882c067686691b6ff49e650b43afbbcc6b": {
				symbol: "FNX",
				name: "FinNexus",
				address: "0xef9cd7882c067686691b6ff49e650b43afbbcc6b",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xef9cd7882c067686691b6ff49e650b43afbbcc6b.png",
				tags: [
					"tokens"
				]
			},
			"0xf04a8ac553fcedb5ba99a64799155826c136b0be": {
				symbol: "FLIXX",
				name: "Flixxo",
				address: "0xf04a8ac553fcedb5ba99a64799155826c136b0be",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xf04a8ac553fcedb5ba99a64799155826c136b0be.png",
				tags: [
					"tokens"
				]
			},
			"0xf1290473e210b2108a85237fbcd7b6eb42cc654f": {
				symbol: "HEDG",
				name: "Hedge Trade",
				address: "0xf1290473e210b2108a85237fbcd7b6eb42cc654f",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xf1290473e210b2108a85237fbcd7b6eb42cc654f.png",
				tags: [
					"tokens"
				]
			},
			"0xf29e46887ffae92f1ff87dfe39713875da541373": {
				symbol: "UNC",
				name: "UniCrypt",
				address: "0xf29e46887ffae92f1ff87dfe39713875da541373",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xf29e46887ffae92f1ff87dfe39713875da541373.png",
				tags: [
					"tokens"
				]
			},
			"0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509": {
				symbol: "POWER",
				name: "UniPower",
				address: "0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509.png",
				tags: [
					"tokens"
				]
			},
			"0xf433089366899d83a9f26a773d59ec7ecf30355e": {
				symbol: "MTL",
				name: "Metal",
				address: "0xf433089366899d83a9f26a773d59ec7ecf30355e",
				decimals: 8,
				logoURI: "https://tokens.1inch.io/0xf433089366899d83a9f26a773d59ec7ecf30355e.png",
				tags: [
					"tokens"
				]
			},
			"0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c": {
				symbol: "ENJ",
				name: "Enjin Coin",
				address: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c.png",
				tags: [
					"tokens"
				]
			},
			"0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9": {
				symbol: "cUSDT",
				name: "Compound USDT",
				decimals: 8,
				address: "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
				logoURI: "https://tokens.1inch.io/0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9.png",
				tags: [
					"savings"
				]
			},
			"0xf8e386eda857484f5a12e4b5daa9984e06e73705": {
				symbol: "IND",
				name: "Indorse",
				address: "0xf8e386eda857484f5a12e4b5daa9984e06e73705",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xf8e386eda857484f5a12e4b5daa9984e06e73705.png",
				tags: [
					"tokens"
				]
			},
			"0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27": {
				symbol: "XAMP",
				name: "Antiample",
				decimals: 9,
				address: "0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27",
				logoURI: "https://tokens.1inch.io/0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27.png",
				tags: [
					"tokens"
				]
			},
			"0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6": {
				symbol: "RCN",
				name: "Ripio",
				address: "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6.png",
				tags: [
					"tokens"
				]
			},
			"0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d": {
				symbol: "aDAIv1",
				name: "Aave Interest bearing DAI",
				decimals: 18,
				address: "0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d",
				logoURI: "https://tokens.1inch.io/0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d.png",
				tags: [
					"savings"
				]
			},
			"0x00000000441378008ea67f4284a57932b1c000a5": {
				symbol: "TGBP",
				name: "TrueGBP",
				decimals: 18,
				address: "0x00000000441378008ea67f4284a57932b1c000a5",
				logoURI: "https://tokens.1inch.io/0x00000000441378008ea67f4284a57932b1c000a5.png",
				tags: [
					"tokens"
				]
			},
			"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
				symbol: "ETH",
				name: "Ethereum",
				decimals: 18,
				address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
				tags: [
					"native"
				]
			},
			"0x0000000000b3f879cb30fe243b4dfee438691c04": {
				symbol: "GST2",
				name: "Gastoken.io 2",
				decimals: 2,
				address: "0x0000000000b3f879cb30fe243b4dfee438691c04",
				logoURI: "https://tokens.1inch.io/0x0000000000b3f879cb30fe243b4dfee438691c04.png",
				tags: [
					"tokens"
				]
			},
			"0x06af07097c9eeb7fd685c692751d5c66db49c215": {
				symbol: "CHAI",
				name: "Chai Token",
				decimals: 18,
				address: "0x06af07097c9eeb7fd685c692751d5c66db49c215",
				logoURI: "https://tokens.1inch.io/0x06af07097c9eeb7fd685c692751d5c66db49c215.png",
				tags: [
					"tokens"
				]
			},
			"0xf5dce57282a584d2746faf1593d3121fcac444dc": {
				symbol: "cSAI",
				name: "Compound Sai",
				decimals: 8,
				address: "0xf5dce57282a584d2746faf1593d3121fcac444dc",
				logoURI: "https://tokens.1inch.io/0xf5dce57282a584d2746faf1593d3121fcac444dc.png",
				tags: [
					"tokens"
				]
			},
			"0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5": {
				symbol: "cETH",
				name: "Compound ETH",
				decimals: 8,
				address: "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
				logoURI: "https://tokens.1inch.io/0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5.png",
				eip2612: true,
				tags: [
					"savings"
				]
			},
			"0x39aa39c021dfbae8fac545936693ac917d5e7563": {
				symbol: "cUSDC",
				name: "Compound USD Coin",
				decimals: 8,
				address: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
				logoURI: "https://tokens.1inch.io/0x39aa39c021dfbae8fac545936693ac917d5e7563.png",
				tags: [
					"savings"
				]
			},
			"0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3": {
				symbol: "LEO",
				name: "Bitfinex LEO Token",
				decimals: 18,
				address: "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
				logoURI: "https://tokens.1inch.io/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3.png",
				tags: [
					"tokens"
				]
			},
			"0x6f259637dcd74c767781e37bc6133cd6a68aa161": {
				symbol: "HT",
				name: "HuobiToken",
				decimals: 18,
				address: "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
				logoURI: "https://tokens.1inch.io/0x6f259637dcd74c767781e37bc6133cd6a68aa161.png",
				tags: [
					"tokens"
				]
			},
			"0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0": {
				symbol: "MATIC",
				name: "Matic Token",
				decimals: 18,
				address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
				logoURI: "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
				tags: [
					"tokens"
				]
			},
			"0x6b175474e89094c44da98b954eedeac495271d0f": {
				symbol: "DAI",
				name: "Dai Stablecoin",
				decimals: 18,
				address: "0x6b175474e89094c44da98b954eedeac495271d0f",
				logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359": {
				symbol: "SAI",
				name: "Sai Stablecoin",
				decimals: 18,
				address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
				logoURI: "https://tokens.1inch.io/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359.png",
				tags: [
					"tokens"
				]
			},
			"0x57ab1ec28d129707052df4df418d58a2d46d5f51": {
				symbol: "sUSD",
				name: "Synth sUSD",
				synth: true,
				decimals: 18,
				address: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
				logoURI: "https://tokens.1inch.io/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png",
				tags: [
					"tokens"
				]
			},
			"0x0000000000085d4780b73119b644ae5ecd22b376": {
				symbol: "TUSD",
				name: "TrueUSD",
				decimals: 18,
				address: "0x0000000000085d4780b73119b644ae5ecd22b376",
				logoURI: "https://tokens.1inch.io/0x0000000000085d4780b73119b644ae5ecd22b376.png",
				tags: [
					"tokens"
				]
			},
			"0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04": {
				symbol: "aETHv1",
				name: "Aave Interest bearing ETH",
				decimals: 18,
				address: "0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04",
				logoURI: "https://tokens.1inch.io/0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04.png",
				tags: [
					"tokens"
				]
			},
			"0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00": {
				symbol: "aBATv1",
				name: "Aave Interest bearing BAT",
				decimals: 18,
				address: "0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00",
				logoURI: "https://tokens.1inch.io/0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00.png",
				tags: [
					"tokens"
				]
			},
			"0x9d91be44c06d373a8a226e1f3b146956083803eb": {
				symbol: "aKNCv1",
				name: "Aave Interest bearing KNC",
				decimals: 18,
				address: "0x9d91be44c06d373a8a226e1f3b146956083803eb",
				logoURI: "https://tokens.1inch.io/0x9d91be44c06d373a8a226e1f3b146956083803eb.png",
				tags: [
					"tokens"
				]
			},
			"0x7d2d3688df45ce7c552e19c27e007673da9204b8": {
				symbol: "aLENDv1",
				name: "Aave Interest bearing LEND",
				decimals: 18,
				address: "0x7d2d3688df45ce7c552e19c27e007673da9204b8",
				logoURI: "https://tokens.1inch.io/0x7d2d3688df45ce7c552e19c27e007673da9204b8.png",
				tags: [
					"tokens"
				]
			},
			"0x6fce4a401b6b80ace52baaefe4421bd188e76f6f": {
				symbol: "aMANAv1",
				name: "Aave Interest bearing MANA",
				decimals: 18,
				address: "0x6fce4a401b6b80ace52baaefe4421bd188e76f6f",
				logoURI: "https://tokens.1inch.io/0x6fce4a401b6b80ace52baaefe4421bd188e76f6f.png",
				tags: [
					"tokens"
				]
			},
			"0x7deb5e830be29f91e298ba5ff1356bb7f8146998": {
				symbol: "aMKRv1",
				name: "Aave Interest bearing MKR",
				decimals: 18,
				address: "0x7deb5e830be29f91e298ba5ff1356bb7f8146998",
				logoURI: "https://tokens.1inch.io/0x7deb5e830be29f91e298ba5ff1356bb7f8146998.png",
				tags: [
					"tokens"
				]
			},
			"0x71010a9d003445ac60c4e6a7017c1e89a477b438": {
				symbol: "aREPv1",
				name: "Aave Interest bearing REP",
				decimals: 18,
				address: "0x71010a9d003445ac60c4e6a7017c1e89a477b438",
				logoURI: "https://tokens.1inch.io/0x71010a9d003445ac60c4e6a7017c1e89a477b438.png",
				tags: [
					"tokens"
				]
			},
			"0x328c4c80bc7aca0834db37e6600a6c49e12da4de": {
				symbol: "aSNXv1",
				name: "Aave Interest bearing SNX",
				decimals: 18,
				address: "0x328c4c80bc7aca0834db37e6600a6c49e12da4de",
				logoURI: "https://tokens.1inch.io/0x328c4c80bc7aca0834db37e6600a6c49e12da4de.png",
				tags: [
					"tokens"
				]
			},
			"0xfc4b8ed459e00e5400be803a9bb3954234fd50e3": {
				symbol: "aWBTCv1",
				name: "Aave Interest bearing WBTC",
				decimals: 8,
				address: "0xfc4b8ed459e00e5400be803a9bb3954234fd50e3",
				logoURI: "https://tokens.1inch.io/0xfc4b8ed459e00e5400be803a9bb3954234fd50e3.png",
				tags: [
					"savings"
				]
			},
			"0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f": {
				symbol: "aZRXv1",
				name: "Aave Interest bearing ZRX",
				decimals: 18,
				address: "0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f",
				logoURI: "https://tokens.1inch.io/0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f.png",
				tags: [
					"tokens"
				]
			},
			"0x16de59092dae5ccf4a1e6439d611fd0653f0bd01": {
				symbol: "yDAIv2",
				name: "iearn DAIv2",
				decimals: 18,
				address: "0x16de59092dae5ccf4a1e6439d611fd0653f0bd01",
				logoURI: "https://tokens.1inch.io/0x16de59092dae5ccf4a1e6439d611fd0653f0bd01.png",
				tags: [
					"tokens"
				]
			},
			"0xc2cb1040220768554cf699b0d863a3cd4324ce32": {
				symbol: "yDAIv3",
				name: "iearn DAI v3",
				decimals: 18,
				address: "0xc2cb1040220768554cf699b0d863a3cd4324ce32",
				logoURI: "https://tokens.1inch.io/0xc2cb1040220768554cf699b0d863a3cd4324ce32.png",
				tags: [
					"tokens"
				]
			},
			"0x04aa51bbcb46541455ccf1b8bef2ebc5d3787ec9": {
				symbol: "yBTC",
				name: "iearn WBTC",
				decimals: 8,
				address: "0x04aa51bbcb46541455ccf1b8bef2ebc5d3787ec9",
				logoURI: "https://tokens.1inch.io/0x04aa51bbcb46541455ccf1b8bef2ebc5d3787ec9.png",
				tags: [
					"tokens"
				]
			},
			"0x83f798e925bcd4017eb265844fddabb448f1707d": {
				symbol: "yUSDTv2",
				name: "iearn USDT v2",
				decimals: 6,
				address: "0x83f798e925bcd4017eb265844fddabb448f1707d",
				logoURI: "https://tokens.1inch.io/0x83f798e925bcd4017eb265844fddabb448f1707d.png",
				tags: [
					"tokens"
				]
			},
			"0xe6354ed5bc4b393a5aad09f21c46e101e692d447": {
				symbol: "yUSDTv3",
				name: "iearn USDT v3",
				decimals: 6,
				address: "0xe6354ed5bc4b393a5aad09f21c46e101e692d447",
				logoURI: "https://tokens.1inch.io/0xe6354ed5bc4b393a5aad09f21c46e101e692d447.png",
				tags: [
					"tokens"
				]
			},
			"0xd6ad7a6750a7593e092a9b218d66c0a814a3436e": {
				symbol: "yUSDCv2",
				name: "iearn USDC v2",
				decimals: 6,
				address: "0xd6ad7a6750a7593e092a9b218d66c0a814a3436e",
				logoURI: "https://tokens.1inch.io/0xd6ad7a6750a7593e092a9b218d66c0a814a3436e.png",
				tags: [
					"tokens"
				]
			},
			"0x26ea744e5b887e5205727f55dfbe8685e3b21951": {
				symbol: "yUSDCv3",
				name: "iearn USDC v3",
				decimals: 6,
				address: "0x26ea744e5b887e5205727f55dfbe8685e3b21951",
				logoURI: "https://tokens.1inch.io/0x26ea744e5b887e5205727f55dfbe8685e3b21951.png",
				tags: [
					"tokens"
				]
			},
			"0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5": {
				symbol: "BCDT",
				name: "Blockchain Certified Data Token",
				decimals: 18,
				address: "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5",
				logoURI: "https://tokens.1inch.io/0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5.png",
				tags: [
					"tokens"
				]
			},
			"0x4de2573e27e648607b50e1cfff921a33e4a34405": {
				symbol: "LST",
				name: "Lendroid Support Token",
				decimals: 18,
				address: "0x4de2573e27e648607b50e1cfff921a33e4a34405",
				logoURI: "https://tokens.1inch.io/0x4de2573e27e648607b50e1cfff921a33e4a34405.png",
				tags: [
					"tokens"
				]
			},
			"0x630d98424efe0ea27fb1b3ab7741907dffeaad78": {
				symbol: "PEAK",
				name: "PEAKDEFI",
				decimals: 8,
				address: "0x630d98424efe0ea27fb1b3ab7741907dffeaad78",
				logoURI: "https://tokens.1inch.io/0x630d98424efe0ea27fb1b3ab7741907dffeaad78.png",
				tags: [
					"tokens"
				]
			},
			"0xd56dac73a4d6766464b38ec6d91eb45ce7457c44": {
				symbol: "PAN",
				name: "Panvala pan",
				decimals: 18,
				address: "0xd56dac73a4d6766464b38ec6d91eb45ce7457c44",
				logoURI: "https://tokens.1inch.io/0xd56dac73a4d6766464b38ec6d91eb45ce7457c44.png",
				tags: [
					"tokens"
				]
			},
			"0x056fd409e1d7a124bd7017459dfea2f387b6d5cd": {
				symbol: "GUSD",
				name: "Gemini dollar",
				decimals: 2,
				address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
				logoURI: "https://tokens.1inch.io/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd.png",
				tags: [
					"tokens"
				]
			},
			"0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8": {
				symbol: "aBUSDv1",
				name: "Aave Interest bearing Binance USD",
				decimals: 18,
				address: "0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8",
				logoURI: "https://tokens.1inch.io/0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8.png",
				tags: [
					"tokens"
				]
			},
			"0xd7efb00d12c2c13131fd319336fdf952525da2af": {
				symbol: "XPR",
				name: "Proton",
				decimals: 4,
				address: "0xd7efb00d12c2c13131fd319336fdf952525da2af",
				logoURI: "https://tokens.1inch.io/0xd7efb00d12c2c13131fd319336fdf952525da2af.png",
				tags: [
					"tokens"
				]
			},
			"0x85eee30c52b0b379b046fb0f85f4f3dc3009afec": {
				symbol: "KEEP",
				name: "KEEP Token",
				decimals: 18,
				address: "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec",
				logoURI: "https://tokens.1inch.io/0x85eee30c52b0b379b046fb0f85f4f3dc3009afec.png",
				tags: [
					"tokens"
				]
			},
			"0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2": {
				symbol: "renZEC",
				name: "renZEC",
				decimals: 8,
				address: "0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2",
				logoURI: "https://tokens.1inch.io/0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x459086f2376525bdceba5bdda135e4e9d3fef5bf": {
				symbol: "renBCH",
				name: "renBCH",
				decimals: 8,
				address: "0x459086f2376525bdceba5bdda135e4e9d3fef5bf",
				logoURI: "https://tokens.1inch.io/0x459086f2376525bdceba5bdda135e4e9d3fef5bf.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8daebade922df735c38c80c7ebd708af50815faa": {
				symbol: "tBTC",
				name: "tBTC",
				decimals: 18,
				address: "0x8daebade922df735c38c80c7ebd708af50815faa",
				logoURI: "https://tokens.1inch.io/0x8daebade922df735c38c80c7ebd708af50815faa.png",
				tags: [
					"tokens"
				]
			},
			"0x0316eb71485b0ab14103307bf65a021042c6d380": {
				symbol: "HBTC",
				name: "Huobi BTC",
				decimals: 18,
				address: "0x0316eb71485b0ab14103307bf65a021042c6d380",
				logoURI: "https://tokens.1inch.io/0x0316eb71485b0ab14103307bf65a021042c6d380.png",
				tags: [
					"tokens"
				]
			},
			"0x3a9fff453d50d4ac52a6890647b823379ba36b9e": {
				symbol: "SHUF",
				name: "Shuffle.Monster V3",
				decimals: 18,
				address: "0x3a9fff453d50d4ac52a6890647b823379ba36b9e",
				logoURI: "https://tokens.1inch.io/0x3a9fff453d50d4ac52a6890647b823379ba36b9e.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9": {
				symbol: "DONUT",
				name: "DONUT",
				decimals: 18,
				address: "0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9",
				logoURI: "https://tokens.1inch.io/0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9.png",
				tags: [
					"tokens"
				]
			},
			"0x0000000000004946c0e9f43f4dee607b0ef1fa1c": {
				symbol: "CHI",
				name: "Chi Gastoken by 1inch",
				decimals: 0,
				address: "0x0000000000004946c0e9f43f4dee607b0ef1fa1c",
				logoURI: "https://tokens.1inch.io/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png",
				tags: [
					"tokens"
				]
			},
			"0x45804880de22913dafe09f4980848ece6ecbaf78": {
				symbol: "PAXG",
				name: "Paxos Gold",
				decimals: 18,
				address: "0x45804880de22913dafe09f4980848ece6ecbaf78",
				logoURI: "https://tokens.1inch.io/0x45804880de22913dafe09f4980848ece6ecbaf78.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x035df12e0f3ac6671126525f1015e47d79dfeddf": {
				symbol: "0xMR",
				name: "0xMonero",
				decimals: 18,
				address: "0x035df12e0f3ac6671126525f1015e47d79dfeddf",
				logoURI: "https://tokens.1inch.io/0x035df12e0f3ac6671126525f1015e47d79dfeddf.png",
				tags: [
					"tokens"
				]
			},
			"0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac": {
				symbol: "STORJ",
				name: "Storj",
				decimals: 8,
				address: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
				logoURI: "https://tokens.1inch.io/0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac.png",
				tags: [
					"tokens"
				]
			},
			"0x4156d3342d5c385a87d264f90653733592000581": {
				symbol: "SALT",
				name: "Salt",
				decimals: 8,
				address: "0x4156d3342d5c385a87d264f90653733592000581",
				logoURI: "https://tokens.1inch.io/0x4156d3342d5c385a87d264f90653733592000581.png",
				tags: [
					"tokens"
				]
			},
			"0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8": {
				symbol: "yCurve",
				name: "Curve.fi iearn pool token",
				decimals: 18,
				address: "0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8",
				logoURI: "https://tokens.1inch.io/0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8.png",
				tags: [
					"pools"
				]
			},
			"0xfca59cd816ab1ead66534d82bc21e7515ce441cf": {
				symbol: "RARI",
				name: "Rarible",
				decimals: 18,
				address: "0xfca59cd816ab1ead66534d82bc21e7515ce441cf",
				logoURI: "https://tokens.1inch.io/0xfca59cd816ab1ead66534d82bc21e7515ce441cf.png",
				tags: [
					"tokens"
				]
			},
			"0x5228a22e72ccc52d415ecfd199f99d0665e7733b": {
				symbol: "pBTC",
				name: "pTokens BTC",
				decimals: 18,
				address: "0x5228a22e72ccc52d415ecfd199f99d0665e7733b",
				logoURI: "https://tokens.1inch.io/0x5228a22e72ccc52d415ecfd199f99d0665e7733b.png",
				tags: [
					"tokens"
				]
			},
			"0x476c5e26a75bd202a9683ffd34359c0cc15be0ff": {
				symbol: "SRM",
				name: "Serum",
				decimals: 6,
				address: "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff",
				logoURI: "https://tokens.1inch.io/0x476c5e26a75bd202a9683ffd34359c0cc15be0ff.png",
				tags: [
					"tokens"
				]
			},
			"0xc813ea5e3b48bebeedb796ab42a30c5599b01740": {
				symbol: "NIOX",
				name: "Autonio",
				decimals: 4,
				address: "0xc813ea5e3b48bebeedb796ab42a30c5599b01740",
				logoURI: "https://tokens.1inch.io/0xc813ea5e3b48bebeedb796ab42a30c5599b01740.png",
				tags: [
					"tokens"
				]
			},
			"0xa7de087329bfcda5639247f96140f9dabe3deed1": {
				symbol: "STA",
				name: "Statera",
				decimals: 18,
				address: "0xa7de087329bfcda5639247f96140f9dabe3deed1",
				logoURI: "https://tokens.1inch.io/0xa7de087329bfcda5639247f96140f9dabe3deed1.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xdc5864ede28bd4405aa04d93e05a0531797d9d59": {
				symbol: "FNT",
				name: "Falcon",
				decimals: 6,
				address: "0xdc5864ede28bd4405aa04d93e05a0531797d9d59",
				logoURI: "https://tokens.1inch.io/0xdc5864ede28bd4405aa04d93e05a0531797d9d59.png",
				tags: [
					"tokens"
				]
			},
			"0x0aacfbec6a24756c20d41914f2caba817c0d8521": {
				symbol: "YAM",
				name: "YAM",
				decimals: 18,
				address: "0x0aacfbec6a24756c20d41914f2caba817c0d8521",
				logoURI: "https://tokens.1inch.io/0x0aacfbec6a24756c20d41914f2caba817c0d8521.png",
				eip2612: true,
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xade00c28244d5ce17d72e40330b1c318cd12b7c3": {
				symbol: "ADX",
				name: "AdEx Network",
				decimals: 18,
				address: "0xade00c28244d5ce17d72e40330b1c318cd12b7c3",
				logoURI: "https://tokens.1inch.io/0xade00c28244d5ce17d72e40330b1c318cd12b7c3.png",
				tags: [
					"tokens"
				]
			},
			"0xd533a949740bb3306d119cc777fa900ba034cd52": {
				symbol: "CRV",
				name: "Curve DAO Token",
				decimals: 18,
				address: "0xd533a949740bb3306d119cc777fa900ba034cd52",
				logoURI: "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
				tags: [
					"tokens"
				]
			},
			"0x9469d013805bffb7d3debe5e7839237e535ec483": {
				symbol: "RING",
				name: "Darwinia Network Native Token",
				decimals: 18,
				address: "0x9469d013805bffb7d3debe5e7839237e535ec483",
				logoURI: "https://tokens.1inch.io/0x9469d013805bffb7d3debe5e7839237e535ec483.png",
				tags: [
					"tokens"
				]
			},
			"0x2baecdf43734f22fd5c152db08e3c27233f0c7d2": {
				symbol: "OMv1",
				name: "OM Token",
				decimals: 18,
				address: "0x2baecdf43734f22fd5c152db08e3c27233f0c7d2",
				logoURI: "https://tokens.1inch.io/0x2baecdf43734f22fd5c152db08e3c27233f0c7d2.png",
				tags: [
					"tokens"
				]
			},
			"0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d": {
				symbol: "CTSI",
				name: "Cartesi Token",
				decimals: 18,
				address: "0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d",
				logoURI: "https://tokens.1inch.io/0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d.png",
				tags: [
					"tokens"
				]
			},
			"0x0ff6ffcfda92c53f615a4a75d982f399c989366b": {
				symbol: "LAYER",
				name: "Unilayer",
				decimals: 18,
				address: "0x0ff6ffcfda92c53f615a4a75d982f399c989366b",
				logoURI: "https://tokens.1inch.io/0x0ff6ffcfda92c53f615a4a75d982f399c989366b.png",
				tags: [
					"tokens"
				]
			},
			"0xd5525d397898e5502075ea5e830d8914f6f0affe": {
				symbol: "MEME",
				name: "MEME",
				decimals: 8,
				address: "0xd5525d397898e5502075ea5e830d8914f6f0affe",
				logoURI: "https://tokens.1inch.io/0xd5525d397898e5502075ea5e830d8914f6f0affe.png",
				tags: [
					"tokens"
				]
			},
			"0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f": {
				symbol: "TRAC",
				name: "Trace",
				decimals: 18,
				address: "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f",
				logoURI: "https://tokens.1inch.io/0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f.png",
				tags: [
					"tokens"
				]
			},
			"0x8a9c67fee641579deba04928c4bc45f66e26343a": {
				symbol: "JRT",
				name: "Jarvis Reward Token",
				decimals: 18,
				address: "0x8a9c67fee641579deba04928c4bc45f66e26343a",
				logoURI: "https://tokens.1inch.io/0x8a9c67fee641579deba04928c4bc45f66e26343a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x45f24baeef268bb6d63aee5129015d69702bcdfa": {
				symbol: "YFV",
				name: "YFValue",
				decimals: 18,
				address: "0x45f24baeef268bb6d63aee5129015d69702bcdfa",
				logoURI: "https://tokens.1inch.io/0x45f24baeef268bb6d63aee5129015d69702bcdfa.png",
				tags: [
					"tokens"
				]
			},
			"0x674c6ad92fd080e4004b2312b45f796a192d27a0": {
				symbol: "USDN",
				name: "Neutrino",
				decimals: 18,
				address: "0x674c6ad92fd080e4004b2312b45f796a192d27a0",
				logoURI: "https://tokens.1inch.io/0x674c6ad92fd080e4004b2312b45f796a192d27a0.png",
				tags: [
					"tokens"
				]
			},
			"0x362bc847a3a9637d3af6624eec853618a43ed7d2": {
				symbol: "PRQ",
				name: "Parsiq Token",
				decimals: 18,
				address: "0x362bc847a3a9637d3af6624eec853618a43ed7d2",
				logoURI: "https://tokens.1inch.io/0x362bc847a3a9637d3af6624eec853618a43ed7d2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd": {
				symbol: "HAKKA",
				name: "Hakka Finance",
				decimals: 18,
				address: "0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd",
				logoURI: "https://tokens.1inch.io/0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1": {
				symbol: "CVP",
				name: "Concentrated Voting Power",
				decimals: 18,
				address: "0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1",
				logoURI: "https://tokens.1inch.io/0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1.png",
				tags: [
					"tokens"
				]
			},
			"0x4fe5851c9af07df9e5ad8217afae1ea72737ebda": {
				symbol: "OPT",
				name: "Open Predict Token",
				decimals: 18,
				address: "0x4fe5851c9af07df9e5ad8217afae1ea72737ebda",
				logoURI: "https://tokens.1inch.io/0x4fe5851c9af07df9e5ad8217afae1ea72737ebda.png",
				tags: [
					"tokens"
				]
			},
			"0x6b3595068778dd592e39a122f4f5a5cf09c90fe2": {
				symbol: "SUSHI",
				name: "SushiToken",
				decimals: 18,
				address: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
				logoURI: "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png",
				tags: [
					"tokens"
				]
			},
			"0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe": {
				symbol: "DSLA",
				name: "DSLA",
				decimals: 18,
				address: "0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe",
				logoURI: "https://tokens.1inch.io/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe.png",
				tags: [
					"tokens"
				]
			},
			"0xba21ef4c9f433ede00badefcc2754b8e74bd538a": {
				symbol: "SWFL",
				name: "Swapfolio",
				decimals: 18,
				address: "0xba21ef4c9f433ede00badefcc2754b8e74bd538a",
				logoURI: "https://tokens.1inch.io/0xba21ef4c9f433ede00badefcc2754b8e74bd538a.png",
				tags: [
					"tokens"
				]
			},
			"0xfffffffff15abf397da76f1dcc1a1604f45126db": {
				symbol: "FSW",
				name: "FalconSwap Token",
				decimals: 18,
				address: "0xfffffffff15abf397da76f1dcc1a1604f45126db",
				logoURI: "https://tokens.1inch.io/0xfffffffff15abf397da76f1dcc1a1604f45126db.png",
				tags: [
					"tokens"
				]
			},
			"0xb8baa0e4287890a5f79863ab62b7f175cecbd433": {
				symbol: "SWRV",
				name: "Swerve DAO Token",
				decimals: 18,
				address: "0xb8baa0e4287890a5f79863ab62b7f175cecbd433",
				logoURI: "https://tokens.1inch.io/0xb8baa0e4287890a5f79863ab62b7f175cecbd433.png",
				tags: [
					"tokens"
				]
			},
			"0x8a6f3bf52a26a21531514e23016eeae8ba7e7018": {
				symbol: "MXX",
				name: "Multiplier",
				decimals: 8,
				address: "0x8a6f3bf52a26a21531514e23016eeae8ba7e7018",
				logoURI: "https://tokens.1inch.io/0x8a6f3bf52a26a21531514e23016eeae8ba7e7018.png",
				tags: [
					"tokens"
				]
			},
			"0x5dbcf33d8c2e976c6b560249878e6f1491bca25c": {
				symbol: "yUSD",
				name: "yearn Curve.fi yDAI/yUSDC/yUSDT/yTUSD",
				decimals: 18,
				address: "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c",
				logoURI: "https://tokens.1inch.io/0x5dbcf33d8c2e976c6b560249878e6f1491bca25c.png",
				tags: [
					"tokens"
				]
			},
			"0x50026ad58b338cf3eccc2b422deb8faa725f377f": {
				symbol: "STEP",
				name: "1Step.finance",
				decimals: 8,
				address: "0x50026ad58b338cf3eccc2b422deb8faa725f377f",
				logoURI: "https://tokens.1inch.io/0x50026ad58b338cf3eccc2b422deb8faa725f377f.png",
				tags: [
					"tokens"
				]
			},
			"0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7": {
				symbol: "PRDX",
				name: "Predix Network",
				decimals: 18,
				address: "0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7",
				logoURI: "https://tokens.1inch.io/0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7.png",
				tags: [
					"tokens"
				]
			},
			"0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b": {
				symbol: "DPI",
				name: "DefiPulse Index",
				decimals: 18,
				address: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
				logoURI: "https://tokens.1inch.io/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png",
				tags: [
					"tokens"
				]
			},
			"0x3f382dbd960e3a9bbceae22651e88158d2791550": {
				symbol: "GHST",
				name: "Aavegotchi GHST Token",
				decimals: 18,
				address: "0x3f382dbd960e3a9bbceae22651e88158d2791550",
				logoURI: "https://tokens.1inch.io/0x3f382dbd960e3a9bbceae22651e88158d2791550.png",
				tags: [
					"tokens"
				]
			},
			"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": {
				symbol: "UNI",
				name: "Uniswap",
				decimals: 18,
				address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
				logoURI: "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x429881672b9ae42b8eba0e26cd9c73711b891ca5": {
				symbol: "PICKLE",
				name: "PickleToken",
				decimals: 18,
				address: "0x429881672b9ae42b8eba0e26cd9c73711b891ca5",
				logoURI: "https://tokens.1inch.io/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png",
				tags: [
					"tokens"
				]
			},
			"0xf8c3527cc04340b208c854e985240c02f7b7793f": {
				symbol: "FRONT",
				name: "Frontier Token",
				decimals: 18,
				address: "0xf8c3527cc04340b208c854e985240c02f7b7793f",
				logoURI: "https://tokens.1inch.io/0xf8c3527cc04340b208c854e985240c02f7b7793f.png",
				tags: [
					"tokens"
				]
			},
			"0xca1207647ff814039530d7d35df0e1dd2e91fa84": {
				symbol: "DHT",
				name: "dHedge DAO Token",
				decimals: 18,
				address: "0xca1207647ff814039530d7d35df0e1dd2e91fa84",
				logoURI: "https://tokens.1inch.io/0xca1207647ff814039530d7d35df0e1dd2e91fa84.png",
				tags: [
					"tokens"
				]
			},
			"0xa0246c9032bc3a600820415ae600c6388619a14d": {
				symbol: "FARM",
				name: "FARM Reward Token",
				decimals: 18,
				address: "0xa0246c9032bc3a600820415ae600c6388619a14d",
				logoURI: "https://tokens.1inch.io/0xa0246c9032bc3a600820415ae600c6388619a14d.png",
				tags: [
					"tokens"
				]
			},
			"0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c": {
				symbol: "GOF",
				name: "Golff.finance",
				decimals: 18,
				address: "0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c",
				logoURI: "https://tokens.1inch.io/0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c.png",
				tags: [
					"tokens"
				]
			},
			"0xecbf566944250dde88322581024e611419715f7a": {
				symbol: "xBTC",
				name: "xBTC",
				decimals: 9,
				address: "0xecbf566944250dde88322581024e611419715f7a",
				logoURI: "https://tokens.1inch.io/0xecbf566944250dde88322581024e611419715f7a.png",
				tags: [
					"tokens"
				]
			},
			"0x2a8e1e676ec238d8a992307b495b45b3feaa5e86": {
				symbol: "OUSD",
				name: "Origin Dollar",
				decimals: 18,
				address: "0x2a8e1e676ec238d8a992307b495b45b3feaa5e86",
				logoURI: "https://tokens.1inch.io/0x2a8e1e676ec238d8a992307b495b45b3feaa5e86.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": {
				symbol: "AAVE",
				name: "Aave Token",
				decimals: 18,
				address: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
				logoURI: "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd": {
				symbol: "DODO",
				name: "DODO bird",
				decimals: 18,
				address: "0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd",
				logoURI: "https://tokens.1inch.io/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png",
				tags: [
					"tokens"
				]
			},
			"0x6006fc2a849fedaba8330ce36f5133de01f96189": {
				symbol: "SHAKE",
				name: "SHAKE token by SpaceSwap v2 ",
				decimals: 18,
				address: "0x6006fc2a849fedaba8330ce36f5133de01f96189",
				logoURI: "https://tokens.1inch.io/0x6006fc2a849fedaba8330ce36f5133de01f96189.png",
				tags: [
					"tokens"
				]
			},
			"0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de": {
				symbol: "MILK2",
				name: "MilkyWay Token by SpaceSwap v2",
				decimals: 18,
				address: "0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de",
				logoURI: "https://tokens.1inch.io/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png",
				tags: [
					"tokens"
				]
			},
			"0x62359ed7505efc61ff1d56fef82158ccaffa23d7": {
				symbol: "CORE",
				name: "cVault.finance",
				decimals: 18,
				address: "0x62359ed7505efc61ff1d56fef82158ccaffa23d7",
				logoURI: "https://tokens.1inch.io/0x62359ed7505efc61ff1d56fef82158ccaffa23d7.png",
				tags: [
					"tokens"
				]
			},
			"0xbc396689893d065f41bc2c6ecbee5e0085233447": {
				symbol: "PERP",
				name: "Perpetual",
				decimals: 18,
				address: "0xbc396689893d065f41bc2c6ecbee5e0085233447",
				logoURI: "https://tokens.1inch.io/0xbc396689893d065f41bc2c6ecbee5e0085233447.png",
				tags: [
					"tokens"
				]
			},
			"0x1c48f86ae57291f7686349f12601910bd8d470bb": {
				symbol: "USDK",
				name: "USDK",
				decimals: 18,
				address: "0x1c48f86ae57291f7686349f12601910bd8d470bb",
				logoURI: "https://tokens.1inch.io/0x1c48f86ae57291f7686349f12601910bd8d470bb.png",
				tags: [
					"tokens"
				]
			},
			"0x87edffde3e14c7a66c9b9724747a1c5696b742e6": {
				symbol: "SWAG",
				name: "Swag Token",
				decimals: 18,
				address: "0x87edffde3e14c7a66c9b9724747a1c5696b742e6",
				logoURI: "https://tokens.1inch.io/0x87edffde3e14c7a66c9b9724747a1c5696b742e6.png",
				tags: [
					"tokens"
				]
			},
			"0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c": {
				symbol: "DEFI+S",
				name: "PieDAO DEFI Small Cap",
				decimals: 18,
				address: "0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c",
				logoURI: "https://tokens.1inch.io/0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c.png",
				tags: [
					"tokens"
				]
			},
			"0xad32a8e6220741182940c5abf610bde99e737b2d": {
				symbol: "DOUGH",
				name: "PieDAO DOUGH v2",
				decimals: 18,
				address: "0xad32a8e6220741182940c5abf610bde99e737b2d",
				logoURI: "https://tokens.1inch.io/0xad32a8e6220741182940c5abf610bde99e737b2d.png",
				tags: [
					"tokens"
				]
			},
			"0x35a18000230da775cac24873d00ff85bccded550": {
				symbol: "cUNI",
				name: "Compound Uniswap",
				decimals: 8,
				address: "0x35a18000230da775cac24873d00ff85bccded550",
				logoURI: "https://tokens.1inch.io/0x35a18000230da775cac24873d00ff85bccded550.png",
				tags: [
					"savings"
				]
			},
			"0xe2f2a5c287993345a840db3b0845fbc70f5935a5": {
				symbol: "mUSD",
				name: "mStable USD",
				decimals: 18,
				address: "0xe2f2a5c287993345a840db3b0845fbc70f5935a5",
				logoURI: "https://tokens.1inch.io/0xe2f2a5c287993345a840db3b0845fbc70f5935a5.png",
				tags: [
					"pools"
				]
			},
			"0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5": {
				symbol: "ZEE",
				name: "ZeroSwapToken",
				decimals: 18,
				address: "0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5",
				logoURI: "https://tokens.1inch.io/0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x584bc13c7d411c00c01a62e8019472de68768430": {
				symbol: "HEGIC",
				name: "Hegic",
				decimals: 18,
				address: "0x584bc13c7d411c00c01a62e8019472de68768430",
				logoURI: "https://tokens.1inch.io/0x584bc13c7d411c00c01a62e8019472de68768430.png",
				tags: [
					"tokens"
				]
			},
			"0xcbd55d4ffc43467142761a764763652b48b969ff": {
				symbol: "ASTRO",
				name: "AstroTools.io",
				decimals: 18,
				address: "0xcbd55d4ffc43467142761a764763652b48b969ff",
				logoURI: "https://tokens.1inch.io/0xcbd55d4ffc43467142761a764763652b48b969ff.png",
				tags: [
					"tokens"
				]
			},
			"0xff20817765cb7f73d4bde2e66e067e58d11095c2": {
				symbol: "AMP",
				name: "Amp",
				decimals: 18,
				address: "0xff20817765cb7f73d4bde2e66e067e58d11095c2",
				logoURI: "https://tokens.1inch.io/0xff20817765cb7f73d4bde2e66e067e58d11095c2.png",
				tags: [
					"tokens"
				]
			},
			"0x0391d2021f89dc339f60fff84546ea23e337750f": {
				symbol: "BOND",
				name: "BarnBridge Governance Token",
				decimals: 18,
				address: "0x0391d2021f89dc339f60fff84546ea23e337750f",
				logoURI: "https://tokens.1inch.io/0x0391d2021f89dc339f60fff84546ea23e337750f.png",
				tags: [
					"tokens"
				]
			},
			"0xa117000000f279d81a1d3cc75430faa017fa5a2e": {
				symbol: "ANT",
				name: "Aragon Network Token",
				decimals: 18,
				address: "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
				logoURI: "https://tokens.1inch.io/0xa117000000f279d81a1d3cc75430faa017fa5a2e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d": {
				symbol: "FUSE",
				name: "Fuse Token",
				decimals: 18,
				address: "0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d",
				logoURI: "https://tokens.1inch.io/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png",
				tags: [
					"tokens"
				]
			},
			"0x36f3fd68e7325a35eb768f1aedaae9ea0689d723": {
				symbol: "ESD",
				name: "Empty Set Dollar",
				decimals: 18,
				address: "0x36f3fd68e7325a35eb768f1aedaae9ea0689d723",
				logoURI: "https://tokens.1inch.io/0x36f3fd68e7325a35eb768f1aedaae9ea0689d723.png",
				tags: [
					"tokens"
				]
			},
			"0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44": {
				symbol: "KP3R",
				name: "Keep3rV1",
				decimals: 18,
				address: "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44",
				logoURI: "https://tokens.1inch.io/0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44.png",
				tags: [
					"tokens"
				]
			},
			"0x5bc25f649fc4e26069ddf4cf4010f9f706c23831": {
				symbol: "DUSD",
				name: "DefiDollar",
				decimals: 18,
				address: "0x5bc25f649fc4e26069ddf4cf4010f9f706c23831",
				logoURI: "https://tokens.1inch.io/0x5bc25f649fc4e26069ddf4cf4010f9f706c23831.png",
				tags: [
					"tokens"
				]
			},
			"0xb705268213d593b8fd88d3fdeff93aff5cbdcfae": {
				symbol: "IDEX",
				name: "IDEX Token",
				decimals: 18,
				address: "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae",
				logoURI: "https://tokens.1inch.io/0xb705268213d593b8fd88d3fdeff93aff5cbdcfae.png",
				tags: [
					"tokens"
				]
			},
			"0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9": {
				symbol: "VOICE",
				name: "Voice Token",
				decimals: 18,
				address: "0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9",
				logoURI: "https://tokens.1inch.io/0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9.png",
				tags: [
					"tokens"
				]
			},
			"0xeef9f339514298c6a857efcfc1a762af84438dee": {
				symbol: "HEZ",
				name: "Hermez Network Token",
				decimals: 18,
				address: "0xeef9f339514298c6a857efcfc1a762af84438dee",
				logoURI: "https://tokens.1inch.io/0xeef9f339514298c6a857efcfc1a762af84438dee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xea319e87cf06203dae107dd8e5672175e3ee976c": {
				symbol: "SURF",
				name: "SURF.Finance",
				decimals: 18,
				address: "0xea319e87cf06203dae107dd8e5672175e3ee976c",
				logoURI: "https://tokens.1inch.io/0xea319e87cf06203dae107dd8e5672175e3ee976c.png",
				tags: [
					"tokens"
				]
			},
			"0x3383c5a8969dc413bfddc9656eb80a1408e4ba20": {
				symbol: "wANATHA",
				name: "Wrapped ANATHA",
				decimals: 18,
				address: "0x3383c5a8969dc413bfddc9656eb80a1408e4ba20",
				logoURI: "https://tokens.1inch.io/0x3383c5a8969dc413bfddc9656eb80a1408e4ba20.png",
				tags: [
					"tokens"
				]
			},
			"0x18aaa7115705e8be94bffebde57af9bfc265b998": {
				symbol: "AUDIO",
				name: "Audius",
				decimals: 18,
				address: "0x18aaa7115705e8be94bffebde57af9bfc265b998",
				logoURI: "https://tokens.1inch.io/0x18aaa7115705e8be94bffebde57af9bfc265b998.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa665fed1b0c9da00e91ca582f77df36e325048c5": {
				symbol: "YFM",
				name: "yfarm.finance",
				decimals: 18,
				address: "0xa665fed1b0c9da00e91ca582f77df36e325048c5",
				logoURI: "https://tokens.1inch.io/0xa665fed1b0c9da00e91ca582f77df36e325048c5.png",
				tags: [
					"tokens"
				]
			},
			"0xdacd69347de42babfaecd09dc88958378780fb62": {
				symbol: "ATRI",
				name: "AtariToken",
				decimals: 0,
				address: "0xdacd69347de42babfaecd09dc88958378780fb62",
				logoURI: "https://tokens.1inch.io/0xdacd69347de42babfaecd09dc88958378780fb62.png",
				tags: [
					"tokens"
				]
			},
			"0x0954906da0bf32d5479e25f46056d22f08464cab": {
				symbol: "INDEX",
				name: "Index",
				decimals: 18,
				address: "0x0954906da0bf32d5479e25f46056d22f08464cab",
				logoURI: "https://tokens.1inch.io/0x0954906da0bf32d5479e25f46056d22f08464cab.png",
				tags: [
					"tokens"
				]
			},
			"0xc57d533c50bc22247d49a368880fb49a1caa39f7": {
				symbol: "PTF",
				name: "PowerTrade Fuel Token",
				decimals: 18,
				address: "0xc57d533c50bc22247d49a368880fb49a1caa39f7",
				logoURI: "https://tokens.1inch.io/0xc57d533c50bc22247d49a368880fb49a1caa39f7.png",
				tags: [
					"tokens"
				]
			},
			"0x20c36f062a31865bed8a5b1e512d9a1a20aa333a": {
				symbol: "DFD",
				name: "DefiDollar DAO",
				decimals: 18,
				address: "0x20c36f062a31865bed8a5b1e512d9a1a20aa333a",
				logoURI: "https://tokens.1inch.io/0x20c36f062a31865bed8a5b1e512d9a1a20aa333a.png",
				tags: [
					"tokens"
				]
			},
			"0x95a4492f028aa1fd432ea71146b433e7b4446611": {
				symbol: "APY",
				name: "APY Governance Token",
				decimals: 18,
				address: "0x95a4492f028aa1fd432ea71146b433e7b4446611",
				logoURI: "https://tokens.1inch.io/0x95a4492f028aa1fd432ea71146b433e7b4446611.png",
				tags: [
					"tokens"
				]
			},
			"0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab": {
				symbol: "GYSR",
				name: "Geyser",
				decimals: 18,
				address: "0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab",
				logoURI: "https://tokens.1inch.io/0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab_1.png",
				tags: [
					"tokens"
				]
			},
			"0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e": {
				symbol: "KP4R",
				name: "Keep4r",
				decimals: 18,
				address: "0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e",
				logoURI: "https://tokens.1inch.io/0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e.png",
				tags: [
					"tokens"
				]
			},
			"0xbb0e17ef65f82ab018d8edd776e8dd940327b28b": {
				symbol: "AXS",
				name: "Axie Infinity Shard",
				decimals: 18,
				address: "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b",
				logoURI: "https://tokens.1inch.io/0xbb0e17ef65f82ab018d8edd776e8dd940327b28b.png",
				tags: [
					"tokens"
				]
			},
			"0x00a8b738e453ffd858a7edf03bccfe20412f0eb0": {
				symbol: "ALBT",
				name: "AllianceBlock Token",
				decimals: 18,
				address: "0x00a8b738e453ffd858a7edf03bccfe20412f0eb0",
				logoURI: "https://tokens.1inch.io/0x00a8b738e453ffd858a7edf03bccfe20412f0eb0.png",
				tags: [
					"tokens"
				]
			},
			"0x05d3606d5c81eb9b7b18530995ec9b29da05faba": {
				symbol: "TOMOE",
				name: "TomoChain",
				decimals: 18,
				address: "0x05d3606d5c81eb9b7b18530995ec9b29da05faba",
				logoURI: "https://tokens.1inch.io/0x05d3606d5c81eb9b7b18530995ec9b29da05faba.png",
				tags: [
					"tokens"
				]
			},
			"0xb1f66997a5760428d3a87d68b90bfe0ae64121cc": {
				symbol: "LUA",
				name: "LuaToken",
				decimals: 18,
				address: "0xb1f66997a5760428d3a87d68b90bfe0ae64121cc",
				logoURI: "https://tokens.1inch.io/0xb1f66997a5760428d3a87d68b90bfe0ae64121cc.png",
				tags: [
					"tokens"
				]
			},
			"0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577": {
				symbol: "Yf-DAI",
				name: "YfDAI.finance",
				decimals: 18,
				address: "0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577",
				logoURI: "https://tokens.1inch.io/0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577.png",
				tags: [
					"tokens"
				]
			},
			"0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa": {
				symbol: "POLS",
				name: "PolkastarterToken",
				decimals: 18,
				address: "0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa",
				logoURI: "https://tokens.1inch.io/0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa.png",
				tags: [
					"tokens"
				]
			},
			"0xaf9f549774ecedbd0966c52f250acc548d3f36e5": {
				symbol: "RFuel",
				name: "Rio Fuel Token",
				decimals: 18,
				address: "0xaf9f549774ecedbd0966c52f250acc548d3f36e5",
				logoURI: "https://tokens.1inch.io/0xaf9f549774ecedbd0966c52f250acc548d3f36e5.png",
				tags: [
					"tokens"
				]
			},
			"0x0202be363b8a4820f3f4de7faf5224ff05943ab1": {
				symbol: "UFT",
				name: "UniLend Finance Token",
				decimals: 18,
				address: "0x0202be363b8a4820f3f4de7faf5224ff05943ab1",
				logoURI: "https://tokens.1inch.io/0x0202be363b8a4820f3f4de7faf5224ff05943ab1.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xae697f994fc5ebc000f8e22ebffee04612f98a0d": {
				symbol: "LGCY",
				name: "LGCY Network",
				decimals: 18,
				address: "0xae697f994fc5ebc000f8e22ebffee04612f98a0d",
				logoURI: "https://tokens.1inch.io/0xae697f994fc5ebc000f8e22ebffee04612f98a0d.png",
				tags: [
					"tokens"
				]
			},
			"0x9d47894f8becb68b9cf3428d256311affe8b068b": {
				symbol: "$ROPE",
				name: "$ROPE",
				decimals: 18,
				address: "0x9d47894f8becb68b9cf3428d256311affe8b068b",
				logoURI: "https://tokens.1inch.io/0x9d47894f8becb68b9cf3428d256311affe8b068b.png",
				tags: [
					"tokens"
				]
			},
			"0x72f020f8f3e8fd9382705723cd26380f8d0c66bb": {
				symbol: "PLOT",
				name: "PLOT",
				decimals: 18,
				address: "0x72f020f8f3e8fd9382705723cd26380f8d0c66bb",
				logoURI: "https://tokens.1inch.io/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png",
				tags: [
					"tokens"
				]
			},
			"0x6a7ef4998eb9d0f706238756949f311a59e05745": {
				symbol: "KEN",
				name: "Kenysians Network",
				decimals: 18,
				address: "0x6a7ef4998eb9d0f706238756949f311a59e05745",
				logoURI: "https://tokens.1inch.io/0x6a7ef4998eb9d0f706238756949f311a59e05745.png",
				tags: [
					"tokens"
				]
			},
			"0x20945ca1df56d237fd40036d47e866c7dccd2114": {
				symbol: "Nsure",
				name: "Nsure Network Token",
				decimals: 18,
				address: "0x20945ca1df56d237fd40036d47e866c7dccd2114",
				logoURI: "https://tokens.1inch.io/0x20945ca1df56d237fd40036d47e866c7dccd2114.png",
				tags: [
					"tokens"
				]
			},
			"0x485d17a6f1b8780392d53d64751824253011a260": {
				symbol: "TIME",
				name: "ChronoTech Token",
				decimals: 8,
				address: "0x485d17a6f1b8780392d53d64751824253011a260",
				logoURI: "https://tokens.1inch.io/0x485d17a6f1b8780392d53d64751824253011a260.png",
				tags: [
					"tokens"
				]
			},
			"0x12e51e77daaa58aa0e9247db7510ea4b46f9bead": {
				symbol: "aYFIv1",
				name: "Aave Interest bearing YFI",
				decimals: 18,
				address: "0x12e51e77daaa58aa0e9247db7510ea4b46f9bead",
				logoURI: "https://tokens.1inch.io/0x12e51e77daaa58aa0e9247db7510ea4b46f9bead.png",
				tags: [
					"tokens"
				]
			},
			"0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5": {
				symbol: "aAAVEv1",
				name: "Aave Interest bearing Aave Token",
				decimals: 18,
				address: "0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5",
				logoURI: "https://tokens.1inch.io/0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5.png",
				tags: [
					"tokens"
				]
			},
			"0xb124541127a0a657f056d9dd06188c4f1b0e5aab": {
				symbol: "aUNIv1",
				name: "Aave Interest bearing Uniswap",
				decimals: 18,
				address: "0xb124541127a0a657f056d9dd06188c4f1b0e5aab",
				logoURI: "https://tokens.1inch.io/0xb124541127a0a657f056d9dd06188c4f1b0e5aab.png",
				tags: [
					"tokens"
				]
			},
			"0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40": {
				symbol: "aENJv1",
				name: "Aave Interest bearing ENJ",
				decimals: 18,
				address: "0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40",
				logoURI: "https://tokens.1inch.io/0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40.png",
				tags: [
					"tokens"
				]
			},
			"0xb753428af26e81097e7fd17f40c88aaa3e04902c": {
				symbol: "SFI",
				name: "Spice",
				decimals: 18,
				address: "0xb753428af26e81097e7fd17f40c88aaa3e04902c",
				logoURI: "https://tokens.1inch.io/0xb753428af26e81097e7fd17f40c88aaa3e04902c.png",
				tags: [
					"tokens"
				]
			},
			"0x8888801af4d980682e47f1a9036e589479e835c5": {
				symbol: "MPH",
				name: "88mph.app",
				decimals: 18,
				address: "0x8888801af4d980682e47f1a9036e589479e835c5",
				logoURI: "https://tokens.1inch.io/0x8888801af4d980682e47f1a9036e589479e835c5.png",
				tags: [
					"tokens"
				]
			},
			"0x5d8d9f5b96f4438195be9b99eee6118ed4304286": {
				symbol: "COVER_v1",
				name: "Cover Protocol",
				decimals: 18,
				address: "0x5d8d9f5b96f4438195be9b99eee6118ed4304286",
				logoURI: "https://tokens.1inch.io/0x5d8d9f5b96f4438195be9b99eee6118ed4304286.png",
				tags: [
					"tokens"
				]
			},
			"0x6468e79a80c0eab0f9a2b574c8d5bc374af59414": {
				symbol: "eXRD",
				name: "E-RADIX",
				decimals: 18,
				address: "0x6468e79a80c0eab0f9a2b574c8d5bc374af59414",
				logoURI: "https://tokens.1inch.io/0x6468e79a80c0eab0f9a2b574c8d5bc374af59414.png",
				tags: [
					"tokens"
				]
			},
			"0x3e780920601d61cedb860fe9c4a90c9ea6a35e78": {
				symbol: "BOOST",
				name: "Boosted Finance",
				decimals: 18,
				address: "0x3e780920601d61cedb860fe9c4a90c9ea6a35e78",
				logoURI: "https://tokens.1inch.io/0x3e780920601d61cedb860fe9c4a90c9ea6a35e78.png",
				tags: [
					"tokens"
				]
			},
			"0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0": {
				symbol: "DF",
				name: "dForce",
				decimals: 18,
				address: "0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0",
				logoURI: "https://tokens.1inch.io/0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0.png",
				tags: [
					"tokens"
				]
			},
			"0x3db6ba6ab6f95efed1a6e794cad492faaabf294d": {
				symbol: "LTO",
				name: "LTO Network Token",
				decimals: 8,
				address: "0x3db6ba6ab6f95efed1a6e794cad492faaabf294d",
				logoURI: "https://tokens.1inch.io/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png",
				tags: [
					"tokens"
				]
			},
			"0xf5238462e7235c7b62811567e63dd17d12c2eaa0": {
				symbol: "CGT",
				name: "CACHE Gold",
				decimals: 8,
				address: "0xf5238462e7235c7b62811567e63dd17d12c2eaa0",
				logoURI: "https://tokens.1inch.io/0xf5238462e7235c7b62811567e63dd17d12c2eaa0.png",
				tags: [
					"tokens"
				]
			},
			"0x4fe83213d56308330ec302a8bd641f1d0113a4cc": {
				symbol: "NU",
				name: "NuCypher",
				decimals: 18,
				address: "0x4fe83213d56308330ec302a8bd641f1d0113a4cc",
				logoURI: "https://tokens.1inch.io/0x4fe83213d56308330ec302a8bd641f1d0113a4cc.png",
				tags: [
					"tokens"
				]
			},
			"0x9e70240d2a8a30a592d3f076441c4f303b26de12": {
				symbol: "OCT",
				name: "Wrapped OCT",
				decimals: 8,
				address: "0x9e70240d2a8a30a592d3f076441c4f303b26de12",
				logoURI: "https://tokens.1inch.io/0x9e70240d2a8a30a592d3f076441c4f303b26de12.png",
				tags: [
					"tokens"
				]
			},
			"0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8": {
				symbol: "QRX",
				name: "QuiverX",
				decimals: 18,
				address: "0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8",
				logoURI: "https://tokens.1inch.io/0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8.png",
				tags: [
					"tokens"
				]
			},
			"0x05079687d35b93538cbd59fe5596380cae9054a9": {
				symbol: "BTSG",
				name: "BitSong",
				decimals: 18,
				address: "0x05079687d35b93538cbd59fe5596380cae9054a9",
				logoURI: "https://tokens.1inch.io/0x05079687d35b93538cbd59fe5596380cae9054a9.png",
				tags: [
					"tokens"
				]
			},
			"0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c": {
				symbol: "aRENv1",
				name: "Aave Interest bearing REN",
				decimals: 18,
				address: "0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c",
				logoURI: "https://tokens.1inch.io/0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c.png",
				tags: [
					"tokens"
				]
			},
			"0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4": {
				symbol: "VAL",
				name: "Sora Validator Token",
				decimals: 18,
				address: "0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4",
				logoURI: "https://tokens.1inch.io/0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4.png",
				tags: [
					"tokens"
				]
			},
			"0x0b38210ea11411557c13457d4da7dc6ea731b88a": {
				symbol: "API3",
				name: "API3",
				decimals: 18,
				address: "0x0b38210ea11411557c13457d4da7dc6ea731b88a",
				logoURI: "https://tokens.1inch.io/0x0b38210ea11411557c13457d4da7dc6ea731b88a.png",
				tags: [
					"tokens"
				]
			},
			"0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a": {
				symbol: "BAC",
				name: "BAC",
				decimals: 18,
				address: "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a",
				logoURI: "https://tokens.1inch.io/0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a.png",
				tags: [
					"tokens"
				]
			},
			"0x26607ac599266b21d13c7acf7942c7701a8b699c": {
				symbol: "PIPT",
				name: "Power Index Pool Token",
				decimals: 18,
				address: "0x26607ac599266b21d13c7acf7942c7701a8b699c",
				logoURI: "https://tokens.1inch.io/0x26607ac599266b21d13c7acf7942c7701a8b699c.png",
				tags: [
					"tokens"
				]
			},
			"0x3218a02f8f8b5c3894ce30eb255f10bcba13e654": {
				symbol: "MEGA",
				name: "MegaCryptoPolis $MEGA Token (MEGA)",
				decimals: 18,
				address: "0x3218a02f8f8b5c3894ce30eb255f10bcba13e654",
				logoURI: "https://tokens.1inch.io/0x3218a02f8f8b5c3894ce30eb255f10bcba13e654.png",
				tags: [
					"tokens"
				]
			},
			"0x07150e919b4de5fd6a63de1f9384828396f25fdc": {
				symbol: "BASE",
				name: "Base Protocol",
				decimals: 9,
				address: "0x07150e919b4de5fd6a63de1f9384828396f25fdc",
				logoURI: "https://tokens.1inch.io/0x07150e919b4de5fd6a63de1f9384828396f25fdc.png",
				tags: [
					"tokens"
				]
			},
			"0x91dfbee3965baaee32784c2d546b7a0c62f268c9": {
				symbol: "BONDLY",
				name: "Bondly",
				decimals: 18,
				address: "0x91dfbee3965baaee32784c2d546b7a0c62f268c9",
				logoURI: "https://tokens.1inch.io/0x91dfbee3965baaee32784c2d546b7a0c62f268c9.png",
				tags: [
					"tokens"
				]
			},
			"0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206": {
				symbol: "NEXO",
				name: "Nexo",
				decimals: 18,
				address: "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
				logoURI: "https://tokens.1inch.io/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206.png",
				tags: [
					"tokens"
				]
			},
			"0xffc97d72e13e01096502cb8eb52dee56f74dad7b": {
				symbol: "aAAVE",
				name: "Aave interest bearing AAVE",
				decimals: 18,
				address: "0xffc97d72e13e01096502cb8eb52dee56f74dad7b",
				logoURI: "https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1": {
				symbol: "aBAT",
				name: "Aave interest bearing BAT",
				decimals: 18,
				address: "0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1",
				logoURI: "https://tokens.1inch.io/0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa361718326c15715591c299427c62086f69923d9": {
				symbol: "aBUSD",
				name: "Aave interest bearing BUSD",
				decimals: 18,
				address: "0xa361718326c15715591c299427c62086f69923d9",
				logoURI: "https://tokens.1inch.io/0xa361718326c15715591c299427c62086f69923d9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x028171bca77440897b824ca71d1c56cac55b68a3": {
				symbol: "aDAI",
				name: "Aave interest bearing DAI",
				decimals: 18,
				address: "0x028171bca77440897b824ca71d1c56cac55b68a3",
				logoURI: "https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xac6df26a590f08dcc95d5a4705ae8abbc88509ef": {
				symbol: "aENJ",
				name: "Aave interest bearing ENJ",
				decimals: 18,
				address: "0xac6df26a590f08dcc95d5a4705ae8abbc88509ef",
				logoURI: "https://tokens.1inch.io/0xac6df26a590f08dcc95d5a4705ae8abbc88509ef.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x39c6b3e42d6a679d7d776778fe880bc9487c2eda": {
				symbol: "aKNC",
				name: "Aave interest bearing KNC",
				decimals: 18,
				address: "0x39c6b3e42d6a679d7d776778fe880bc9487c2eda",
				logoURI: "https://tokens.1inch.io/0x39c6b3e42d6a679d7d776778fe880bc9487c2eda.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0": {
				symbol: "aLINK",
				name: "Aave interest bearing LINK",
				decimals: 18,
				address: "0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0",
				logoURI: "https://tokens.1inch.io/0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa685a61171bb30d4072b338c80cb7b2c865c873e": {
				symbol: "aMANA",
				name: "Aave interest bearing MANA",
				decimals: 18,
				address: "0xa685a61171bb30d4072b338c80cb7b2c865c873e",
				logoURI: "https://tokens.1inch.io/0xa685a61171bb30d4072b338c80cb7b2c865c873e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc713e5e149d5d0715dcd1c156a020976e7e56b88": {
				symbol: "aMKR",
				name: "Aave interest bearing MKR",
				decimals: 18,
				address: "0xc713e5e149d5d0715dcd1c156a020976e7e56b88",
				logoURI: "https://tokens.1inch.io/0xc713e5e149d5d0715dcd1c156a020976e7e56b88.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a": {
				symbol: "aREN",
				name: "Aave Interest bearing REN",
				decimals: 18,
				address: "0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a",
				logoURI: "https://tokens.1inch.io/0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a.png",
				tags: [
					"tokens"
				]
			},
			"0x35f6b052c598d933d69a4eec4d04c73a191fe6c2": {
				symbol: "aSNX",
				name: "Aave interest bearing SNX",
				decimals: 18,
				address: "0x35f6b052c598d933d69a4eec4d04c73a191fe6c2",
				logoURI: "https://tokens.1inch.io/0x35f6b052c598d933d69a4eec4d04c73a191fe6c2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x6c5024cd4f8a59110119c56f8933403a539555eb": {
				symbol: "aSUSD",
				name: "Aave interest bearing SUSD",
				decimals: 18,
				address: "0x6c5024cd4f8a59110119c56f8933403a539555eb",
				logoURI: "https://tokens.1inch.io/0x6c5024cd4f8a59110119c56f8933403a539555eb.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x101cc05f4a51c0319f570d5e146a8c625198e636": {
				symbol: "aTUSD",
				name: "Aave interest bearing TUSD",
				decimals: 18,
				address: "0x101cc05f4a51c0319f570d5e146a8c625198e636",
				logoURI: "https://tokens.1inch.io/0x101cc05f4a51c0319f570d5e146a8c625198e636.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1": {
				symbol: "aUNI",
				name: "Aave interest bearing UNI",
				decimals: 18,
				address: "0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1",
				logoURI: "https://tokens.1inch.io/0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xbcca60bb61934080951369a648fb03df4f96263c": {
				symbol: "aUSDC",
				name: "Aave interest bearing USDC",
				decimals: 6,
				address: "0xbcca60bb61934080951369a648fb03df4f96263c",
				logoURI: "https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3ed3b47dd13ec9a98b44e6204a523e766b225811": {
				symbol: "aUSDT",
				name: "Aave interest bearing USDT",
				decimals: 6,
				address: "0x3ed3b47dd13ec9a98b44e6204a523e766b225811",
				logoURI: "https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656": {
				symbol: "aWBTC",
				name: "Aave interest bearing WBTC",
				decimals: 8,
				address: "0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656",
				logoURI: "https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x030ba81f1c18d280636f32af80b9aad02cf0854e": {
				symbol: "aWETH",
				name: "Aave interest bearing WETH",
				decimals: 18,
				address: "0x030ba81f1c18d280636f32af80b9aad02cf0854e",
				logoURI: "https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x5165d24277cd063f5ac44efd447b27025e888f37": {
				symbol: "aYFI",
				name: "Aave interest bearing YFI",
				decimals: 18,
				address: "0x5165d24277cd063f5ac44efd447b27025e888f37",
				logoURI: "https://tokens.1inch.io/0x5165d24277cd063f5ac44efd447b27025e888f37.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e": {
				symbol: "aZRX",
				name: "Aave interest bearing ZRX",
				decimals: 18,
				address: "0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e",
				logoURI: "https://tokens.1inch.io/0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x191557728e4d8caa4ac94f86af842148c0fa8f7e": {
				symbol: "ECO",
				name: "ECO TOKEN",
				decimals: 8,
				address: "0x191557728e4d8caa4ac94f86af842148c0fa8f7e",
				logoURI: "https://tokens.1inch.io/0x191557728e4d8caa4ac94f86af842148c0fa8f7e.png",
				tags: [
					"tokens"
				]
			},
			"0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c": {
				symbol: "UTK",
				name: "Utrust Token",
				decimals: 18,
				address: "0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c",
				logoURI: "https://tokens.1inch.io/0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c.png",
				tags: [
					"tokens"
				]
			},
			"0x3472a5a71965499acd81997a54bba8d852c6e53d": {
				symbol: "BADGER",
				name: "Badger",
				decimals: 18,
				address: "0x3472a5a71965499acd81997a54bba8d852c6e53d",
				logoURI: "https://tokens.1inch.io/0x3472a5a71965499acd81997a54bba8d852c6e53d.png",
				tags: [
					"tokens"
				]
			},
			"0xc944e90c64b2c07662a292be6244bdf05cda44a7": {
				symbol: "GRT",
				name: "Graph Token",
				decimals: 18,
				address: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
				logoURI: "https://tokens.1inch.io/0xc944e90c64b2c07662a292be6244bdf05cda44a7.png",
				tags: [
					"tokens"
				]
			},
			"0x5a98fcbea516cf06857215779fd812ca3bef1b32": {
				symbol: "LDO",
				name: "Lido DAO Token",
				decimals: 18,
				address: "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
				logoURI: "https://tokens.1inch.io/0x5a98fcbea516cf06857215779fd812ca3bef1b32.png",
				tags: [
					"tokens"
				]
			},
			"0x77777feddddffc19ff86db637967013e6c6a116c": {
				symbol: "TORN",
				name: "TornadoCash",
				decimals: 18,
				address: "0x77777feddddffc19ff86db637967013e6c6a116c",
				logoURI: "https://tokens.1inch.io/0x77777feddddffc19ff86db637967013e6c6a116c.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xae7ab96520de3a18e5e111b5eaab095312d7fe84": {
				symbol: "stETH",
				name: "stETH",
				decimals: 18,
				address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
				logoURI: "https://tokens.1inch.io/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png",
				tags: [
					"tokens"
				]
			},
			"0xb4d930279552397bba2ee473229f89ec245bc365": {
				symbol: "MAHA",
				name: "MahaDAO",
				decimals: 18,
				address: "0xb4d930279552397bba2ee473229f89ec245bc365",
				logoURI: "https://tokens.1inch.io/0xb4d930279552397bba2ee473229f89ec245bc365.png",
				tags: [
					"tokens"
				]
			},
			"0x57b946008913b82e4df85f501cbaed910e58d26c": {
				symbol: "POND",
				name: "Marlin POND",
				decimals: 18,
				address: "0x57b946008913b82e4df85f501cbaed910e58d26c",
				logoURI: "https://tokens.1inch.io/0x57b946008913b82e4df85f501cbaed910e58d26c.png",
				tags: [
					"tokens"
				]
			},
			"0x3593d125a4f7849a1b059e64f4517a86dd60c95d": {
				symbol: "OMv2",
				name: "MANTRA DAO",
				decimals: 18,
				address: "0x3593d125a4f7849a1b059e64f4517a86dd60c95d",
				logoURI: "https://tokens.1inch.io/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png",
				tags: [
					"tokens"
				]
			},
			"0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0": {
				symbol: "FXS",
				name: "Frax Share",
				decimals: 18,
				address: "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
				logoURI: "https://tokens.1inch.io/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0.png",
				tags: [
					"tokens"
				]
			},
			"0x1fdab294eda5112b7d066ed8f2e4e562d5bcc664": {
				symbol: "SPICE",
				name: "Spice",
				decimals: 18,
				address: "0x1fdab294eda5112b7d066ed8f2e4e562d5bcc664",
				logoURI: "https://tokens.1inch.io/0x1fdab294eda5112b7d066ed8f2e4e562d5bcc664.png",
				tags: [
					"tokens"
				]
			},
			"0x111111111117dc0aa78b770fa6a738034120c302": {
				symbol: "1INCH",
				name: "1INCH Token",
				decimals: 18,
				address: "0x111111111117dc0aa78b770fa6a738034120c302",
				logoURI: "https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2": {
				symbol: "PPAY",
				name: "Plasma",
				decimals: 18,
				address: "0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2",
				logoURI: "https://tokens.1inch.io/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x368b3a58b5f49392e5c9e4c998cb0bb966752e51": {
				symbol: "MIC",
				name: "MIC",
				decimals: 18,
				address: "0x368b3a58b5f49392e5c9e4c998cb0bb966752e51",
				logoURI: "https://tokens.1inch.io/0x368b3a58b5f49392e5c9e4c998cb0bb966752e51.png",
				tags: [
					"tokens"
				]
			},
			"0x4b4d2e899658fb59b1d518b68fe836b100ee8958": {
				symbol: "MIS",
				name: "MIS",
				decimals: 18,
				address: "0x4b4d2e899658fb59b1d518b68fe836b100ee8958",
				logoURI: "https://tokens.1inch.io/0x4b4d2e899658fb59b1d518b68fe836b100ee8958.png",
				tags: [
					"tokens"
				]
			},
			"0xee573a945b01b788b9287ce062a0cfc15be9fd86": {
				symbol: "XED",
				name: "Exeedme",
				decimals: 18,
				address: "0xee573a945b01b788b9287ce062a0cfc15be9fd86",
				logoURI: "https://tokens.1inch.io/0xee573a945b01b788b9287ce062a0cfc15be9fd86.png",
				tags: [
					"tokens"
				]
			},
			"0x34950ff2b487d9e5282c5ab342d08a2f712eb79f": {
				symbol: "WOZX",
				name: "EFFORCE IEO",
				decimals: 18,
				address: "0x34950ff2b487d9e5282c5ab342d08a2f712eb79f",
				logoURI: "https://tokens.1inch.io/0x34950ff2b487d9e5282c5ab342d08a2f712eb79f.png",
				tags: [
					"tokens"
				]
			},
			"0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3": {
				symbol: "DSD",
				name: "Dynamic Set Dollar",
				decimals: 18,
				address: "0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3",
				logoURI: "https://tokens.1inch.io/0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3.png",
				tags: [
					"tokens"
				]
			},
			"0xc770eefad204b5180df6a14ee197d99d808ee52d": {
				symbol: "FOX",
				name: "FOX",
				decimals: 18,
				address: "0xc770eefad204b5180df6a14ee197d99d808ee52d",
				logoURI: "https://tokens.1inch.io/0xc770eefad204b5180df6a14ee197d99d808ee52d.png",
				tags: [
					"tokens"
				]
			},
			"0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713": {
				symbol: "COVER",
				name: "Cover Protocol Governance Token",
				decimals: 18,
				address: "0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713",
				logoURI: "https://tokens.1inch.io/0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x66a0f676479cee1d7373f3dc2e2952778bff5bd6": {
				symbol: "WISE",
				name: "Wise Token",
				decimals: 18,
				address: "0x66a0f676479cee1d7373f3dc2e2952778bff5bd6",
				logoURI: "https://tokens.1inch.io/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png",
				tags: [
					"tokens"
				]
			},
			"0x539f3615c1dbafa0d008d87504667458acbd16fa": {
				symbol: "FERA",
				name: "FERA",
				decimals: 18,
				address: "0x539f3615c1dbafa0d008d87504667458acbd16fa",
				logoURI: "https://tokens.1inch.io/0x539f3615c1dbafa0d008d87504667458acbd16fa.png",
				tags: [
					"tokens"
				]
			},
			"0xffffffff2ba8f66d4e51811c5190992176930278": {
				symbol: "COMBO",
				name: "Furucombo",
				decimals: 18,
				address: "0xffffffff2ba8f66d4e51811c5190992176930278",
				logoURI: "https://tokens.1inch.io/0xffffffff2ba8f66d4e51811c5190992176930278.png",
				tags: [
					"tokens"
				]
			},
			"0x2b4200a8d373d484993c37d63ee14aee0096cd12": {
				symbol: "USDFL",
				name: "USDFreeLiquidity",
				decimals: 18,
				address: "0x2b4200a8d373d484993c37d63ee14aee0096cd12",
				logoURI: "https://tokens.1inch.io/0x2b4200a8d373d484993c37d63ee14aee0096cd12.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xaea46a60368a7bd060eec7df8cba43b7ef41ad85": {
				symbol: "FET",
				name: "Fetch",
				decimals: 18,
				address: "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85",
				logoURI: "https://tokens.1inch.io/0xaea46a60368a7bd060eec7df8cba43b7ef41ad85.png",
				tags: [
					"tokens"
				]
			},
			"0x6c5ba91642f10282b576d91922ae6448c9d52f4e": {
				symbol: "PHA",
				name: "Phala",
				decimals: 18,
				address: "0x6c5ba91642f10282b576d91922ae6448c9d52f4e",
				logoURI: "https://tokens.1inch.io/0x6c5ba91642f10282b576d91922ae6448c9d52f4e.png",
				tags: [
					"tokens"
				]
			},
			"0xa8b12cc90abf65191532a12bb5394a714a46d358": {
				symbol: "pBTC35A",
				name: "POW BTC-35W/T",
				decimals: 18,
				address: "0xa8b12cc90abf65191532a12bb5394a714a46d358",
				logoURI: "https://tokens.1inch.io/0xa8b12cc90abf65191532a12bb5394a714a46d358.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x853d955acef822db058eb8505911ed77f175b99e": {
				symbol: "FRAX",
				name: "Frax",
				decimals: 18,
				address: "0x853d955acef822db058eb8505911ed77f175b99e",
				logoURI: "https://tokens.1inch.io/0x853d955acef822db058eb8505911ed77f175b99e.png",
				tags: [
					"tokens"
				]
			},
			"0xe28b3b32b6c345a34ff64674606124dd5aceca30": {
				symbol: "INJ",
				name: "Injective Token",
				decimals: 18,
				address: "0xe28b3b32b6c345a34ff64674606124dd5aceca30",
				logoURI: "https://tokens.1inch.io/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png",
				tags: [
					"tokens"
				]
			},
			"0x0a50c93c762fdd6e56d86215c24aaad43ab629aa": {
				symbol: "LGO",
				name: "LGO Token",
				decimals: 8,
				address: "0x0a50c93c762fdd6e56d86215c24aaad43ab629aa",
				logoURI: "https://tokens.1inch.io/0x0a50c93c762fdd6e56d86215c24aaad43ab629aa.png",
				tags: [
					"tokens"
				]
			},
			"0xf94b5c5651c888d928439ab6514b93944eee6f48": {
				symbol: "YLD_APP",
				name: "Yield",
				decimals: 18,
				address: "0xf94b5c5651c888d928439ab6514b93944eee6f48",
				logoURI: "https://tokens.1inch.io/0xf94b5c5651c888d928439ab6514b93944eee6f48.png",
				tags: [
					"tokens"
				]
			},
			"0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4": {
				symbol: "CFi",
				name: "CyberFi Token",
				decimals: 18,
				address: "0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4",
				logoURI: "https://tokens.1inch.io/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png",
				tags: [
					"tokens"
				]
			},
			"0xd291e7a03283640fdc51b121ac401383a46cc623": {
				symbol: "RGT",
				name: "Rari Governance Token",
				decimals: 18,
				address: "0xd291e7a03283640fdc51b121ac401383a46cc623",
				logoURI: "https://tokens.1inch.io/0xd291e7a03283640fdc51b121ac401383a46cc623.png",
				tags: [
					"tokens"
				]
			},
			"0xfa5047c9c78b8877af97bdcb85db743fd7313d4a": {
				symbol: "ROOK",
				name: "ROOK",
				decimals: 18,
				address: "0xfa5047c9c78b8877af97bdcb85db743fd7313d4a",
				logoURI: "https://tokens.1inch.io/0xfa5047c9c78b8877af97bdcb85db743fd7313d4a.png",
				tags: [
					"tokens"
				]
			},
			"0xae1eaae3f627aaca434127644371b67b18444051": {
				symbol: "YOP",
				name: "YOP",
				decimals: 8,
				address: "0xae1eaae3f627aaca434127644371b67b18444051",
				logoURI: "https://tokens.1inch.io/0xae1eaae3f627aaca434127644371b67b18444051.png",
				tags: [
					"tokens"
				]
			},
			"0x87d73e916d7057945c9bcd8cdd94e42a6f47f776": {
				symbol: "NFTX",
				name: "NFTX",
				decimals: 18,
				address: "0x87d73e916d7057945c9bcd8cdd94e42a6f47f776",
				logoURI: "https://tokens.1inch.io/0x87d73e916d7057945c9bcd8cdd94e42a6f47f776.png",
				tags: [
					"tokens"
				]
			},
			"0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3": {
				symbol: "RBC",
				name: "Rubic",
				decimals: 18,
				address: "0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3",
				logoURI: "https://tokens.1inch.io/0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3.png",
				tags: [
					"tokens"
				]
			},
			"0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f": {
				symbol: "SDT",
				name: "Stake DAO Token",
				decimals: 18,
				address: "0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f",
				logoURI: "https://tokens.1inch.io/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png",
				tags: [
					"tokens"
				]
			},
			"0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d": {
				symbol: "VGX",
				name: "Voyager Token",
				decimals: 8,
				address: "0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d",
				logoURI: "https://tokens.1inch.io/0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d.png",
				tags: [
					"tokens"
				]
			},
			"0x9248c485b0b80f76da451f167a8db30f33c70907": {
				symbol: "DEBASE",
				name: "Debase",
				decimals: 18,
				address: "0x9248c485b0b80f76da451f167a8db30f33c70907",
				logoURI: "https://tokens.1inch.io/0x9248c485b0b80f76da451f167a8db30f33c70907.png",
				tags: [
					"tokens"
				]
			},
			"0x8290333cef9e6d528dd5618fb97a76f268f3edd4": {
				symbol: "ANKR",
				name: "Ankr Network",
				decimals: 18,
				address: "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
				logoURI: "https://tokens.1inch.io/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png",
				tags: [
					"tokens"
				]
			},
			"0xc719d010b63e5bbf2c0551872cd5316ed26acd83": {
				symbol: "DIP_Insurance",
				name: "Decentralized Insurance Protocol",
				decimals: 18,
				address: "0xc719d010b63e5bbf2c0551872cd5316ed26acd83",
				logoURI: "https://tokens.1inch.io/0xc719d010b63e5bbf2c0551872cd5316ed26acd83.png",
				tags: [
					"tokens"
				]
			},
			"0x3155ba85d5f96b2d030a4966af206230e46849cb": {
				symbol: "RUNE",
				name: "THORChain ETH.RUNE",
				decimals: 18,
				address: "0x3155ba85d5f96b2d030a4966af206230e46849cb",
				logoURI: "https://tokens.1inch.io/0x3155ba85d5f96b2d030a4966af206230e46849cb.png",
				tags: [
					"tokens"
				]
			},
			"0x374cb8c27130e2c9e04f44303f3c8351b9de61c1": {
				symbol: "BAO",
				name: "BaoToken",
				decimals: 18,
				address: "0x374cb8c27130e2c9e04f44303f3c8351b9de61c1",
				logoURI: "https://tokens.1inch.io/0x374cb8c27130e2c9e04f44303f3c8351b9de61c1.png",
				tags: [
					"tokens"
				]
			},
			"0xfe3e6a25e6b192a42a44ecddcd13796471735acf": {
				symbol: "REEF",
				name: "Reef.finance",
				decimals: 18,
				address: "0xfe3e6a25e6b192a42a44ecddcd13796471735acf",
				logoURI: "https://tokens.1inch.io/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png",
				tags: [
					"tokens"
				]
			},
			"0x4c19596f5aaff459fa38b0f7ed92f11ae6543784": {
				symbol: "TRU",
				name: "TrustToken",
				decimals: 8,
				address: "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784",
				logoURI: "https://tokens.1inch.io/0x4c19596f5aaff459fa38b0f7ed92f11ae6543784.png",
				tags: [
					"tokens"
				]
			},
			"0x86772b1409b61c639eaac9ba0acfbb6e238e5f83": {
				symbol: "NDX",
				name: "Indexed",
				decimals: 18,
				address: "0x86772b1409b61c639eaac9ba0acfbb6e238e5f83",
				logoURI: "https://tokens.1inch.io/0x86772b1409b61c639eaac9ba0acfbb6e238e5f83.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x67c597624b17b16fb77959217360b7cd18284253": {
				symbol: "MARK",
				name: "Benchmark",
				decimals: 9,
				address: "0x67c597624b17b16fb77959217360b7cd18284253",
				logoURI: "https://tokens.1inch.io/0x67c597624b17b16fb77959217360b7cd18284253.png",
				tags: [
					"tokens"
				]
			},
			"0xf0939011a9bb95c3b791f0cb546377ed2693a574": {
				symbol: "ZERO",
				name: "Zero.Exchange Token",
				decimals: 18,
				address: "0xf0939011a9bb95c3b791f0cb546377ed2693a574",
				logoURI: "https://tokens.1inch.io/0xf0939011a9bb95c3b791f0cb546377ed2693a574.png",
				tags: [
					"tokens"
				]
			},
			"0x7240ac91f01233baaf8b064248e80feaa5912ba3": {
				symbol: "OCTO",
				name: "Octo.fi",
				decimals: 18,
				address: "0x7240ac91f01233baaf8b064248e80feaa5912ba3",
				logoURI: "https://tokens.1inch.io/0x7240ac91f01233baaf8b064248e80feaa5912ba3.png",
				tags: [
					"tokens"
				]
			},
			"0x4c11249814f11b9346808179cf06e71ac328c1b5": {
				symbol: "ORAI",
				name: "Oraichain Token",
				decimals: 18,
				address: "0x4c11249814f11b9346808179cf06e71ac328c1b5",
				logoURI: "https://tokens.1inch.io/0x4c11249814f11b9346808179cf06e71ac328c1b5.png",
				tags: [
					"tokens"
				]
			},
			"0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20": {
				symbol: "DDIM",
				name: "DuckDaoDime",
				decimals: 18,
				address: "0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20",
				logoURI: "https://tokens.1inch.io/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png",
				tags: [
					"tokens"
				]
			},
			"0x70401dfd142a16dc7031c56e862fc88cb9537ce0": {
				symbol: "BIRD",
				name: "Bird.Money",
				decimals: 18,
				address: "0x70401dfd142a16dc7031c56e862fc88cb9537ce0",
				logoURI: "https://tokens.1inch.io/0x70401dfd142a16dc7031c56e862fc88cb9537ce0.png",
				tags: [
					"tokens"
				]
			},
			"0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0": {
				symbol: "$ANRX",
				name: "AnRKey X",
				decimals: 18,
				address: "0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0",
				logoURI: "https://tokens.1inch.io/0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0.png",
				tags: [
					"tokens"
				]
			},
			"0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7": {
				symbol: "SPI_Shopping",
				name: "Shopping.io",
				decimals: 18,
				address: "0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7",
				logoURI: "https://tokens.1inch.io/0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7.png",
				tags: [
					"tokens"
				]
			},
			"0x86ed939b500e121c0c5f493f399084db596dad20": {
				symbol: "SPC",
				name: "SpaceChainV2",
				decimals: 18,
				address: "0x86ed939b500e121c0c5f493f399084db596dad20",
				logoURI: "https://tokens.1inch.io/0x86ed939b500e121c0c5f493f399084db596dad20.png",
				tags: [
					"tokens"
				]
			},
			"0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f": {
				symbol: "RAMP",
				name: "RAMP DEFI",
				decimals: 18,
				address: "0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f",
				logoURI: "https://tokens.1inch.io/0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f.png",
				tags: [
					"tokens"
				]
			},
			"0xb987d48ed8f2c468d52d6405624eadba5e76d723": {
				symbol: "STBZ",
				name: "Stabilize Token",
				decimals: 18,
				address: "0xb987d48ed8f2c468d52d6405624eadba5e76d723",
				logoURI: "https://tokens.1inch.io/0xb987d48ed8f2c468d52d6405624eadba5e76d723.png",
				tags: [
					"tokens"
				]
			},
			"0x159751323a9e0415dd3d6d42a1212fe9f4a0848c": {
				symbol: "INFI",
				name: "INFI",
				decimals: 18,
				address: "0x159751323a9e0415dd3d6d42a1212fe9f4a0848c",
				logoURI: "https://tokens.1inch.io/0x159751323a9e0415dd3d6d42a1212fe9f4a0848c.png",
				tags: [
					"tokens"
				]
			},
			"0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b": {
				symbol: "CRO",
				name: "CRO",
				decimals: 8,
				address: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
				logoURI: "https://tokens.1inch.io/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b.png",
				tags: [
					"tokens"
				]
			},
			"0xa8b919680258d369114910511cc87595aec0be6d": {
				symbol: "LYXe",
				name: "LUKSO Token",
				decimals: 18,
				address: "0xa8b919680258d369114910511cc87595aec0be6d",
				logoURI: "https://tokens.1inch.io/0xa8b919680258d369114910511cc87595aec0be6d.png",
				tags: [
					"tokens"
				]
			},
			"0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988": {
				symbol: "TVK",
				name: "Terra Virtua Kolect",
				decimals: 18,
				address: "0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988",
				logoURI: "https://tokens.1inch.io/0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988.png",
				tags: [
					"tokens"
				]
			},
			"0x798d1be841a82a273720ce31c822c61a67a601c3": {
				symbol: "DIGG",
				name: "Digg",
				decimals: 9,
				address: "0x798d1be841a82a273720ce31c822c61a67a601c3",
				logoURI: "https://tokens.1inch.io/0x798d1be841a82a273720ce31c822c61a67a601c3.png",
				tags: [
					"tokens"
				]
			},
			"0xa1faa113cbe53436df28ff0aee54275c13b40975": {
				symbol: "ALPHA",
				name: "AlphaToken",
				decimals: 18,
				address: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
				logoURI: "https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975_1.png",
				tags: [
					"tokens"
				]
			},
			"0x817bbdbc3e8a1204f3691d14bb44992841e3db35": {
				symbol: "CUDOS",
				name: "CudosToken",
				decimals: 18,
				address: "0x817bbdbc3e8a1204f3691d14bb44992841e3db35",
				logoURI: "https://tokens.1inch.io/0x817bbdbc3e8a1204f3691d14bb44992841e3db35.png",
				tags: [
					"tokens"
				]
			},
			"0xde4ee8057785a7e8e800db58f9784845a5c2cbd6": {
				symbol: "DEXE",
				name: "Dexe",
				decimals: 18,
				address: "0xde4ee8057785a7e8e800db58f9784845a5c2cbd6",
				logoURI: "https://tokens.1inch.io/0xde4ee8057785a7e8e800db58f9784845a5c2cbd6.png",
				tags: [
					"tokens"
				]
			},
			"0x3845badade8e6dff049820680d1f14bd3903a5d0": {
				symbol: "SAND",
				name: "SAND",
				decimals: 18,
				address: "0x3845badade8e6dff049820680d1f14bd3903a5d0",
				logoURI: "https://tokens.1inch.io/0x3845badade8e6dff049820680d1f14bd3903a5d0.png",
				tags: [
					"tokens"
				]
			},
			"0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6": {
				symbol: "CVR",
				name: "PolkaCover",
				decimals: 18,
				address: "0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6",
				logoURI: "https://tokens.1inch.io/0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6.png",
				tags: [
					"tokens"
				]
			},
			"0xe5caef4af8780e59df925470b050fb23c43ca68c": {
				symbol: "FRM",
				name: "Ferrum Network Token",
				decimals: 6,
				address: "0xe5caef4af8780e59df925470b050fb23c43ca68c",
				logoURI: "https://tokens.1inch.io/0xe5caef4af8780e59df925470b050fb23c43ca68c.png",
				tags: [
					"tokens"
				]
			},
			"0x298d492e8c1d909d3f63bc4a36c66c64acb3d695": {
				symbol: "PBR",
				name: "PolkaBridge",
				decimals: 18,
				address: "0x298d492e8c1d909d3f63bc4a36c66c64acb3d695",
				logoURI: "https://tokens.1inch.io/0x298d492e8c1d909d3f63bc4a36c66c64acb3d695.png",
				tags: [
					"tokens"
				]
			},
			"0xfe9a29ab92522d14fc65880d817214261d8479ae": {
				symbol: "SNOW",
				name: "SnowSwap",
				decimals: 18,
				address: "0xfe9a29ab92522d14fc65880d817214261d8479ae",
				logoURI: "https://tokens.1inch.io/0xfe9a29ab92522d14fc65880d817214261d8479ae.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x220b71671b649c03714da9c621285943f3cbcdc6": {
				symbol: "DIS",
				name: "TosDis",
				decimals: 18,
				address: "0x220b71671b649c03714da9c621285943f3cbcdc6",
				logoURI: "https://tokens.1inch.io/0x220b71671b649c03714da9c621285943f3cbcdc6.png",
				tags: [
					"tokens"
				]
			},
			"0x69a95185ee2a045cdc4bcd1b1df10710395e4e23": {
				symbol: "POOLZ",
				name: "$Poolz Finance",
				decimals: 18,
				address: "0x69a95185ee2a045cdc4bcd1b1df10710395e4e23",
				logoURI: "https://tokens.1inch.io/0x69a95185ee2a045cdc4bcd1b1df10710395e4e23.png",
				tags: [
					"tokens"
				]
			},
			"0xe4815ae53b124e7263f08dcdbbb757d41ed658c6": {
				symbol: "ZKS",
				name: "Zks",
				decimals: 18,
				address: "0xe4815ae53b124e7263f08dcdbbb757d41ed658c6",
				logoURI: "https://tokens.1inch.io/0xe4815ae53b124e7263f08dcdbbb757d41ed658c6.png",
				tags: [
					"tokens"
				]
			},
			"0x1337def16f9b486faed0293eb623dc8395dfe46a": {
				symbol: "ARMOR",
				name: "Armor",
				decimals: 18,
				address: "0x1337def16f9b486faed0293eb623dc8395dfe46a",
				logoURI: "https://tokens.1inch.io/0x1337def16f9b486faed0293eb623dc8395dfe46a.png",
				tags: [
					"tokens"
				]
			},
			"0x1337def18c680af1f9f45cbcab6309562975b1dd": {
				symbol: "arNXM",
				name: "Armor NXM",
				decimals: 18,
				address: "0x1337def18c680af1f9f45cbcab6309562975b1dd",
				logoURI: "https://tokens.1inch.io/0x1337def18c680af1f9f45cbcab6309562975b1dd.png",
				tags: [
					"tokens"
				]
			},
			"0x888888888889c00c67689029d7856aac1065ec11": {
				symbol: "OPIUM",
				name: "Opium Governance Token",
				decimals: 18,
				address: "0x888888888889c00c67689029d7856aac1065ec11",
				logoURI: "https://tokens.1inch.io/0x888888888889c00c67689029d7856aac1065ec11.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3fa729b4548becbad4eab6ef18413470e6d5324c": {
				symbol: "HH",
				name: "Holyheld",
				decimals: 18,
				address: "0x3fa729b4548becbad4eab6ef18413470e6d5324c",
				logoURI: "https://tokens.1inch.io/0x3fa729b4548becbad4eab6ef18413470e6d5324c.png",
				tags: [
					"tokens"
				]
			},
			"0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d": {
				symbol: "YETI",
				name: "Yearn Ecosystem Token Index",
				decimals: 18,
				address: "0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d",
				logoURI: "https://tokens.1inch.io/0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d.png",
				tags: [
					"tokens"
				]
			},
			"0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17": {
				symbol: "DYP",
				name: "DeFiYieldProtocol",
				decimals: 18,
				address: "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
				logoURI: "https://tokens.1inch.io/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17.png",
				tags: [
					"tokens"
				]
			},
			"0xe95a203b1a91a908f9b9ce46459d101078c2c3cb": {
				symbol: "aETHc",
				name: "Ankr Eth2 Reward Bearing Bond",
				decimals: 18,
				address: "0xe95a203b1a91a908f9b9ce46459d101078c2c3cb",
				logoURI: "https://tokens.1inch.io/0xe95a203b1a91a908f9b9ce46459d101078c2c3cb.png",
				tags: [
					"tokens"
				]
			},
			"0x4e15361fd6b4bb609fa63c81a2be19d873717870": {
				symbol: "FTM",
				name: "Fantom Token",
				decimals: 18,
				address: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
				logoURI: "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png",
				tags: [
					"tokens"
				]
			},
			"0x8642a849d0dcb7a15a974794668adcfbe4794b56": {
				symbol: "PROS",
				name: "Prosper",
				decimals: 18,
				address: "0x8642a849d0dcb7a15a974794668adcfbe4794b56",
				logoURI: "https://tokens.1inch.io/0x8642a849d0dcb7a15a974794668adcfbe4794b56.png",
				tags: [
					"tokens"
				]
			},
			"0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7": {
				symbol: "RFI",
				name: "reflect.finance",
				decimals: 9,
				address: "0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7",
				logoURI: "https://tokens.1inch.io/0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xa47c8bf37f92abed4a126bda807a7b7498661acd": {
				symbol: "UST",
				name: "Wrapped UST Token",
				decimals: 18,
				address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
				logoURI: "https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png",
				tags: [
					"tokens"
				]
			},
			"0x3832d2f059e55934220881f831be501d180671a7": {
				symbol: "renDOGE",
				name: "renDOGE",
				decimals: 8,
				address: "0x3832d2f059e55934220881f831be501d180671a7",
				logoURI: "https://tokens.1inch.io/0x3832d2f059e55934220881f831be501d180671a7.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x09a3ecafa817268f77be1283176b946c4ff2e608": {
				symbol: "MIR",
				name: "Wrapped MIR Token",
				decimals: 18,
				address: "0x09a3ecafa817268f77be1283176b946c4ff2e608",
				logoURI: "https://tokens.1inch.io/0x09a3ecafa817268f77be1283176b946c4ff2e608.png",
				tags: [
					"tokens"
				]
			},
			"0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac": {
				symbol: "METRIC",
				name: "Metric.exchange",
				decimals: 18,
				address: "0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac",
				logoURI: "https://tokens.1inch.io/0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac.png",
				tags: [
					"tokens"
				]
			},
			"0x1d37986f252d0e349522ea6c3b98cb935495e63e": {
				symbol: "CHART",
				name: "ChartEx",
				decimals: 18,
				address: "0x1d37986f252d0e349522ea6c3b98cb935495e63e",
				logoURI: "https://tokens.1inch.io/0x1d37986f252d0e349522ea6c3b98cb935495e63e.png",
				tags: [
					"tokens"
				]
			},
			"0x725c263e32c72ddc3a19bea12c5a0479a81ee688": {
				symbol: "BMI",
				name: "Bridge Mutual",
				decimals: 18,
				address: "0x725c263e32c72ddc3a19bea12c5a0479a81ee688",
				logoURI: "https://tokens.1inch.io/0x725c263e32c72ddc3a19bea12c5a0479a81ee688.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc666081073e8dff8d3d1c2292a29ae1a2153ec09": {
				symbol: "DGTX",
				name: "DigitexFutures",
				decimals: 18,
				address: "0xc666081073e8dff8d3d1c2292a29ae1a2153ec09",
				logoURI: "https://tokens.1inch.io/0xc666081073e8dff8d3d1c2292a29ae1a2153ec09.png",
				tags: [
					"tokens"
				]
			},
			"0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304": {
				symbol: "MM_1",
				name: "MMToken",
				decimals: 18,
				address: "0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304",
				logoURI: "https://tokens.1inch.io/0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304.png",
				tags: [
					"tokens"
				]
			},
			"0x0000000000095413afc295d19edeb1ad7b71c952": {
				symbol: "LON",
				name: "Tokenlon",
				decimals: 18,
				address: "0x0000000000095413afc295d19edeb1ad7b71c952",
				logoURI: "https://tokens.1inch.io/0x0000000000095413afc295d19edeb1ad7b71c952.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x1f3f9d3068568f8040775be2e8c03c103c61f3af": {
				symbol: "ARCH",
				name: "Archer DAO Governance Token",
				decimals: 18,
				address: "0x1f3f9d3068568f8040775be2e8c03c103c61f3af",
				logoURI: "https://tokens.1inch.io/0x1f3f9d3068568f8040775be2e8c03c103c61f3af.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa393473d64d2f9f026b60b6df7859a689715d092": {
				symbol: "LTX",
				name: "Lattice Token",
				decimals: 8,
				address: "0xa393473d64d2f9f026b60b6df7859a689715d092",
				logoURI: "https://tokens.1inch.io/0xa393473d64d2f9f026b60b6df7859a689715d092.png",
				tags: [
					"tokens"
				]
			},
			"0xbbff34e47e559ef680067a6b1c980639eeb64d24": {
				symbol: "L2",
				name: "Leverj Gluon",
				decimals: 18,
				address: "0xbbff34e47e559ef680067a6b1c980639eeb64d24",
				logoURI: "https://tokens.1inch.io/0xbbff34e47e559ef680067a6b1c980639eeb64d24.png",
				tags: [
					"tokens"
				]
			},
			"0xe0ad1806fd3e7edf6ff52fdb822432e847411033": {
				symbol: "ONX",
				name: "OnX.finance",
				decimals: 18,
				address: "0xe0ad1806fd3e7edf6ff52fdb822432e847411033",
				logoURI: "https://tokens.1inch.io/0xe0ad1806fd3e7edf6ff52fdb822432e847411033.png",
				tags: [
					"tokens"
				]
			},
			"0x2791bfd60d232150bff86b39b7146c0eaaa2ba81": {
				symbol: "BiFi",
				name: "BiFi",
				decimals: 18,
				address: "0x2791bfd60d232150bff86b39b7146c0eaaa2ba81",
				logoURI: "https://tokens.1inch.io/0x2791bfd60d232150bff86b39b7146c0eaaa2ba81.png",
				tags: [
					"tokens"
				]
			},
			"0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d": {
				symbol: "FIS",
				name: "StaFi",
				decimals: 18,
				address: "0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d",
				logoURI: "https://tokens.1inch.io/0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d.png",
				tags: [
					"tokens"
				]
			},
			"0x3e9bc21c9b189c09df3ef1b824798658d5011937": {
				symbol: "LINA",
				name: "Linear Token",
				decimals: 18,
				address: "0x3e9bc21c9b189c09df3ef1b824798658d5011937",
				logoURI: "https://tokens.1inch.io/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png",
				tags: [
					"tokens"
				]
			},
			"0xb1f871ae9462f1b2c6826e88a7827e76f86751d4": {
				symbol: "GNYerc20",
				name: "GNYerc20",
				decimals: 18,
				address: "0xb1f871ae9462f1b2c6826e88a7827e76f86751d4",
				logoURI: "https://tokens.1inch.io/0xb1f871ae9462f1b2c6826e88a7827e76f86751d4.png",
				tags: [
					"tokens"
				]
			},
			"0x9aeb50f542050172359a0e1a25a9933bc8c01259": {
				symbol: "OIN",
				name: "oinfinance",
				decimals: 8,
				address: "0x9aeb50f542050172359a0e1a25a9933bc8c01259",
				logoURI: "https://tokens.1inch.io/0x9aeb50f542050172359a0e1a25a9933bc8c01259.png",
				tags: [
					"tokens"
				]
			},
			"0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b": {
				symbol: "xINCHa",
				name: "xINCH",
				decimals: 18,
				address: "0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b",
				logoURI: "https://tokens.1inch.io/0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b.png",
				tags: [
					"tokens"
				]
			},
			"0xac0104cca91d167873b8601d2e71eb3d4d8c33e0": {
				symbol: "CWS",
				name: "Crowns",
				decimals: 18,
				address: "0xac0104cca91d167873b8601d2e71eb3d4d8c33e0",
				logoURI: "https://tokens.1inch.io/0xac0104cca91d167873b8601d2e71eb3d4d8c33e0.png",
				tags: [
					"tokens"
				]
			},
			"0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce": {
				symbol: "SHIB",
				name: "SHIBA INU",
				decimals: 18,
				address: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
				logoURI: "https://tokens.1inch.io/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png",
				tags: [
					"tokens"
				]
			},
			"0x6d0f5149c502faf215c89ab306ec3e50b15e2892": {
				symbol: "PRT",
				name: "Portion Token",
				decimals: 18,
				address: "0x6d0f5149c502faf215c89ab306ec3e50b15e2892",
				logoURI: "https://tokens.1inch.io/0x6d0f5149c502faf215c89ab306ec3e50b15e2892.png",
				tags: [
					"tokens"
				]
			},
			"0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e": {
				symbol: "NCT",
				name: "NameChangeToken",
				decimals: 18,
				address: "0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e",
				logoURI: "https://tokens.1inch.io/0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e.png",
				tags: [
					"tokens"
				]
			},
			"0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81": {
				symbol: "MUSE",
				name: "Muse",
				decimals: 18,
				address: "0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81",
				logoURI: "https://tokens.1inch.io/0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81.png",
				tags: [
					"tokens"
				]
			},
			"0x2b915b505c017abb1547aa5ab355fbe69865cc6d": {
				symbol: "MAPS",
				name: "Maps.me Token",
				decimals: 6,
				address: "0x2b915b505c017abb1547aa5ab355fbe69865cc6d",
				logoURI: "https://tokens.1inch.io/0x2b915b505c017abb1547aa5ab355fbe69865cc6d.png",
				tags: [
					"tokens"
				]
			},
			"0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24": {
				symbol: "GUM",
				name: "GourmetGalaxy",
				decimals: 18,
				address: "0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24",
				logoURI: "https://tokens.1inch.io/0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24.png",
				tags: [
					"tokens"
				]
			},
			"0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41": {
				symbol: "TXL",
				name: "Tixl Token",
				decimals: 18,
				address: "0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41",
				logoURI: "https://tokens.1inch.io/0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41.png",
				tags: [
					"tokens"
				]
			},
			"0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd": {
				symbol: "RAZOR",
				name: "RAZOR",
				decimals: 18,
				address: "0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd",
				logoURI: "https://tokens.1inch.io/0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd.png",
				tags: [
					"tokens"
				]
			},
			"0x297d33e17e61c2ddd812389c2105193f8348188a": {
				symbol: "$TRDL",
				name: "Strudel Finance",
				decimals: 18,
				address: "0x297d33e17e61c2ddd812389c2105193f8348188a",
				logoURI: "https://tokens.1inch.io/0x297d33e17e61c2ddd812389c2105193f8348188a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xec681f28f4561c2a9534799aa38e0d36a83cf478": {
				symbol: "YVS",
				name: "YVS.Finance",
				decimals: 18,
				address: "0xec681f28f4561c2a9534799aa38e0d36a83cf478",
				logoURI: "https://tokens.1inch.io/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png",
				tags: [
					"tokens"
				]
			},
			"0x8d3e855f3f55109d473735ab76f753218400fe96": {
				symbol: "BUND",
				name: "Bundles",
				decimals: 18,
				address: "0x8d3e855f3f55109d473735ab76f753218400fe96",
				logoURI: "https://tokens.1inch.io/0x8d3e855f3f55109d473735ab76f753218400fe96.png",
				tags: [
					"tokens"
				]
			},
			"0xc28e27870558cf22add83540d2126da2e4b464c2": {
				symbol: "SASHIMI",
				name: "SashimiToken",
				decimals: 18,
				address: "0xc28e27870558cf22add83540d2126da2e4b464c2",
				logoURI: "https://tokens.1inch.io/0xc28e27870558cf22add83540d2126da2e4b464c2.png",
				tags: [
					"tokens"
				]
			},
			"0x7968bc6a03017ea2de509aaa816f163db0f35148": {
				symbol: "HGET",
				name: "Hedget",
				decimals: 6,
				address: "0x7968bc6a03017ea2de509aaa816f163db0f35148",
				logoURI: "https://tokens.1inch.io/0x7968bc6a03017ea2de509aaa816f163db0f35148.png",
				tags: [
					"tokens"
				]
			},
			"0x15d4c048f83bd7e37d49ea4c83a07267ec4203da": {
				symbol: "GALA",
				name: "Gala",
				decimals: 8,
				address: "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
				logoURI: "https://tokens.1inch.io/0x15d4c048f83bd7e37d49ea4c83a07267ec4203da.png",
				tags: [
					"tokens"
				]
			},
			"0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d": {
				symbol: "SHARE",
				name: "Seigniorage Shares",
				decimals: 9,
				address: "0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d",
				logoURI: "https://tokens.1inch.io/0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d.png",
				tags: [
					"tokens"
				]
			},
			"0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e": {
				symbol: "UNISTAKE",
				name: "Unistake",
				decimals: 18,
				address: "0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e",
				logoURI: "https://tokens.1inch.io/0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e.png",
				tags: [
					"tokens"
				]
			},
			"0x910524678c0b1b23ffb9285a81f99c29c11cbaed": {
				symbol: "AZUKI",
				name: "DokiDokiAzuki",
				decimals: 18,
				address: "0x910524678c0b1b23ffb9285a81f99c29c11cbaed",
				logoURI: "https://tokens.1inch.io/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png",
				tags: [
					"tokens"
				]
			},
			"0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0": {
				symbol: "DEXTF",
				name: "DEXTF Token",
				decimals: 18,
				address: "0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0",
				logoURI: "https://tokens.1inch.io/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0.png",
				tags: [
					"tokens"
				]
			},
			"0x018fb5af9d015af25592a014c4266a84143de7a0": {
				symbol: "MP3",
				name: "mp3",
				decimals: 18,
				address: "0x018fb5af9d015af25592a014c4266a84143de7a0",
				logoURI: "https://tokens.1inch.io/0x018fb5af9d015af25592a014c4266a84143de7a0.png",
				tags: [
					"tokens"
				]
			},
			"0xb59490ab09a0f526cc7305822ac65f2ab12f9723": {
				symbol: "LIT",
				name: "Litentry",
				decimals: 18,
				address: "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
				logoURI: "https://tokens.1inch.io/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png",
				tags: [
					"tokens"
				]
			},
			"0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9": {
				symbol: "LUNA",
				name: "Wrapped LUNA Token",
				decimals: 18,
				address: "0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9",
				logoURI: "https://tokens.1inch.io/0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9.png",
				tags: [
					"tokens"
				]
			},
			"0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32": {
				symbol: "SYNC",
				name: "SYNC",
				decimals: 18,
				address: "0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32",
				logoURI: "https://tokens.1inch.io/0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32.png",
				tags: [
					"tokens"
				]
			},
			"0x8a40c222996f9f3431f63bf80244c36822060f12": {
				symbol: "FXF",
				name: "Finxflo",
				decimals: 18,
				address: "0x8a40c222996f9f3431f63bf80244c36822060f12",
				logoURI: "https://tokens.1inch.io/0x8a40c222996f9f3431f63bf80244c36822060f12.png",
				tags: [
					"tokens"
				]
			},
			"0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8": {
				symbol: "BOTS",
				name: "Bot Ocean",
				decimals: 18,
				address: "0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8",
				logoURI: "https://tokens.1inch.io/0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8.png",
				tags: [
					"tokens"
				]
			},
			"0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7": {
				symbol: "Mars",
				name: "MarsToken",
				decimals: 18,
				address: "0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7",
				logoURI: "https://tokens.1inch.io/0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7.png",
				tags: [
					"tokens"
				]
			},
			"0x7b3d36eb606f873a75a6ab68f8c999848b04f935": {
				symbol: "LOOT",
				name: "NFTLootBox.com",
				decimals: 18,
				address: "0x7b3d36eb606f873a75a6ab68f8c999848b04f935",
				logoURI: "https://tokens.1inch.io/0x7b3d36eb606f873a75a6ab68f8c999848b04f935.png",
				tags: [
					"tokens"
				]
			},
			"0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f": {
				symbol: "DUCK",
				name: "DLP Duck Token",
				decimals: 18,
				address: "0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f",
				logoURI: "https://tokens.1inch.io/0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f.png",
				tags: [
					"tokens"
				]
			},
			"0xaef4f02e31cdbf007f8d98da4ae365188a0e9ecc": {
				symbol: "TFT",
				name: "The Famous Token",
				decimals: 8,
				address: "0xaef4f02e31cdbf007f8d98da4ae365188a0e9ecc",
				logoURI: "https://tokens.1inch.io/0xaef4f02e31cdbf007f8d98da4ae365188a0e9ecc.png",
				tags: [
					"tokens"
				]
			},
			"0xcca0c9c383076649604ee31b20248bc04fdf61ca": {
				symbol: "BTMX",
				name: "BitMax token",
				decimals: 18,
				address: "0xcca0c9c383076649604ee31b20248bc04fdf61ca",
				logoURI: "https://tokens.1inch.io/0xcca0c9c383076649604ee31b20248bc04fdf61ca.png",
				tags: [
					"tokens"
				]
			},
			"0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83": {
				symbol: "ID",
				name: "Everest ID",
				decimals: 18,
				address: "0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83",
				logoURI: "https://tokens.1inch.io/0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83.png",
				tags: [
					"tokens"
				]
			},
			"0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7": {
				symbol: "SKL",
				name: "SKALE",
				decimals: 18,
				address: "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7",
				logoURI: "https://tokens.1inch.io/0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7.png",
				tags: [
					"tokens"
				]
			},
			"0x0f51bb10119727a7e5ea3538074fb341f56b09ad": {
				symbol: "DAO",
				name: "DAO Maker",
				decimals: 18,
				address: "0x0f51bb10119727a7e5ea3538074fb341f56b09ad",
				logoURI: "https://tokens.1inch.io/0x0f51bb10119727a7e5ea3538074fb341f56b09ad.png",
				tags: [
					"tokens"
				]
			},
			"0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a": {
				symbol: "BT",
				name: "BT.Finance",
				decimals: 18,
				address: "0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a",
				logoURI: "https://tokens.1inch.io/0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf680429328caaacabee69b7a9fdb21a71419c063": {
				symbol: "BFLY",
				name: "Butterfly Protocol Governance Token",
				decimals: 18,
				address: "0xf680429328caaacabee69b7a9fdb21a71419c063",
				logoURI: "https://tokens.1inch.io/0xf680429328caaacabee69b7a9fdb21a71419c063.png",
				tags: [
					"tokens"
				]
			},
			"0x6fc13eace26590b80cccab1ba5d51890577d83b2": {
				symbol: "UMB",
				name: "Umbrella",
				decimals: 18,
				address: "0x6fc13eace26590b80cccab1ba5d51890577d83b2",
				logoURI: "https://tokens.1inch.io/0x6fc13eace26590b80cccab1ba5d51890577d83b2.png",
				tags: [
					"tokens"
				]
			},
			"0x903bef1736cddf2a537176cf3c64579c3867a881": {
				symbol: "ICHI",
				name: "ichi.farm",
				decimals: 9,
				address: "0x903bef1736cddf2a537176cf3c64579c3867a881",
				logoURI: "https://tokens.1inch.io/0x903bef1736cddf2a537176cf3c64579c3867a881.png",
				tags: [
					"tokens"
				]
			},
			"0x1456688345527be1f37e9e627da0837d6f08c925": {
				symbol: "USDP_2",
				name: "USDP Stablecoin",
				decimals: 18,
				address: "0x1456688345527be1f37e9e627da0837d6f08c925",
				logoURI: "https://tokens.1inch.io/0x1456688345527be1f37e9e627da0837d6f08c925.png",
				displayedSymbol: "USDP",
				tags: [
					"tokens"
				]
			},
			"0x23b608675a2b2fb1890d3abbd85c5775c51691d5": {
				symbol: "SOCKS",
				name: "Unisocks Edition 0",
				decimals: 18,
				address: "0x23b608675a2b2fb1890d3abbd85c5775c51691d5",
				logoURI: "https://tokens.1inch.io/0x23b608675a2b2fb1890d3abbd85c5775c51691d5.png",
				tags: [
					"tokens"
				]
			},
			"0xaa4e3edb11afa93c41db59842b29de64b72e355b": {
				symbol: "MFI",
				name: "MarginSwap",
				decimals: 18,
				address: "0xaa4e3edb11afa93c41db59842b29de64b72e355b",
				logoURI: "https://tokens.1inch.io/0xaa4e3edb11afa93c41db59842b29de64b72e355b.png",
				tags: [
					"tokens"
				]
			},
			"0x9af15d7b8776fa296019979e70a5be53c714a7ec": {
				symbol: "EVN",
				name: "Evn Token",
				decimals: 18,
				address: "0x9af15d7b8776fa296019979e70a5be53c714a7ec",
				logoURI: "https://tokens.1inch.io/0x9af15d7b8776fa296019979e70a5be53c714a7ec.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xe6c3502997f97f9bde34cb165fbce191065e068f": {
				symbol: "KBTC",
				name: "KBTC",
				decimals: 18,
				address: "0xe6c3502997f97f9bde34cb165fbce191065e068f",
				logoURI: "https://tokens.1inch.io/0xe6c3502997f97f9bde34cb165fbce191065e068f.png",
				tags: [
					"tokens"
				]
			},
			"0xdcb01cc464238396e213a6fdd933e36796eaff9f": {
				symbol: "YLD",
				name: "Yield",
				decimals: 18,
				address: "0xdcb01cc464238396e213a6fdd933e36796eaff9f",
				logoURI: "https://tokens.1inch.io/0xdcb01cc464238396e213a6fdd933e36796eaff9f.png",
				tags: [
					"tokens"
				]
			},
			"0x69e8b9528cabda89fe846c67675b5d73d463a916": {
				symbol: "OPEN",
				name: "BBB",
				decimals: 18,
				address: "0x69e8b9528cabda89fe846c67675b5d73d463a916",
				logoURI: "https://tokens.1inch.io/0x69e8b9528cabda89fe846c67675b5d73d463a916.png",
				tags: [
					"tokens"
				]
			},
			"0x196c81385bc536467433014042788eb707703934": {
				symbol: "CTASK",
				name: "CTASK Token",
				decimals: 18,
				address: "0x196c81385bc536467433014042788eb707703934",
				logoURI: "https://tokens.1inch.io/0x196c81385bc536467433014042788eb707703934.png",
				tags: [
					"tokens"
				]
			},
			"0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2": {
				symbol: "PYLON",
				name: "PYLON",
				decimals: 18,
				address: "0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2",
				logoURI: "https://tokens.1inch.io/0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2.png",
				tags: [
					"tokens"
				]
			},
			"0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c": {
				symbol: "NUX",
				name: "NUX Peanut.trade",
				decimals: 18,
				address: "0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c",
				logoURI: "https://tokens.1inch.io/0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c.png",
				tags: [
					"tokens"
				]
			},
			"0xa0bed124a09ac2bd941b10349d8d224fe3c955eb": {
				symbol: "DEPAY",
				name: "DePay",
				decimals: 18,
				address: "0xa0bed124a09ac2bd941b10349d8d224fe3c955eb",
				logoURI: "https://tokens.1inch.io/0xa0bed124a09ac2bd941b10349d8d224fe3c955eb.png",
				tags: [
					"tokens"
				]
			},
			"0xfdc4a3fc36df16a78edcaf1b837d3acaaedb2cb4": {
				symbol: "SCIFI",
				name: "ScifiToken",
				decimals: 18,
				address: "0xfdc4a3fc36df16a78edcaf1b837d3acaaedb2cb4",
				logoURI: "https://tokens.1inch.io/0xfdc4a3fc36df16a78edcaf1b837d3acaaedb2cb4.png",
				tags: [
					"tokens"
				]
			},
			"0xb9ef770b6a5e12e45983c5d80545258aa38f3b78": {
				symbol: "ZCN",
				name: "0chain",
				decimals: 10,
				address: "0xb9ef770b6a5e12e45983c5d80545258aa38f3b78",
				logoURI: "https://tokens.1inch.io/0xb9ef770b6a5e12e45983c5d80545258aa38f3b78.png",
				tags: [
					"tokens"
				]
			},
			"0xadb2437e6f65682b85f814fbc12fec0508a7b1d0": {
				symbol: "UNCX",
				name: "UniCrypt",
				decimals: 18,
				address: "0xadb2437e6f65682b85f814fbc12fec0508a7b1d0",
				logoURI: "https://tokens.1inch.io/0xadb2437e6f65682b85f814fbc12fec0508a7b1d0.png",
				tags: [
					"tokens"
				]
			},
			"0xed40834a13129509a89be39a9be9c0e96a0ddd71": {
				symbol: "WARP",
				name: "Warp Token",
				decimals: 18,
				address: "0xed40834a13129509a89be39a9be9c0e96a0ddd71",
				logoURI: "https://tokens.1inch.io/0xed40834a13129509a89be39a9be9c0e96a0ddd71.png",
				tags: [
					"tokens"
				]
			},
			"0x875773784af8135ea0ef43b5a374aad105c5d39e": {
				symbol: "IDLE",
				name: "Idle",
				decimals: 18,
				address: "0x875773784af8135ea0ef43b5a374aad105c5d39e",
				logoURI: "https://tokens.1inch.io/0x875773784af8135ea0ef43b5a374aad105c5d39e.png",
				tags: [
					"tokens"
				]
			},
			"0x0488401c3f535193fa8df029d9ffe615a06e74e6": {
				symbol: "SRK",
				name: "SparkPoint",
				decimals: 18,
				address: "0x0488401c3f535193fa8df029d9ffe615a06e74e6",
				logoURI: "https://tokens.1inch.io/0x0488401c3f535193fa8df029d9ffe615a06e74e6.png",
				tags: [
					"tokens"
				]
			},
			"0x038a68ff68c393373ec894015816e33ad41bd564": {
				symbol: "GLCH",
				name: "Glitch",
				decimals: 18,
				address: "0x038a68ff68c393373ec894015816e33ad41bd564",
				logoURI: "https://tokens.1inch.io/0x038a68ff68c393373ec894015816e33ad41bd564.png",
				tags: [
					"tokens"
				]
			},
			"0x10be9a8dae441d276a5027936c3aaded2d82bc15": {
				symbol: "UMX",
				name: "unimex network",
				decimals: 18,
				address: "0x10be9a8dae441d276a5027936c3aaded2d82bc15",
				logoURI: "https://tokens.1inch.io/0x10be9a8dae441d276a5027936c3aaded2d82bc15.png",
				tags: [
					"tokens"
				]
			},
			"0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44": {
				symbol: "WHITE",
				name: "Whiteheart Token",
				decimals: 18,
				address: "0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44",
				logoURI: "https://tokens.1inch.io/0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44.png",
				tags: [
					"tokens"
				]
			},
			"0x3597bfd533a99c9aa083587b074434e61eb0a258": {
				symbol: "DENT",
				name: "DENT",
				decimals: 8,
				address: "0x3597bfd533a99c9aa083587b074434e61eb0a258",
				logoURI: "https://tokens.1inch.io/0x3597bfd533a99c9aa083587b074434e61eb0a258.png",
				tags: [
					"tokens"
				]
			},
			"0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229": {
				symbol: "ZEFU",
				name: "Zenfuse Trading Platform Token",
				decimals: 18,
				address: "0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229",
				logoURI: "https://tokens.1inch.io/0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229.png",
				tags: [
					"tokens"
				]
			},
			"0x260e63d91fccc499606bae3fe945c4ed1cf56a56": {
				symbol: "MOONS",
				name: "MoonTools.io",
				decimals: 18,
				address: "0x260e63d91fccc499606bae3fe945c4ed1cf56a56",
				logoURI: "https://tokens.1inch.io/0x260e63d91fccc499606bae3fe945c4ed1cf56a56.png",
				tags: [
					"tokens"
				]
			},
			"0x945facb997494cc2570096c74b5f66a3507330a1": {
				symbol: "mBTC",
				name: "mStable BTC",
				decimals: 18,
				address: "0x945facb997494cc2570096c74b5f66a3507330a1",
				logoURI: "https://tokens.1inch.io/0x945facb997494cc2570096c74b5f66a3507330a1.png",
				tags: [
					"tokens"
				]
			},
			"0x1b40183efb4dd766f11bda7a7c3ad8982e998421": {
				symbol: "VSP",
				name: "VesperToken",
				decimals: 18,
				address: "0x1b40183efb4dd766f11bda7a7c3ad8982e998421",
				logoURI: "https://tokens.1inch.io/0x1b40183efb4dd766f11bda7a7c3ad8982e998421.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xed0439eacf4c4965ae4613d77a5c2efe10e5f183": {
				symbol: "SHROOM",
				name: "shroom.finance",
				decimals: 18,
				address: "0xed0439eacf4c4965ae4613d77a5c2efe10e5f183",
				logoURI: "https://tokens.1inch.io/0xed0439eacf4c4965ae4613d77a5c2efe10e5f183.png",
				tags: [
					"tokens"
				]
			},
			"0xaac41ec512808d64625576eddd580e7ea40ef8b2": {
				symbol: "GSWAP",
				name: "gameswap.org",
				decimals: 18,
				address: "0xaac41ec512808d64625576eddd580e7ea40ef8b2",
				logoURI: "https://tokens.1inch.io/0xaac41ec512808d64625576eddd580e7ea40ef8b2.png",
				tags: [
					"tokens"
				]
			},
			"0x03ab458634910aad20ef5f1c8ee96f1d6ac54919": {
				symbol: "RAI",
				name: "Rai Reflex Index",
				decimals: 18,
				address: "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919",
				logoURI: "https://tokens.1inch.io/0x03ab458634910aad20ef5f1c8ee96f1d6ac54919.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544": {
				symbol: "DOKI",
				name: "DokiDokiFinance",
				decimals: 18,
				address: "0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544",
				logoURI: "https://tokens.1inch.io/0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544.png",
				tags: [
					"tokens"
				]
			},
			"0xfc05987bd2be489accf0f509e44b0145d68240f7": {
				symbol: "ESS",
				name: "ESSENTIA",
				decimals: 18,
				address: "0xfc05987bd2be489accf0f509e44b0145d68240f7",
				logoURI: "https://tokens.1inch.io/0xfc05987bd2be489accf0f509e44b0145d68240f7.png",
				tags: [
					"tokens"
				]
			},
			"0xabe580e7ee158da464b51ee1a83ac0289622e6be": {
				symbol: "XFT",
				name: "Offshift",
				decimals: 18,
				address: "0xabe580e7ee158da464b51ee1a83ac0289622e6be",
				logoURI: "https://tokens.1inch.io/0xabe580e7ee158da464b51ee1a83ac0289622e6be.png",
				tags: [
					"tokens"
				]
			},
			"0xca3fe04c7ee111f0bbb02c328c699226acf9fd33": {
				symbol: "SEEN",
				name: "seen.haus",
				decimals: 18,
				address: "0xca3fe04c7ee111f0bbb02c328c699226acf9fd33",
				logoURI: "https://tokens.1inch.io/0xca3fe04c7ee111f0bbb02c328c699226acf9fd33.png",
				tags: [
					"tokens"
				]
			},
			"0x34612903db071e888a4dadcaa416d3ee263a87b9": {
				symbol: "arte",
				name: "ethart",
				decimals: 18,
				address: "0x34612903db071e888a4dadcaa416d3ee263a87b9",
				logoURI: "https://tokens.1inch.io/0x34612903db071e888a4dadcaa416d3ee263a87b9.png",
				tags: [
					"tokens"
				]
			},
			"0x7ca4408137eb639570f8e647d9bd7b7e8717514a": {
				symbol: "ALPA",
				name: "AlpaToken",
				decimals: 18,
				address: "0x7ca4408137eb639570f8e647d9bd7b7e8717514a",
				logoURI: "https://tokens.1inch.io/0x7ca4408137eb639570f8e647d9bd7b7e8717514a.png",
				tags: [
					"tokens"
				]
			},
			"0xa58a4f5c4bb043d2cc1e170613b74e767c94189b": {
				symbol: "UTU",
				name: "UTU Coin",
				decimals: 18,
				address: "0xa58a4f5c4bb043d2cc1e170613b74e767c94189b",
				logoURI: "https://tokens.1inch.io/0xa58a4f5c4bb043d2cc1e170613b74e767c94189b.png",
				tags: [
					"tokens"
				]
			},
			"0x9a0aba393aac4dfbff4333b06c407458002c6183": {
				symbol: "AC",
				name: "ACoconut",
				decimals: 18,
				address: "0x9a0aba393aac4dfbff4333b06c407458002c6183",
				logoURI: "https://tokens.1inch.io/0x9a0aba393aac4dfbff4333b06c407458002c6183.png",
				tags: [
					"tokens"
				]
			},
			"0x7eaf9c89037e4814dc0d9952ac7f888c784548db": {
				symbol: "ROYA",
				name: "Royale",
				decimals: 18,
				address: "0x7eaf9c89037e4814dc0d9952ac7f888c784548db",
				logoURI: "https://tokens.1inch.io/0x7eaf9c89037e4814dc0d9952ac7f888c784548db.png",
				tags: [
					"tokens"
				]
			},
			"0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70": {
				symbol: "PREMIA",
				name: "Premia",
				decimals: 18,
				address: "0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70",
				logoURI: "https://tokens.1inch.io/0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0cec1a9154ff802e7934fc916ed7ca50bde6844e": {
				symbol: "POOL",
				name: "PoolTogether",
				decimals: 18,
				address: "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e",
				logoURI: "https://tokens.1inch.io/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x72e9d9038ce484ee986fea183f8d8df93f9ada13": {
				symbol: "SMARTCREDIT",
				name: "SMARTCREDIT Token",
				decimals: 18,
				address: "0x72e9d9038ce484ee986fea183f8d8df93f9ada13",
				logoURI: "https://tokens.1inch.io/0x72e9d9038ce484ee986fea183f8d8df93f9ada13.png",
				tags: [
					"tokens"
				]
			},
			"0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e": {
				symbol: "ROOT",
				name: "RootKit",
				decimals: 18,
				address: "0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e",
				logoURI: "https://tokens.1inch.io/0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x557b933a7c2c45672b610f8954a3deb39a51a8ca": {
				symbol: "REVV",
				name: "REVV",
				decimals: 18,
				address: "0x557b933a7c2c45672b610f8954a3deb39a51a8ca",
				logoURI: "https://tokens.1inch.io/0x557b933a7c2c45672b610f8954a3deb39a51a8ca.png",
				tags: [
					"tokens"
				]
			},
			"0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7": {
				symbol: "PHNX",
				name: "PhoenixDAO",
				decimals: 18,
				address: "0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7",
				logoURI: "https://tokens.1inch.io/0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7.png",
				tags: [
					"tokens"
				]
			},
			"0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4": {
				symbol: "KIT",
				name: "DexKit",
				decimals: 18,
				address: "0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4",
				logoURI: "https://tokens.1inch.io/0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4.png",
				tags: [
					"tokens"
				]
			},
			"0x4691937a7508860f876c9c0a2a617e7d9e945d4b": {
				symbol: "WOO",
				name: "Wootrade Network",
				decimals: 18,
				address: "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
				logoURI: "https://tokens.1inch.io/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png",
				tags: [
					"tokens"
				]
			},
			"0xea1ea0972fa092dd463f2968f9bb51cc4c981d71": {
				symbol: "MOD",
				name: "Modefi",
				decimals: 18,
				address: "0xea1ea0972fa092dd463f2968f9bb51cc4c981d71",
				logoURI: "https://tokens.1inch.io/0xea1ea0972fa092dd463f2968f9bb51cc4c981d71.png",
				tags: [
					"tokens"
				]
			},
			"0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f": {
				symbol: "MASK",
				name: "Mask",
				decimals: 18,
				address: "0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f",
				logoURI: "https://tokens.1inch.io/0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f.png",
				tags: [
					"tokens"
				]
			},
			"0xf99d58e463a2e07e5692127302c20a191861b4d6": {
				symbol: "ANY",
				name: "Anyswap",
				decimals: 18,
				address: "0xf99d58e463a2e07e5692127302c20a191861b4d6",
				logoURI: "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png",
				tags: [
					"tokens"
				]
			},
			"0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b": {
				symbol: "RLY",
				name: "Rally",
				decimals: 18,
				address: "0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b",
				logoURI: "https://tokens.1inch.io/0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b.png",
				tags: [
					"tokens"
				]
			},
			"0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8": {
				symbol: "KEX",
				name: "KIRA Network",
				decimals: 6,
				address: "0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8",
				logoURI: "https://tokens.1inch.io/0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8.png",
				tags: [
					"tokens"
				]
			},
			"0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c": {
				symbol: "UOS",
				name: "Ultra Token",
				decimals: 4,
				address: "0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c",
				logoURI: "https://tokens.1inch.io/0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c.png",
				tags: [
					"tokens"
				]
			},
			"0x147faf8de9d8d8daae129b187f0d02d819126750": {
				symbol: "GEO",
				name: "GeoDB Coin",
				decimals: 18,
				address: "0x147faf8de9d8d8daae129b187f0d02d819126750",
				logoURI: "https://tokens.1inch.io/0x147faf8de9d8d8daae129b187f0d02d819126750.png",
				tags: [
					"tokens"
				]
			},
			"0x8a854288a5976036a725879164ca3e91d30c6a1b": {
				symbol: "GET",
				name: "GET",
				decimals: 18,
				address: "0x8a854288a5976036a725879164ca3e91d30c6a1b",
				logoURI: "https://tokens.1inch.io/0x8a854288a5976036a725879164ca3e91d30c6a1b.png",
				tags: [
					"tokens"
				]
			},
			"0x79c75e2e8720b39e258f41c37cc4f309e0b0ff80": {
				symbol: "SOUL",
				name: "Phantasma Stake",
				decimals: 8,
				address: "0x79c75e2e8720b39e258f41c37cc4f309e0b0ff80",
				logoURI: "https://tokens.1inch.io/0x79c75e2e8720b39e258f41c37cc4f309e0b0ff80.png",
				tags: [
					"tokens"
				]
			},
			"0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5": {
				symbol: "UniFi",
				name: "UniFi",
				decimals: 18,
				address: "0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5",
				logoURI: "https://tokens.1inch.io/0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5.png",
				tags: [
					"tokens"
				]
			},
			"0x3a880652f47bfaa771908c07dd8673a787daed3a": {
				symbol: "DDX",
				name: "DerivaDAO",
				decimals: 18,
				address: "0x3a880652f47bfaa771908c07dd8673a787daed3a",
				logoURI: "https://tokens.1inch.io/0x3a880652f47bfaa771908c07dd8673a787daed3a.png",
				tags: [
					"tokens"
				]
			},
			"0x6c28aef8977c9b773996d0e8376d2ee379446f2f": {
				symbol: "QUICK",
				name: "Quickswap",
				decimals: 18,
				address: "0x6c28aef8977c9b773996d0e8376d2ee379446f2f",
				logoURI: "https://tokens.1inch.io/0x6c28aef8977c9b773996d0e8376d2ee379446f2f.png",
				tags: [
					"tokens"
				]
			},
			"0xa1d6df714f91debf4e0802a542e13067f31b8262": {
				symbol: "RFOX",
				name: "RFOX",
				decimals: 18,
				address: "0xa1d6df714f91debf4e0802a542e13067f31b8262",
				logoURI: "https://tokens.1inch.io/0xa1d6df714f91debf4e0802a542e13067f31b8262.png",
				tags: [
					"tokens"
				]
			},
			"0x275f5ad03be0fa221b4c6649b8aee09a42d9412a": {
				symbol: "MONA",
				name: "Monavale",
				decimals: 18,
				address: "0x275f5ad03be0fa221b4c6649b8aee09a42d9412a",
				logoURI: "https://tokens.1inch.io/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png",
				tags: [
					"tokens"
				]
			},
			"0x9b53e429b0badd98ef7f01f03702986c516a5715": {
				symbol: "HY",
				name: "hybrix hydra",
				decimals: 18,
				address: "0x9b53e429b0badd98ef7f01f03702986c516a5715",
				logoURI: "https://tokens.1inch.io/0x9b53e429b0badd98ef7f01f03702986c516a5715.png",
				tags: [
					"tokens"
				]
			},
			"0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55": {
				symbol: "SUPER",
				name: "SuperFarm",
				decimals: 18,
				address: "0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55",
				logoURI: "https://tokens.1inch.io/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png",
				tags: [
					"tokens"
				]
			},
			"0x123151402076fc819b7564510989e475c9cd93ca": {
				symbol: "wDGLD",
				name: "wrapped-DGLD",
				decimals: 8,
				address: "0x123151402076fc819b7564510989e475c9cd93ca",
				logoURI: "https://tokens.1inch.io/0x123151402076fc819b7564510989e475c9cd93ca.png",
				tags: [
					"tokens"
				]
			},
			"0x6149c26cd2f7b5ccdb32029af817123f6e37df5b": {
				symbol: "LPOOL",
				name: "Launchpool token",
				decimals: 18,
				address: "0x6149c26cd2f7b5ccdb32029af817123f6e37df5b",
				logoURI: "https://tokens.1inch.io/0x6149c26cd2f7b5ccdb32029af817123f6e37df5b.png",
				tags: [
					"tokens"
				]
			},
			"0x69af81e73a73b40adf4f3d4223cd9b1ece623074": {
				symbol: "MASK_NTWRK",
				name: "Mask Network",
				decimals: 18,
				address: "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
				logoURI: "https://tokens.1inch.io/0x69af81e73a73b40adf4f3d4223cd9b1ece623074.png",
				tags: [
					"tokens"
				]
			},
			"0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb": {
				symbol: "XTK",
				name: "xToken",
				decimals: 18,
				address: "0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb",
				logoURI: "https://tokens.1inch.io/0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb.png",
				tags: [
					"tokens"
				]
			},
			"0x7777777777697cfeecf846a76326da79cc606517": {
				symbol: "SIG",
				name: "xSigma",
				decimals: 18,
				address: "0x7777777777697cfeecf846a76326da79cc606517",
				logoURI: "https://tokens.1inch.io/0x7777777777697cfeecf846a76326da79cc606517.png",
				tags: [
					"tokens"
				]
			},
			"0xf5581dfefd8fb0e4aec526be659cfab1f8c781da": {
				symbol: "HOPR",
				name: "HOPR Token",
				decimals: 18,
				address: "0xf5581dfefd8fb0e4aec526be659cfab1f8c781da",
				logoURI: "https://tokens.1inch.io/0xf5581dfefd8fb0e4aec526be659cfab1f8c781da.png",
				tags: [
					"tokens"
				]
			},
			"0x6c972b70c533e2e045f333ee28b9ffb8d717be69": {
				symbol: "FRY",
				name: "Foundry Logistics Token",
				decimals: 18,
				address: "0x6c972b70c533e2e045f333ee28b9ffb8d717be69",
				logoURI: "https://tokens.1inch.io/0x6c972b70c533e2e045f333ee28b9ffb8d717be69.png",
				tags: [
					"tokens"
				]
			},
			"0x63f88a2298a5c4aee3c216aa6d926b184a4b2437": {
				symbol: "GAME",
				name: "GAME Credits",
				decimals: 18,
				address: "0x63f88a2298a5c4aee3c216aa6d926b184a4b2437",
				logoURI: "https://tokens.1inch.io/0x63f88a2298a5c4aee3c216aa6d926b184a4b2437.png",
				tags: [
					"tokens"
				]
			},
			"0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24": {
				symbol: "RNDR",
				name: "Render Token",
				decimals: 18,
				address: "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
				logoURI: "https://tokens.1inch.io/0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24.png",
				tags: [
					"tokens"
				]
			},
			"0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697": {
				symbol: "OVR",
				name: "OVR",
				decimals: 18,
				address: "0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697",
				logoURI: "https://tokens.1inch.io/0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697.png",
				tags: [
					"tokens"
				]
			},
			"0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14": {
				symbol: "MTLX",
				name: "Mettalex",
				decimals: 18,
				address: "0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14",
				logoURI: "https://tokens.1inch.io/0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14.png",
				tags: [
					"tokens"
				]
			},
			"0xd478161c952357f05f0292b56012cd8457f1cfbf": {
				symbol: "POLK",
				name: "Polkamarkets",
				decimals: 18,
				address: "0xd478161c952357f05f0292b56012cd8457f1cfbf",
				logoURI: "https://tokens.1inch.io/0xd478161c952357f05f0292b56012cd8457f1cfbf.png",
				tags: [
					"tokens"
				]
			},
			"0x48fb253446873234f2febbf9bdeaa72d9d387f94": {
				symbol: "vBNT",
				name: "Bancor Governance Token",
				decimals: 18,
				address: "0x48fb253446873234f2febbf9bdeaa72d9d387f94",
				logoURI: "https://tokens.1inch.io/0x48fb253446873234f2febbf9bdeaa72d9d387f94.png",
				tags: [
					"tokens"
				]
			},
			"0x10a3da2bb0fae4d591476fd97d6636fd172923a8": {
				symbol: "crHEGIC",
				name: "Cream FTX Token",
				decimals: 8,
				address: "0x10a3da2bb0fae4d591476fd97d6636fd172923a8",
				logoURI: "https://tokens.1inch.io/0x10a3da2bb0fae4d591476fd97d6636fd172923a8.png",
				tags: [
					"tokens"
				]
			},
			"0x10fdbd1e48ee2fd9336a482d746138ae19e649db": {
				symbol: "crFTT",
				name: "Cream FTX Token",
				decimals: 8,
				address: "0x10fdbd1e48ee2fd9336a482d746138ae19e649db",
				logoURI: "https://tokens.1inch.io/0x10fdbd1e48ee2fd9336a482d746138ae19e649db.png",
				tags: [
					"tokens"
				]
			},
			"0x17107f40d70f4470d20cb3f138a052cae8ebd4be": {
				symbol: "crRENBTC",
				name: "Cream renBTC",
				decimals: 8,
				address: "0x17107f40d70f4470d20cb3f138a052cae8ebd4be",
				logoURI: "https://tokens.1inch.io/0x17107f40d70f4470d20cb3f138a052cae8ebd4be.png",
				tags: [
					"tokens"
				]
			},
			"0x197070723ce0d3810a0e47f06e935c30a480d4fc": {
				symbol: "crWBTC",
				name: "Cream Wrapped BTC",
				decimals: 8,
				address: "0x197070723ce0d3810a0e47f06e935c30a480d4fc",
				logoURI: "https://tokens.1inch.io/0x197070723ce0d3810a0e47f06e935c30a480d4fc.png",
				tags: [
					"tokens"
				]
			},
			"0x19d1666f543d42ef17f66e376944a22aea1a8e46": {
				symbol: "crCOMP",
				name: "Cream Compound",
				decimals: 8,
				address: "0x19d1666f543d42ef17f66e376944a22aea1a8e46",
				logoURI: "https://tokens.1inch.io/0x19d1666f543d42ef17f66e376944a22aea1a8e46.png",
				tags: [
					"tokens"
				]
			},
			"0x1d0986fb43985c88ffa9ad959cc24e6a087c7e35": {
				symbol: "crALPHA",
				name: "Cream AlphaToken",
				decimals: 8,
				address: "0x1d0986fb43985c88ffa9ad959cc24e6a087c7e35",
				logoURI: "https://tokens.1inch.io/0x1d0986fb43985c88ffa9ad959cc24e6a087c7e35.png",
				tags: [
					"tokens"
				]
			},
			"0x1ff8cdb51219a8838b52e9cac09b71e591bc998e": {
				symbol: "crBUSD",
				name: "Cream Binance USD",
				decimals: 8,
				address: "0x1ff8cdb51219a8838b52e9cac09b71e591bc998e",
				logoURI: "https://tokens.1inch.io/0x1ff8cdb51219a8838b52e9cac09b71e591bc998e.png",
				tags: [
					"tokens"
				]
			},
			"0x21011bc93d9e515b9511a817a1ed1d6d468f49fc": {
				symbol: "crCOVER",
				name: "Cream Cover Protocol Governance Token",
				decimals: 8,
				address: "0x21011bc93d9e515b9511a817a1ed1d6d468f49fc",
				logoURI: "https://tokens.1inch.io/0x21011bc93d9e515b9511a817a1ed1d6d468f49fc.png",
				tags: [
					"tokens"
				]
			},
			"0x228619cca194fbe3ebeb2f835ec1ea5080dafbb2": {
				symbol: "crXSUSHI",
				name: "Cream SushiBar",
				decimals: 8,
				address: "0x228619cca194fbe3ebeb2f835ec1ea5080dafbb2",
				logoURI: "https://tokens.1inch.io/0x228619cca194fbe3ebeb2f835ec1ea5080dafbb2.png",
				tags: [
					"tokens"
				]
			},
			"0x22b243b96495c547598d9042b6f94b01c22b2e9e": {
				symbol: "crSWAG",
				name: "Cream Swag Token",
				decimals: 8,
				address: "0x22b243b96495c547598d9042b6f94b01c22b2e9e",
				logoURI: "https://tokens.1inch.io/0x22b243b96495c547598d9042b6f94b01c22b2e9e.png",
				tags: [
					"tokens"
				]
			},
			"0x25555933a8246ab67cbf907ce3d1949884e82b55": {
				symbol: "crSUSD",
				name: "Cream Synth sUSD",
				decimals: 8,
				address: "0x25555933a8246ab67cbf907ce3d1949884e82b55",
				logoURI: "https://tokens.1inch.io/0x25555933a8246ab67cbf907ce3d1949884e82b55.png",
				tags: [
					"tokens"
				]
			},
			"0x2a537fa9ffaea8c1a41d3c2b68a9cb791529366d": {
				symbol: "crDPI",
				name: "Cream DefiPulse Index",
				decimals: 8,
				address: "0x2a537fa9ffaea8c1a41d3c2b68a9cb791529366d",
				logoURI: "https://tokens.1inch.io/0x2a537fa9ffaea8c1a41d3c2b68a9cb791529366d.png",
				tags: [
					"tokens"
				]
			},
			"0x2db6c82ce72c8d7d770ba1b5f5ed0b6e075066d6": {
				symbol: "crAMP",
				name: "Cream Amp",
				decimals: 8,
				address: "0x2db6c82ce72c8d7d770ba1b5f5ed0b6e075066d6",
				logoURI: "https://tokens.1inch.io/0x2db6c82ce72c8d7d770ba1b5f5ed0b6e075066d6.png",
				tags: [
					"tokens"
				]
			},
			"0x3225e3c669b39c7c8b3e204a8614bb218c5e31bc": {
				symbol: "crAAVE",
				name: "Cream AAVE Token",
				decimals: 8,
				address: "0x3225e3c669b39c7c8b3e204a8614bb218c5e31bc",
				logoURI: "https://tokens.1inch.io/0x3225e3c669b39c7c8b3e204a8614bb218c5e31bc.png",
				tags: [
					"tokens"
				]
			},
			"0x338286c0bc081891a4bda39c7667ae150bf5d206": {
				symbol: "crSUSHI",
				name: "Cream SushiToken",
				decimals: 8,
				address: "0x338286c0bc081891a4bda39c7667ae150bf5d206",
				logoURI: "https://tokens.1inch.io/0x338286c0bc081891a4bda39c7667ae150bf5d206.png",
				tags: [
					"tokens"
				]
			},
			"0x3623387773010d9214b10c551d6e7fc375d31f58": {
				symbol: "crMTA",
				name: "Cream Meta",
				decimals: 8,
				address: "0x3623387773010d9214b10c551d6e7fc375d31f58",
				logoURI: "https://tokens.1inch.io/0x3623387773010d9214b10c551d6e7fc375d31f58.png",
				tags: [
					"tokens"
				]
			},
			"0x3c6c553a95910f9fc81c98784736bd628636d296": {
				symbol: "crESD",
				name: "Cream Empty Set Dollar",
				decimals: 8,
				address: "0x3c6c553a95910f9fc81c98784736bd628636d296",
				logoURI: "https://tokens.1inch.io/0x3c6c553a95910f9fc81c98784736bd628636d296.png",
				tags: [
					"tokens"
				]
			},
			"0x44fbebd2f576670a6c33f6fc0b00aa8c5753b322": {
				symbol: "crUSDC",
				name: "Cream USD Coin",
				decimals: 8,
				address: "0x44fbebd2f576670a6c33f6fc0b00aa8c5753b322",
				logoURI: "https://tokens.1inch.io/0x44fbebd2f576670a6c33f6fc0b00aa8c5753b322.png",
				tags: [
					"tokens"
				]
			},
			"0x460ea730d204c822ce709f00a8e5959921715adc": {
				symbol: "crBAC",
				name: "Cream Basis Cash",
				decimals: 8,
				address: "0x460ea730d204c822ce709f00a8e5959921715adc",
				logoURI: "https://tokens.1inch.io/0x460ea730d204c822ce709f00a8e5959921715adc.png",
				tags: [
					"tokens"
				]
			},
			"0x4ee15f44c6f0d8d1136c83efd2e8e4ac768954c6": {
				symbol: "crYYCRV",
				name: "Cream yyCRV",
				decimals: 8,
				address: "0x4ee15f44c6f0d8d1136c83efd2e8e4ac768954c6",
				logoURI: "https://tokens.1inch.io/0x4ee15f44c6f0d8d1136c83efd2e8e4ac768954c6.png",
				tags: [
					"tokens"
				]
			},
			"0x59089279987dd76fc65bf94cb40e186b96e03cb3": {
				symbol: "crOGN",
				name: "Cream OriginToken",
				decimals: 8,
				address: "0x59089279987dd76fc65bf94cb40e186b96e03cb3",
				logoURI: "https://tokens.1inch.io/0x59089279987dd76fc65bf94cb40e186b96e03cb3.png",
				tags: [
					"tokens"
				]
			},
			"0x65883978ada0e707c3b2be2a6825b1c4bdf76a90": {
				symbol: "crAKRO",
				name: "Cream Akropolis",
				decimals: 8,
				address: "0x65883978ada0e707c3b2be2a6825b1c4bdf76a90",
				logoURI: "https://tokens.1inch.io/0x65883978ada0e707c3b2be2a6825b1c4bdf76a90.png",
				tags: [
					"tokens"
				]
			},
			"0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9": {
				symbol: "crLINK",
				name: "Cream ChainLink Token",
				decimals: 8,
				address: "0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9",
				logoURI: "https://tokens.1inch.io/0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9.png",
				tags: [
					"tokens"
				]
			},
			"0x797aab1ce7c01eb727ab980762ba88e7133d2157": {
				symbol: "crUSDT",
				name: "Cream USDT",
				decimals: 8,
				address: "0x797aab1ce7c01eb727ab980762ba88e7133d2157",
				logoURI: "https://tokens.1inch.io/0x797aab1ce7c01eb727ab980762ba88e7133d2157.png",
				tags: [
					"tokens"
				]
			},
			"0x7aaa323d7e398be4128c7042d197a2545f0f1fea": {
				symbol: "crOMG",
				name: "Cream OMGToken",
				decimals: 8,
				address: "0x7aaa323d7e398be4128c7042d197a2545f0f1fea",
				logoURI: "https://tokens.1inch.io/0x7aaa323d7e398be4128c7042d197a2545f0f1fea.png",
				tags: [
					"tokens"
				]
			},
			"0x7ea9c63e216d5565c3940a2b3d150e59c2907db3": {
				symbol: "crBBTC",
				name: "Cream Binance Wrapped BTC",
				decimals: 8,
				address: "0x7ea9c63e216d5565c3940a2b3d150e59c2907db3",
				logoURI: "https://tokens.1inch.io/0x7ea9c63e216d5565c3940a2b3d150e59c2907db3.png",
				tags: [
					"tokens"
				]
			},
			"0x85759961b116f1d36fd697855c57a6ae40793d9b": {
				symbol: "cr1INCH",
				name: "Cream 1INCH Token",
				decimals: 8,
				address: "0x85759961b116f1d36fd697855c57a6ae40793d9b",
				logoURI: "https://tokens.1inch.io/0x85759961b116f1d36fd697855c57a6ae40793d9b.png",
				tags: [
					"tokens"
				]
			},
			"0x8b3ff1ed4f36c2c2be675afb13cc3aa5d73685a5": {
				symbol: "crCEL",
				name: "Cream Celsius",
				decimals: 8,
				address: "0x8b3ff1ed4f36c2c2be675afb13cc3aa5d73685a5",
				logoURI: "https://tokens.1inch.io/0x8b3ff1ed4f36c2c2be675afb13cc3aa5d73685a5.png",
				tags: [
					"tokens"
				]
			},
			"0x8b86e0598616a8d4f1fdae8b59e55fb5bc33d0d6": {
				symbol: "crLEND",
				name: "Cream EthLend Token",
				decimals: 8,
				address: "0x8b86e0598616a8d4f1fdae8b59e55fb5bc33d0d6",
				logoURI: "https://tokens.1inch.io/0x8b86e0598616a8d4f1fdae8b59e55fb5bc33d0d6.png",
				tags: [
					"tokens"
				]
			},
			"0x8b950f43fcac4931d408f1fcda55c6cb6cbf3096": {
				symbol: "crBBADGER",
				name: "Cream Badger Sett Badger",
				decimals: 8,
				address: "0x8b950f43fcac4931d408f1fcda55c6cb6cbf3096",
				logoURI: "https://tokens.1inch.io/0x8b950f43fcac4931d408f1fcda55c6cb6cbf3096.png",
				tags: [
					"tokens"
				]
			},
			"0x903560b1cce601794c584f58898da8a8b789fc5d": {
				symbol: "crKP3R",
				name: "Cream Keep3rV1",
				decimals: 8,
				address: "0x903560b1cce601794c584f58898da8a8b789fc5d",
				logoURI: "https://tokens.1inch.io/0x903560b1cce601794c584f58898da8a8b789fc5d.png",
				tags: [
					"tokens"
				]
			},
			"0x92b767185fb3b04f881e3ac8e5b0662a027a1d9f": {
				symbol: "crDAI",
				name: "Cream Dai Stablecoin",
				decimals: 8,
				address: "0x92b767185fb3b04f881e3ac8e5b0662a027a1d9f",
				logoURI: "https://tokens.1inch.io/0x92b767185fb3b04f881e3ac8e5b0662a027a1d9f.png",
				tags: [
					"tokens"
				]
			},
			"0x9baf8a5236d44ac410c0186fe39178d5aad0bb87": {
				symbol: "crYCRV",
				name: "Cream yCRV",
				decimals: 8,
				address: "0x9baf8a5236d44ac410c0186fe39178d5aad0bb87",
				logoURI: "https://tokens.1inch.io/0x9baf8a5236d44ac410c0186fe39178d5aad0bb87.png",
				tags: [
					"tokens"
				]
			},
			"0xb092b4601850e23903a42eacbc9d8a0eec26a4d5": {
				symbol: "crFRAX",
				name: "Cream Frax",
				decimals: 8,
				address: "0xb092b4601850e23903a42eacbc9d8a0eec26a4d5",
				logoURI: "https://tokens.1inch.io/0xb092b4601850e23903a42eacbc9d8a0eec26a4d5.png",
				tags: [
					"tokens"
				]
			},
			"0xc25eae724f189ba9030b2556a1533e7c8a732e14": {
				symbol: "crSNX",
				name: "Cream Synthetix Network Token",
				decimals: 8,
				address: "0xc25eae724f189ba9030b2556a1533e7c8a732e14",
				logoURI: "https://tokens.1inch.io/0xc25eae724f189ba9030b2556a1533e7c8a732e14.png",
				tags: [
					"tokens"
				]
			},
			"0xc68251421edda00a10815e273fa4b1191fac651b": {
				symbol: "crPICKLE",
				name: "Cream PickleToken",
				decimals: 8,
				address: "0xc68251421edda00a10815e273fa4b1191fac651b",
				logoURI: "https://tokens.1inch.io/0xc68251421edda00a10815e273fa4b1191fac651b.png",
				tags: [
					"tokens"
				]
			},
			"0xc7fd8dcee4697ceef5a2fd4608a7bd6a94c77480": {
				symbol: "crCRV",
				name: "Cream CRV",
				decimals: 8,
				address: "0xc7fd8dcee4697ceef5a2fd4608a7bd6a94c77480",
				logoURI: "https://tokens.1inch.io/0xc7fd8dcee4697ceef5a2fd4608a7bd6a94c77480.png",
				tags: [
					"tokens"
				]
			},
			"0xcbae0a83f4f9926997c8339545fb8ee32edc6b76": {
				symbol: "crYFI",
				name: "Cream YFI",
				decimals: 8,
				address: "0xcbae0a83f4f9926997c8339545fb8ee32edc6b76",
				logoURI: "https://tokens.1inch.io/0xcbae0a83f4f9926997c8339545fb8ee32edc6b76.png",
				tags: [
					"tokens"
				]
			},
			"0xce4fe9b4b8ff61949dcfeb7e03bc9faca59d2eb3": {
				symbol: "crBAL",
				name: "Cream Balancer",
				decimals: 8,
				address: "0xce4fe9b4b8ff61949dcfeb7e03bc9faca59d2eb3",
				logoURI: "https://tokens.1inch.io/0xce4fe9b4b8ff61949dcfeb7e03bc9faca59d2eb3.png",
				tags: [
					"tokens"
				]
			},
			"0xd06527d5e56a3495252a528c4987003b712860ee": {
				symbol: "crETH",
				name: "Cream Ether",
				decimals: 8,
				address: "0xd06527d5e56a3495252a528c4987003b712860ee",
				logoURI: "https://tokens.1inch.io/0xd06527d5e56a3495252a528c4987003b712860ee.png",
				tags: [
					"tokens"
				]
			},
			"0xd692ac3245bb82319a31068d6b8412796ee85d2c": {
				symbol: "crHUSD",
				name: "Cream HUSD",
				decimals: 8,
				address: "0xd692ac3245bb82319a31068d6b8412796ee85d2c",
				logoURI: "https://tokens.1inch.io/0xd692ac3245bb82319a31068d6b8412796ee85d2c.png",
				tags: [
					"tokens"
				]
			},
			"0xe89a6d0509faf730bd707bf868d9a2a744a363c7": {
				symbol: "crUNI",
				name: "Cream Uniswap",
				decimals: 8,
				address: "0xe89a6d0509faf730bd707bf868d9a2a744a363c7",
				logoURI: "https://tokens.1inch.io/0xe89a6d0509faf730bd707bf868d9a2a744a363c7.png",
				tags: [
					"tokens"
				]
			},
			"0xef58b2d5a1b8d3cde67b8ab054dc5c831e9bc025": {
				symbol: "crSRM",
				name: "Cream Serum",
				decimals: 8,
				address: "0xef58b2d5a1b8d3cde67b8ab054dc5c831e9bc025",
				logoURI: "https://tokens.1inch.io/0xef58b2d5a1b8d3cde67b8ab054dc5c831e9bc025.png",
				tags: [
					"tokens"
				]
			},
			"0xeff039c3c1d668f408d09dd7b63008622a77532c": {
				symbol: "crWNXM",
				name: "Cream Wrapped NXM",
				decimals: 8,
				address: "0xeff039c3c1d668f408d09dd7b63008622a77532c",
				logoURI: "https://tokens.1inch.io/0xeff039c3c1d668f408d09dd7b63008622a77532c.png",
				tags: [
					"tokens"
				]
			},
			"0xf047d4be569fb770db143a6a90ef203fc1295922": {
				symbol: "crTBTC",
				name: "Cream tBTC",
				decimals: 8,
				address: "0xf047d4be569fb770db143a6a90ef203fc1295922",
				logoURI: "https://tokens.1inch.io/0xf047d4be569fb770db143a6a90ef203fc1295922.png",
				tags: [
					"tokens"
				]
			},
			"0xf55bbe0255f7f4e70f63837ff72a577fbddbe924": {
				symbol: "crBOND",
				name: "Cream BarnBridge Governance Token",
				decimals: 8,
				address: "0xf55bbe0255f7f4e70f63837ff72a577fbddbe924",
				logoURI: "https://tokens.1inch.io/0xf55bbe0255f7f4e70f63837ff72a577fbddbe924.png",
				tags: [
					"tokens"
				]
			},
			"0x6e9730ecffbed43fd876a264c982e254ef05a0de": {
				symbol: "NORD",
				name: "Nord Token",
				decimals: 18,
				address: "0x6e9730ecffbed43fd876a264c982e254ef05a0de",
				logoURI: "https://tokens.1inch.io/0x6e9730ecffbed43fd876a264c982e254ef05a0de.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x661ab0ed68000491d98c796146bcf28c20d7c559": {
				symbol: "DOWS",
				name: "Shadows Network",
				decimals: 18,
				address: "0x661ab0ed68000491d98c796146bcf28c20d7c559",
				logoURI: "https://tokens.1inch.io/0x661ab0ed68000491d98c796146bcf28c20d7c559.png",
				tags: [
					"tokens"
				]
			},
			"0x0cdf9acd87e940837ff21bb40c9fd55f68bba059": {
				symbol: "MINT",
				name: "Public Mint",
				decimals: 18,
				address: "0x0cdf9acd87e940837ff21bb40c9fd55f68bba059",
				logoURI: "https://tokens.1inch.io/0x0cdf9acd87e940837ff21bb40c9fd55f68bba059.png",
				tags: [
					"tokens"
				]
			},
			"0x126c121f99e1e211df2e5f8de2d96fa36647c855": {
				symbol: "DEGEN",
				name: "DEGEN Index",
				decimals: 18,
				address: "0x126c121f99e1e211df2e5f8de2d96fa36647c855",
				logoURI: "https://tokens.1inch.io/0x126c121f99e1e211df2e5f8de2d96fa36647c855.png",
				tags: [
					"tokens"
				]
			},
			"0x0c7d5ae016f806603cb1782bea29ac69471cab9c": {
				symbol: "BFC",
				name: "Bifrost",
				decimals: 18,
				address: "0x0c7d5ae016f806603cb1782bea29ac69471cab9c",
				logoURI: "https://tokens.1inch.io/0x0c7d5ae016f806603cb1782bea29ac69471cab9c.png",
				tags: [
					"tokens"
				]
			},
			"0xd23ac27148af6a2f339bd82d0e3cff380b5093de": {
				symbol: "SI",
				name: "SIREN",
				decimals: 18,
				address: "0xd23ac27148af6a2f339bd82d0e3cff380b5093de",
				logoURI: "https://tokens.1inch.io/0xd23ac27148af6a2f339bd82d0e3cff380b5093de.png",
				tags: [
					"tokens"
				]
			},
			"0x4c25bdf026ea05f32713f00f73ca55857fbf6342": {
				symbol: "FONT",
				name: "Font",
				decimals: 18,
				address: "0x4c25bdf026ea05f32713f00f73ca55857fbf6342",
				logoURI: "https://tokens.1inch.io/0x4c25bdf026ea05f32713f00f73ca55857fbf6342.png",
				tags: [
					"tokens"
				]
			},
			"0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824": {
				symbol: "MOON",
				name: "MoonToken",
				decimals: 18,
				address: "0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824",
				logoURI: "https://tokens.1inch.io/0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824.png",
				tags: [
					"tokens"
				]
			},
			"0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8": {
				symbol: "JUP",
				name: "Jupiter",
				decimals: 18,
				address: "0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8",
				logoURI: "https://tokens.1inch.io/0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8.png",
				tags: [
					"tokens"
				]
			},
			"0xee06a81a695750e71a662b51066f2c74cf4478a0": {
				symbol: "$DG",
				name: "decentral.games",
				decimals: 18,
				address: "0xee06a81a695750e71a662b51066f2c74cf4478a0",
				logoURI: "https://tokens.1inch.io/0xee06a81a695750e71a662b51066f2c74cf4478a0.png",
				tags: [
					"tokens"
				]
			},
			"0x0dde6f6e345bfd23f3f419f0dfe04e93143b44fb": {
				symbol: "SOTA",
				name: "SOTA",
				decimals: 18,
				address: "0x0dde6f6e345bfd23f3f419f0dfe04e93143b44fb",
				logoURI: "https://tokens.1inch.io/0x0dde6f6e345bfd23f3f419f0dfe04e93143b44fb.png",
				tags: [
					"tokens"
				]
			},
			"0x739763a258640919981f9ba610ae65492455be53": {
				symbol: "NDR",
				name: "NodeRunners",
				decimals: 18,
				address: "0x739763a258640919981f9ba610ae65492455be53",
				logoURI: "https://tokens.1inch.io/0x739763a258640919981f9ba610ae65492455be53.png",
				tags: [
					"tokens"
				]
			},
			"0x31c8eacbffdd875c74b94b077895bd78cf1e64a3": {
				symbol: "RAD",
				name: "Radicle",
				decimals: 18,
				address: "0x31c8eacbffdd875c74b94b077895bd78cf1e64a3",
				logoURI: "https://tokens.1inch.io/0x31c8eacbffdd875c74b94b077895bd78cf1e64a3.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xdbdb4d16eda451d0503b854cf79d55697f90c8df": {
				symbol: "ALCX",
				name: "Alchemix",
				decimals: 18,
				address: "0xdbdb4d16eda451d0503b854cf79d55697f90c8df",
				logoURI: "https://tokens.1inch.io/0xdbdb4d16eda451d0503b854cf79d55697f90c8df.png",
				tags: [
					"tokens"
				]
			},
			"0x24a6a37576377f63f194caa5f518a60f45b42921": {
				symbol: "BANK",
				name: "Float Bank",
				decimals: 18,
				address: "0x24a6a37576377f63f194caa5f518a60f45b42921",
				logoURI: "https://tokens.1inch.io/0x24a6a37576377f63f194caa5f518a60f45b42921.png",
				tags: [
					"tokens"
				]
			},
			"0x9b99cca871be05119b2012fd4474731dd653febe": {
				symbol: "MATTER",
				name: "Antimatter.Finance Governance Token",
				decimals: 18,
				address: "0x9b99cca871be05119b2012fd4474731dd653febe",
				logoURI: "https://tokens.1inch.io/0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f_1.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3": {
				symbol: "FCL",
				name: "Fractal Protocol Token",
				decimals: 18,
				address: "0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3",
				logoURI: "https://tokens.1inch.io/0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3.png",
				tags: [
					"tokens"
				]
			},
			"0xf411903cbc70a74d22900a5de66a2dda66507255": {
				symbol: "VRA",
				name: "VERA",
				decimals: 18,
				address: "0xf411903cbc70a74d22900a5de66a2dda66507255",
				logoURI: "https://tokens.1inch.io/0xf411903cbc70a74d22900a5de66a2dda66507255.png",
				tags: [
					"tokens"
				]
			},
			"0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c": {
				symbol: "NFTI",
				name: "NFT INDEX",
				decimals: 18,
				address: "0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c",
				logoURI: "https://tokens.1inch.io/0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c.png",
				tags: [
					"tokens"
				]
			},
			"0x5affe41805a9e57fed3657d0e64d96aea0b77885": {
				symbol: "OPIUM_LP_34b7",
				name: "Opium USDT Protection v2/USDC",
				decimals: 6,
				address: "0x5affe41805a9e57fed3657d0e64d96aea0b77885",
				logoURI: "https://tokens.1inch.io/0x5affe41805a9e57fed3657d0e64d96aea0b77885.png",
				tags: [
					"tokens"
				]
			},
			"0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e": {
				symbol: "BDP",
				name: "BDPToken",
				decimals: 18,
				address: "0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e",
				logoURI: "https://tokens.1inch.io/0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e.png",
				tags: [
					"tokens"
				]
			},
			"0xbbc2ae13b23d715c30720f079fcd9b4a74093505": {
				symbol: "ERN",
				name: "@EthernityChain $ERN Token",
				decimals: 18,
				address: "0xbbc2ae13b23d715c30720f079fcd9b4a74093505",
				logoURI: "https://tokens.1inch.io/0xbbc2ae13b23d715c30720f079fcd9b4a74093505.png",
				tags: [
					"tokens"
				]
			},
			"0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c": {
				symbol: "KYL",
				name: "Kylin Network",
				decimals: 18,
				address: "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c",
				logoURI: "https://tokens.1inch.io/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
				tags: [
					"tokens"
				]
			},
			"0xfb5453340c03db5ade474b27e68b6a9c6b2823eb": {
				symbol: "ROBOT",
				name: "MetaFactory",
				decimals: 18,
				address: "0xfb5453340c03db5ade474b27e68b6a9c6b2823eb",
				logoURI: "https://tokens.1inch.io/0xfb5453340c03db5ade474b27e68b6a9c6b2823eb.png",
				tags: [
					"tokens"
				]
			},
			"0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042": {
				symbol: "PAINT",
				name: "Paint",
				decimals: 18,
				address: "0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042",
				logoURI: "https://tokens.1inch.io/0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042.png",
				tags: [
					"tokens"
				]
			},
			"0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8": {
				symbol: "RULER",
				name: "Ruler Protocol",
				decimals: 18,
				address: "0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8",
				logoURI: "https://tokens.1inch.io/0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x892a6f9df0147e5f079b0993f486f9aca3c87881": {
				symbol: "xFUND",
				name: "unification.com/xfund",
				decimals: 9,
				address: "0x892a6f9df0147e5f079b0993f486f9aca3c87881",
				logoURI: "https://tokens.1inch.io/0x892a6f9df0147e5f079b0993f486f9aca3c87881.png",
				tags: [
					"tokens"
				]
			},
			"0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6": {
				symbol: "bALPHA",
				name: "bAlpha",
				decimals: 18,
				address: "0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6",
				logoURI: "https://tokens.1inch.io/0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6.png",
				tags: [
					"tokens"
				]
			},
			"0x3506424f91fd33084466f402d5d97f05f8e3b4af": {
				symbol: "CHZ",
				name: "chiliZ",
				decimals: 18,
				address: "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
				logoURI: "https://tokens.1inch.io/0x3506424f91fd33084466f402d5d97f05f8e3b4af.png",
				tags: [
					"tokens"
				]
			},
			"0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68": {
				symbol: "INV",
				name: "Inverse DAO",
				decimals: 18,
				address: "0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68",
				logoURI: "https://tokens.1inch.io/0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107": {
				symbol: "GOVI",
				name: "GOVI",
				decimals: 18,
				address: "0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107",
				logoURI: "https://tokens.1inch.io/0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107.png",
				tags: [
					"tokens"
				]
			},
			"0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a": {
				symbol: "BEPRO",
				name: "BetProtocolToken",
				decimals: 18,
				address: "0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a",
				logoURI: "https://tokens.1inch.io/0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a.png",
				tags: [
					"tokens"
				]
			},
			"0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc": {
				symbol: "NFY",
				name: "Non-Fungible Yearn",
				decimals: 18,
				address: "0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc",
				logoURI: "https://tokens.1inch.io/0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc.png",
				tags: [
					"tokens"
				]
			},
			"0x2216e873ea4282ebef7a02ac5aea220be6391a7c": {
				symbol: "SMOL",
				name: "smol",
				decimals: 18,
				address: "0x2216e873ea4282ebef7a02ac5aea220be6391a7c",
				logoURI: "https://tokens.1inch.io/0x2216e873ea4282ebef7a02ac5aea220be6391a7c.png",
				tags: [
					"tokens"
				]
			},
			"0x92e187a03b6cd19cb6af293ba17f2745fd2357d5": {
				symbol: "DUCK_UNIT",
				name: "Unit Protocol",
				decimals: 18,
				address: "0x92e187a03b6cd19cb6af293ba17f2745fd2357d5",
				logoURI: "https://tokens.1inch.io/0x92e187a03b6cd19cb6af293ba17f2745fd2357d5.png",
				tags: [
					"tokens"
				]
			},
			"0x888888435fde8e7d4c54cab67f206e4199454c60": {
				symbol: "DFX",
				name: "DFX Token",
				decimals: 18,
				address: "0x888888435fde8e7d4c54cab67f206e4199454c60",
				logoURI: "https://tokens.1inch.io/0x888888435fde8e7d4c54cab67f206e4199454c60.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc4de189abf94c57f396bd4c52ab13b954febefd8": {
				symbol: "B20",
				name: "B.20",
				decimals: 18,
				address: "0xc4de189abf94c57f396bd4c52ab13b954febefd8",
				logoURI: "https://tokens.1inch.io/0xc4de189abf94c57f396bd4c52ab13b954febefd8.png",
				tags: [
					"tokens"
				]
			},
			"0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d": {
				symbol: "TAP",
				name: "Tapmydata",
				decimals: 18,
				address: "0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d",
				logoURI: "https://tokens.1inch.io/0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d.png",
				tags: [
					"tokens"
				]
			},
			"0x00d1793d7c3aae506257ba985b34c76aaf642557": {
				symbol: "TACO",
				name: "Tacos",
				decimals: 18,
				address: "0x00d1793d7c3aae506257ba985b34c76aaf642557",
				logoURI: "https://tokens.1inch.io/0x00d1793d7c3aae506257ba985b34c76aaf642557.png",
				tags: [
					"tokens"
				]
			},
			"0xed30dd7e50edf3581ad970efc5d9379ce2614adb": {
				symbol: "ARCX_OLD",
				name: "ARC Governance Token (Old)",
				decimals: 18,
				address: "0xed30dd7e50edf3581ad970efc5d9379ce2614adb",
				logoURI: "https://tokens.1inch.io/0xed30dd7e50edf3581ad970efc5d9379ce2614adb.png",
				tags: [
					"tokens"
				]
			},
			"0xcd91538b91b4ba7797d39a2f66e63810b50a33d0": {
				symbol: "STABLEx",
				name: "ARC STABLEx",
				decimals: 18,
				address: "0xcd91538b91b4ba7797d39a2f66e63810b50a33d0",
				logoURI: "https://tokens.1inch.io/0xcd91538b91b4ba7797d39a2f66e63810b50a33d0.png",
				tags: [
					"tokens"
				]
			},
			"0x940a2db1b7008b6c776d4faaca729d6d4a4aa551": {
				symbol: "DUSK",
				name: "Dusk Network",
				decimals: 18,
				address: "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551",
				logoURI: "https://tokens.1inch.io/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png",
				tags: [
					"tokens"
				]
			},
			"0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd": {
				symbol: "ETH2x-FLI",
				name: "ETH 2x Flexible Leverage Index",
				decimals: 18,
				address: "0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd",
				logoURI: "https://tokens.1inch.io/0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd.png",
				tags: [
					"tokens"
				]
			},
			"0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9": {
				symbol: "FTX Token",
				name: "FTT",
				decimals: 18,
				address: "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9",
				logoURI: "https://tokens.1inch.io/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9.png",
				tags: [
					"tokens"
				]
			},
			"0x037a54aab062628c9bbae1fdb1583c195585fe41": {
				symbol: "LCX",
				name: "LCX",
				decimals: 18,
				address: "0x037a54aab062628c9bbae1fdb1583c195585fe41",
				logoURI: "https://tokens.1inch.io/0x037a54aab062628c9bbae1fdb1583c195585fe41.png",
				tags: [
					"tokens"
				]
			},
			"0x544c42fbb96b39b21df61cf322b5edc285ee7429": {
				symbol: "INSUR",
				name: "InsurAce",
				decimals: 18,
				address: "0x544c42fbb96b39b21df61cf322b5edc285ee7429",
				logoURI: "https://tokens.1inch.io/0x544c42fbb96b39b21df61cf322b5edc285ee7429.png",
				tags: [
					"tokens"
				]
			},
			"0x8185bc4757572da2a610f887561c32298f1a5748": {
				symbol: "ALN",
				name: "Aluna",
				decimals: 18,
				address: "0x8185bc4757572da2a610f887561c32298f1a5748",
				logoURI: "https://tokens.1inch.io/0x8185bc4757572da2a610f887561c32298f1a5748.png",
				tags: [
					"tokens"
				]
			},
			"0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43": {
				symbol: "CGG",
				name: "ChainGuardians Governance Token",
				decimals: 18,
				address: "0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43",
				logoURI: "https://tokens.1inch.io/0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43.png",
				tags: [
					"tokens"
				]
			},
			"0x32a7c02e79c4ea1008dd6564b35f131428673c41": {
				symbol: "CRU",
				name: "CRUST",
				decimals: 18,
				address: "0x32a7c02e79c4ea1008dd6564b35f131428673c41",
				logoURI: "https://tokens.1inch.io/0x32a7c02e79c4ea1008dd6564b35f131428673c41.png",
				tags: [
					"tokens"
				]
			},
			"0xac51066d7bec65dc4589368da368b212745d63e8": {
				symbol: "ALICE",
				name: "ALICE",
				decimals: 6,
				address: "0xac51066d7bec65dc4589368da368b212745d63e8",
				logoURI: "https://tokens.1inch.io/0xac51066d7bec65dc4589368da368b212745d63e8.png",
				tags: [
					"tokens"
				]
			},
			"0x1c9922314ed1415c95b9fd453c3818fd41867d0b": {
				symbol: "TOWER",
				name: "TOWER",
				decimals: 18,
				address: "0x1c9922314ed1415c95b9fd453c3818fd41867d0b",
				logoURI: "https://tokens.1inch.io/0x1c9922314ed1415c95b9fd453c3818fd41867d0b.png",
				tags: [
					"tokens"
				]
			},
			"0xa8b61cff52564758a204f841e636265bebc8db9b": {
				symbol: "YIELD",
				name: "Yield Protocol",
				decimals: 18,
				address: "0xa8b61cff52564758a204f841e636265bebc8db9b",
				logoURI: "https://tokens.1inch.io/0xa8b61cff52564758a204f841e636265bebc8db9b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x850aab69f0e0171a9a49db8be3e71351c8247df4": {
				symbol: "KONO",
				name: "Konomi",
				decimals: 18,
				address: "0x850aab69f0e0171a9a49db8be3e71351c8247df4",
				logoURI: "https://tokens.1inch.io/0x850aab69f0e0171a9a49db8be3e71351c8247df4.png",
				tags: [
					"tokens"
				]
			},
			"0xbae5f2d8a1299e5c4963eaff3312399253f27ccb": {
				symbol: "SOAR",
				name: "SOAR.FI",
				decimals: 9,
				address: "0xbae5f2d8a1299e5c4963eaff3312399253f27ccb",
				logoURI: "https://tokens.1inch.io/0xbae5f2d8a1299e5c4963eaff3312399253f27ccb.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xac3211a5025414af2866ff09c23fc18bc97e79b1": {
				symbol: "DOV",
				name: "DOVU",
				decimals: 18,
				address: "0xac3211a5025414af2866ff09c23fc18bc97e79b1",
				logoURI: "https://tokens.1inch.io/0xac3211a5025414af2866ff09c23fc18bc97e79b1.png",
				tags: [
					"tokens"
				]
			},
			"0x73374ea518de7addd4c2b624c0e8b113955ee041": {
				symbol: "JGN",
				name: "Juggernaut DeFi",
				decimals: 18,
				address: "0x73374ea518de7addd4c2b624c0e8b113955ee041",
				logoURI: "https://tokens.1inch.io/0x73374ea518de7addd4c2b624c0e8b113955ee041.png",
				tags: [
					"tokens"
				]
			},
			"0xfad45e47083e4607302aa43c65fb3106f1cd7607": {
				symbol: "HOGE",
				name: "hoge.finance",
				decimals: 9,
				address: "0xfad45e47083e4607302aa43c65fb3106f1cd7607",
				logoURI: "https://tokens.1inch.io/0xfad45e47083e4607302aa43c65fb3106f1cd7607.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xe9a95d175a5f4c9369f3b74222402eb1b837693b": {
				symbol: "NOW",
				name: "ChangeNOW",
				decimals: 8,
				address: "0xe9a95d175a5f4c9369f3b74222402eb1b837693b",
				logoURI: "https://tokens.1inch.io/0xe9a95d175a5f4c9369f3b74222402eb1b837693b.png",
				tags: [
					"tokens"
				]
			},
			"0xdea67845a51e24461d5fed8084e69b426af3d5db": {
				symbol: "HTRE",
				name: "HodlTree",
				decimals: 18,
				address: "0xdea67845a51e24461d5fed8084e69b426af3d5db",
				logoURI: "https://tokens.1inch.io/0xdea67845a51e24461d5fed8084e69b426af3d5db.png",
				tags: [
					"tokens"
				]
			},
			"0x8b39b70e39aa811b69365398e0aace9bee238aeb": {
				symbol: "PKF",
				name: "PolkaFoundry",
				decimals: 18,
				address: "0x8b39b70e39aa811b69365398e0aace9bee238aeb",
				logoURI: "https://tokens.1inch.io/0x8b39b70e39aa811b69365398e0aace9bee238aeb.png",
				tags: [
					"tokens"
				]
			},
			"0xb20043f149817bff5322f1b928e89abfc65a9925": {
				symbol: "EXRT",
				name: "EXRT",
				decimals: 8,
				address: "0xb20043f149817bff5322f1b928e89abfc65a9925",
				logoURI: "https://tokens.1inch.io/0xb20043f149817bff5322f1b928e89abfc65a9925.png",
				tags: [
					"tokens"
				]
			},
			"0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9": {
				symbol: "DERI",
				name: "Deri",
				decimals: 18,
				address: "0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9",
				logoURI: "https://tokens.1inch.io/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9.png",
				tags: [
					"tokens"
				]
			},
			"0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af": {
				symbol: "BCUG",
				name: "Blockchain Cuties Universe Governance Token",
				decimals: 18,
				address: "0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af",
				logoURI: "https://tokens.1inch.io/0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af.png",
				tags: [
					"tokens"
				]
			},
			"0x8b0e42f366ba502d787bb134478adfae966c8798": {
				symbol: "LABS",
				name: "LABS Group",
				decimals: 18,
				address: "0x8b0e42f366ba502d787bb134478adfae966c8798",
				logoURI: "https://tokens.1inch.io/0x8b0e42f366ba502d787bb134478adfae966c8798.png",
				tags: [
					"tokens"
				]
			},
			"0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d": {
				symbol: "KINE",
				name: "Kine Governance Token",
				decimals: 18,
				address: "0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d",
				logoURI: "https://tokens.1inch.io/0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d.png",
				tags: [
					"tokens"
				]
			},
			"0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54": {
				symbol: "HAPI",
				name: "HAPI",
				decimals: 18,
				address: "0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54",
				logoURI: "https://tokens.1inch.io/0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54.png",
				tags: [
					"tokens"
				]
			},
			"0xc5bddf9843308380375a611c18b50fb9341f502a": {
				symbol: "yveCRV-DAO",
				name: "veCRV-DAO yVault",
				decimals: 18,
				address: "0xc5bddf9843308380375a611c18b50fb9341f502a",
				logoURI: "https://tokens.1inch.io/0xc5bddf9843308380375a611c18b50fb9341f502a.png",
				tags: [
					"tokens"
				]
			},
			"0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af": {
				symbol: "K21",
				name: "k21.kanon.art",
				decimals: 18,
				address: "0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af",
				logoURI: "https://tokens.1inch.io/0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af.png",
				tags: [
					"tokens"
				]
			},
			"0x226f7b842e0f0120b7e194d05432b3fd14773a9d": {
				symbol: "UNN",
				name: "UNION Protocol Governance Token",
				decimals: 18,
				address: "0x226f7b842e0f0120b7e194d05432b3fd14773a9d",
				logoURI: "https://tokens.1inch.io/0x226f7b842e0f0120b7e194d05432b3fd14773a9d.png",
				tags: [
					"tokens"
				]
			},
			"0x0ace32f6e87ac1457a5385f8eb0208f37263b415": {
				symbol: "HBT",
				name: "Habitat Token",
				decimals: 10,
				address: "0x0ace32f6e87ac1457a5385f8eb0208f37263b415",
				logoURI: "https://tokens.1inch.io/0x0ace32f6e87ac1457a5385f8eb0208f37263b415.png",
				tags: [
					"tokens"
				]
			},
			"0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c": {
				symbol: "CATE",
				name: "Cash Tech",
				decimals: 18,
				address: "0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c",
				logoURI: "https://tokens.1inch.io/0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c.png",
				tags: [
					"tokens"
				]
			},
			"0xbc4171f45ef0ef66e76f979df021a34b46dcc81d": {
				symbol: "DORA",
				name: "Dorayaki",
				decimals: 18,
				address: "0xbc4171f45ef0ef66e76f979df021a34b46dcc81d",
				logoURI: "https://tokens.1inch.io/0xbc4171f45ef0ef66e76f979df021a34b46dcc81d.png",
				tags: [
					"tokens"
				]
			},
			"0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe": {
				symbol: "erowan",
				name: "erowan",
				decimals: 18,
				address: "0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe",
				logoURI: "https://tokens.1inch.io/0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe.png",
				tags: [
					"tokens"
				]
			},
			"0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8": {
				symbol: "SNTVT",
				name: "Sentivate",
				decimals: 18,
				address: "0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8",
				logoURI: "https://tokens.1inch.io/0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8.png",
				tags: [
					"tokens"
				]
			},
			"0xc4c2614e694cf534d407ee49f8e44d125e4681c4": {
				symbol: "CHAIN",
				name: "Chain Games",
				decimals: 18,
				address: "0xc4c2614e694cf534d407ee49f8e44d125e4681c4",
				logoURI: "https://tokens.1inch.io/0xc4c2614e694cf534d407ee49f8e44d125e4681c4.png",
				tags: [
					"tokens"
				]
			},
			"0x000000000000d0151e748d25b766e77efe2a6c83": {
				symbol: "XDEX",
				name: "XDEFI Governance Token",
				decimals: 18,
				address: "0x000000000000d0151e748d25b766e77efe2a6c83",
				logoURI: "https://tokens.1inch.io/0x000000000000d0151e748d25b766e77efe2a6c83.png",
				tags: [
					"tokens"
				]
			},
			"0x8564653879a18c560e7c0ea0e084c516c62f5653": {
				symbol: "UBXT",
				name: "UpBots",
				decimals: 18,
				address: "0x8564653879a18c560e7c0ea0e084c516c62f5653",
				logoURI: "https://tokens.1inch.io/0x8564653879a18c560e7c0ea0e084c516c62f5653.png",
				tags: [
					"tokens"
				]
			},
			"0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24": {
				symbol: "GLQ",
				name: "GraphLinq",
				decimals: 18,
				address: "0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24",
				logoURI: "https://tokens.1inch.io/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24.png",
				tags: [
					"tokens"
				]
			},
			"0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5": {
				symbol: "LYM",
				name: "Lympo tokens",
				decimals: 18,
				address: "0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5",
				logoURI: "https://tokens.1inch.io/0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5.png",
				tags: [
					"tokens"
				]
			},
			"0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30": {
				symbol: "VIDYA",
				name: "Vidya",
				decimals: 18,
				address: "0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30",
				logoURI: "https://tokens.1inch.io/0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30.png",
				tags: [
					"tokens"
				]
			},
			"0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43": {
				symbol: "FIRE",
				name: "Fire Protocol",
				decimals: 8,
				address: "0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43",
				logoURI: "https://tokens.1inch.io/0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43.png",
				tags: [
					"tokens"
				]
			},
			"0xfc979087305a826c2b2a0056cfaba50aad3e6439": {
				symbol: "DAFI",
				name: "DAFI Token",
				decimals: 18,
				address: "0xfc979087305a826c2b2a0056cfaba50aad3e6439",
				logoURI: "https://tokens.1inch.io/0xfc979087305a826c2b2a0056cfaba50aad3e6439.png",
				tags: [
					"tokens"
				]
			},
			"0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6": {
				symbol: "ODDZ",
				name: "OddzToken",
				decimals: 18,
				address: "0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6",
				logoURI: "https://tokens.1inch.io/0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x72630b1e3b42874bf335020ba0249e3e9e47bafc": {
				symbol: "EPAN",
				name: "Paypolitan Token",
				decimals: 18,
				address: "0x72630b1e3b42874bf335020ba0249e3e9e47bafc",
				logoURI: "https://tokens.1inch.io/0x72630b1e3b42874bf335020ba0249e3e9e47bafc.png",
				tags: [
					"tokens"
				]
			},
			"0xa92e7c82b11d10716ab534051b271d2f6aef7df5": {
				symbol: "ARA",
				name: "Ara Token",
				decimals: 18,
				address: "0xa92e7c82b11d10716ab534051b271d2f6aef7df5",
				logoURI: "https://tokens.1inch.io/0xa92e7c82b11d10716ab534051b271d2f6aef7df5.png",
				tags: [
					"tokens"
				]
			},
			"0x5dc02ea99285e17656b8350722694c35154db1e8": {
				symbol: "BOND_finance",
				name: "bonded.finance",
				decimals: 8,
				address: "0x5dc02ea99285e17656b8350722694c35154db1e8",
				logoURI: "https://tokens.1inch.io/0x5dc02ea99285e17656b8350722694c35154db1e8.png",
				tags: [
					"tokens"
				]
			},
			"0xc3d088842dcf02c13699f936bb83dfbbc6f721ab": {
				symbol: "vETH",
				name: "Voucher Ethereum",
				decimals: 18,
				address: "0xc3d088842dcf02c13699f936bb83dfbbc6f721ab",
				logoURI: "https://tokens.1inch.io/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab.png",
				tags: [
					"tokens"
				]
			},
			"0xca0e7269600d353f70b14ad118a49575455c0f2f": {
				symbol: "AMLT",
				name: "AMLT",
				decimals: 18,
				address: "0xca0e7269600d353f70b14ad118a49575455c0f2f",
				logoURI: "https://tokens.1inch.io/0xca0e7269600d353f70b14ad118a49575455c0f2f.png",
				tags: [
					"tokens"
				]
			},
			"0xceb286c9604c542d3cc08b41aa6c9675b078a832": {
				symbol: "VTX",
				name: "Vortex DeFi",
				decimals: 18,
				address: "0xceb286c9604c542d3cc08b41aa6c9675b078a832",
				logoURI: "https://tokens.1inch.io/0xceb286c9604c542d3cc08b41aa6c9675b078a832.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc7283b66eb1eb5fb86327f08e1b5816b0720212b": {
				symbol: "TRIBE",
				name: "Tribe",
				decimals: 18,
				address: "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
				logoURI: "https://tokens.1inch.io/0xc7283b66eb1eb5fb86327f08e1b5816b0720212b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x956f47f50a910163d8bf957cf5846d573e7f87ca": {
				symbol: "FEI",
				name: "Fei USD",
				decimals: 18,
				address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
				logoURI: "https://tokens.1inch.io/0x956f47f50a910163d8bf957cf5846d573e7f87ca.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x70e8de73ce538da2beed35d14187f6959a8eca96": {
				symbol: "XSGD",
				name: "XSGD",
				decimals: 6,
				address: "0x70e8de73ce538da2beed35d14187f6959a8eca96",
				logoURI: "https://tokens.1inch.io/0x70e8de73ce538da2beed35d14187f6959a8eca96.png",
				tags: [
					"tokens"
				]
			},
			"0x626e8036deb333b408be468f951bdb42433cbf18": {
				symbol: "AIOZ",
				name: "AIOZ Network",
				decimals: 18,
				address: "0x626e8036deb333b408be468f951bdb42433cbf18",
				logoURI: "https://tokens.1inch.io/0x626e8036deb333b408be468f951bdb42433cbf18.png",
				tags: [
					"tokens"
				]
			},
			"0xa0cf46eb152656c7090e769916eb44a138aaa406": {
				symbol: "SPH",
				name: "Spheroid",
				decimals: 18,
				address: "0xa0cf46eb152656c7090e769916eb44a138aaa406",
				logoURI: "https://tokens.1inch.io/0xa0cf46eb152656c7090e769916eb44a138aaa406.png",
				tags: [
					"tokens"
				]
			},
			"0x1796ae0b0fa4862485106a0de9b654efe301d0b2": {
				symbol: "PMON",
				name: "Polkamon",
				decimals: 18,
				address: "0x1796ae0b0fa4862485106a0de9b654efe301d0b2",
				logoURI: "https://tokens.1inch.io/0x1796ae0b0fa4862485106a0de9b654efe301d0b2.png",
				tags: [
					"tokens"
				]
			},
			"0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4": {
				symbol: "SYLO",
				name: "Sylo",
				decimals: 18,
				address: "0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4",
				logoURI: "https://tokens.1inch.io/0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4.png",
				tags: [
					"tokens"
				]
			},
			"0xdb0acc14396d108b3c5574483acb817855c9dc8d": {
				symbol: "EMB",
				name: "Emblem",
				decimals: 8,
				address: "0xdb0acc14396d108b3c5574483acb817855c9dc8d",
				logoURI: "https://tokens.1inch.io/0xdb0acc14396d108b3c5574483acb817855c9dc8d.png",
				tags: [
					"tokens"
				]
			},
			"0x1735db6ab5baa19ea55d0adceed7bcdc008b3136": {
				symbol: "URQA",
				name: "UREEQA Token",
				decimals: 18,
				address: "0x1735db6ab5baa19ea55d0adceed7bcdc008b3136",
				logoURI: "https://tokens.1inch.io/0x1735db6ab5baa19ea55d0adceed7bcdc008b3136.png",
				tags: [
					"tokens"
				]
			},
			"0x99295f1141d58a99e939f7be6bbe734916a875b8": {
				symbol: "LPL",
				name: "LinkPool",
				decimals: 18,
				address: "0x99295f1141d58a99e939f7be6bbe734916a875b8",
				logoURI: "https://tokens.1inch.io/0x99295f1141d58a99e939f7be6bbe734916a875b8.png",
				tags: [
					"tokens"
				]
			},
			"0xe1c7e30c42c24582888c758984f6e382096786bd": {
				symbol: "XCUR",
				name: "Curate",
				decimals: 8,
				address: "0xe1c7e30c42c24582888c758984f6e382096786bd",
				logoURI: "https://tokens.1inch.io/0xe1c7e30c42c24582888c758984f6e382096786bd.png",
				tags: [
					"tokens"
				]
			},
			"0xff75ced57419bcaebe5f05254983b013b0646ef5": {
				symbol: "COOK",
				name: "Cook Token",
				decimals: 18,
				address: "0xff75ced57419bcaebe5f05254983b013b0646ef5",
				logoURI: "https://tokens.1inch.io/0xff75ced57419bcaebe5f05254983b013b0646ef5.png",
				tags: [
					"tokens"
				]
			},
			"0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099": {
				symbol: "CELL",
				name: "Cellframe Token",
				decimals: 18,
				address: "0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099",
				logoURI: "https://tokens.1inch.io/0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099.png",
				tags: [
					"tokens"
				]
			},
			"0x5b09a0371c1da44a8e24d36bf5deb1141a84d875": {
				symbol: "MAD",
				name: "MADToken",
				decimals: 18,
				address: "0x5b09a0371c1da44a8e24d36bf5deb1141a84d875",
				logoURI: "https://tokens.1inch.io/0x5b09a0371c1da44a8e24d36bf5deb1141a84d875.png",
				tags: [
					"tokens"
				]
			},
			"0xc834fa996fa3bec7aad3693af486ae53d8aa8b50": {
				symbol: "CONV",
				name: "Convergence",
				decimals: 18,
				address: "0xc834fa996fa3bec7aad3693af486ae53d8aa8b50",
				logoURI: "https://tokens.1inch.io/0xc834fa996fa3bec7aad3693af486ae53d8aa8b50.png",
				tags: [
					"tokens"
				]
			},
			"0x106538cc16f938776c7c180186975bca23875287": {
				symbol: "BASv2",
				name: "BASv2",
				decimals: 18,
				address: "0x106538cc16f938776c7c180186975bca23875287",
				logoURI: "https://tokens.1inch.io/0x106538cc16f938776c7c180186975bca23875287.png",
				tags: [
					"tokens"
				]
			},
			"0x3505f494c3f0fed0b594e01fa41dd3967645ca39": {
				symbol: "SWM",
				name: "SWARM",
				decimals: 18,
				address: "0x3505f494c3f0fed0b594e01fa41dd3967645ca39",
				logoURI: "https://tokens.1inch.io/0x3505f494c3f0fed0b594e01fa41dd3967645ca39.png",
				tags: [
					"tokens"
				]
			},
			"0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9": {
				symbol: "EDDA",
				name: "EDDA",
				decimals: 18,
				address: "0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9",
				logoURI: "https://tokens.1inch.io/0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9.png",
				tags: [
					"tokens"
				]
			},
			"0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7": {
				symbol: "TIDAL",
				name: "Tidal Token",
				decimals: 18,
				address: "0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7",
				logoURI: "https://tokens.1inch.io/0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7.png",
				tags: [
					"tokens"
				]
			},
			"0xb78b3320493a4efaa1028130c5ba26f0b6085ef8": {
				symbol: "DRC_2",
				name: "Dracula Token",
				decimals: 18,
				address: "0xb78b3320493a4efaa1028130c5ba26f0b6085ef8",
				logoURI: "https://tokens.1inch.io/0xb78b3320493a4efaa1028130c5ba26f0b6085ef8.png",
				tags: [
					"tokens"
				]
			},
			"0x55296f69f40ea6d20e478533c15a6b08b654e758": {
				symbol: "XYO",
				name: "XY Oracle",
				decimals: 18,
				address: "0x55296f69f40ea6d20e478533c15a6b08b654e758",
				logoURI: "https://tokens.1inch.io/0x55296f69f40ea6d20e478533c15a6b08b654e758.png",
				tags: [
					"tokens"
				]
			},
			"0x0f71b8de197a1c84d31de0f1fa7926c365f052b3": {
				symbol: "ARCONA",
				name: "Arcona Distribution Contract",
				decimals: 18,
				address: "0x0f71b8de197a1c84d31de0f1fa7926c365f052b3",
				logoURI: "https://tokens.1inch.io/0x0f71b8de197a1c84d31de0f1fa7926c365f052b3.png",
				tags: [
					"tokens"
				]
			},
			"0xa31b1767e09f842ecfd4bc471fe44f830e3891aa": {
				symbol: "ROOBEE",
				name: "ROOBEE",
				decimals: 18,
				address: "0xa31b1767e09f842ecfd4bc471fe44f830e3891aa",
				logoURI: "https://tokens.1inch.io/0xa31b1767e09f842ecfd4bc471fe44f830e3891aa.png",
				tags: [
					"tokens"
				]
			},
			"0xf3ae5d769e153ef72b4e3591ac004e89f48107a1": {
				symbol: "DPR",
				name: "Deeper Network",
				decimals: 18,
				address: "0xf3ae5d769e153ef72b4e3591ac004e89f48107a1",
				logoURI: "https://tokens.1inch.io/0xf3ae5d769e153ef72b4e3591ac004e89f48107a1.png",
				tags: [
					"tokens"
				]
			},
			"0xd9b312d77bc7bed9b9cecb56636300bed4fe5ce9": {
				symbol: "GAINS",
				name: "Gains",
				decimals: 18,
				address: "0xd9b312d77bc7bed9b9cecb56636300bed4fe5ce9",
				logoURI: "https://tokens.1inch.io/0xd9b312d77bc7bed9b9cecb56636300bed4fe5ce9.png",
				tags: [
					"tokens"
				]
			},
			"0x5f98805a4e8be255a32880fdec7f6728c6568ba0": {
				symbol: "LUSD",
				name: "LUSD Stablecoin",
				decimals: 18,
				address: "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
				logoURI: "https://tokens.1inch.io/0x5f98805a4e8be255a32880fdec7f6728c6568ba0.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x1da87b114f35e1dc91f72bf57fc07a768ad40bb0": {
				symbol: "EQZ",
				name: "Equalizer",
				decimals: 18,
				address: "0x1da87b114f35e1dc91f72bf57fc07a768ad40bb0",
				logoURI: "https://tokens.1inch.io/0x1da87b114f35e1dc91f72bf57fc07a768ad40bb0.png",
				tags: [
					"tokens"
				]
			},
			"0xe0b9a2c3e9f40cf74b2c7f591b2b0cca055c3112": {
				symbol: "GS",
				name: "Gen Shards",
				decimals: 18,
				address: "0xe0b9a2c3e9f40cf74b2c7f591b2b0cca055c3112",
				logoURI: "https://tokens.1inch.io/0xe0b9a2c3e9f40cf74b2c7f591b2b0cca055c3112.png",
				tags: [
					"tokens"
				]
			},
			"0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab": {
				symbol: "MIST",
				name: "Alchemist",
				decimals: 18,
				address: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
				logoURI: "https://tokens.1inch.io/0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9": {
				symbol: "CARDS",
				name: "CARD.STARTER",
				decimals: 18,
				address: "0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9",
				logoURI: "https://tokens.1inch.io/0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9.png",
				tags: [
					"tokens"
				]
			},
			"0x33840024177a7daca3468912363bed8b425015c5": {
				symbol: "EBOX",
				name: "ethbox Token",
				decimals: 18,
				address: "0x33840024177a7daca3468912363bed8b425015c5",
				logoURI: "https://tokens.1inch.io/0x33840024177a7daca3468912363bed8b425015c5.png",
				tags: [
					"tokens"
				]
			},
			"0xec213f83defb583af3a000b1c0ada660b1902a0f": {
				symbol: "PRE",
				name: "Presearch",
				decimals: 18,
				address: "0xec213f83defb583af3a000b1c0ada660b1902a0f",
				logoURI: "https://tokens.1inch.io/0xec213f83defb583af3a000b1c0ada660b1902a0f.png",
				tags: [
					"tokens"
				]
			},
			"0xf418588522d5dd018b425e472991e52ebbeeeeee": {
				symbol: "PUSH",
				name: "Ethereum Push Notification Service",
				decimals: 18,
				address: "0xf418588522d5dd018b425e472991e52ebbeeeeee",
				logoURI: "https://tokens.1inch.io/0xf418588522d5dd018b425e472991e52ebbeeeeee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xd8e3fb3b08eba982f2754988d70d57edc0055ae6": {
				symbol: "ZORA",
				name: "Zoracles",
				decimals: 9,
				address: "0xd8e3fb3b08eba982f2754988d70d57edc0055ae6",
				logoURI: "https://tokens.1inch.io/0xd8e3fb3b08eba982f2754988d70d57edc0055ae6.png",
				tags: [
					"tokens"
				]
			},
			"0xc477d038d5420c6a9e0b031712f61c5120090de9": {
				symbol: "BOSON",
				name: "Boson Token",
				decimals: 18,
				address: "0xc477d038d5420c6a9e0b031712f61c5120090de9",
				logoURI: "https://tokens.1inch.io/0xc477d038d5420c6a9e0b031712f61c5120090de9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xdd1ad9a21ce722c151a836373babe42c868ce9a4": {
				symbol: "UBI",
				name: "Universal Basic Income",
				decimals: 18,
				address: "0xdd1ad9a21ce722c151a836373babe42c868ce9a4",
				logoURI: "https://tokens.1inch.io/0xdd1ad9a21ce722c151a836373babe42c868ce9a4.png",
				tags: [
					"tokens"
				]
			},
			"0x53c8395465a84955c95159814461466053dedede": {
				symbol: "DG",
				name: "DeGate Token",
				decimals: 18,
				address: "0x53c8395465a84955c95159814461466053dedede",
				logoURI: "https://tokens.1inch.io/0x53c8395465a84955c95159814461466053dedede.png",
				tags: [
					"tokens"
				]
			},
			"0x16c52ceece2ed57dad87319d91b5e3637d50afa4": {
				symbol: "TCAP",
				name: "TCAP Token",
				decimals: 18,
				address: "0x16c52ceece2ed57dad87319d91b5e3637d50afa4",
				logoURI: "https://tokens.1inch.io/0x16c52ceece2ed57dad87319d91b5e3637d50afa4.png",
				tags: [
					"tokens"
				]
			},
			"0x44564d0bd94343f72e3c8a0d22308b7fa71db0bb": {
				symbol: "BASK",
				name: "BasketDAO Gov",
				decimals: 18,
				address: "0x44564d0bd94343f72e3c8a0d22308b7fa71db0bb",
				logoURI: "https://tokens.1inch.io/0x44564d0bd94343f72e3c8a0d22308b7fa71db0bb.png",
				tags: [
					"tokens"
				]
			},
			"0x5cf04716ba20127f1e2297addcf4b5035000c9eb": {
				symbol: "NKN",
				name: "NKN",
				decimals: 18,
				address: "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
				logoURI: "https://tokens.1inch.io/0x5cf04716ba20127f1e2297addcf4b5035000c9eb.png",
				tags: [
					"tokens"
				]
			},
			"0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0": {
				symbol: "FOUR",
				name: "The 4th Pillar Token",
				decimals: 18,
				address: "0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0",
				logoURI: "https://tokens.1inch.io/0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0.png",
				tags: [
					"tokens"
				]
			},
			"0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6": {
				symbol: "DCN",
				name: "Dentacoin",
				decimals: 0,
				address: "0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6",
				logoURI: "https://tokens.1inch.io/0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6.png",
				tags: [
					"tokens"
				]
			},
			"0x77fba179c79de5b7653f68b5039af940ada60ce0": {
				symbol: "FORTH",
				name: "Ampleforth Governance",
				decimals: 18,
				address: "0x77fba179c79de5b7653f68b5039af940ada60ce0",
				logoURI: "https://tokens.1inch.io/0x77fba179c79de5b7653f68b5039af940ada60ce0.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xe796d6ca1ceb1b022ece5296226bf784110031cd": {
				symbol: "BLES",
				name: "Blind Boxes Token",
				decimals: 18,
				address: "0xe796d6ca1ceb1b022ece5296226bf784110031cd",
				logoURI: "https://tokens.1inch.io/0xe796d6ca1ceb1b022ece5296226bf784110031cd.png",
				tags: [
					"tokens"
				]
			},
			"0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2": {
				symbol: "SWISE",
				name: "StakeWise",
				decimals: 18,
				address: "0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2",
				logoURI: "https://tokens.1inch.io/0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202": {
				symbol: "KNC",
				name: "Kyber Network Crystal v2",
				decimals: 18,
				address: "0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202",
				logoURI: "https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png",
				tags: [
					"tokens"
				]
			},
			"0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73": {
				symbol: "YAXIS",
				name: "yAxis V2",
				decimals: 18,
				address: "0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73",
				logoURI: "https://tokens.1inch.io/0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73.png",
				tags: [
					"tokens"
				]
			},
			"0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa": {
				symbol: "ORBS",
				name: "Orbs",
				decimals: 18,
				address: "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa",
				logoURI: "https://tokens.1inch.io/0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa.png",
				tags: [
					"tokens"
				]
			},
			"0xa02120696c7b8fe16c09c749e4598819b2b0e915": {
				symbol: "WXT",
				name: "Wirex Token",
				decimals: 18,
				address: "0xa02120696c7b8fe16c09c749e4598819b2b0e915",
				logoURI: "https://tokens.1inch.io/0xa02120696c7b8fe16c09c749e4598819b2b0e915.png",
				tags: [
					"tokens"
				]
			},
			"0x28a06c02287e657ec3f8e151a13c36a1d43814b0": {
				symbol: "BAG",
				name: "BAG",
				decimals: 18,
				address: "0x28a06c02287e657ec3f8e151a13c36a1d43814b0",
				logoURI: "https://tokens.1inch.io/0x28a06c02287e657ec3f8e151a13c36a1d43814b0.png",
				tags: [
					"tokens"
				]
			},
			"0x2f109021afe75b949429fe30523ee7c0d5b27207": {
				symbol: "OCC",
				name: "OCC",
				decimals: 18,
				address: "0x2f109021afe75b949429fe30523ee7c0d5b27207",
				logoURI: "https://tokens.1inch.io/0x2f109021afe75b949429fe30523ee7c0d5b27207.png",
				tags: [
					"tokens"
				]
			},
			"0x767fe9edc9e0df98e07454847909b5e959d7ca0e": {
				symbol: "ILV",
				name: "Illuvium",
				decimals: 18,
				address: "0x767fe9edc9e0df98e07454847909b5e959d7ca0e",
				logoURI: "https://tokens.1inch.io/0x767fe9edc9e0df98e07454847909b5e959d7ca0e.png",
				tags: [
					"tokens"
				]
			},
			"0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6": {
				symbol: "eRSDL",
				name: "UnFederalReserveToken",
				decimals: 18,
				address: "0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6",
				logoURI: "https://tokens.1inch.io/0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6.png",
				tags: [
					"tokens"
				]
			},
			"0xf16e81dce15b08f326220742020379b855b87df9": {
				symbol: "ICE",
				name: "IceToken",
				decimals: 18,
				address: "0xf16e81dce15b08f326220742020379b855b87df9",
				logoURI: "https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903": {
				symbol: "XEND",
				name: "XEND",
				decimals: 18,
				address: "0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903",
				logoURI: "https://tokens.1inch.io/0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903.png",
				tags: [
					"tokens"
				]
			},
			"0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37": {
				symbol: "MARSH",
				name: "UnmarshalToken",
				decimals: 18,
				address: "0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37",
				logoURI: "https://tokens.1inch.io/0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3d658390460295fb963f54dc0899cfb1c30776df": {
				symbol: "Coval",
				name: "CircuitsOfValue",
				decimals: 8,
				address: "0x3d658390460295fb963f54dc0899cfb1c30776df",
				logoURI: "https://tokens.1inch.io/0x3d658390460295fb963f54dc0899cfb1c30776df.png",
				tags: [
					"tokens"
				]
			},
			"0x7ff4169a6b5122b664c51c95727d87750ec07c84": {
				symbol: "10SET",
				name: "10Set Token",
				decimals: 18,
				address: "0x7ff4169a6b5122b664c51c95727d87750ec07c84",
				logoURI: "https://tokens.1inch.io/0x7ff4169a6b5122b664c51c95727d87750ec07c84.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x1de5e000c41c8d35b9f1f4985c23988f05831057": {
				symbol: "BNF",
				name: "BonFi",
				decimals: 18,
				address: "0x1de5e000c41c8d35b9f1f4985c23988f05831057",
				logoURI: "https://tokens.1inch.io/0x1de5e000c41c8d35b9f1f4985c23988f05831057.png",
				tags: [
					"tokens"
				]
			},
			"0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429": {
				symbol: "GLM",
				name: "Golem Network Token",
				decimals: 18,
				address: "0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429",
				logoURI: "https://tokens.1inch.io/0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x467bccd9d29f223bce8043b84e8c8b282827790f": {
				symbol: "TEL",
				name: "Telcoin",
				decimals: 2,
				address: "0x467bccd9d29f223bce8043b84e8c8b282827790f",
				logoURI: "https://tokens.1inch.io/0x467bccd9d29f223bce8043b84e8c8b282827790f.png",
				tags: [
					"tokens"
				]
			},
			"0x90de74265a416e1393a450752175aed98fe11517": {
				symbol: "UDT",
				name: "Unlock Discount Token",
				decimals: 18,
				address: "0x90de74265a416e1393a450752175aed98fe11517",
				logoURI: "https://tokens.1inch.io/0x90de74265a416e1393a450752175aed98fe11517.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x808507121b80c02388fad14726482e061b8da827": {
				symbol: "PENDLE",
				name: "Pendle",
				decimals: 18,
				address: "0x808507121b80c02388fad14726482e061b8da827",
				logoURI: "https://tokens.1inch.io/0x808507121b80c02388fad14726482e061b8da827.png",
				tags: [
					"tokens"
				]
			},
			"0x7a2bc711e19ba6aff6ce8246c546e8c4b4944dfd": {
				symbol: "WAXE",
				name: "WAX Economic Token",
				decimals: 8,
				address: "0x7a2bc711e19ba6aff6ce8246c546e8c4b4944dfd",
				logoURI: "https://tokens.1inch.io/0x7a2bc711e19ba6aff6ce8246c546e8c4b4944dfd.png",
				tags: [
					"tokens"
				]
			},
			"0x15b543e986b8c34074dfc9901136d9355a537e7e": {
				symbol: "STC",
				name: "Student Coin",
				decimals: 18,
				address: "0x15b543e986b8c34074dfc9901136d9355a537e7e",
				logoURI: "https://tokens.1inch.io/0x15b543e986b8c34074dfc9901136d9355a537e7e.png",
				tags: [
					"tokens"
				]
			},
			"0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4": {
				symbol: "ROUTE",
				name: "Route",
				decimals: 18,
				address: "0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4",
				logoURI: "https://tokens.1inch.io/0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x7c8155909cd385f120a56ef90728dd50f9ccbe52": {
				symbol: "NII",
				name: "Nahmii",
				decimals: 15,
				address: "0x7c8155909cd385f120a56ef90728dd50f9ccbe52",
				logoURI: "https://tokens.1inch.io/0x7c8155909cd385f120a56ef90728dd50f9ccbe52.png",
				tags: [
					"tokens"
				]
			},
			"0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787": {
				symbol: "PAID",
				name: "PAID Network",
				decimals: 18,
				address: "0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787",
				logoURI: "https://tokens.1inch.io/0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787.png",
				tags: [
					"tokens"
				]
			},
			"0x182f4c4c97cd1c24e1df8fc4c053e5c47bf53bef": {
				symbol: "TANGO",
				name: "keyTango Token",
				decimals: 18,
				address: "0x182f4c4c97cd1c24e1df8fc4c053e5c47bf53bef",
				logoURI: "https://tokens.1inch.io/0x182f4c4c97cd1c24e1df8fc4c053e5c47bf53bef.png",
				tags: [
					"tokens"
				]
			},
			"0x7bef710a5759d197ec0bf621c3df802c2d60d848": {
				symbol: "SHOPX",
				name: "SPLYT SHOPX",
				decimals: 18,
				address: "0x7bef710a5759d197ec0bf621c3df802c2d60d848",
				logoURI: "https://tokens.1inch.io/0x7bef710a5759d197ec0bf621c3df802c2d60d848.png",
				tags: [
					"tokens"
				]
			},
			"0x358aa737e033f34df7c54306960a38d09aabd523": {
				symbol: "ARES",
				name: "Ares Protocol",
				decimals: 18,
				address: "0x358aa737e033f34df7c54306960a38d09aabd523",
				logoURI: "https://tokens.1inch.io/0x358aa737e033f34df7c54306960a38d09aabd523.png",
				tags: [
					"tokens"
				]
			},
			"0x321c2fe4446c7c963dc41dd58879af648838f98d": {
				symbol: "CTX",
				name: "Cryptex",
				decimals: 18,
				address: "0x321c2fe4446c7c963dc41dd58879af648838f98d",
				logoURI: "https://tokens.1inch.io/0x321c2fe4446c7c963dc41dd58879af648838f98d.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198": {
				symbol: "BANK_BANKLESS",
				name: "Bankless Token",
				decimals: 18,
				address: "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
				logoURI: "https://tokens.1inch.io/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0b498ff89709d3838a063f1dfa463091f9801c2b": {
				symbol: "BTC2x-FLI",
				name: "BTC 2x Flexible Leverage Index",
				decimals: 18,
				address: "0x0b498ff89709d3838a063f1dfa463091f9801c2b",
				logoURI: "https://tokens.1inch.io/0x0b498ff89709d3838a063f1dfa463091f9801c2b.png",
				tags: [
					"tokens"
				]
			},
			"0x841fb148863454a3b3570f515414759be9091465": {
				symbol: "SHIH",
				name: "Shih Tzu",
				decimals: 18,
				address: "0x841fb148863454a3b3570f515414759be9091465",
				logoURI: "https://tokens.1inch.io/0x841fb148863454a3b3570f515414759be9091465.png",
				tags: [
					"tokens"
				]
			},
			"0xa2b4c0af19cc16a6cfacce81f192b024d625817d": {
				symbol: "KISHU",
				name: "Kishu Inu",
				decimals: 9,
				address: "0xa2b4c0af19cc16a6cfacce81f192b024d625817d",
				logoURI: "https://tokens.1inch.io/0xa2b4c0af19cc16a6cfacce81f192b024d625817d.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x389999216860ab8e0175387a0c90e5c52522c945": {
				symbol: "FEG",
				name: "FEGtoken",
				decimals: 9,
				address: "0x389999216860ab8e0175387a0c90e5c52522c945",
				logoURI: "https://tokens.1inch.io/0x389999216860ab8e0175387a0c90e5c52522c945.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xee9801669c6138e84bd50deb500827b776777d28": {
				symbol: "O3",
				name: "O3 Swap Token",
				decimals: 18,
				address: "0xee9801669c6138e84bd50deb500827b776777d28",
				logoURI: "https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png",
				tags: [
					"tokens"
				]
			},
			"0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b": {
				symbol: "SHIBAKEN",
				name: "ShibaKen.Finance",
				decimals: 0,
				address: "0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b",
				logoURI: "https://tokens.1inch.io/0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xb1191f691a355b43542bea9b8847bc73e7abb137": {
				symbol: "KIRO",
				name: "Kirobo",
				decimals: 18,
				address: "0xb1191f691a355b43542bea9b8847bc73e7abb137",
				logoURI: "https://tokens.1inch.io/0xb1191f691a355b43542bea9b8847bc73e7abb137.png",
				tags: [
					"tokens"
				]
			},
			"0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b": {
				symbol: "CVX",
				name: "Convex Token",
				decimals: 18,
				address: "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
				logoURI: "https://tokens.1inch.io/0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b.png",
				tags: [
					"tokens"
				]
			},
			"0xa3c4dc4a9ce2a6b40b57f25f8b50decc2c64dec2": {
				symbol: "SNFT",
				name: "SeedSwap Token",
				decimals: 18,
				address: "0xa3c4dc4a9ce2a6b40b57f25f8b50decc2c64dec2",
				logoURI: "https://tokens.1inch.io/0xa3c4dc4a9ce2a6b40b57f25f8b50decc2c64dec2.png",
				tags: [
					"tokens"
				]
			},
			"0xfeea0bdd3d07eb6fe305938878c0cadbfa169042": {
				symbol: "8PAY",
				name: "8PAY Network",
				decimals: 18,
				address: "0xfeea0bdd3d07eb6fe305938878c0cadbfa169042",
				logoURI: "https://tokens.1inch.io/0xfeea0bdd3d07eb6fe305938878c0cadbfa169042.png",
				tags: [
					"tokens"
				]
			},
			"0xde30da39c46104798bb5aa3fe8b9e0e1f348163f": {
				symbol: "GTC",
				name: "Gitcoin",
				decimals: 18,
				address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
				logoURI: "https://tokens.1inch.io/0xde30da39c46104798bb5aa3fe8b9e0e1f348163f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d": {
				symbol: "GTON",
				name: "Graviton",
				decimals: 18,
				address: "0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d",
				logoURI: "https://tokens.1inch.io/0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d_1.png",
				tags: [
					"tokens"
				]
			},
			"0xbc6da0fe9ad5f3b0d58160288917aa56653660e9": {
				symbol: "alUSD",
				name: "Alchemix USD",
				decimals: 18,
				address: "0xbc6da0fe9ad5f3b0d58160288917aa56653660e9",
				logoURI: "https://tokens.1inch.io/0xbc6da0fe9ad5f3b0d58160288917aa56653660e9.png",
				tags: [
					"tokens"
				]
			},
			"0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a": {
				symbol: "SARCO",
				name: "Sarcophagus",
				decimals: 18,
				address: "0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a",
				logoURI: "https://tokens.1inch.io/0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a.png",
				tags: [
					"tokens"
				]
			},
			"0x677ddbd918637e5f2c79e164d402454de7da8619": {
				symbol: "VUSD",
				name: "VUSD",
				decimals: 18,
				address: "0x677ddbd918637e5f2c79e164d402454de7da8619",
				logoURI: "https://tokens.1inch.io/0x677ddbd918637e5f2c79e164d402454de7da8619.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3": {
				symbol: "ELON",
				name: "Dogelon",
				decimals: 18,
				address: "0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3",
				logoURI: "https://tokens.1inch.io/0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3.png",
				tags: [
					"tokens"
				]
			},
			"0x0563dce613d559a47877ffd1593549fb9d3510d6": {
				symbol: "SUPERBID",
				name: "SuperBid",
				decimals: 18,
				address: "0x0563dce613d559a47877ffd1593549fb9d3510d6",
				logoURI: "https://tokens.1inch.io/0x0563dce613d559a47877ffd1593549fb9d3510d6.png",
				tags: [
					"tokens"
				]
			},
			"0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4": {
				symbol: "TONE",
				name: "TE-FOOD/TustChain",
				decimals: 18,
				address: "0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4",
				logoURI: "https://tokens.1inch.io/0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4.png",
				tags: [
					"tokens"
				]
			},
			"0x06a01a4d579479dd5d884ebf61a31727a3d8d442": {
				symbol: "Skey",
				name: "SmartKey",
				decimals: 8,
				address: "0x06a01a4d579479dd5d884ebf61a31727a3d8d442",
				logoURI: "https://tokens.1inch.io/0x06a01a4d579479dd5d884ebf61a31727a3d8d442.png",
				tags: [
					"tokens"
				]
			},
			"0xeb58343b36c7528f23caae63a150240241310049": {
				symbol: "NBU",
				name: "Nimbus",
				decimals: 18,
				address: "0xeb58343b36c7528f23caae63a150240241310049",
				logoURI: "https://tokens.1inch.io/0xeb58343b36c7528f23caae63a150240241310049.png",
				tags: [
					"tokens"
				]
			},
			"0x27c70cd1946795b66be9d954418546998b546634": {
				symbol: "LEASH",
				name: "DOGE KILLER",
				decimals: 18,
				address: "0x27c70cd1946795b66be9d954418546998b546634",
				logoURI: "https://tokens.1inch.io/0x27c70cd1946795b66be9d954418546998b546634.png",
				tags: [
					"tokens"
				]
			},
			"0x0abdace70d3790235af448c88547603b945604ea": {
				symbol: "DNT",
				name: "district0x Network Token",
				decimals: 18,
				address: "0x0abdace70d3790235af448c88547603b945604ea",
				logoURI: "https://tokens.1inch.io/0x0abdace70d3790235af448c88547603b945604ea.png",
				tags: [
					"tokens"
				]
			},
			"0xdef1fac7bf08f173d286bbbdcbeeade695129840": {
				symbol: "DEFT",
				name: "Defi Factory Token",
				decimals: 18,
				address: "0xdef1fac7bf08f173d286bbbdcbeeade695129840",
				logoURI: "https://tokens.1inch.io/0xdef1fac7bf08f173d286bbbdcbeeade695129840.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x9695e0114e12c0d3a3636fab5a18e6b737529023": {
				symbol: "DFYN",
				name: "DFYN Token",
				decimals: 18,
				address: "0x9695e0114e12c0d3a3636fab5a18e6b737529023",
				logoURI: "https://tokens.1inch.io/0x9695e0114e12c0d3a3636fab5a18e6b737529023.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x72e364f2abdc788b7e918bc238b21f109cd634d7": {
				symbol: "MVI",
				name: "Metaverse Index",
				decimals: 18,
				address: "0x72e364f2abdc788b7e918bc238b21f109cd634d7",
				logoURI: "https://tokens.1inch.io/0x72e364f2abdc788b7e918bc238b21f109cd634d7.png",
				tags: [
					"tokens"
				]
			},
			"0x3301ee63fb29f863f2333bd4466acb46cd8323e6": {
				symbol: "AKITA",
				name: "Akita Inu",
				decimals: 18,
				address: "0x3301ee63fb29f863f2333bd4466acb46cd8323e6",
				logoURI: "https://tokens.1inch.io/0x3301ee63fb29f863f2333bd4466acb46cd8323e6.png",
				tags: [
					"tokens"
				]
			},
			"0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d": {
				symbol: "LQTY",
				name: "LQTY",
				decimals: 18,
				address: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
				logoURI: "https://tokens.1inch.io/0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x87de305311d5788e8da38d19bb427645b09cb4e5": {
				symbol: "VRX",
				name: "Verox",
				decimals: 18,
				address: "0x87de305311d5788e8da38d19bb427645b09cb4e5",
				logoURI: "https://tokens.1inch.io/0x87de305311d5788e8da38d19bb427645b09cb4e5.png",
				tags: [
					"tokens"
				]
			},
			"0xf65b5c5104c4fafd4b709d9d60a185eae063276c": {
				symbol: "TRU_Truebit",
				name: "Truebit",
				decimals: 18,
				address: "0xf65b5c5104c4fafd4b709d9d60a185eae063276c",
				logoURI: "https://tokens.1inch.io/0xf65b5c5104c4fafd4b709d9d60a185eae063276c.png",
				tags: [
					"tokens"
				]
			},
			"0x9be89d2a4cd102d8fecc6bf9da793be995c22541": {
				symbol: "BBTC",
				name: "Binance Wrapped BTC",
				decimals: 8,
				address: "0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
				logoURI: "https://tokens.1inch.io/0x9be89d2a4cd102d8fecc6bf9da793be995c22541.png",
				tags: [
					"tokens"
				]
			},
			"0x944eee930933be5e23b690c8589021ec8619a301": {
				symbol: "MUNCH",
				name: "MUNCH Token",
				decimals: 9,
				address: "0x944eee930933be5e23b690c8589021ec8619a301",
				logoURI: "https://tokens.1inch.io/0x944eee930933be5e23b690c8589021ec8619a301.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xdc349913d53b446485e98b76800b6254f43df695": {
				symbol: "BEZOGE",
				name: "Bezoge Earth",
				decimals: 9,
				address: "0xdc349913d53b446485e98b76800b6254f43df695",
				logoURI: "https://tokens.1inch.io/0xdc349913d53b446485e98b76800b6254f43df695.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x1681bcb589b3cfcf0c0616b0ce9b19b240643dc1": {
				symbol: "ISLE",
				name: "Island",
				decimals: 9,
				address: "0x1681bcb589b3cfcf0c0616b0ce9b19b240643dc1",
				logoURI: "https://tokens.1inch.io/0x1681bcb589b3cfcf0c0616b0ce9b19b240643dc1.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xa150db9b1fa65b44799d4dd949d922c0a33ee606": {
				symbol: "DRC_1",
				name: "Digital Reserve Currency",
				decimals: 0,
				address: "0xa150db9b1fa65b44799d4dd949d922c0a33ee606",
				logoURI: "https://tokens.1inch.io/0xa150db9b1fa65b44799d4dd949d922c0a33ee606.png",
				tags: [
					"tokens"
				]
			},
			"0xe047705117eb07e712c3d684f5b18e74577e83ac": {
				symbol: "BCP",
				name: "BitcashPay",
				decimals: 8,
				address: "0xe047705117eb07e712c3d684f5b18e74577e83ac",
				logoURI: "https://tokens.1inch.io/0xe047705117eb07e712c3d684f5b18e74577e83ac.png",
				tags: [
					"tokens"
				]
			},
			"0x15874d65e649880c2614e7a480cb7c9a55787ff6": {
				symbol: "eMax",
				name: "EthereumMax",
				decimals: 18,
				address: "0x15874d65e649880c2614e7a480cb7c9a55787ff6",
				logoURI: "https://tokens.1inch.io/0x15874d65e649880c2614e7a480cb7c9a55787ff6.png",
				tags: [
					"tokens"
				]
			},
			"0x6f40d4a6237c257fff2db00fa0510deeecd303eb": {
				symbol: "INST",
				name: "Instadapp",
				decimals: 18,
				address: "0x6f40d4a6237c257fff2db00fa0510deeecd303eb",
				logoURI: "https://tokens.1inch.io/0x6f40d4a6237c257fff2db00fa0510deeecd303eb.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x456d8f0d25a4e787ee60c401f8b963a465148f70": {
				symbol: "CAVA",
				name: "Cavapoo",
				decimals: 9,
				address: "0x456d8f0d25a4e787ee60c401f8b963a465148f70",
				logoURI: "https://tokens.1inch.io/0x456d8f0d25a4e787ee60c401f8b963a465148f70.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x8cb924583681cbfe487a62140a994a49f833c244": {
				symbol: "SWAPP",
				name: "Swapp Token",
				decimals: 18,
				address: "0x8cb924583681cbfe487a62140a994a49f833c244",
				logoURI: "https://tokens.1inch.io/0x8cb924583681cbfe487a62140a994a49f833c244.png",
				tags: [
					"tokens"
				]
			},
			"0x10633216e7e8281e33c86f02bf8e565a635d9770": {
				symbol: "DVI",
				name: "Dvision",
				decimals: 18,
				address: "0x10633216e7e8281e33c86f02bf8e565a635d9770",
				logoURI: "https://tokens.1inch.io/0x10633216e7e8281e33c86f02bf8e565a635d9770.png",
				tags: [
					"tokens"
				]
			},
			"0xcadc0acd4b445166f12d2c07eac6e2544fbe2eef": {
				symbol: "CADC",
				name: "CAD Coin",
				decimals: 18,
				address: "0xcadc0acd4b445166f12d2c07eac6e2544fbe2eef",
				logoURI: "https://tokens.1inch.io/0xcadc0acd4b445166f12d2c07eac6e2544fbe2eef.png",
				tags: [
					"tokens"
				]
			},
			"0x1321f1f1aa541a56c31682c57b80ecfccd9bb288": {
				symbol: "ARCX",
				name: "ARCx Governance Token",
				decimals: 18,
				address: "0x1321f1f1aa541a56c31682c57b80ecfccd9bb288",
				logoURI: "https://tokens.1inch.io/0xed30dd7e50edf3581ad970efc5d9379ce2614adb.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978": {
				symbol: "DFI",
				name: "Amun DeFi Index",
				decimals: 18,
				address: "0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978",
				logoURI: "https://tokens.1inch.io/0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978.png",
				tags: [
					"tokens"
				]
			},
			"0x8798249c2e607446efb7ad49ec89dd1865ff4272": {
				symbol: "xSUSHI",
				name: "SushiBar",
				decimals: 18,
				address: "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
				logoURI: "https://tokens.1inch.io/0x8798249c2e607446efb7ad49ec89dd1865ff4272.png",
				tags: [
					"tokens"
				]
			},
			"0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096": {
				symbol: "Auction",
				name: "Bounce Token",
				decimals: 18,
				address: "0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096",
				logoURI: "https://tokens.1inch.io/0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096.png",
				tags: [
					"tokens"
				]
			},
			"0x5b7533812759b45c2b44c19e320ba2cd2681b542": {
				symbol: "AGIX",
				name: "SingularityNET Token",
				decimals: 8,
				address: "0x5b7533812759b45c2b44c19e320ba2cd2681b542",
				logoURI: "https://tokens.1inch.io/0x5b7533812759b45c2b44c19e320ba2cd2681b542.png",
				tags: [
					"tokens"
				]
			},
			"0x6595b8fd9c920c81500dca94e53cdc712513fb1f": {
				symbol: "OLY",
				name: "Olyseum",
				decimals: 18,
				address: "0x6595b8fd9c920c81500dca94e53cdc712513fb1f",
				logoURI: "https://tokens.1inch.io/0x6595b8fd9c920c81500dca94e53cdc712513fb1f.png",
				tags: [
					"tokens"
				]
			},
			"0xc52c326331e9ce41f04484d3b5e5648158028804": {
				symbol: "ZCX",
				name: "ZEN Exchange Token",
				decimals: 18,
				address: "0xc52c326331e9ce41f04484d3b5e5648158028804",
				logoURI: "https://tokens.1inch.io/0xc52c326331e9ce41f04484d3b5e5648158028804.png",
				tags: [
					"tokens"
				]
			},
			"0x3431f91b3a388115f00c5ba9fdb899851d005fb5": {
				symbol: "GERO",
				name: "GeroWallet",
				decimals: 18,
				address: "0x3431f91b3a388115f00c5ba9fdb899851d005fb5",
				logoURI: "https://tokens.1inch.io/0x3431f91b3a388115f00c5ba9fdb899851d005fb5.png",
				tags: [
					"tokens"
				]
			},
			"0x474021845c4643113458ea4414bdb7fb74a01a77": {
				symbol: "UNO",
				name: "UnoRe",
				decimals: 18,
				address: "0x474021845c4643113458ea4414bdb7fb74a01a77",
				logoURI: "https://tokens.1inch.io/0x474021845c4643113458ea4414bdb7fb74a01a77.png",
				tags: [
					"tokens"
				]
			},
			"0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc": {
				symbol: "CRD",
				name: "CryptalDash",
				decimals: 18,
				address: "0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc",
				logoURI: "https://tokens.1inch.io/0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc.png",
				tags: [
					"tokens"
				]
			},
			"0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13": {
				symbol: "STAK",
				name: "Jigstack",
				decimals: 18,
				address: "0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13",
				logoURI: "https://tokens.1inch.io/0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13.png",
				tags: [
					"tokens"
				]
			},
			"0x33349b282065b0284d756f0577fb39c158f935e6": {
				symbol: "MPL",
				name: "Maple Token",
				decimals: 18,
				address: "0x33349b282065b0284d756f0577fb39c158f935e6",
				logoURI: "https://tokens.1inch.io/0x33349b282065b0284d756f0577fb39c158f935e6.png",
				tags: [
					"tokens"
				]
			},
			"0x6243d8cea23066d098a15582d81a598b4e8391f4": {
				symbol: "FLX",
				name: "Flex Ungovernance Token",
				decimals: 18,
				address: "0x6243d8cea23066d098a15582d81a598b4e8391f4",
				logoURI: "https://tokens.1inch.io/0x6243d8cea23066d098a15582d81a598b4e8391f4.png",
				tags: [
					"tokens"
				]
			},
			"0xc53342fd7575f572b0ff4569e31941a5b821ac76": {
				symbol: "ETHV",
				name: "ETH Volatility Index",
				decimals: 18,
				address: "0xc53342fd7575f572b0ff4569e31941a5b821ac76",
				logoURI: "https://tokens.1inch.io/0xc53342fd7575f572b0ff4569e31941a5b821ac76.png",
				tags: [
					"tokens"
				]
			},
			"0x3a707d56d538e85b783e8ce12b346e7fb6511f90": {
				symbol: "iETHV",
				name: "Inverse ETH Volatility Index",
				decimals: 18,
				address: "0x3a707d56d538e85b783e8ce12b346e7fb6511f90",
				logoURI: "https://tokens.1inch.io/0x3a707d56d538e85b783e8ce12b346e7fb6511f90.png",
				tags: [
					"tokens"
				]
			},
			"0x51b0bcbeff204b39ce792d1e16767fe6f7631970": {
				symbol: "BTCV",
				name: "BTC Volatility Index",
				decimals: 18,
				address: "0x51b0bcbeff204b39ce792d1e16767fe6f7631970",
				logoURI: "https://tokens.1inch.io/0x51b0bcbeff204b39ce792d1e16767fe6f7631970.png",
				tags: [
					"tokens"
				]
			},
			"0x2590f1fd14ef8bb0a46c7a889c4cbc146510f9c3": {
				symbol: "iBTCV",
				name: "Inverse BTC Volatility Index",
				decimals: 18,
				address: "0x2590f1fd14ef8bb0a46c7a889c4cbc146510f9c3",
				logoURI: "https://tokens.1inch.io/0x2590f1fd14ef8bb0a46c7a889c4cbc146510f9c3.png",
				tags: [
					"tokens"
				]
			},
			"0x69fa8e7f6bf1ca1fb0de61e1366f7412b827cc51": {
				symbol: "NRCH",
				name: "EnreachDAO",
				decimals: 9,
				address: "0x69fa8e7f6bf1ca1fb0de61e1366f7412b827cc51",
				logoURI: "https://tokens.1inch.io/0x69fa8e7f6bf1ca1fb0de61e1366f7412b827cc51.png",
				tags: [
					"tokens"
				]
			},
			"0xfb7b4564402e5500db5bb6d63ae671302777c75a": {
				symbol: "DEXT",
				name: "DEXTools",
				decimals: 18,
				address: "0xfb7b4564402e5500db5bb6d63ae671302777c75a",
				logoURI: "https://tokens.1inch.io/0x26ce25148832c04f3d7f26f32478a9fe55197166.png",
				tags: [
					"tokens"
				]
			},
			"0x853bb55c1f469902f088a629db8c8803a9be3857": {
				symbol: "one1INCH",
				name: "Stable 1INCH",
				decimals: 18,
				address: "0x853bb55c1f469902f088a629db8c8803a9be3857",
				logoURI: "https://tokens.1inch.io/0x853bb55c1f469902f088a629db8c8803a9be3857.png",
				tags: [
					"tokens"
				]
			},
			"0x75d12e4f91df721fafcae4c6cd1d5280381370ac": {
				symbol: "MYOBU",
				name: "Myōbu",
				decimals: 9,
				address: "0x75d12e4f91df721fafcae4c6cd1d5280381370ac",
				logoURI: "https://tokens.1inch.io/0x75d12e4f91df721fafcae4c6cd1d5280381370ac.png",
				tags: [
					"tokens"
				]
			},
			"0xdddddd4301a082e62e84e43f474f044423921918": {
				symbol: "DVF",
				name: "DeversiFi Token",
				decimals: 18,
				address: "0xdddddd4301a082e62e84e43f474f044423921918",
				logoURI: "https://tokens.1inch.io/0xdddddd4301a082e62e84e43f474f044423921918.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x6b4c7a5e3f0b99fcd83e9c089bddd6c7fce5c611": {
				symbol: "MM_2",
				name: "Million",
				decimals: 18,
				address: "0x6b4c7a5e3f0b99fcd83e9c089bddd6c7fce5c611",
				logoURI: "https://tokens.1inch.io/0x6b4c7a5e3f0b99fcd83e9c089bddd6c7fce5c611.png",
				tags: [
					"tokens"
				]
			},
			"0xc581b735a1688071a1746c968e0798d642ede491": {
				symbol: "EURT",
				name: "Euro Tether",
				decimals: 6,
				address: "0xc581b735a1688071a1746c968e0798d642ede491",
				logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
				tags: [
					"tokens"
				]
			},
			"0x72e5390edb7727e3d4e3436451dadaff675dbcc0": {
				symbol: "HANU",
				name: "Hanu Yokia",
				decimals: 12,
				address: "0x72e5390edb7727e3d4e3436451dadaff675dbcc0",
				logoURI: "https://tokens.1inch.io/0x72e5390edb7727e3d4e3436451dadaff675dbcc0.png",
				tags: [
					"tokens"
				]
			},
			"0x76417e660df3e5c90c0361674c192da152a806e4": {
				symbol: "zUSD",
				name: "Zerogoki USD",
				decimals: 18,
				address: "0x76417e660df3e5c90c0361674c192da152a806e4",
				logoURI: "https://tokens.1inch.io/0x76417e660df3e5c90c0361674c192da152a806e4.png",
				tags: [
					"tokens"
				]
			},
			"0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24": {
				symbol: "STARL",
				name: "StarLink",
				decimals: 18,
				address: "0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24",
				logoURI: "https://tokens.1inch.io/0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24.png",
				tags: [
					"tokens"
				]
			},
			"0x70d2b7c19352bb76e4409858ff5746e500f2b67c": {
				symbol: "UPI",
				name: "Pawtocol Network UPI Token",
				decimals: 18,
				address: "0x70d2b7c19352bb76e4409858ff5746e500f2b67c",
				logoURI: "https://tokens.1inch.io/0x70d2b7c19352bb76e4409858ff5746e500f2b67c.png",
				tags: [
					"tokens"
				]
			},
			"0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559": {
				symbol: "EDEN",
				name: "Eden",
				decimals: 18,
				address: "0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559",
				logoURI: "https://tokens.1inch.io/0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xe1030b48b2033314979143766d7dc1f40ef8ce11": {
				symbol: "PEEPS",
				name: "The People’s Coin",
				decimals: 18,
				address: "0xe1030b48b2033314979143766d7dc1f40ef8ce11",
				logoURI: "https://tokens.1inch.io/0xe1030b48b2033314979143766d7dc1f40ef8ce11.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x515d7e9d75e2b76db60f8a051cd890eba23286bc": {
				symbol: "GDAO",
				name: "Governor",
				decimals: 18,
				address: "0x515d7e9d75e2b76db60f8a051cd890eba23286bc",
				logoURI: "https://tokens.1inch.io/0x515d7e9d75e2b76db60f8a051cd890eba23286bc.png",
				tags: [
					"tokens"
				]
			},
			"0xb26631c6dda06ad89b93c71400d25692de89c068": {
				symbol: "MINDS",
				name: "Minds",
				decimals: 18,
				address: "0xb26631c6dda06ad89b93c71400d25692de89c068",
				logoURI: "https://tokens.1inch.io/0xb26631c6dda06ad89b93c71400d25692de89c068.png",
				tags: [
					"tokens"
				]
			},
			"0x5166e09628b696285e3a151e84fb977736a83575": {
				symbol: "VOL",
				name: "Volatility Protocol Token",
				decimals: 18,
				address: "0x5166e09628b696285e3a151e84fb977736a83575",
				logoURI: "https://tokens.1inch.io/0x5166e09628b696285e3a151e84fb977736a83575.png",
				tags: [
					"tokens"
				]
			},
			"0x06f3c323f0238c72bf35011071f2b5b7f43a054c": {
				symbol: "MASQ",
				name: "MASQ",
				decimals: 18,
				address: "0x06f3c323f0238c72bf35011071f2b5b7f43a054c",
				logoURI: "https://tokens.1inch.io/0x06f3c323f0238c72bf35011071f2b5b7f43a054c.png",
				tags: [
					"tokens"
				]
			},
			"0x106552c11272420aad5d7e94f8acab9095a6c952": {
				symbol: "KEANU",
				name: "Keanu Inu",
				decimals: 9,
				address: "0x106552c11272420aad5d7e94f8acab9095a6c952",
				logoURI: "https://tokens.1inch.io/0x106552c11272420aad5d7e94f8acab9095a6c952.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xddb3422497e61e13543bea06989c0789117555c5": {
				symbol: "COTI",
				name: "COTI Token",
				decimals: 18,
				address: "0xddb3422497e61e13543bea06989c0789117555c5",
				logoURI: "https://tokens.1inch.io/0xddb3422497e61e13543bea06989c0789117555c5.png",
				tags: [
					"tokens"
				]
			},
			"0x92d6c1e31e14520e676a687f0a93788b716beff5": {
				symbol: "DYDX",
				name: "dYdX",
				decimals: 18,
				address: "0x92d6c1e31e14520e676a687f0a93788b716beff5",
				logoURI: "https://assets.coingecko.com/coins/images/17500/large/hjnIm9bV.jpg?1628009360",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016": {
				symbol: "1MIL",
				name: "1MILNFT",
				decimals: 18,
				address: "0xa4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016",
				logoURI: "https://tokens.1inch.io/0xa4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016.png",
				tags: [
					"tokens"
				]
			},
			"0xeb494890465f49c2b94457d9b61811392e5b1fea": {
				symbol: "SLAB",
				name: "SLINK LABS",
				decimals: 9,
				address: "0xeb494890465f49c2b94457d9b61811392e5b1fea",
				logoURI: "https://tokens.1inch.io/0xeb494890465f49c2b94457d9b61811392e5b1fea.png",
				tags: [
					"tokens"
				]
			},
			"0x25e1474170c4c0aa64fa98123bdc8db49d7802fa": {
				symbol: "BID",
				name: "Bidao",
				decimals: 18,
				address: "0x25e1474170c4c0aa64fa98123bdc8db49d7802fa",
				logoURI: "https://tokens.1inch.io/0x25e1474170c4c0aa64fa98123bdc8db49d7802fa.png",
				tags: [
					"tokens"
				]
			},
			"0x61107a409fffe1965126aa456af679719695c69c": {
				symbol: "UMI",
				name: "UmiToken",
				decimals: 18,
				address: "0x61107a409fffe1965126aa456af679719695c69c",
				logoURI: "https://tokens.1inch.io/0x61107a409fffe1965126aa456af679719695c69c.png",
				tags: [
					"tokens"
				]
			},
			"0x738865301a9b7dd80dc3666dd48cf034ec42bdda": {
				symbol: "AGRS",
				name: "Agoras Token",
				decimals: 8,
				address: "0x738865301a9b7dd80dc3666dd48cf034ec42bdda",
				logoURI: "https://tokens.1inch.io/0x738865301a9b7dd80dc3666dd48cf034ec42bdda.png",
				tags: [
					"tokens"
				]
			},
			"0x0af55d5ff28a3269d69b98680fd034f115dd53ac": {
				symbol: "BSL",
				name: "BankSocial",
				decimals: 8,
				address: "0x0af55d5ff28a3269d69b98680fd034f115dd53ac",
				logoURI: "https://tokens.1inch.io/0x0af55d5ff28a3269d69b98680fd034f115dd53ac.png",
				tags: [
					"tokens"
				]
			},
			"0xd85ad783cc94bd04196a13dc042a3054a9b52210": {
				symbol: "HAKA",
				name: "TribeOne",
				decimals: 18,
				address: "0xd85ad783cc94bd04196a13dc042a3054a9b52210",
				logoURI: "https://tokens.1inch.io/0xd85ad783cc94bd04196a13dc042a3054a9b52210.png",
				tags: [
					"tokens"
				]
			},
			"0x62dc4817588d53a056cbbd18231d91ffccd34b2a": {
				symbol: "DHV",
				name: "DeHive.finance",
				decimals: 18,
				address: "0x62dc4817588d53a056cbbd18231d91ffccd34b2a",
				logoURI: "https://tokens.1inch.io/0x62dc4817588d53a056cbbd18231d91ffccd34b2a.png",
				tags: [
					"tokens"
				]
			},
			"0x19042021329fddcfbea5f934fb5b2670c91f7d20": {
				symbol: "TMM",
				name: "Take My Muffin",
				decimals: 6,
				address: "0x19042021329fddcfbea5f934fb5b2670c91f7d20",
				logoURI: "https://tokens.1inch.io/0x19042021329fddcfbea5f934fb5b2670c91f7d20.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05": {
				symbol: "GEL",
				name: "Gelato Network Token",
				decimals: 18,
				address: "0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05",
				logoURI: "https://tokens.1inch.io/0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa64dfe8d86963151e6496bee513e366f6e42ed79": {
				symbol: "GOKU",
				name: "Goku Inu",
				decimals: 9,
				address: "0xa64dfe8d86963151e6496bee513e366f6e42ed79",
				logoURI: "https://tokens.1inch.io/0xa64dfe8d86963151e6496bee513e366f6e42ed79.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xe94b97b6b43639e238c851a7e693f50033efd75c": {
				symbol: "RNBW",
				name: "Rainbow Token",
				decimals: 18,
				address: "0xe94b97b6b43639e238c851a7e693f50033efd75c",
				logoURI: "https://tokens.1inch.io/0xe94b97b6b43639e238c851a7e693f50033efd75c.png",
				tags: [
					"tokens"
				]
			},
			"0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3": {
				symbol: "MIM",
				name: "Magic Internet Money",
				decimals: 18,
				address: "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3",
				logoURI: "https://tokens.1inch.io/0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3.png",
				tags: [
					"tokens"
				]
			},
			"0x090185f2135308bad17527004364ebcc2d37e5f6": {
				symbol: "SPELL",
				name: "Spell Token",
				decimals: 18,
				address: "0x090185f2135308bad17527004364ebcc2d37e5f6",
				logoURI: "https://tokens.1inch.io/0x090185f2135308bad17527004364ebcc2d37e5f6.png",
				tags: [
					"tokens"
				]
			},
			"0xde5ed76e7c05ec5e4572cfc88d1acea165109e44": {
				symbol: "DEUS",
				name: "DEUS",
				decimals: 18,
				address: "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44",
				logoURI: "https://tokens.1inch.io/0xde5ed76e7c05ec5e4572cfc88d1acea165109e44.png",
				tags: [
					"tokens"
				]
			},
			"0xf009f5531de69067435e32c4b9d36077f4c4a673": {
				symbol: "UNV",
				name: "Unvest",
				decimals: 18,
				address: "0xf009f5531de69067435e32c4b9d36077f4c4a673",
				logoURI: "https://tokens.1inch.io/0xf009f5531de69067435e32c4b9d36077f4c4a673.png",
				tags: [
					"tokens"
				]
			},
			"0xc221b7e65ffc80de234bbb6667abdd46593d34f0": {
				symbol: "wCFG",
				name: "Wrapped Centrifuge",
				decimals: 18,
				address: "0xc221b7e65ffc80de234bbb6667abdd46593d34f0",
				logoURI: "https://tokens.1inch.io/0xc221b7e65ffc80de234bbb6667abdd46593d34f0.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0": {
				symbol: "wstETH",
				name: "Wrapped liquid staked Ether 2.0",
				decimals: 18,
				address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
				logoURI: "https://tokens.1inch.io/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf50a07e4ff052a14f3f608da8936d8ae0ed5be50": {
				symbol: "FLOKIPUP",
				name: "Floki Pup",
				decimals: 9,
				address: "0xf50a07e4ff052a14f3f608da8936d8ae0ed5be50",
				logoURI: "https://tokens.1inch.io/0xf50a07e4ff052a14f3f608da8936d8ae0ed5be50.png",
				tags: [
					"tokens"
				]
			},
			"0xaecc217a749c2405b5ebc9857a16d58bdc1c367f": {
				symbol: "PAWTH",
				name: "Pawthereum",
				decimals: 9,
				address: "0xaecc217a749c2405b5ebc9857a16d58bdc1c367f",
				logoURI: "https://tokens.1inch.io/0xaecc217a749c2405b5ebc9857a16d58bdc1c367f.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x949d48eca67b17269629c7194f4b727d4ef9e5d6": {
				symbol: "MC",
				name: "Merit Circle",
				decimals: 18,
				address: "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
				logoURI: "https://tokens.1inch.io/0x949d48eca67b17269629c7194f4b727d4ef9e5d6.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6": {
				symbol: "sBTC",
				name: "Synth sBTC",
				decimals: 18,
				address: "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6",
				logoURI: "https://tokens.1inch.io/0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6.png",
				tags: [
					"tokens"
				]
			},
			"0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb": {
				symbol: "sETH",
				name: "Synth sETH",
				decimals: 18,
				address: "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb",
				logoURI: "https://tokens.1inch.io/0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb.png",
				tags: [
					"tokens"
				]
			},
			"0x514cdb9cd8a2fb2bdcf7a3b8ddd098caf466e548": {
				symbol: "REDPANDA",
				name: "Red Panda",
				decimals: 9,
				address: "0x514cdb9cd8a2fb2bdcf7a3b8ddd098caf466e548",
				logoURI: "https://tokens.1inch.io/0x514cdb9cd8a2fb2bdcf7a3b8ddd098caf466e548.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xc50ef449171a51fbeafd7c562b064b6471c36caa": {
				symbol: "ZINU",
				name: "Zombie Inu",
				decimals: 9,
				address: "0xc50ef449171a51fbeafd7c562b064b6471c36caa",
				logoURI: "https://tokens.1inch.io/0xc50ef449171a51fbeafd7c562b064b6471c36caa.png",
				tags: [
					"tokens"
				]
			},
			"0x0c3685559af6f3d20c501b1076a8056a0a14426a": {
				symbol: "miniSAITAMA",
				name: "mini SAITAMA",
				decimals: 9,
				address: "0x0c3685559af6f3d20c501b1076a8056a0a14426a",
				logoURI: "https://tokens.1inch.io/0x0c3685559af6f3d20c501b1076a8056a0a14426a.png",
				tags: [
					"tokens"
				]
			},
			"0x24e89bdf2f65326b94e36978a7edeac63623dafa": {
				symbol: "TKING",
				name: "Tiger King",
				decimals: 18,
				address: "0x24e89bdf2f65326b94e36978a7edeac63623dafa",
				logoURI: "https://tokens.1inch.io/0x24e89bdf2f65326b94e36978a7edeac63623dafa.png",
				tags: [
					"tokens"
				]
			},
			"0xaaaaaa20d9e0e2461697782ef11675f668207961": {
				symbol: "AURORA",
				name: "Aurora",
				decimals: 18,
				address: "0xaaaaaa20d9e0e2461697782ef11675f668207961",
				logoURI: "https://tokens.1inch.io/0xaaaaaa20d9e0e2461697782ef11675f668207961.png",
				tags: [
					"tokens"
				]
			},
			"0xed0889f7e1c7c7267407222be277e1f1ef4d4892": {
				symbol: "MEL",
				name: "Melalie",
				decimals: 18,
				address: "0xed0889f7e1c7c7267407222be277e1f1ef4d4892",
				logoURI: "https://tokens.1inch.io/0xed0889f7e1c7c7267407222be277e1f1ef4d4892.png",
				tags: [
					"tokens"
				]
			},
			"0xc18360217d8f7ab5e7c516566761ea12ce7f9d72": {
				symbol: "ENS",
				name: "Ethereum Name Service",
				decimals: 18,
				eip2612: true,
				address: "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72",
				logoURI: "https://tokens.1inch.io/0xc18360217d8f7ab5e7c516566761ea12ce7f9d72.png",
				tags: [
					"tokens"
				]
			},
			"0xf14b9adf84812ba463799357f4dc716b4384010b": {
				symbol: "PP",
				name: "Pension Plan",
				decimals: 8,
				address: "0xf14b9adf84812ba463799357f4dc716b4384010b",
				logoURI: "https://tokens.1inch.io/0xf14b9adf84812ba463799357f4dc716b4384010b.png",
				tags: [
					"tokens"
				]
			},
			"0xfb40e79e56cc7d406707b66c4fd175e07eb2ae3c": {
				symbol: "ROTTS",
				name: "ROTTSCHILD.com",
				decimals: 9,
				address: "0xfb40e79e56cc7d406707b66c4fd175e07eb2ae3c",
				logoURI: "https://tokens.1inch.io/0xfb40e79e56cc7d406707b66c4fd175e07eb2ae3c.png",
				tags: [
					"tokens"
				]
			},
			"0x28c5805b64d163588a909012a628b5a03c1041f9": {
				symbol: "CHOPPER",
				name: "CHOPPER INU",
				decimals: 9,
				address: "0x28c5805b64d163588a909012a628b5a03c1041f9",
				logoURI: "https://tokens.1inch.io/0x28c5805b64d163588a909012a628b5a03c1041f9.png",
				tags: [
					"tokens"
				]
			},
			"0x37fe0f067fa808ffbdd12891c0858532cfe7361d": {
				symbol: "CIV",
				name: "Civilization",
				decimals: 18,
				address: "0x37fe0f067fa808ffbdd12891c0858532cfe7361d",
				logoURI: "https://tokens.1inch.io/0x37fe0f067fa808ffbdd12891c0858532cfe7361d.png",
				tags: [
					"tokens"
				]
			},
			"0xf32aa187d5bc16a2c02a6afb7df1459d0d107574": {
				symbol: "Inu",
				name: "Hachiko Inu",
				decimals: 18,
				address: "0xf32aa187d5bc16a2c02a6afb7df1459d0d107574",
				logoURI: "https://tokens.1inch.io/0xf32aa187d5bc16a2c02a6afb7df1459d0d107574.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xc08512927d12348f6620a698105e1baac6ecd911": {
				symbol: "GYEN",
				name: "GMO JPY",
				decimals: 6,
				address: "0xc08512927d12348f6620a698105e1baac6ecd911",
				logoURI: "https://tokens.1inch.io/0xc08512927d12348f6620a698105e1baac6ecd911.png",
				tags: [
					"tokens"
				]
			},
			"0xcafe001067cdef266afb7eb5a286dcfd277f3de5": {
				symbol: "PSP",
				name: "ParaSwap",
				decimals: 18,
				eip2612: true,
				address: "0xcafe001067cdef266afb7eb5a286dcfd277f3de5",
				logoURI: "https://tokens.1inch.io/0xcafe001067cdef266afb7eb5a286dcfd277f3de5.png",
				tags: [
					"tokens"
				]
			},
			"0xbb1ee07d6c7baeb702949904080eb61f5d5e7732": {
				symbol: "DINU",
				name: "Dogey-Inu",
				decimals: 18,
				address: "0xbb1ee07d6c7baeb702949904080eb61f5d5e7732",
				logoURI: "https://tokens.1inch.io/0xbb1ee07d6c7baeb702949904080eb61f5d5e7732.png",
				tags: [
					"tokens"
				]
			},
			"0x582d872a1b094fc48f5de31d3b73f2d9be47def1": {
				symbol: "TONCOIN",
				name: "Wrapped TON Coin",
				decimals: 9,
				address: "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
				logoURI: "https://tokens.1inch.io/0x582d872a1b094fc48f5de31d3b73f2d9be47def1.png",
				tags: [
					"tokens"
				]
			},
			"0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8": {
				symbol: "HOKK",
				name: "Hokkaido Inu",
				decimals: 18,
				address: "0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8",
				logoURI: "https://tokens.1inch.io/0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8.png",
				tags: [
					"tokens"
				]
			},
			"0x4104b135dbc9609fc1a9490e61369036497660c8": {
				symbol: "APW",
				name: "APWine Token",
				decimals: 18,
				address: "0x4104b135dbc9609fc1a9490e61369036497660c8",
				logoURI: "https://tokens.1inch.io/0x4104b135dbc9609fc1a9490e61369036497660c8.png",
				tags: [
					"tokens"
				]
			},
			"0xae78736cd615f374d3085123a210448e74fc6393": {
				symbol: "rETH",
				name: "Rocket Pool ETH",
				decimals: 18,
				address: "0xae78736cd615f374d3085123a210448e74fc6393",
				logoURI: "https://tokens.1inch.io/0xae78736cd615f374d3085123a210448e74fc6393.png",
				tags: [
					"tokens"
				]
			},
			"0x1fbd3df007eb8a7477a1eab2c63483dcc24effd6": {
				symbol: "SCA",
				name: "ScaleSwapToken",
				decimals: 18,
				address: "0x1fbd3df007eb8a7477a1eab2c63483dcc24effd6",
				logoURI: "https://tokens.1inch.io/0x1fbd3df007eb8a7477a1eab2c63483dcc24effd6.png",
				tags: [
					"tokens"
				]
			},
			"0xb1a88c33091490218965787919fcc9862c1798ee": {
				symbol: "SHIBLI",
				name: "Studio Shibli",
				decimals: 9,
				address: "0xb1a88c33091490218965787919fcc9862c1798ee",
				logoURI: "https://tokens.1inch.io/0xb1a88c33091490218965787919fcc9862c1798ee.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x8037b1b69d6fa63a9cc053c25f7e168e6e6d857a": {
				symbol: "P4C",
				name: "Parts of Four Coin",
				decimals: 18,
				address: "0x8037b1b69d6fa63a9cc053c25f7e168e6e6d857a",
				logoURI: "https://tokens.1inch.io/0x8037b1b69d6fa63a9cc053c25f7e168e6e6d857a.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5": {
				symbol: "NOTE",
				name: "Notional",
				decimals: 8,
				address: "0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5",
				logoURI: "https://tokens.1inch.io/0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5.png",
				tags: [
					"tokens"
				]
			},
			"0x41a3dba3d677e573636ba691a70ff2d606c29666": {
				symbol: "BLANK",
				name: "GoBlank Token",
				decimals: 18,
				address: "0x41a3dba3d677e573636ba691a70ff2d606c29666",
				logoURI: "https://tokens.1inch.io/0xaec7e1f531bb09115103c53ba76829910ec48966.png",
				tags: [
					"tokens"
				]
			},
			"0xc48b4814faed1ccc885dd6fde62a6474aecbb19a": {
				symbol: "CMERGE",
				name: "Coin Merge",
				decimals: 9,
				address: "0xc48b4814faed1ccc885dd6fde62a6474aecbb19a",
				logoURI: "https://tokens.1inch.io/0xc48b4814faed1ccc885dd6fde62a6474aecbb19a.png",
				tags: [
					"tokens"
				]
			},
			"0x8254e26e453eb5abd29b3c37ac9e8da32e5d3299": {
				symbol: "RBX",
				name: "RBX",
				decimals: 18,
				address: "0x8254e26e453eb5abd29b3c37ac9e8da32e5d3299",
				logoURI: "https://tokens.1inch.io/0x8254e26e453eb5abd29b3c37ac9e8da32e5d3299.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3b484b82567a09e2588a13d54d032153f0c0aee0": {
				symbol: "SOS",
				name: "SOS",
				decimals: 18,
				address: "0x3b484b82567a09e2588a13d54d032153f0c0aee0",
				logoURI: "https://tokens.1inch.io/0x3b484b82567a09e2588a13d54d032153f0c0aee0.png",
				tags: [
					"tokens"
				]
			},
			"0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31": {
				symbol: "VXL",
				name: "Voxel X Network",
				decimals: 18,
				address: "0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31",
				logoURI: "https://tokens.1inch.io/0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31.png",
				tags: [
					"tokens"
				]
			},
			"0x6bba316c48b49bd1eac44573c5c871ff02958469": {
				symbol: "GAS",
				name: "Gas DAO",
				decimals: 18,
				address: "0x6bba316c48b49bd1eac44573c5c871ff02958469",
				logoURI: "https://tokens.1inch.io/0x6bba316c48b49bd1eac44573c5c871ff02958469.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9": {
				symbol: "TEMP",
				name: "Tempus",
				decimals: 18,
				address: "0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9",
				logoURI: "https://tokens.1inch.io/0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x616ef40d55c0d2c506f4d6873bda8090b79bf8fc": {
				symbol: "KTO",
				name: "Kounotori",
				decimals: 9,
				address: "0x616ef40d55c0d2c506f4d6873bda8090b79bf8fc",
				logoURI: "https://tokens.1inch.io/0x616ef40d55c0d2c506f4d6873bda8090b79bf8fc.png",
				tags: [
					"tokens"
				]
			},
			"0x44709a920fccf795fbc57baa433cc3dd53c44dbe": {
				symbol: "RADAR",
				name: "DappRadar",
				decimals: 18,
				address: "0x44709a920fccf795fbc57baa433cc3dd53c44dbe",
				logoURI: "https://tokens.1inch.io/0x44709a920fccf795fbc57baa433cc3dd53c44dbe.png",
				tags: [
					"tokens"
				]
			},
			"0x138c2f1123cf3f82e4596d097c118eac6684940b": {
				symbol: "ALPHA_1",
				name: "Alpha",
				decimals: 18,
				address: "0x138c2f1123cf3f82e4596d097c118eac6684940b",
				logoURI: "https://tokens.1inch.io/0x138c2f1123cf3f82e4596d097c118eac6684940b_1.png",
				displayedSymbol: "ALPHA",
				tags: [
					"tokens"
				]
			},
			"0xb6ed7644c69416d67b522e20bc294a9a9b405b31": {
				symbol: "0xBTC",
				name: "0xBitcoin Token",
				decimals: 8,
				address: "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
				logoURI: "https://tokens.1inch.io/0xb6ed7644c69416d67b522e20bc294a9a9b405b31.png",
				tags: [
					"tokens"
				]
			},
			"0x47252a63c723889814aebcac0683e615624cec64": {
				symbol: "NIL",
				name: "nil",
				decimals: 18,
				address: "0x47252a63c723889814aebcac0683e615624cec64",
				logoURI: "https://tokens.1inch.io/0x47252a63c723889814aebcac0683e615624cec64.png",
				tags: [
					"tokens"
				]
			},
			"0xbc19712feb3a26080ebf6f2f7849b417fdd792ca": {
				symbol: "BORING",
				name: "BoringDAO",
				decimals: 18,
				address: "0xbc19712feb3a26080ebf6f2f7849b417fdd792ca",
				logoURI: "https://tokens.1inch.io/0xbc19712feb3a26080ebf6f2f7849b417fdd792ca.png",
				tags: [
					"tokens"
				]
			},
			"0xa68dd8cb83097765263adad881af6eed479c4a33": {
				symbol: "WTF",
				name: "fees.wtf",
				decimals: 18,
				address: "0xa68dd8cb83097765263adad881af6eed479c4a33",
				logoURI: "https://tokens.1inch.io/0xa68dd8cb83097765263adad881af6eed479c4a33.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xb56a1f3310578f23120182fb2e58c087efe6e147": {
				symbol: "ACYC",
				name: "AllCoinsYieldCapital",
				decimals: 18,
				address: "0xb56a1f3310578f23120182fb2e58c087efe6e147",
				logoURI: "https://tokens.1inch.io/0xb56a1f3310578f23120182fb2e58c087efe6e147.png",
				tags: [
					"tokens"
				]
			},
			"0x47110d43175f7f2c2425e7d15792acc5817eb44f": {
				symbol: "GMI",
				name: "Bankless DeFi Innovation Index",
				decimals: 18,
				address: "0x47110d43175f7f2c2425e7d15792acc5817eb44f",
				logoURI: "https://tokens.1inch.io/0x47110d43175f7f2c2425e7d15792acc5817eb44f.png",
				tags: [
					"tokens"
				]
			},
			"0x7475c42f8bf2c19f4eaf12feaababa859fdc8914": {
				symbol: "ACCEL",
				name: "ACCEL",
				decimals: 18,
				address: "0x7475c42f8bf2c19f4eaf12feaababa859fdc8914",
				logoURI: "https://tokens.1inch.io/0x7475c42f8bf2c19f4eaf12feaababa859fdc8914_1.png",
				tags: [
					"tokens"
				]
			},
			"0x39fbbabf11738317a448031930706cd3e612e1b9": {
				symbol: "WXRP",
				name: "Wrapped XRP",
				decimals: 18,
				address: "0x39fbbabf11738317a448031930706cd3e612e1b9",
				logoURI: "https://tokens.1inch.io/0x39fbbabf11738317a448031930706cd3e612e1b9_1.png",
				tags: [
					"tokens"
				]
			},
			"0xcdf7028ceab81fa0c6971208e83fa7872994bee5": {
				symbol: "T",
				name: "Threshold Network Token",
				decimals: 18,
				address: "0xcdf7028ceab81fa0c6971208e83fa7872994bee5",
				logoURI: "https://tokens.1inch.io/0xcdf7028ceab81fa0c6971208e83fa7872994bee5.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xcf0c122c6b73ff809c693db761e7baebe62b6a2e": {
				symbol: "FLOKI",
				name: "FLOKI",
				decimals: 9,
				address: "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
				logoURI: "https://tokens.1inch.io/0xcf0c122c6b73ff809c693db761e7baebe62b6a2e.png",
				tags: [
					"tokens"
				]
			},
			"0x0de05f6447ab4d22c8827449ee4ba2d5c288379b": {
				symbol: "OOKI",
				name: "Ooki Token",
				decimals: 18,
				address: "0x0de05f6447ab4d22c8827449ee4ba2d5c288379b",
				logoURI: "https://tokens.1inch.io/0x0de05f6447ab4d22c8827449ee4ba2d5c288379b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x73d7c860998ca3c01ce8c808f5577d94d545d1b4": {
				symbol: "IXS",
				name: "Ixs Token",
				decimals: 18,
				address: "0x73d7c860998ca3c01ce8c808f5577d94d545d1b4",
				logoURI: "https://tokens.1inch.io/0x73d7c860998ca3c01ce8c808f5577d94d545d1b4.png",
				tags: [
					"tokens"
				]
			},
			"0x1a7e4e63778b4f12a199c062f3efdd288afcbce8": {
				symbol: "agEUR",
				name: "agEUR",
				decimals: 18,
				address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
				logoURI: "https://tokens.1inch.io/0x1a7e4e63778b4f12a199c062f3efdd288afcbce8.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf4d2888d29d722226fafa5d9b24f9164c092421e": {
				symbol: "LOOKS",
				name: "LooksRare Token",
				decimals: 18,
				address: "0xf4d2888d29d722226fafa5d9b24f9164c092421e",
				logoURI: "https://tokens.1inch.io/0xf4d2888d29d722226fafa5d9b24f9164c092421e.png",
				tags: [
					"tokens"
				]
			},
			"0x916c5de09cf63f6602d1e1793fb41f6437814a62": {
				symbol: "JACY",
				name: "JACY",
				decimals: 9,
				address: "0x916c5de09cf63f6602d1e1793fb41f6437814a62",
				logoURI: "https://tokens.1inch.io/0x916c5de09cf63f6602d1e1793fb41f6437814a62.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xdc59ac4fefa32293a95889dc396682858d52e5db": {
				symbol: "BEAN",
				name: "Bean",
				decimals: 6,
				address: "0xdc59ac4fefa32293a95889dc396682858d52e5db",
				logoURI: "https://tokens.1inch.io/0xdc59ac4fefa32293a95889dc396682858d52e5db.png",
				tags: [
					"tokens"
				]
			},
			"0x31429d1856ad1377a8a0079410b297e1a9e214c2": {
				symbol: "ANGLE",
				name: "ANGLE",
				decimals: 18,
				address: "0x31429d1856ad1377a8a0079410b297e1a9e214c2",
				logoURI: "https://tokens.1inch.io/0x31429d1856ad1377a8a0079410b297e1a9e214c2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf1ca9cb74685755965c7458528a36934df52a3ef": {
				symbol: "AVINOC",
				name: "AVINOC Token",
				decimals: 18,
				address: "0xf1ca9cb74685755965c7458528a36934df52a3ef",
				logoURI: "https://tokens.1inch.io/0xf1ca9cb74685755965c7458528a36934df52a3ef.png",
				tags: [
					"tokens"
				]
			},
			"0x618679df9efcd19694bb1daa8d00718eacfa2883": {
				symbol: "XYZ",
				name: "XYZ Governance Token",
				decimals: 18,
				address: "0x618679df9efcd19694bb1daa8d00718eacfa2883",
				logoURI: "https://tokens.1inch.io/0x618679df9efcd19694bb1daa8d00718eacfa2883_1.png",
				tags: [
					"tokens"
				]
			},
			"0x9e32b13ce7f2e80a01932b42553652e053d6ed8e": {
				symbol: "Metis",
				name: "Metis Token",
				decimals: 18,
				address: "0x9e32b13ce7f2e80a01932b42553652e053d6ed8e",
				logoURI: "https://tokens.1inch.io/0x9e32b13ce7f2e80a01932b42553652e053d6ed8e.png",
				tags: [
					"tokens"
				]
			},
			"0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9": {
				symbol: "SIS",
				name: "Symbiosis",
				decimals: 18,
				address: "0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9",
				logoURI: "https://tokens.1inch.io/0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xfe459828c90c0ba4bc8b42f5c5d44f316700b430": {
				symbol: "BBS",
				name: "BBS",
				decimals: 18,
				address: "0xfe459828c90c0ba4bc8b42f5c5d44f316700b430",
				logoURI: "https://tokens.1inch.io/0xfe459828c90c0ba4bc8b42f5c5d44f316700b430.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa5def515cfd373d17830e7c1de1639cb3530a112": {
				symbol: "DEPO",
				name: "DePo Token",
				decimals: 18,
				address: "0xa5def515cfd373d17830e7c1de1639cb3530a112",
				logoURI: "https://tokens.1inch.io/0xa5def515cfd373d17830e7c1de1639cb3530a112.png",
				tags: [
					"tokens"
				]
			},
			"0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9": {
				symbol: "X2Y2",
				name: "X2Y2Token",
				decimals: 18,
				address: "0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9",
				logoURI: "https://tokens.1inch.io/0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9.png",
				tags: [
					"tokens"
				]
			},
			"0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9": {
				symbol: "WRLD",
				name: "NFT Worlds",
				decimals: 18,
				address: "0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9",
				logoURI: "https://tokens.1inch.io/0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9.png",
				tags: [
					"tokens"
				]
			},
			"0x2602278ee1882889b946eb11dc0e810075650983": {
				symbol: "VADER",
				name: "Vader",
				decimals: 18,
				address: "0x2602278ee1882889b946eb11dc0e810075650983",
				logoURI: "https://tokens.1inch.io/0x2602278ee1882889b946eb11dc0e810075650983.png",
				tags: [
					"tokens"
				]
			},
			"0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b": {
				symbol: "UFO",
				name: "THE TRUTH",
				decimals: 18,
				address: "0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b",
				logoURI: "https://tokens.1inch.io/0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b.png",
				tags: [
					"tokens"
				]
			},
			"0xf57e7e7c23978c3caec3c3548e3d615c346e79ff": {
				symbol: "IMX",
				name: "Immutable X",
				decimals: 18,
				address: "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff",
				logoURI: "https://tokens.1inch.io/0xf57e7e7c23978c3caec3c3548e3d615c346e79ff.png",
				tags: [
					"tokens"
				]
			},
			"0x2e9d63788249371f1dfc918a52f8d799f4a38c94": {
				symbol: "TOKE",
				name: "Tokemak",
				decimals: 18,
				address: "0x2e9d63788249371f1dfc918a52f8d799f4a38c94",
				logoURI: "https://tokens.1inch.io/0x2e9d63788249371f1dfc918a52f8d799f4a38c94.png",
				tags: [
					"tokens"
				]
			},
			"0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c": {
				symbol: "NCR",
				name: "Neos Credits",
				decimals: 18,
				address: "0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c",
				logoURI: "https://tokens.1inch.io/0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c.png",
				tags: [
					"tokens"
				]
			},
			"0x0f2d719407fdbeff09d87557abb7232601fd9f29": {
				symbol: "SYN",
				name: "Synapse",
				decimals: 18,
				address: "0x0f2d719407fdbeff09d87557abb7232601fd9f29",
				logoURI: "https://tokens.1inch.io/0x0f2d719407fdbeff09d87557abb7232601fd9f29.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x525ef76138bf76118d786dbedeae5f87aabf4a81": {
				symbol: "NFTI",
				name: "Scalara NFT Index",
				decimals: 18,
				address: "0x525ef76138bf76118d786dbedeae5f87aabf4a81",
				logoURI: "https://tokens.1inch.io/0x525ef76138bf76118d786dbedeae5f87aabf4a81.png",
				tags: [
					"tokens"
				]
			},
			"0x5c147e74d63b1d31aa3fd78eb229b65161983b2b": {
				symbol: "WFLOW",
				name: "Wrapped Flow",
				decimals: 18,
				address: "0x5c147e74d63b1d31aa3fd78eb229b65161983b2b",
				logoURI: "https://tokens.1inch.io/0x5c147e74d63b1d31aa3fd78eb229b65161983b2b.png",
				tags: [
					"tokens"
				]
			},
			"0x509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a": {
				symbol: "BST",
				name: "BlocksquareToken",
				decimals: 18,
				address: "0x509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a",
				logoURI: "https://tokens.1inch.io/0x509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a.png",
				tags: [
					"tokens"
				]
			},
			"0xb9eefc4b0d472a44be93970254df4f4016569d27": {
				symbol: "XDB",
				name: "digitalbits",
				decimals: 7,
				address: "0xb9eefc4b0d472a44be93970254df4f4016569d27",
				logoURI: "https://tokens.1inch.io/0xb9eefc4b0d472a44be93970254df4f4016569d27.png",
				tags: [
					"tokens"
				]
			},
			"0x44017598f2af1bd733f9d87b5017b4e7c1b28dde": {
				symbol: "stkATOM",
				name: "pSTAKE Staked ATOM",
				decimals: 6,
				address: "0x44017598f2af1bd733f9d87b5017b4e7c1b28dde",
				logoURI: "https://tokens.1inch.io/0x44017598f2af1bd733f9d87b5017b4e7c1b28dde.png",
				tags: [
					"tokens"
				]
			},
			"0xa5f2211b9b8170f694421f2046281775e8468044": {
				symbol: "THOR",
				name: "THORSwap Token",
				decimals: 18,
				address: "0xa5f2211b9b8170f694421f2046281775e8468044",
				logoURI: "https://tokens.1inch.io/0xa5f2211b9b8170f694421f2046281775e8468044.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3": {
				symbol: "FODL",
				name: "Fodl",
				decimals: 18,
				address: "0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3",
				logoURI: "https://tokens.1inch.io/0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3.png",
				tags: [
					"tokens"
				]
			},
			"0x4d224452801aced8b2f0aebe155379bb5d594381": {
				symbol: "APE",
				name: "ApeCoin",
				decimals: 18,
				address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
				logoURI: "https://tokens.1inch.io/0x4d224452801aced8b2f0aebe155379bb5d594381.png",
				tags: [
					"tokens"
				]
			},
			"0x8b3192f5eebd8579568a2ed41e6feb402f93f73f": {
				symbol: "SAITAMA",
				name: "Saitama Inu",
				decimals: 9,
				address: "0x8b3192f5eebd8579568a2ed41e6feb402f93f73f",
				logoURI: "https://tokens.1inch.io/0x8b3192f5eebd8579568a2ed41e6feb402f93f73f.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6": {
				symbol: "STG",
				name: "StargateToken",
				decimals: 18,
				address: "0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6",
				logoURI: "https://tokens.1inch.io/0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6.png",
				tags: [
					"tokens"
				]
			},
			"0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25": {
				symbol: "SLP",
				name: "Smooth Love Potion",
				decimals: 0,
				address: "0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25",
				logoURI: "https://tokens.1inch.io/0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25.png",
				tags: [
					"tokens"
				]
			},
			"0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5": {
				symbol: "OHM",
				name: "Olympus",
				decimals: 9,
				address: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
				logoURI: "https://tokens.1inch.io/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab": {
				symbol: "COW",
				name: "CoW Protocol Token",
				decimals: 18,
				address: "0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab",
				logoURI: "https://tokens.1inch.io/0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3541a5c1b04adaba0b83f161747815cd7b1516bc": {
				symbol: "KNIGHT",
				name: "CitaDAO",
				decimals: 18,
				address: "0x3541a5c1b04adaba0b83f161747815cd7b1516bc",
				logoURI: "https://tokens.1inch.io/0x3541a5c1b04adaba0b83f161747815cd7b1516bc.png",
				tags: [
					"tokens"
				]
			},
			"0xf0f9d895aca5c8678f706fb8216fa22957685a13": {
				symbol: "CULT",
				name: "Cult DAO",
				decimals: 18,
				address: "0xf0f9d895aca5c8678f706fb8216fa22957685a13",
				logoURI: "https://tokens.1inch.io/0xf0f9d895aca5c8678f706fb8216fa22957685a13.png",
				eip2612: true,
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x9506d37f70eb4c3d79c398d326c871abbf10521d": {
				symbol: "MLT",
				name: "Media Licensing Token",
				decimals: 18,
				address: "0x9506d37f70eb4c3d79c398d326c871abbf10521d",
				logoURI: "https://tokens.1inch.io/0x9506d37f70eb4c3d79c398d326c871abbf10521d.png",
				tags: [
					"tokens"
				]
			},
			"0x4f640f2529ee0cf119a2881485845fa8e61a782a": {
				symbol: "ORE",
				name: "pTokens ORE",
				decimals: 18,
				address: "0x4f640f2529ee0cf119a2881485845fa8e61a782a",
				logoURI: "https://tokens.1inch.io/0x4f640f2529ee0cf119a2881485845fa8e61a782a.png",
				tags: [
					"tokens"
				]
			},
			"0x7f280dac515121dcda3eac69eb4c13a52392cace": {
				symbol: "FNC",
				name: "Fancy Games",
				decimals: 18,
				address: "0x7f280dac515121dcda3eac69eb4c13a52392cace",
				logoURI: "https://tokens.1inch.io/0x7f280dac515121dcda3eac69eb4c13a52392cace.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84": {
				symbol: "icETH",
				name: "Interest Compounding ETH Index",
				decimals: 18,
				address: "0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84",
				logoURI: "https://tokens.1inch.io/0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84.png",
				tags: [
					"tokens"
				]
			},
			"0xab2a7b5876d707e0126b3a75ef7781c77c8877ee": {
				symbol: "QUAD",
				name: "Quadency Token",
				decimals: 18,
				address: "0xab2a7b5876d707e0126b3a75ef7781c77c8877ee",
				logoURI: "https://tokens.1inch.io/0xab2a7b5876d707e0126b3a75ef7781c77c8877ee.png",
				tags: [
					"tokens"
				]
			},
			"0x33d203fa03bb30b133de0fe2d6533c268ba286b6": {
				symbol: "MANDOX",
				name: "Mandox",
				decimals: 9,
				address: "0x33d203fa03bb30b133de0fe2d6533c268ba286b6",
				logoURI: "https://tokens.1inch.io/0x33d203fa03bb30b133de0fe2d6533c268ba286b6.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x299698b4b44bd6d023981a7317798dee12860834": {
				symbol: "NFP",
				name: "New Frontier Presents",
				decimals: 9,
				address: "0x299698b4b44bd6d023981a7317798dee12860834",
				logoURI: "https://tokens.1inch.io/0x299698b4b44bd6d023981a7317798dee12860834.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x9fa69536d1cda4a04cfb50688294de75b505a9ae": {
				symbol: "DERC",
				name: "DeRace Token",
				decimals: 18,
				address: "0x9fa69536d1cda4a04cfb50688294de75b505a9ae",
				logoURI: "https://tokens.1inch.io/0x9fa69536d1cda4a04cfb50688294de75b505a9ae.png",
				tags: [
					"tokens"
				]
			},
			"0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4": {
				symbol: "STACK",
				name: "StackOS",
				decimals: 18,
				address: "0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4",
				logoURI: "https://tokens.1inch.io/0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4.png",
				tags: [
					"tokens"
				]
			},
			"0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430": {
				symbol: "PLA",
				name: "PlayDapp Token",
				decimals: 18,
				address: "0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430",
				logoURI: "https://tokens.1inch.io/0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430.png",
				tags: [
					"tokens"
				]
			},
			"0x0ab87046fbb341d058f17cbc4c1133f25a20a52f": {
				symbol: "gOHM",
				name: "Governance OHM",
				decimals: 18,
				address: "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f",
				logoURI: "https://tokens.1inch.io/0x0ab87046fbb341d058f17cbc4c1133f25a20a52f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3b9be07d622accaed78f479bc0edabfd6397e320": {
				symbol: "LSS",
				name: "Lossless Token",
				decimals: 18,
				address: "0x3b9be07d622accaed78f479bc0edabfd6397e320",
				logoURI: "https://tokens.1inch.io/0x3b9be07d622accaed78f479bc0edabfd6397e320.png",
				tags: [
					"tokens"
				]
			},
			"0xa67e9f021b9d208f7e3365b2a155e3c55b27de71": {
				symbol: "KLEE",
				name: "KleeKai",
				decimals: 9,
				address: "0xa67e9f021b9d208f7e3365b2a155e3c55b27de71",
				logoURI: "https://tokens.1inch.io/0xa67e9f021b9d208f7e3365b2a155e3c55b27de71.png",
				tags: [
					"tokens"
				]
			},
			"0x8c543aed163909142695f2d2acd0d55791a9edb9": {
				symbol: "VLX",
				name: "VLX",
				decimals: 18,
				address: "0x8c543aed163909142695f2d2acd0d55791a9edb9",
				logoURI: "https://tokens.1inch.io/0x8c543aed163909142695f2d2acd0d55791a9edb9.png",
				tags: [
					"tokens"
				]
			},
			"0x8f693ca8d21b157107184d29d398a8d082b38b76": {
				symbol: "DATA",
				name: "Streamr",
				decimals: 18,
				address: "0x8f693ca8d21b157107184d29d398a8d082b38b76",
				logoURI: "https://tokens.1inch.io/0x8f693ca8d21b157107184d29d398a8d082b38b76.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x2ba8349123de45e931a8c8264c332e6e9cf593f9": {
				symbol: "BCMC",
				name: "Blockchain Monster Coin",
				decimals: 18,
				address: "0x2ba8349123de45e931a8c8264c332e6e9cf593f9",
				logoURI: "https://tokens.1inch.io/0x2ba8349123de45e931a8c8264c332e6e9cf593f9.png",
				tags: [
					"tokens"
				]
			},
			"0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373": {
				symbol: "GMEE",
				name: "GAMEE",
				decimals: 18,
				address: "0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373",
				logoURI: "https://tokens.1inch.io/0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373.png",
				tags: [
					"tokens"
				]
			},
			"0xa693b19d2931d498c5b318df961919bb4aee87a5": {
				symbol: "UST_1",
				name: "UST (Wormhole)",
				decimals: 6,
				address: "0xa693b19d2931d498c5b318df961919bb4aee87a5",
				logoURI: "https://tokens.1inch.io/0xa693b19d2931d498c5b318df961919bb4aee87a5.png",
				displayedSymbol: "UST",
				tags: [
					"tokens"
				]
			},
			"0x2163383c1f4e74fe36c50e6154c7f18d9fd06d6f": {
				symbol: "TIC",
				name: "ElasticSwap Tic Token",
				decimals: 18,
				address: "0x2163383c1f4e74fe36c50e6154c7f18d9fd06d6f",
				logoURI: "https://tokens.1inch.io/0x2163383c1f4e74fe36c50e6154c7f18d9fd06d6f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf406f7a9046793267bc276908778b29563323996": {
				symbol: "VISION",
				name: "Vision Token",
				decimals: 18,
				address: "0xf406f7a9046793267bc276908778b29563323996",
				logoURI: "https://tokens.1inch.io/0xf406f7a9046793267bc276908778b29563323996.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xdc49108ce5c57bc3408c3a5e95f3d864ec386ed3": {
				symbol: "FOXy",
				name: "FOX Yieldy",
				decimals: 18,
				address: "0xdc49108ce5c57bc3408c3a5e95f3d864ec386ed3",
				logoURI: "https://tokens.1inch.io/0xdc49108ce5c57bc3408c3a5e95f3d864ec386ed3.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xeeeeeb57642040be42185f49c52f7e9b38f8eeee": {
				symbol: "ELK",
				name: "Elk",
				decimals: 18,
				address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xfc98e825a2264d890f9a1e68ed50e1526abccacd": {
				symbol: "MCO2",
				name: "Moss Carbon Credit",
				decimals: 18,
				address: "0xfc98e825a2264d890f9a1e68ed50e1526abccacd",
				logoURI: "https://tokens.1inch.io/0xfc98e825a2264d890f9a1e68ed50e1526abccacd.png",
				tags: [
					"tokens"
				]
			},
			"0x656c00e1bcd96f256f224ad9112ff426ef053733": {
				symbol: "EFI",
				name: "Efinity Token",
				decimals: 18,
				address: "0x656c00e1bcd96f256f224ad9112ff426ef053733",
				logoURI: "https://tokens.1inch.io/0x656c00e1bcd96f256f224ad9112ff426ef053733.png",
				tags: [
					"tokens"
				]
			},
			"0x3da932456d082cba208feb0b096d49b202bf89c8": {
				symbol: "DEGOV2",
				name: "dego.finance",
				decimals: 18,
				address: "0x3da932456d082cba208feb0b096d49b202bf89c8",
				logoURI: "https://tokens.1inch.io/0x3da932456d082cba208feb0b096d49b202bf89c8.png",
				tags: [
					"tokens"
				]
			},
			"0xe7f58a92476056627f9fdb92286778abd83b285f": {
				symbol: "DWEB",
				name: "DecentraWeb",
				decimals: 18,
				address: "0xe7f58a92476056627f9fdb92286778abd83b285f",
				logoURI: "https://tokens.1inch.io/0xe7f58a92476056627f9fdb92286778abd83b285f.png",
				tags: [
					"tokens"
				]
			},
			"0x7815bda662050d84718b988735218cffd32f75ea": {
				symbol: "YEL",
				name: "YEL Token",
				decimals: 18,
				address: "0x7815bda662050d84718b988735218cffd32f75ea",
				logoURI: "https://tokens.1inch.io/0x7815bda662050d84718b988735218cffd32f75ea.png",
				tags: [
					"tokens"
				]
			},
			"0x4cf89ca06ad997bc732dc876ed2a7f26a9e7f361": {
				symbol: "MYST",
				name: "Mysterium",
				decimals: 18,
				address: "0x4cf89ca06ad997bc732dc876ed2a7f26a9e7f361",
				logoURI: "https://tokens.1inch.io/0x4cf89ca06ad997bc732dc876ed2a7f26a9e7f361.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x68037790a0229e9ce6eaa8a99ea92964106c4703": {
				symbol: "PAR",
				name: "PAR Stablecoin",
				decimals: 18,
				address: "0x68037790a0229e9ce6eaa8a99ea92964106c4703",
				logoURI: "https://tokens.1inch.io/0x68037790a0229e9ce6eaa8a99ea92964106c4703.png",
				tags: [
					"tokens"
				]
			},
			"0x90b831fa3bebf58e9744a14d638e25b4ee06f9bc": {
				symbol: "MIMO",
				name: "MIMO Parallel Governance Token",
				decimals: 18,
				address: "0x90b831fa3bebf58e9744a14d638e25b4ee06f9bc",
				logoURI: "https://tokens.1inch.io/0x90b831fa3bebf58e9744a14d638e25b4ee06f9bc.png",
				tags: [
					"tokens"
				]
			},
			"0x7121d00b4fa18f13da6c2e30d19c04844e6afdc8": {
				symbol: "LUFFY",
				name: "LUFFY",
				decimals: 9,
				address: "0x7121d00b4fa18f13da6c2e30d19c04844e6afdc8",
				logoURI: "https://tokens.1inch.io/0x7121d00b4fa18f13da6c2e30d19c04844e6afdc8.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x232fb065d9d24c34708eedbf03724f2e95abe768": {
				symbol: "SHEESHA",
				name: "Sheesha Finance",
				decimals: 18,
				address: "0x232fb065d9d24c34708eedbf03724f2e95abe768",
				logoURI: "https://tokens.1inch.io/0x232fb065d9d24c34708eedbf03724f2e95abe768.png",
				tags: [
					"tokens"
				]
			},
			"0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6": {
				symbol: "USDD",
				name: "Decentralized USD",
				decimals: 18,
				address: "0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6",
				logoURI: "https://tokens.1inch.io/0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6.png",
				tags: [
					"tokens"
				]
			},
			"0x33b4fe5e40e4903a0849ca97b3292eac3eb0aa36": {
				symbol: "HONEY",
				name: "Honey",
				decimals: 18,
				address: "0x33b4fe5e40e4903a0849ca97b3292eac3eb0aa36",
				logoURI: "https://tokens.1inch.io/0x33b4fe5e40e4903a0849ca97b3292eac3eb0aa36.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc": {
				symbol: "HOP",
				name: "Hop",
				decimals: 18,
				address: "0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc",
				logoURI: "https://tokens.1inch.io/0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x632806bf5c8f062932dd121244c9fbe7becb8b48": {
				symbol: "PDI",
				name: "Phuture DeFi Index",
				decimals: 18,
				address: "0x632806bf5c8f062932dd121244c9fbe7becb8b48",
				logoURI: "https://tokens.1inch.io/0x632806bf5c8f062932dd121244c9fbe7becb8b48.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88": {
				symbol: "SOON",
				name: "RealT SOON Token",
				decimals: 18,
				address: "0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88",
				logoURI: "https://tokens.1inch.io/0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88.png",
				tags: [
					"tokens"
				]
			},
			"0x6c3f90f043a72fa612cbac8115ee7e52bde6e490": {
				symbol: "3Crv",
				name: "Curve.fi DAI/USDC/USDT",
				decimals: 18,
				address: "0x6c3f90f043a72fa612cbac8115ee7e52bde6e490",
				logoURI: "https://tokens.1inch.io/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490.png",
				tags: [
					"tokens"
				]
			}
		}
	},
	{
		name: "Optimism",
		coin: "ETH",
		chainId: 10,
		oracle: "0x11DEE30E710B8d4a8630392781Cc3c0046365d4c",
		wrappedToken: "0x4200000000000000000000000000000000000006",
		multicall: "0x142E2FEaC30d7fc3b61f9EE85FCCad8e560154cc",
		rpc: [
			"https://mainnet.optimism.io",
			"https://optimism-mainnet.public.blastapi.io",
			"https://rpc.ankr.com/optimism"
		],
		tokens: {
			"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
				symbol: "ETH",
				name: "Ethereum",
				decimals: 18,
				address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
				tags: [
					"native"
				]
			},
			"0x4200000000000000000000000000000000000006": {
				symbol: "WETH",
				name: "Wrapped Ether",
				address: "0x4200000000000000000000000000000000000006",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
				tags: [
					"tokens"
				]
			},
			"0x8700daec35af8ff88c16bdf0418774cb3d7599b4": {
				symbol: "SNX",
				name: "Synthetix",
				decimals: 18,
				logoURI: "https://ethereum-optimism.github.io/logos/SNX.svg",
				address: "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
				tags: [
					"tokens"
				]
			},
			"0xda10009cbd5d07dd0cecc66161fc93d7c9000da1": {
				symbol: "DAI",
				name: "Dai stable coin",
				decimals: 18,
				logoURI: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=010",
				address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
				tags: [
					"tokens"
				]
			},
			"0x94b008aa00579c1307b0ef2c499ad98a8ce58e58": {
				symbol: "USDT",
				name: "Tether USD",
				decimals: 6,
				logoURI: "https://tokens.1inch.io/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58.png",
				address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
				tags: [
					"tokens"
				]
			},
			"0x68f180fcce6836688e9084f035309e29bf0a2095": {
				symbol: "WBTC",
				name: "Wrapped Bitcoin",
				decimals: 8,
				logoURI: "https://ethereum-optimism.github.io/logos/WBTC.svg",
				address: "0x68f180fcce6836688e9084f035309e29bf0a2095",
				tags: [
					"tokens"
				]
			},
			"0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6": {
				symbol: "LINK",
				name: "Chainlink",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6.png",
				address: "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
				tags: [
					"tokens"
				]
			},
			"0x7f5c764cbc14f9669b88837ca1490cca17c31607": {
				symbol: "USDC",
				name: "USD Coin",
				decimals: 6,
				logoURI: "https://tokens.1inch.io/0x7f5c764cbc14f9669b88837ca1490cca17c31607.png",
				address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
				tags: [
					"tokens"
				]
			},
			"0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9": {
				symbol: "sUSD",
				name: "Synth sUSD",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png",
				address: "0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9",
				tags: [
					"tokens"
				]
			},
			"0x217d47011b23bb961eb6d93ca9945b7501a5bb11": {
				symbol: "THALES",
				name: "Optimistic Thales Token",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x217d47011b23bb961eb6d93ca9945b7501a5bb11.png",
				address: "0x217d47011b23bb961eb6d93ca9945b7501a5bb11",
				tags: [
					"tokens"
				]
			},
			"0x61baadcf22d2565b0f471b291c475db5555e0b76": {
				symbol: "AELIN",
				name: "Aelin Token",
				decimals: 18,
				address: "0x61baadcf22d2565b0f471b291c475db5555e0b76",
				logoURI: "https://tokens.1inch.io/0x61baadcf22d2565b0f471b291c475db5555e0b76.png",
				tags: [
					"tokens"
				]
			},
			"0x7fb688ccf682d58f86d7e38e03f9d22e7705448b": {
				symbol: "RAI",
				name: "Rai Reflex Index",
				decimals: 18,
				address: "0x7fb688ccf682d58f86d7e38e03f9d22e7705448b",
				logoURI: "https://tokens.1inch.io/0x7fb688ccf682d58f86d7e38e03f9d22e7705448b.png",
				tags: [
					"tokens"
				]
			},
			"0x50c5725949a6f0c72e6c4a641f24049a917db0cb": {
				symbol: "LYRA",
				name: "Lyra Token",
				decimals: 18,
				address: "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
				logoURI: "https://tokens.1inch.io/0x50c5725949a6f0c72e6c4a641f24049a917db0cb.png",
				tags: [
					"tokens"
				]
			},
			"0x9e1028f5f1d5ede59748ffcee5532509976840e0": {
				symbol: "PERP",
				name: "Perpetual",
				decimals: 18,
				address: "0x9e1028f5f1d5ede59748ffcee5532509976840e0",
				logoURI: "https://tokens.1inch.io/0x9e1028f5f1d5ede59748ffcee5532509976840e0.png",
				tags: [
					"tokens"
				]
			},
			"0xf98dcd95217e15e05d8638da4c91125e59590b07": {
				symbol: "KROM",
				name: "Kromatika",
				decimals: 18,
				address: "0xf98dcd95217e15e05d8638da4c91125e59590b07",
				logoURI: "https://tokens.1inch.io/0xf98dcd95217e15e05d8638da4c91125e59590b07.png",
				tags: [
					"tokens"
				]
			},
			"0x4200000000000000000000000000000000000042": {
				symbol: "OP",
				name: "Optimism",
				decimals: 18,
				address: "0x4200000000000000000000000000000000000042",
				logoURI: "https://tokens.1inch.io/0x4200000000000000000000000000000000000042.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xeeeeeb57642040be42185f49c52f7e9b38f8eeee": {
				symbol: "ELK",
				name: "Elk",
				decimals: 18,
				address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3c8b650257cfb5f272f799f5e2b4e65093a11a05": {
				symbol: "VELO",
				name: "Velodrome",
				decimals: 18,
				address: "0x3c8b650257cfb5f272f799f5e2b4e65093a11a05",
				logoURI: "https://tokens.1inch.io/0x3c8b650257cfb5f272f799f5e2b4e65093a11a05.png",
				tags: [
					"tokens"
				]
			}
		}
	},
	{
		name: "Binance Smart Chain Mainnet",
		coin: "BNB",
		chainId: 56,
		oracle: "0xfbD61B037C325b959c0F6A7e69D8f37770C2c550",
		wrappedToken: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
		multicall: "0x41263cBA59EB80dC200F3E2544eda4ed6A90E76C",
		rpc: [
			"https://bsc-dataseed1.binance.org",
			"https://bsc-dataseed2.binance.org",
			"https://bsc-dataseed3.binance.org",
			"https://bsc-dataseed4.binance.org",
			"https://bsc-dataseed1.defibit.io",
			"https://bsc-dataseed2.defibit.io",
			"https://bsc-dataseed3.defibit.io",
			"https://bsc-dataseed4.defibit.io",
			"https://bsc-dataseed1.ninicoin.io",
			"https://bsc-dataseed2.ninicoin.io",
			"https://bsc-dataseed3.ninicoin.io",
			"https://bsc-dataseed4.ninicoin.io",
			"wss://bsc-ws-node.nariox.org",
			"https://bsc-dataseed.binance.org",
			"https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3",
			"wss://bsc-mainnet.nodereal.io/ws/v1/64a9df0874fb4a93b9d0a3849de012d3",
			"https://rpc.ankr.com/bsc",
			"https://bscrpc.com",
			"https://bsc.mytokenpocket.vip",
			"https://binance.nodereal.io",
			"https://rpc-bsc.bnb48.club"
		],
		tokens: {
			"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
				symbol: "BNB",
				name: "BNB",
				decimals: 18,
				address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
				logoURI: "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png",
				tags: [
					"native"
				]
			},
			"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": {
				symbol: "WBNB",
				name: "Wrapped BNB",
				decimals: 18,
				address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
				logoURI: "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png",
				tags: [
					"tokens"
				]
			},
			"0x0000000000004946c0e9f43f4dee607b0ef1fa1c": {
				symbol: "CHI",
				name: "Chi Gastoken by 1inch",
				decimals: 0,
				address: "0x0000000000004946c0e9f43f4dee607b0ef1fa1c",
				logoURI: "https://tokens.1inch.io/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png",
				tags: [
					"tokens"
				]
			},
			"0x55d398326f99059ff775485246999027b3197955": {
				symbol: "USDT",
				name: "Tether USD",
				decimals: 18,
				address: "0x55d398326f99059ff775485246999027b3197955",
				logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
				tags: [
					"tokens"
				]
			},
			"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": {
				symbol: "CAKE",
				name: "PancakeSwap Token",
				decimals: 18,
				address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
				logoURI: "https://tokens.1inch.io/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png",
				tags: [
					"tokens"
				]
			},
			"0xe9e7cea3dedca5984780bafc599bd69add087d56": {
				symbol: "BUSD",
				name: "BUSD Token",
				decimals: 18,
				address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
				logoURI: "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png",
				tags: [
					"tokens"
				]
			},
			"0x2170ed0880ac9a755fd29b2688956bd959f933f8": {
				symbol: "ETH",
				name: "Ethereum Token",
				decimals: 18,
				address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
				logoURI: "https://tokens.1inch.io/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png",
				tags: [
					"tokens"
				]
			},
			"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c": {
				symbol: "BTCB",
				name: "BTCB Token",
				decimals: 18,
				address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
				logoURI: "https://tokens.1inch.io/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png",
				tags: [
					"tokens"
				]
			},
			"0xa184088a740c695e156f91f5cc086a06bb78b827": {
				symbol: "AUTO",
				name: "AUTOv2",
				decimals: 18,
				address: "0xa184088a740c695e156f91f5cc086a06bb78b827",
				logoURI: "https://tokens.1inch.io/0xa184088a740c695e156f91f5cc086a06bb78b827.png",
				tags: [
					"tokens"
				]
			},
			"0x5ac52ee5b2a633895292ff6d8a89bb9190451587": {
				symbol: "BSCX",
				name: "BSCX",
				decimals: 18,
				address: "0x5ac52ee5b2a633895292ff6d8a89bb9190451587",
				logoURI: "https://tokens.1inch.io/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png",
				tags: [
					"tokens"
				]
			},
			"0x190b589cf9fb8ddeabbfeae36a813ffb2a702454": {
				symbol: "BDO",
				name: "bDollar",
				decimals: 18,
				address: "0x190b589cf9fb8ddeabbfeae36a813ffb2a702454",
				logoURI: "https://tokens.1inch.io/0x190b589cf9fb8ddeabbfeae36a813ffb2a702454.png",
				tags: [
					"tokens"
				]
			},
			"0x7083609fce4d1d8dc0c979aab8c869ea2c873402": {
				symbol: "DOT",
				name: "DOT",
				decimals: 18,
				address: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
				logoURI: "https://tokens.1inch.io/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png",
				tags: [
					"tokens"
				]
			},
			"0x23396cf899ca06c4472205fc903bdb4de249d6fc": {
				symbol: "UST",
				name: "Wrapped UST Token",
				decimals: 18,
				address: "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
				logoURI: "https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png",
				tags: [
					"tokens"
				]
			},
			"0x4bd17003473389a42daf6a0a729f6fdb328bbbd7": {
				symbol: "VAI",
				name: "VAI Stablecoin",
				decimals: 18,
				address: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
				logoURI: "https://tokens.1inch.io/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xbf5140a22578168fd562dccf235e5d43a02ce9b1": {
				symbol: "UNI",
				name: "Uniswap",
				decimals: 18,
				address: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
				logoURI: "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
				tags: [
					"tokens"
				]
			},
			"0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd": {
				symbol: "LINK",
				name: "ChainLink Token",
				decimals: 18,
				address: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
				logoURI: "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
				tags: [
					"tokens"
				]
			},
			"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": {
				symbol: "USDC",
				name: "USD Coin",
				decimals: 18,
				address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
				logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
				tags: [
					"tokens"
				]
			},
			"0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5": {
				symbol: "zSEED",
				name: "zSeedToken",
				decimals: 18,
				address: "0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5",
				logoURI: "https://tokens.1inch.io/0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5.png",
				tags: [
					"tokens"
				]
			},
			"0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3": {
				symbol: "DAI",
				name: "Dai Token",
				decimals: 18,
				address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
				logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
				tags: [
					"tokens"
				]
			},
			"0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18": {
				symbol: "BAND",
				name: "Band Protocol Token",
				decimals: 18,
				address: "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18",
				logoURI: "https://tokens.1inch.io/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png",
				tags: [
					"tokens"
				]
			},
			"0x8b303d5bbfbbf46f1a4d9741e491e06986894e18": {
				symbol: "WOOP",
				name: "Woonkly Power",
				decimals: 18,
				address: "0x8b303d5bbfbbf46f1a4d9741e491e06986894e18",
				logoURI: "https://tokens.1inch.io/0x8b303d5bbfbbf46f1a4d9741e491e06986894e18.png",
				tags: [
					"tokens"
				]
			},
			"0x0d9319565be7f53cefe84ad201be3f40feae2740": {
				symbol: "sBDO",
				name: "bDollar Share",
				decimals: 18,
				address: "0x0d9319565be7f53cefe84ad201be3f40feae2740",
				logoURI: "https://tokens.1inch.io/0x0d9319565be7f53cefe84ad201be3f40feae2740.png",
				tags: [
					"tokens"
				]
			},
			"0x3ee2200efb3400fabb9aacf31297cbdd1d435d47": {
				symbol: "ADA",
				name: "Cardano Token",
				decimals: 18,
				address: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
				logoURI: "https://tokens.1inch.io/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png",
				tags: [
					"tokens"
				]
			},
			"0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb": {
				symbol: "SFP",
				name: "SafePal Token",
				decimals: 18,
				address: "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
				logoURI: "https://tokens.1inch.io/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png",
				tags: [
					"tokens"
				]
			},
			"0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a": {
				symbol: "Fuel",
				name: "Fuel Token",
				decimals: 18,
				address: "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a",
				logoURI: "https://tokens.1inch.io/0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63": {
				symbol: "XVS",
				name: "Venus",
				decimals: 18,
				address: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
				logoURI: "https://tokens.1inch.io/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png",
				tags: [
					"tokens"
				]
			},
			"0x4b0f1812e5df2a09796481ff14017e6005508003": {
				symbol: "TWT",
				name: "Trust Wallet",
				decimals: 18,
				address: "0x4b0f1812e5df2a09796481ff14017e6005508003",
				logoURI: "https://tokens.1inch.io/0x4b0f1812e5df2a09796481ff14017e6005508003.png",
				tags: [
					"tokens"
				]
			},
			"0xf952fc3ca7325cc27d15885d37117676d25bfda6": {
				symbol: "EGG",
				name: "Goose Golden Egg",
				decimals: 18,
				address: "0xf952fc3ca7325cc27d15885d37117676d25bfda6",
				logoURI: "https://tokens.1inch.io/0xf952fc3ca7325cc27d15885d37117676d25bfda6.png",
				tags: [
					"tokens"
				]
			},
			"0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e": {
				symbol: "YFI",
				name: "yearn.finance",
				decimals: 18,
				address: "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
				logoURI: "https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png",
				tags: [
					"tokens"
				]
			},
			"0xf859bf77cbe8699013d6dbc7c2b926aaf307f830": {
				symbol: "BRY",
				name: "Berry Tributes",
				decimals: 18,
				address: "0xf859bf77cbe8699013d6dbc7c2b926aaf307f830",
				logoURI: "https://tokens.1inch.io/0xf859bf77cbe8699013d6dbc7c2b926aaf307f830.png",
				tags: [
					"tokens"
				]
			},
			"0x47bead2563dcbf3bf2c9407fea4dc236faba485a": {
				symbol: "SXP",
				name: "Swipe",
				decimals: 18,
				address: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
				logoURI: "https://tokens.1inch.io/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png",
				tags: [
					"tokens"
				]
			},
			"0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe": {
				symbol: "XRP",
				name: "XRP Token",
				decimals: 18,
				address: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
				logoURI: "https://tokens.1inch.io/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png",
				tags: [
					"tokens"
				]
			},
			"0x52ce071bd9b1c4b00a0b92d298c512478cad67e8": {
				symbol: "COMP",
				name: "Compound Coin",
				decimals: 18,
				address: "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8",
				logoURI: "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
				tags: [
					"tokens"
				]
			},
			"0x4197c6ef3879a08cd51e5560da5064b773aa1d29": {
				symbol: "ACS",
				name: "ACryptoS",
				decimals: 18,
				address: "0x4197c6ef3879a08cd51e5560da5064b773aa1d29",
				logoURI: "https://tokens.1inch.io/0x4197c6ef3879a08cd51e5560da5064b773aa1d29.png",
				tags: [
					"tokens"
				]
			},
			"0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e": {
				symbol: "REEF",
				name: "Reef.finance",
				decimals: 18,
				address: "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e",
				logoURI: "https://tokens.1inch.io/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png",
				tags: [
					"tokens"
				]
			},
			"0xa1faa113cbe53436df28ff0aee54275c13b40975": {
				symbol: "ALPHA",
				name: "AlphaToken",
				decimals: 18,
				address: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
				logoURI: "https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975_1.png",
				tags: [
					"tokens"
				]
			},
			"0xa2b726b1145a4773f68593cf171187d8ebe4d495": {
				symbol: "INJ",
				name: "Injective Protocol",
				decimals: 18,
				address: "0xa2b726b1145a4773f68593cf171187d8ebe4d495",
				logoURI: "https://tokens.1inch.io/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png",
				tags: [
					"tokens"
				]
			},
			"0x7979f6c54eba05e18ded44c4f986f49a5de551c2": {
				symbol: "KEBAB",
				name: "Kebab Token",
				decimals: 18,
				address: "0x7979f6c54eba05e18ded44c4f986f49a5de551c2",
				logoURI: "https://tokens.1inch.io/0x7979f6c54eba05e18ded44c4f986f49a5de551c2.png",
				tags: [
					"tokens"
				]
			},
			"0x56b6fb708fc5732dec1afc8d8556423a2edccbd6": {
				symbol: "EOS",
				name: "EOS Token",
				decimals: 18,
				address: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
				logoURI: "https://tokens.1inch.io/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png",
				tags: [
					"tokens"
				]
			},
			"0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51": {
				symbol: "BUNNY",
				name: "Bunny Token",
				decimals: 18,
				address: "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
				logoURI: "https://tokens.1inch.io/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png",
				tags: [
					"tokens"
				]
			},
			"0x4338665cbb7b2485a8855a139b75d5e34ab0db94": {
				symbol: "LTC",
				name: "Litecoin Token",
				decimals: 18,
				address: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
				logoURI: "https://tokens.1inch.io/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png",
				tags: [
					"tokens"
				]
			},
			"0xb59490ab09a0f526cc7305822ac65f2ab12f9723": {
				symbol: "LIT",
				name: "Litentry",
				decimals: 18,
				address: "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
				logoURI: "https://tokens.1inch.io/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png",
				tags: [
					"tokens"
				]
			},
			"0x8ff795a6f4d97e7887c79bea79aba5cc76444adf": {
				symbol: "BCH",
				name: "Bitcoin Cash Token",
				decimals: 18,
				address: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
				logoURI: "https://tokens.1inch.io/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png",
				tags: [
					"tokens"
				]
			},
			"0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8": {
				symbol: "Helmet",
				name: "Helmet.insure Governance Token",
				decimals: 18,
				address: "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8",
				logoURI: "https://tokens.1inch.io/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png",
				tags: [
					"tokens"
				]
			},
			"0x928e55dab735aa8260af3cedada18b5f70c72f1b": {
				symbol: "FRONT",
				name: "Frontier Token",
				decimals: 18,
				address: "0x928e55dab735aa8260af3cedada18b5f70c72f1b",
				logoURI: "https://tokens.1inch.io/0xf8c3527cc04340b208c854e985240c02f7b7793f.png",
				tags: [
					"tokens"
				]
			},
			"0x78650b139471520656b9e7aa7a5e9276814a38e9": {
				symbol: "BTCST",
				name: "StandardBTCHashrateToken",
				decimals: 17,
				address: "0x78650b139471520656b9e7aa7a5e9276814a38e9",
				logoURI: "https://tokens.1inch.io/0x78650b139471520656b9e7aa7a5e9276814a38e9.png",
				tags: [
					"tokens"
				]
			},
			"0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153": {
				symbol: "FIL",
				name: "Filecoin",
				decimals: 18,
				address: "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
				logoURI: "https://tokens.1inch.io/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png",
				tags: [
					"tokens"
				]
			},
			"0x233d91a0713155003fc4dce0afa871b508b3b715": {
				symbol: "DITTO",
				name: "Ditto",
				decimals: 9,
				address: "0x233d91a0713155003fc4dce0afa871b508b3b715",
				logoURI: "https://tokens.1inch.io/0x233d91a0713155003fc4dce0afa871b508b3b715.png",
				tags: [
					"tokens"
				]
			},
			"0x0eb3a705fc54725037cc9e008bdede697f62f335": {
				symbol: "ATOM",
				name: "Cosmos Token",
				decimals: 18,
				address: "0x0eb3a705fc54725037cc9e008bdede697f62f335",
				logoURI: "https://tokens.1inch.io/0x0eb3a705fc54725037cc9e008bdede697f62f335.png",
				tags: [
					"tokens"
				]
			},
			"0x111111111117dc0aa78b770fa6a738034120c302": {
				symbol: "1INCH",
				name: "1INCH Token",
				decimals: 18,
				address: "0x111111111117dc0aa78b770fa6a738034120c302",
				logoURI: "https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0": {
				symbol: "vSXP",
				name: "Venus SXP",
				decimals: 8,
				address: "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0",
				logoURI: "https://tokens.1inch.io/0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0.png",
				tags: [
					"tokens"
				]
			},
			"0xeca88125a5adbe82614ffc12d0db554e2e2867c8": {
				symbol: "vUSDC",
				name: "Venus USDC",
				decimals: 8,
				address: "0xeca88125a5adbe82614ffc12d0db554e2e2867c8",
				logoURI: "https://tokens.1inch.io/0xeca88125a5adbe82614ffc12d0db554e2e2867c8.png",
				tags: [
					"tokens"
				]
			},
			"0xfd5840cd36d94d7229439859c0112a4185bc0255": {
				symbol: "vUSDT",
				name: "Venus USDT",
				decimals: 8,
				address: "0xfd5840cd36d94d7229439859c0112a4185bc0255",
				logoURI: "https://tokens.1inch.io/0xfd5840cd36d94d7229439859c0112a4185bc0255.png",
				tags: [
					"tokens"
				]
			},
			"0x95c78222b3d6e262426483d42cfa53685a67ab9d": {
				symbol: "vBUSD",
				name: "Venus BUSD",
				decimals: 8,
				address: "0x95c78222b3d6e262426483d42cfa53685a67ab9d",
				logoURI: "https://tokens.1inch.io/0x95c78222b3d6e262426483d42cfa53685a67ab9d.png",
				tags: [
					"tokens"
				]
			},
			"0xa07c5b74c9b40447a954e1466938b865b6bbea36": {
				symbol: "vBNB",
				name: "Venus BNB",
				decimals: 8,
				address: "0xa07c5b74c9b40447a954e1466938b865b6bbea36",
				logoURI: "https://tokens.1inch.io/0xa07c5b74c9b40447a954e1466938b865b6bbea36.png",
				tags: [
					"tokens"
				]
			},
			"0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d": {
				symbol: "vXVS",
				name: "Venus XVS",
				decimals: 8,
				address: "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d",
				logoURI: "https://tokens.1inch.io/0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d.png",
				tags: [
					"tokens"
				]
			},
			"0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b": {
				symbol: "vBTC",
				name: "Venus BTC",
				decimals: 8,
				address: "0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b",
				logoURI: "https://tokens.1inch.io/0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b.png",
				tags: [
					"tokens"
				]
			},
			"0xf508fcd89b8bd15579dc79a6827cb4686a3592c8": {
				symbol: "vETH",
				name: "Venus ETH",
				decimals: 8,
				address: "0xf508fcd89b8bd15579dc79a6827cb4686a3592c8",
				logoURI: "https://tokens.1inch.io/0xf508fcd89b8bd15579dc79a6827cb4686a3592c8.png",
				tags: [
					"tokens"
				]
			},
			"0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b": {
				symbol: "vLTC",
				name: "Venus LTC",
				decimals: 8,
				address: "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b",
				logoURI: "https://tokens.1inch.io/0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b.png",
				tags: [
					"tokens"
				]
			},
			"0xb248a295732e0225acd3337607cc01068e3b9c10": {
				symbol: "vXRP",
				name: "Venus XRP",
				decimals: 8,
				address: "0xb248a295732e0225acd3337607cc01068e3b9c10",
				logoURI: "https://tokens.1inch.io/0xb248a295732e0225acd3337607cc01068e3b9c10.png",
				tags: [
					"tokens"
				]
			},
			"0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176": {
				symbol: "vBCH",
				name: "Venus BCH",
				decimals: 8,
				address: "0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176",
				logoURI: "https://tokens.1inch.io/0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176.png",
				tags: [
					"tokens"
				]
			},
			"0x1610bc33319e9398de5f57b33a5b184c806ad217": {
				symbol: "vDOT",
				name: "Venus DOT",
				decimals: 8,
				address: "0x1610bc33319e9398de5f57b33a5b184c806ad217",
				logoURI: "https://tokens.1inch.io/0x1610bc33319e9398de5f57b33a5b184c806ad217.png",
				tags: [
					"tokens"
				]
			},
			"0x650b940a1033b8a1b1873f78730fcfc73ec11f1f": {
				symbol: "vLINK",
				name: "Venus LINK",
				decimals: 8,
				address: "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f",
				logoURI: "https://tokens.1inch.io/0x650b940a1033b8a1b1873f78730fcfc73ec11f1f.png",
				tags: [
					"tokens"
				]
			},
			"0x972207a639cc1b374b893cc33fa251b55ceb7c07": {
				symbol: "vBETH",
				name: "Venus BETH",
				decimals: 8,
				address: "0x972207a639cc1b374b893cc33fa251b55ceb7c07",
				logoURI: "https://tokens.1inch.io/0x972207a639cc1b374b893cc33fa251b55ceb7c07.png",
				tags: [
					"tokens"
				]
			},
			"0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1": {
				symbol: "vDAI",
				name: "Venus DAI",
				decimals: 8,
				address: "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1",
				logoURI: "https://tokens.1inch.io/0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1.png",
				tags: [
					"tokens"
				]
			},
			"0xf91d58b5ae142dacc749f58a49fcbac340cb0343": {
				symbol: "vFIL",
				name: "Venus FIL",
				decimals: 8,
				address: "0xf91d58b5ae142dacc749f58a49fcbac340cb0343",
				logoURI: "https://tokens.1inch.io/0xf91d58b5ae142dacc749f58a49fcbac340cb0343.png",
				tags: [
					"tokens"
				]
			},
			"0x250632378e573c6be1ac2f97fcdf00515d0aa91b": {
				symbol: "BETH",
				name: "Binance Beacon ETH",
				decimals: 18,
				address: "0x250632378e573c6be1ac2f97fcdf00515d0aa91b",
				logoURI: "https://tokens.1inch.io/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png",
				tags: [
					"tokens"
				]
			},
			"0xe02df9e3e622debdd69fb838bb799e3f168902c5": {
				symbol: "BAKE",
				name: "BakeryToken",
				decimals: 18,
				address: "0xe02df9e3e622debdd69fb838bb799e3f168902c5",
				logoURI: "https://tokens.1inch.io/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png",
				tags: [
					"tokens"
				]
			},
			"0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c": {
				symbol: "renBTC",
				name: "renBTC",
				decimals: 8,
				address: "0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c",
				logoURI: "https://tokens.1inch.io/0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95": {
				symbol: "BANANA",
				name: "ApeSwapFinance Banana",
				decimals: 18,
				address: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
				logoURI: "https://tokens.1inch.io/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95.png",
				tags: [
					"tokens"
				]
			},
			"0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb": {
				symbol: "ZEC",
				name: "Zcash Token",
				decimals: 18,
				address: "0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb",
				logoURI: "https://tokens.1inch.io/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png",
				tags: [
					"tokens"
				]
			},
			"0x1fa4a73a3f0133f0025378af00236f3abdee5d63": {
				symbol: "NEAR",
				name: "NEAR Protocol",
				decimals: 18,
				address: "0x1fa4a73a3f0133f0025378af00236f3abdee5d63",
				logoURI: "https://tokens.1inch.io/0x1fa4a73a3f0133f0025378af00236f3abdee5d63.png",
				tags: [
					"tokens"
				]
			},
			"0x3d6545b08693dae087e957cb1180ee38b9e3c25e": {
				symbol: "ETC",
				name: "Ethereum Classic",
				decimals: 18,
				address: "0x3d6545b08693dae087e957cb1180ee38b9e3c25e",
				logoURI: "https://tokens.1inch.io/0x3d6545b08693dae087e957cb1180ee38b9e3c25e.png",
				tags: [
					"tokens"
				]
			},
			"0xfd7b3a77848f1c2d67e05e54d78d174a0c850335": {
				symbol: "ONT",
				name: "Ontology Token",
				decimals: 18,
				address: "0xfd7b3a77848f1c2d67e05e54d78d174a0c850335",
				logoURI: "https://tokens.1inch.io/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png",
				tags: [
					"tokens"
				]
			},
			"0x101d82428437127bf1608f699cd651e6abf9766e": {
				symbol: "BAT",
				name: "Basic Attention Token",
				decimals: 18,
				address: "0x101d82428437127bf1608f699cd651e6abf9766e",
				logoURI: "https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png",
				tags: [
					"tokens"
				]
			},
			"0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094": {
				symbol: "PAX",
				name: "Paxos Standard",
				decimals: 18,
				address: "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094",
				logoURI: "https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png",
				tags: [
					"tokens"
				]
			},
			"0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2": {
				symbol: "DODO",
				name: "DODO bird",
				decimals: 18,
				address: "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
				logoURI: "https://tokens.1inch.io/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png",
				tags: [
					"tokens"
				]
			},
			"0x9678e42cebeb63f23197d726b29b1cb20d0064e5": {
				symbol: "IOTX",
				name: "IoTeX Network",
				decimals: 18,
				address: "0x9678e42cebeb63f23197d726b29b1cb20d0064e5",
				logoURI: "https://tokens.1inch.io/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png",
				tags: [
					"tokens"
				]
			},
			"0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9": {
				symbol: "MIR",
				name: "Wrapped MIR Token",
				decimals: 18,
				address: "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9",
				logoURI: "https://tokens.1inch.io/0x09a3ecafa817268f77be1283176b946c4ff2e608.png",
				tags: [
					"tokens"
				]
			},
			"0xf307910a4c7bbc79691fd374889b36d8531b08e3": {
				symbol: "ANKR",
				name: "Ankr",
				decimals: 18,
				address: "0xf307910a4c7bbc79691fd374889b36d8531b08e3",
				logoURI: "https://tokens.1inch.io/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png",
				tags: [
					"tokens"
				]
			},
			"0x762539b45a1dcce3d36d080f74d1aed37844b878": {
				symbol: "LINA",
				name: "Linear Token",
				decimals: 18,
				address: "0x762539b45a1dcce3d36d080f74d1aed37844b878",
				logoURI: "https://tokens.1inch.io/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png",
				tags: [
					"tokens"
				]
			},
			"0xf218184af829cf2b0019f8e6f0b2423498a36983": {
				symbol: "MATH",
				name: "MATH Token",
				decimals: 18,
				address: "0xf218184af829cf2b0019f8e6f0b2423498a36983",
				logoURI: "https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png",
				tags: [
					"tokens"
				]
			},
			"0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd": {
				symbol: "LTO",
				name: "LTO Network",
				decimals: 18,
				address: "0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd",
				logoURI: "https://tokens.1inch.io/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png",
				tags: [
					"tokens"
				]
			},
			"0x3910db0600ea925f63c36ddb1351ab6e2c6eb102": {
				symbol: "SPARTA",
				name: "Spartan Protocol Token",
				decimals: 18,
				address: "0x3910db0600ea925f63c36ddb1351ab6e2c6eb102",
				logoURI: "https://tokens.1inch.io/0x3910db0600ea925f63c36ddb1351ab6e2c6eb102.png",
				tags: [
					"tokens"
				]
			},
			"0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa": {
				symbol: "ANY",
				name: "Anyswap-BEP20",
				decimals: 18,
				address: "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa",
				logoURI: "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png",
				tags: [
					"tokens"
				]
			},
			"0x5a41f637c3f7553dba6ddc2d3ca92641096577ea": {
				symbol: "JulD",
				name: "JulSwap",
				decimals: 18,
				address: "0x5a41f637c3f7553dba6ddc2d3ca92641096577ea",
				logoURI: "https://tokens.1inch.io/0x5a41f637c3f7553dba6ddc2d3ca92641096577ea.png",
				tags: [
					"tokens"
				]
			},
			"0xae9269f27437f0fcbc232d39ec814844a51d6b8f": {
				symbol: "BURGER",
				name: "Burger Swap",
				decimals: 18,
				address: "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
				logoURI: "https://tokens.1inch.io/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png",
				tags: [
					"tokens"
				]
			},
			"0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929": {
				symbol: "CTK",
				name: "CertiK Token",
				decimals: 6,
				address: "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
				logoURI: "https://tokens.1inch.io/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png",
				tags: [
					"tokens"
				]
			},
			"0xca0a9df6a8cad800046c1ddc5755810718b65c44": {
				symbol: "TCT",
				name: "Token Club",
				decimals: 18,
				address: "0xca0a9df6a8cad800046c1ddc5755810718b65c44",
				logoURI: "https://tokens.1inch.io/0xca0a9df6a8cad800046c1ddc5755810718b65c44.png",
				tags: [
					"tokens"
				]
			},
			"0x12e34cdf6a031a10fe241864c32fb03a4fdad739": {
				symbol: "FREE",
				name: "FREE coin BSC",
				decimals: 18,
				address: "0x12e34cdf6a031a10fe241864c32fb03a4fdad739",
				logoURI: "https://tokens.1inch.io/0x12e34cdf6a031a10fe241864c32fb03a4fdad739.png",
				tags: [
					"tokens"
				]
			},
			"0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4": {
				symbol: "BHC",
				name: "Billion Happiness",
				decimals: 18,
				address: "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4",
				logoURI: "https://tokens.1inch.io/0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4.png",
				tags: [
					"tokens"
				]
			},
			"0x90df11a8cce420675e73922419e3f4f3fe13cccb": {
				symbol: "STM",
				name: "Streamity",
				decimals: 18,
				address: "0x90df11a8cce420675e73922419e3f4f3fe13cccb",
				logoURI: "https://tokens.1inch.io/0x0e22734e078d6e399bcee40a549db591c4ea46cb.png",
				tags: [
					"tokens"
				]
			},
			"0xd1102332a213e21faf78b69c03572031f3552c33": {
				symbol: "BTD",
				name: "Bolt Dollar",
				decimals: 18,
				address: "0xd1102332a213e21faf78b69c03572031f3552c33",
				logoURI: "https://tokens.1inch.io/0xd1102332a213e21faf78b69c03572031f3552c33.png",
				tags: [
					"tokens"
				]
			},
			"0xadd8a06fd58761a5047426e160b2b88ad3b9d464": {
				symbol: "CHS",
				name: "cheesemaker.farm",
				decimals: 18,
				address: "0xadd8a06fd58761a5047426e160b2b88ad3b9d464",
				logoURI: "https://tokens.1inch.io/0xadd8a06fd58761a5047426e160b2b88ad3b9d464.png",
				tags: [
					"tokens"
				]
			},
			"0xdc0f0a5719c39764b011edd02811bd228296887c": {
				symbol: "DOS",
				name: "DOS Network Token BEP20",
				decimals: 18,
				address: "0xdc0f0a5719c39764b011edd02811bd228296887c",
				logoURI: "https://tokens.1inch.io/0x0a913bead80f321e7ac35285ee10d9d922659cb7.png",
				tags: [
					"tokens"
				]
			},
			"0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556": {
				symbol: "NUTS",
				name: "Squirrel Finance",
				decimals: 18,
				address: "0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556",
				logoURI: "https://tokens.1inch.io/0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556.png",
				tags: [
					"tokens"
				]
			},
			"0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d": {
				symbol: "JULb",
				name: "JULb",
				decimals: 18,
				address: "0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d",
				logoURI: "https://tokens.1inch.io/0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d.png",
				tags: [
					"tokens"
				]
			},
			"0xca3f508b8e4dd382ee878a314789373d80a5190a": {
				symbol: "BIFI",
				name: "beefy.finance",
				decimals: 18,
				address: "0xca3f508b8e4dd382ee878a314789373d80a5190a",
				logoURI: "https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png",
				tags: [
					"tokens"
				]
			},
			"0xba2ae424d960c26247dd6c32edc70b295c744c43": {
				symbol: "DOGE",
				name: "Dogecoin",
				decimals: 8,
				address: "0xba2ae424d960c26247dd6c32edc70b295c744c43",
				logoURI: "https://tokens.1inch.io/0xba2ae424d960c26247dd6c32edc70b295c744c43.png",
				tags: [
					"tokens"
				]
			},
			"0x4131b87f74415190425ccd873048c708f8005823": {
				symbol: "bMXX",
				name: "Multiplier",
				decimals: 18,
				address: "0x4131b87f74415190425ccd873048c708f8005823",
				logoURI: "https://tokens.1inch.io/0x4131b87f74415190425ccd873048c708f8005823.png",
				tags: [
					"tokens"
				]
			},
			"0x8f0528ce5ef7b51152a59745befdd91d97091d2f": {
				symbol: "ALPACA",
				name: "AlpacaToken",
				decimals: 18,
				address: "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
				logoURI: "https://tokens.1inch.io/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png",
				tags: [
					"tokens"
				]
			},
			"0xd632bd021a07af70592ce1e18717ab9aa126decb": {
				symbol: "bKANGAL",
				name: "Kangal",
				decimals: 18,
				address: "0xd632bd021a07af70592ce1e18717ab9aa126decb",
				logoURI: "https://tokens.1inch.io/0xd632bd021a07af70592ce1e18717ab9aa126decb.png",
				tags: [
					"tokens"
				]
			},
			"0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f": {
				symbol: "UBU",
				name: "UBUToken",
				decimals: 18,
				address: "0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f",
				logoURI: "https://tokens.1inch.io/0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f.png",
				tags: [
					"tokens"
				]
			},
			"0xe0e514c71282b6f4e823703a39374cf58dc3ea4f": {
				symbol: "BELT",
				name: "BELT Token",
				decimals: 18,
				address: "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f",
				logoURI: "https://tokens.1inch.io/0xe0e514c71282b6f4e823703a39374cf58dc3ea4f.png",
				tags: [
					"tokens"
				]
			},
			"0x94f559ae621f1c810f31a6a620ad7376776fe09e": {
				symbol: "SOUP",
				name: "Soup",
				decimals: 18,
				address: "0x94f559ae621f1c810f31a6a620ad7376776fe09e",
				logoURI: "https://tokens.1inch.io/0x94f559ae621f1c810f31a6a620ad7376776fe09e.png",
				tags: [
					"tokens"
				]
			},
			"0x35e869b7456462b81cdb5e6e42434bd27f3f788c": {
				symbol: "MDO",
				name: "Midas Dollar",
				decimals: 18,
				address: "0x35e869b7456462b81cdb5e6e42434bd27f3f788c",
				logoURI: "https://tokens.1inch.io/0x35e869b7456462b81cdb5e6e42434bd27f3f788c.png",
				tags: [
					"tokens"
				]
			},
			"0x4da996c5fe84755c80e108cf96fe705174c5e36a": {
				symbol: "WOW",
				name: "WOWswap",
				decimals: 18,
				address: "0x4da996c5fe84755c80e108cf96fe705174c5e36a",
				logoURI: "https://tokens.1inch.io/0x4da996c5fe84755c80e108cf96fe705174c5e36a.png",
				tags: [
					"tokens"
				]
			},
			"0x2849b1ae7e04a3d9bc288673a92477cf63f28af4": {
				symbol: "SALT",
				name: "Salt Token",
				decimals: 18,
				address: "0x2849b1ae7e04a3d9bc288673a92477cf63f28af4",
				logoURI: "https://tokens.1inch.io/0x2849b1ae7e04a3d9bc288673a92477cf63f28af4.png",
				tags: [
					"tokens"
				]
			},
			"0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700": {
				symbol: "BSCPAD",
				name: "BSCPAD.com",
				decimals: 18,
				address: "0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700",
				logoURI: "https://tokens.1inch.io/0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700.png",
				tags: [
					"tokens"
				]
			},
			"0x81859801b01764d4f0fa5e64729f5a6c3b91435b": {
				symbol: "BFI",
				name: "bearn.fi",
				decimals: 18,
				address: "0x81859801b01764d4f0fa5e64729f5a6c3b91435b",
				logoURI: "https://tokens.1inch.io/0x81859801b01764d4f0fa5e64729f5a6c3b91435b.png",
				tags: [
					"tokens"
				]
			},
			"0x3a50d6daacc82f17a2434184fe904fc45542a734": {
				symbol: "FUSII",
				name: "Fusible | Fusible.io",
				decimals: 18,
				address: "0x3a50d6daacc82f17a2434184fe904fc45542a734",
				logoURI: "https://tokens.1inch.io/0x4c924a1fe185c6c6f870bc6bf1762b832208d748.png",
				tags: [
					"tokens"
				]
			},
			"0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8": {
				symbol: "bSRK",
				name: "SparkPoint",
				decimals: 18,
				address: "0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8",
				logoURI: "https://tokens.1inch.io/0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8.png",
				tags: [
					"tokens"
				]
			},
			"0x96dd399f9c3afda1f194182f71600f1b65946501": {
				symbol: "COS",
				name: "Contentos",
				decimals: 18,
				address: "0x96dd399f9c3afda1f194182f71600f1b65946501",
				logoURI: "https://tokens.1inch.io/0x96dd399f9c3afda1f194182f71600f1b65946501.png",
				tags: [
					"tokens"
				]
			},
			"0xc5e6689c9c8b02be7c49912ef19e79cf24977f03": {
				symbol: "ALPA",
				name: "AlpaToken",
				decimals: 18,
				address: "0xc5e6689c9c8b02be7c49912ef19e79cf24977f03",
				logoURI: "https://tokens.1inch.io/0xc5e6689c9c8b02be7c49912ef19e79cf24977f03.png",
				tags: [
					"tokens"
				]
			},
			"0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75": {
				symbol: "JGN",
				name: "Juggernaut DeFi",
				decimals: 18,
				address: "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75",
				logoURI: "https://tokens.1inch.io/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png",
				tags: [
					"tokens"
				]
			},
			"0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65": {
				symbol: "NMX",
				name: "Nominex",
				decimals: 18,
				address: "0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65",
				logoURI: "https://tokens.1inch.io/0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc2e1acef50ae55661855e8dcb72adb182a3cc259": {
				symbol: "BTS",
				name: "Bolt Share",
				decimals: 18,
				address: "0xc2e1acef50ae55661855e8dcb72adb182a3cc259",
				logoURI: "https://tokens.1inch.io/0xc2e1acef50ae55661855e8dcb72adb182a3cc259.png",
				tags: [
					"tokens"
				]
			},
			"0xf79037f6f6be66832de4e7516be52826bc3cbcc4": {
				symbol: "HARD",
				name: "HARD",
				decimals: 6,
				address: "0xf79037f6f6be66832de4e7516be52826bc3cbcc4",
				logoURI: "https://tokens.1inch.io/0xf79037f6f6be66832de4e7516be52826bc3cbcc4.png",
				tags: [
					"tokens"
				]
			},
			"0x8c784c49097dcc637b93232e15810d53871992bf": {
				symbol: "MSC",
				name: "Monster Slayer Cash",
				decimals: 18,
				address: "0x8c784c49097dcc637b93232e15810d53871992bf",
				logoURI: "https://tokens.1inch.io/0x8c784c49097dcc637b93232e15810d53871992bf.png",
				tags: [
					"tokens"
				]
			},
			"0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd": {
				symbol: "ALLOY",
				name: "HyperAlloy",
				decimals: 18,
				address: "0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd",
				logoURI: "https://tokens.1inch.io/0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd.png",
				tags: [
					"tokens"
				]
			},
			"0x72faa679e1008ad8382959ff48e392042a8b06f7": {
				symbol: "bALBT",
				name: "AllianceBlock Token",
				decimals: 18,
				address: "0x72faa679e1008ad8382959ff48e392042a8b06f7",
				logoURI: "https://tokens.1inch.io/0x72faa679e1008ad8382959ff48e392042a8b06f7.png",
				tags: [
					"tokens"
				]
			},
			"0xa86d305a36cdb815af991834b46ad3d7fbb38523": {
				symbol: "BR34P",
				name: "BR34P",
				decimals: 8,
				address: "0xa86d305a36cdb815af991834b46ad3d7fbb38523",
				logoURI: "https://tokens.1inch.io/0xa86d305a36cdb815af991834b46ad3d7fbb38523.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x92a42db88ed0f02c71d439e55962ca7cab0168b5": {
				symbol: "TRDG",
				name: "Tardigrades.Finance",
				decimals: 9,
				address: "0x92a42db88ed0f02c71d439e55962ca7cab0168b5",
				logoURI: "https://tokens.1inch.io/0x92a42db88ed0f02c71d439e55962ca7cab0168b5.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b": {
				symbol: "Ramen",
				name: "Ramen Token",
				decimals: 18,
				address: "0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b",
				logoURI: "https://tokens.1inch.io/0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b.png",
				tags: [
					"tokens"
				]
			},
			"0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0": {
				symbol: "WATCH",
				name: "yieldwatch",
				decimals: 18,
				address: "0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0",
				logoURI: "https://tokens.1inch.io/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png",
				tags: [
					"tokens"
				]
			},
			"0x47c1c7b9d7941a7265d123dcfb100d8fb5348213": {
				symbol: "YVS",
				name: "YVS.Finance on BSC",
				decimals: 18,
				address: "0x47c1c7b9d7941a7265d123dcfb100d8fb5348213",
				logoURI: "https://tokens.1inch.io/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x31d0a7ada4d4c131eb612db48861211f63e57610": {
				symbol: "START",
				name: "BSCstarter",
				decimals: 18,
				address: "0x31d0a7ada4d4c131eb612db48861211f63e57610",
				logoURI: "https://tokens.1inch.io/0x31d0a7ada4d4c131eb612db48861211f63e57610.png",
				tags: [
					"tokens"
				]
			},
			"0x99e92123eb77bc8f999316f622e5222498438784": {
				symbol: "GMT_1",
				name: "Gambit",
				decimals: 18,
				address: "0x99e92123eb77bc8f999316f622e5222498438784",
				logoURI: "https://tokens.1inch.io/0x99e92123eb77bc8f999316f622e5222498438784.png",
				tags: [
					"tokens"
				]
			},
			"0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1": {
				symbol: "GST",
				name: "Gemstone Token",
				decimals: 18,
				address: "0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1",
				logoURI: "https://tokens.1inch.io/0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1.png",
				tags: [
					"tokens"
				]
			},
			"0x7cb2f28505e733f60c0db208afaa321c792f6cf4": {
				symbol: "OPERAND",
				name: "Operand",
				decimals: 8,
				address: "0x7cb2f28505e733f60c0db208afaa321c792f6cf4",
				logoURI: "https://tokens.1inch.io/0x7cb2f28505e733f60c0db208afaa321c792f6cf4.png",
				tags: [
					"tokens"
				]
			},
			"0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07": {
				symbol: "ZEFI",
				name: "ZCore Finance",
				decimals: 18,
				address: "0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07",
				logoURI: "https://tokens.1inch.io/0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07.png",
				tags: [
					"tokens"
				]
			},
			"0xba8a6ef5f15ed18e7184f44a775060a6bf91d8d0": {
				symbol: "SHAKE",
				name: "SHAKE token by SpaceSwap v2",
				decimals: 18,
				address: "0xba8a6ef5f15ed18e7184f44a775060a6bf91d8d0",
				logoURI: "https://tokens.1inch.io/0x6006fc2a849fedaba8330ce36f5133de01f96189.png",
				tags: [
					"tokens"
				]
			},
			"0x4a5a34212404f30c5ab7eb61b078fa4a55adc5a5": {
				symbol: "MILK2",
				name: "MilkyWay Token by SpaceSwap v2",
				decimals: 18,
				address: "0x4a5a34212404f30c5ab7eb61b078fa4a55adc5a5",
				logoURI: "https://tokens.1inch.io/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png",
				tags: [
					"tokens"
				]
			},
			"0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c": {
				symbol: "DUSK",
				name: "Dusk Network",
				decimals: 18,
				address: "0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c",
				logoURI: "https://tokens.1inch.io/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png",
				tags: [
					"tokens"
				]
			},
			"0x630d98424efe0ea27fb1b3ab7741907dffeaad78": {
				symbol: "PEAK",
				name: "PEAKDEFI",
				decimals: 8,
				address: "0x630d98424efe0ea27fb1b3ab7741907dffeaad78",
				logoURI: "https://tokens.1inch.io/0x630d98424efe0ea27fb1b3ab7741907dffeaad78.png",
				tags: [
					"tokens"
				]
			},
			"0x566cedd201f67e542a6851a2959c1a449a041945": {
				symbol: "pOPIUM",
				name: "pTokens OPIUM",
				decimals: 18,
				address: "0x566cedd201f67e542a6851a2959c1a449a041945",
				logoURI: "https://tokens.1inch.io/0x566cedd201f67e542a6851a2959c1a449a041945.png",
				tags: [
					"tokens"
				]
			},
			"0xc7091aa18598b87588e37501b6ce865263cd67ce": {
				symbol: "CCAKE",
				name: "CheesecakeSwap Token",
				decimals: 18,
				address: "0xc7091aa18598b87588e37501b6ce865263cd67ce",
				logoURI: "https://tokens.1inch.io/0xc7091aa18598b87588e37501b6ce865263cd67ce.png",
				tags: [
					"tokens"
				]
			},
			"0xacb2d47827c9813ae26de80965845d80935afd0b": {
				symbol: "MCRN",
				name: "MacaronSwap Token",
				decimals: 18,
				address: "0xacb2d47827c9813ae26de80965845d80935afd0b",
				logoURI: "https://tokens.1inch.io/0xacb2d47827c9813ae26de80965845d80935afd0b.png",
				tags: [
					"tokens"
				]
			},
			"0x58730ae0faa10d73b0cddb5e7b87c3594f7a20cb": {
				symbol: "ERC20",
				name: "ERC20",
				decimals: 18,
				address: "0x58730ae0faa10d73b0cddb5e7b87c3594f7a20cb",
				logoURI: "https://tokens.1inch.io/0x58730ae0faa10d73b0cddb5e7b87c3594f7a20cb.png",
				tags: [
					"tokens"
				]
			},
			"0x3aabcf53a1930a42e18d938c019e83ebee50a849": {
				symbol: "SPG",
				name: "SPONGE",
				decimals: 9,
				address: "0x3aabcf53a1930a42e18d938c019e83ebee50a849",
				logoURI: "https://tokens.1inch.io/0x3aabcf53a1930a42e18d938c019e83ebee50a849.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x1c213179c2c08906fb759878860652a61727ed14": {
				symbol: "ZD",
				name: "ZD",
				decimals: 18,
				address: "0x1c213179c2c08906fb759878860652a61727ed14",
				logoURI: "https://tokens.1inch.io/0x1c213179c2c08906fb759878860652a61727ed14.png",
				tags: [
					"tokens"
				]
			},
			"0x1311b352467d2b5c296881badea82850bcd8f886": {
				symbol: "TOOLS",
				name: "TOOLS",
				decimals: 18,
				address: "0x1311b352467d2b5c296881badea82850bcd8f886",
				logoURI: "https://tokens.1inch.io/0x1311b352467d2b5c296881badea82850bcd8f886.png",
				tags: [
					"tokens"
				]
			},
			"0x63870a18b6e42b01ef1ad8a2302ef50b7132054f": {
				symbol: "blink",
				name: "BLinkToken",
				decimals: 6,
				address: "0x63870a18b6e42b01ef1ad8a2302ef50b7132054f",
				logoURI: "https://tokens.1inch.io/0x63870a18b6e42b01ef1ad8a2302ef50b7132054f.png",
				tags: [
					"tokens"
				]
			},
			"0x9806aec346064183b5ce441313231dff89811f7a": {
				symbol: "yPANDA",
				name: "YieldPanda.finance",
				decimals: 8,
				address: "0x9806aec346064183b5ce441313231dff89811f7a",
				logoURI: "https://tokens.1inch.io/0x9806aec346064183b5ce441313231dff89811f7a.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b": {
				symbol: "FAT",
				name: "Fatfi Protocol",
				decimals: 18,
				address: "0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b",
				logoURI: "https://tokens.1inch.io/0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b.png",
				tags: [
					"tokens"
				]
			},
			"0x3c00f8fcc8791fa78daa4a480095ec7d475781e2": {
				symbol: "SAFESTAR",
				name: "SafeStar",
				decimals: 9,
				address: "0x3c00f8fcc8791fa78daa4a480095ec7d475781e2",
				logoURI: "https://tokens.1inch.io/0x3c00f8fcc8791fa78daa4a480095ec7d475781e2.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x039cb485212f996a9dbb85a9a75d898f94d38da6": {
				symbol: "DEXE",
				name: "DeXe",
				decimals: 18,
				address: "0x039cb485212f996a9dbb85a9a75d898f94d38da6",
				logoURI: "https://tokens.1inch.io/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png",
				tags: [
					"tokens"
				]
			},
			"0x211ffbe424b90e25a15531ca322adf1559779e45": {
				symbol: "BUX",
				name: "BUX Token",
				decimals: 18,
				address: "0x211ffbe424b90e25a15531ca322adf1559779e45",
				logoURI: "https://tokens.1inch.io/0x211ffbe424b90e25a15531ca322adf1559779e45.png",
				tags: [
					"tokens"
				]
			},
			"0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28": {
				symbol: "XWIN",
				name: "xWIN Token",
				decimals: 18,
				address: "0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28",
				logoURI: "https://tokens.1inch.io/0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28.png",
				tags: [
					"tokens"
				]
			},
			"0x2d69c55baecefc6ec815239da0a985747b50db6e": {
				symbol: "TFF",
				name: "Tutti Frutti",
				decimals: 18,
				address: "0x2d69c55baecefc6ec815239da0a985747b50db6e",
				logoURI: "https://tokens.1inch.io/0x2d69c55baecefc6ec815239da0a985747b50db6e.png",
				tags: [
					"tokens"
				]
			},
			"0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf": {
				symbol: "DFX",
				name: "DeFireX on BSC",
				decimals: 18,
				address: "0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf",
				logoURI: "https://tokens.1inch.io/0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d": {
				symbol: "SWAMP",
				name: "Swampy",
				decimals: 18,
				address: "0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d",
				logoURI: "https://tokens.1inch.io/0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d.png",
				tags: [
					"tokens"
				]
			},
			"0xa72a0564d0e887123112e6a4dc1aba7611ad861d": {
				symbol: "FEB",
				name: "FEB Token",
				decimals: 0,
				address: "0xa72a0564d0e887123112e6a4dc1aba7611ad861d",
				logoURI: "https://tokens.1inch.io/0xa72a0564d0e887123112e6a4dc1aba7611ad861d.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xf0e406c49c63abf358030a299c0e00118c4c6ba5": {
				symbol: "NVT",
				name: "NerveNetwork",
				decimals: 8,
				address: "0xf0e406c49c63abf358030a299c0e00118c4c6ba5",
				logoURI: "https://tokens.1inch.io/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png",
				tags: [
					"tokens"
				]
			},
			"0xf0443834b7b21104b7102edbe8f9ec06204cd395": {
				symbol: "TAO",
				name: "Friction Finance",
				decimals: 9,
				address: "0xf0443834b7b21104b7102edbe8f9ec06204cd395",
				logoURI: "https://tokens.1inch.io/0xf0443834b7b21104b7102edbe8f9ec06204cd395.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x49277cc5be56b519901e561096bfd416277b4f6d": {
				symbol: "OCT",
				name: "Octree Finance",
				decimals: 8,
				address: "0x49277cc5be56b519901e561096bfd416277b4f6d",
				logoURI: "https://tokens.1inch.io/0x49277cc5be56b519901e561096bfd416277b4f6d.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x42981d0bfbaf196529376ee702f2a9eb9092fcb5": {
				symbol: "SFM",
				name: "SafeMoon",
				decimals: 9,
				address: "0x42981d0bfbaf196529376ee702f2a9eb9092fcb5",
				logoURI: "https://tokens.1inch.io/0x42981d0bfbaf196529376ee702f2a9eb9092fcb5.png",
				tags: [
					"tokens"
				]
			},
			"0x94babbe728d9411612ee41b20241a6fa251b26ce": {
				symbol: "GFCE",
				name: "GFORCE",
				decimals: 9,
				address: "0x94babbe728d9411612ee41b20241a6fa251b26ce",
				logoURI: "https://tokens.1inch.io/0x94babbe728d9411612ee41b20241a6fa251b26ce.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x7f479d78380ad00341fdd7322fe8aef766e29e5a": {
				symbol: "WHIRL",
				name: "Whirl Finance",
				decimals: 18,
				address: "0x7f479d78380ad00341fdd7322fe8aef766e29e5a",
				logoURI: "https://tokens.1inch.io/0x7f479d78380ad00341fdd7322fe8aef766e29e5a.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6": {
				symbol: "MSS",
				name: "Monster Slayer Share",
				decimals: 18,
				address: "0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6",
				logoURI: "https://tokens.1inch.io/0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6.png",
				tags: [
					"tokens"
				]
			},
			"0x851f7a700c5d67db59612b871338a85526752c25": {
				symbol: "ARGON",
				name: "ArgonToken",
				decimals: 18,
				address: "0x851f7a700c5d67db59612b871338a85526752c25",
				logoURI: "https://tokens.1inch.io/0x851f7a700c5d67db59612b871338a85526752c25.png",
				tags: [
					"tokens"
				]
			},
			"0xeca41281c24451168a37211f0bc2b8645af45092": {
				symbol: "TPT",
				name: "TokenPocket Token",
				decimals: 4,
				address: "0xeca41281c24451168a37211f0bc2b8645af45092",
				logoURI: "https://tokens.1inch.io/0xeca41281c24451168a37211f0bc2b8645af45092.png",
				tags: [
					"tokens"
				]
			},
			"0xbcf39f0edda668c58371e519af37ca705f2bfcbd": {
				symbol: "pCWS",
				name: "PolyCrowns",
				decimals: 18,
				address: "0xbcf39f0edda668c58371e519af37ca705f2bfcbd",
				logoURI: "https://tokens.1inch.io/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png",
				tags: [
					"tokens"
				]
			},
			"0x7af173f350d916358af3e218bdf2178494beb748": {
				symbol: "TRADE",
				name: "UniTrade",
				decimals: 18,
				address: "0x7af173f350d916358af3e218bdf2178494beb748",
				logoURI: "https://tokens.1inch.io/0x7af173f350d916358af3e218bdf2178494beb748.png",
				tags: [
					"tokens"
				]
			},
			"0x3a5325f0e5ee4da06a285e988f052d4e45aa64b4": {
				symbol: "POLAR",
				name: "Polaris",
				decimals: 18,
				address: "0x3a5325f0e5ee4da06a285e988f052d4e45aa64b4",
				logoURI: "https://tokens.1inch.io/0x1c545e9943cfd1b41e60a7917465911fa00fc28c.png",
				tags: [
					"tokens"
				]
			},
			"0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61": {
				symbol: "BRICK",
				name: "BrickChain",
				decimals: 18,
				address: "0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61",
				logoURI: "https://tokens.1inch.io/0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xc1165227519ffd22fdc77ceb1037b9b284eef068": {
				symbol: "BNSD",
				name: "bns.finance",
				decimals: 18,
				address: "0xc1165227519ffd22fdc77ceb1037b9b284eef068",
				logoURI: "https://tokens.1inch.io/0xc1165227519ffd22fdc77ceb1037b9b284eef068.png",
				tags: [
					"tokens"
				]
			},
			"0x4f0ed527e8a95ecaa132af214dfd41f30b361600": {
				symbol: "vBSWAP",
				name: "vSWAP.fi",
				decimals: 18,
				address: "0x4f0ed527e8a95ecaa132af214dfd41f30b361600",
				logoURI: "https://tokens.1inch.io/0x4f0ed527e8a95ecaa132af214dfd41f30b361600.png",
				tags: [
					"tokens"
				]
			},
			"0xbbeb90cfb6fafa1f69aa130b7341089abeef5811": {
				symbol: "UBXT",
				name: "UpBots",
				decimals: 18,
				address: "0xbbeb90cfb6fafa1f69aa130b7341089abeef5811",
				logoURI: "https://tokens.1inch.io/0xbbeb90cfb6fafa1f69aa130b7341089abeef5811.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa7f552078dcc247c2684336020c03648500c6d9f": {
				symbol: "EPS",
				name: "Ellipsis",
				decimals: 18,
				address: "0xa7f552078dcc247c2684336020c03648500c6d9f",
				logoURI: "https://tokens.1inch.io/0xa7f552078dcc247c2684336020c03648500c6d9f.png",
				tags: [
					"tokens"
				]
			},
			"0x5986d5c77c65e5801a5caa4fae80089f870a71da": {
				symbol: "bDIGG",
				name: "Badger Sett Digg",
				decimals: 18,
				address: "0x5986d5c77c65e5801a5caa4fae80089f870a71da",
				logoURI: "https://tokens.1inch.io/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x7b65b489fe53fce1f6548db886c08ad73111ddd8": {
				symbol: "IRON",
				name: "IRON Stablecoin",
				decimals: 18,
				address: "0x7b65b489fe53fce1f6548db886c08ad73111ddd8",
				logoURI: "https://tokens.1inch.io/0x7b65b489fe53fce1f6548db886c08ad73111ddd8.png",
				tags: [
					"tokens"
				]
			},
			"0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d": {
				symbol: "SUPER",
				name: "SUPER-ERC20",
				decimals: 18,
				address: "0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d",
				logoURI: "https://tokens.1inch.io/0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d.png",
				tags: [
					"tokens"
				]
			},
			"0x810ee35443639348adbbc467b33310d2ab43c168": {
				symbol: "CYC",
				name: "Cyclone Protocol",
				decimals: 18,
				address: "0x810ee35443639348adbbc467b33310d2ab43c168",
				logoURI: "https://tokens.1inch.io/0x810ee35443639348adbbc467b33310d2ab43c168.png",
				tags: [
					"tokens"
				]
			},
			"0x8597ba143ac509189e89aab3ba28d661a5dd9830": {
				symbol: "VANCAT",
				name: "VANCAT Token",
				decimals: 0,
				address: "0x8597ba143ac509189e89aab3ba28d661a5dd9830",
				logoURI: "https://tokens.1inch.io/0x8597ba143ac509189e89aab3ba28d661a5dd9830.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb": {
				symbol: "SACT",
				name: "srnArtGallery",
				decimals: 18,
				address: "0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb",
				logoURI: "https://tokens.1inch.io/0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb.png",
				tags: [
					"tokens"
				]
			},
			"0x05b339b0a346bf01f851dde47a5d485c34fe220c": {
				symbol: "NAUT",
				name: "Astronaut",
				decimals: 8,
				address: "0x05b339b0a346bf01f851dde47a5d485c34fe220c",
				logoURI: "https://tokens.1inch.io/0x05b339b0a346bf01f851dde47a5d485c34fe220c.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x4090e535f2e251f5f88518998b18b54d26b3b07c": {
				symbol: "TYPH",
				name: "Typhoon",
				decimals: 18,
				address: "0x4090e535f2e251f5f88518998b18b54d26b3b07c",
				logoURI: "https://tokens.1inch.io/0x4090e535f2e251f5f88518998b18b54d26b3b07c.png",
				tags: [
					"tokens"
				]
			},
			"0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26": {
				symbol: "HOGL",
				name: "HOGL Finance",
				decimals: 18,
				address: "0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26",
				logoURI: "https://tokens.1inch.io/0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c": {
				symbol: "SWTH",
				name: "Switcheo Token",
				decimals: 8,
				address: "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c",
				logoURI: "https://tokens.1inch.io/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c.png",
				tags: [
					"tokens"
				]
			},
			"0x1f7216fdb338247512ec99715587bb97bbf96eae": {
				symbol: "bBADGER",
				name: "Badger Sett Badger",
				decimals: 18,
				address: "0x1f7216fdb338247512ec99715587bb97bbf96eae",
				logoURI: "https://tokens.1inch.io/0x1f7216fdb338247512ec99715587bb97bbf96eae.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0231f91e02debd20345ae8ab7d71a41f8e140ce7": {
				symbol: "bwJUP",
				name: "BSC Wrapped Jupiter",
				decimals: 18,
				address: "0x0231f91e02debd20345ae8ab7d71a41f8e140ce7",
				logoURI: "https://tokens.1inch.io/0x0231f91e02debd20345ae8ab7d71a41f8e140ce7.png",
				tags: [
					"tokens"
				]
			},
			"0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe": {
				symbol: "EGLD",
				name: "Elrond",
				decimals: 18,
				address: "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe",
				logoURI: "https://tokens.1inch.io/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png",
				tags: [
					"tokens"
				]
			},
			"0x9001ee054f1692fef3a48330cb543b6fec6287eb": {
				symbol: "STEEL",
				name: "IRON Share V2",
				decimals: 18,
				address: "0x9001ee054f1692fef3a48330cb543b6fec6287eb",
				logoURI: "https://tokens.1inch.io/0x9001ee054f1692fef3a48330cb543b6fec6287eb.png",
				tags: [
					"tokens"
				]
			},
			"0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5": {
				symbol: "TXL",
				name: "Tixl Token",
				decimals: 18,
				address: "0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5",
				logoURI: "https://tokens.1inch.io/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png",
				tags: [
					"tokens"
				]
			},
			"0x547cbe0f0c25085e7015aa6939b28402eb0ccdac": {
				symbol: "XBN",
				name: "Elastic BNB",
				decimals: 18,
				address: "0x547cbe0f0c25085e7015aa6939b28402eb0ccdac",
				logoURI: "https://tokens.1inch.io/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac.png",
				tags: [
					"tokens"
				]
			},
			"0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b": {
				symbol: "UNICORN",
				name: "UNICORN Token",
				decimals: 18,
				address: "0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b",
				logoURI: "https://tokens.1inch.io/0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b.png",
				tags: [
					"tokens"
				]
			},
			"0xeda21b525ac789eab1a08ef2404dd8505ffb973d": {
				symbol: "HPS",
				name: "HappinessToken",
				decimals: 18,
				address: "0xeda21b525ac789eab1a08ef2404dd8505ffb973d",
				logoURI: "https://tokens.1inch.io/0xeda21b525ac789eab1a08ef2404dd8505ffb973d.png",
				tags: [
					"tokens"
				]
			},
			"0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389": {
				symbol: "ACSI",
				name: "ACryptoS(I)",
				decimals: 18,
				address: "0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389",
				logoURI: "https://tokens.1inch.io/0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389.png",
				tags: [
					"tokens"
				]
			},
			"0x2222227e22102fe3322098e4cbfe18cfebd57c95": {
				symbol: "TLM",
				name: "Alien Worlds Trilium",
				decimals: 4,
				address: "0x2222227e22102fe3322098e4cbfe18cfebd57c95",
				logoURI: "https://tokens.1inch.io/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png",
				tags: [
					"tokens"
				]
			},
			"0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563": {
				symbol: "BONDLY",
				name: "Bondly Token",
				decimals: 18,
				address: "0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563",
				logoURI: "https://tokens.1inch.io/0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563.png",
				tags: [
					"tokens"
				]
			},
			"0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0": {
				symbol: "ELE",
				name: "Eleven.finance",
				decimals: 18,
				address: "0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0",
				logoURI: "https://tokens.1inch.io/0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0.png",
				tags: [
					"tokens"
				]
			},
			"0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d": {
				symbol: "CLIMB",
				name: "Climb Token Finance",
				decimals: 8,
				address: "0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d",
				logoURI: "https://tokens.1inch.io/0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d.png",
				tags: [
					"tokens"
				]
			},
			"0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377": {
				symbol: "MBOX",
				name: "Mobox",
				decimals: 18,
				address: "0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377",
				logoURI: "https://tokens.1inch.io/0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377.png",
				tags: [
					"tokens"
				]
			},
			"0x52d86850bc8207b520340b7e39cdaf22561b9e56": {
				symbol: "SWIRL",
				name: "Swirl.Cash",
				decimals: 18,
				address: "0x52d86850bc8207b520340b7e39cdaf22561b9e56",
				logoURI: "https://tokens.1inch.io/0x52d86850bc8207b520340b7e39cdaf22561b9e56.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xad90c05bc51672eedfee36e58b3ff1a78bbc146d": {
				symbol: "XSPACE",
				name: "XSPACE",
				decimals: 9,
				address: "0xad90c05bc51672eedfee36e58b3ff1a78bbc146d",
				logoURI: "https://tokens.1inch.io/0xad90c05bc51672eedfee36e58b3ff1a78bbc146d.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x965b0df5bda0e7a0649324d78f03d5f7f2de086a": {
				symbol: "COOK",
				name: "Poly-Peg COOK",
				decimals: 18,
				address: "0x965b0df5bda0e7a0649324d78f03d5f7f2de086a",
				logoURI: "https://tokens.1inch.io/0x965b0df5bda0e7a0649324d78f03d5f7f2de086a.png",
				tags: [
					"tokens"
				]
			},
			"0x04c747b40be4d535fc83d09939fb0f626f32800b": {
				symbol: "ITAM",
				name: "ITAM",
				decimals: 18,
				address: "0x04c747b40be4d535fc83d09939fb0f626f32800b",
				logoURI: "https://tokens.1inch.io/0x04c747b40be4d535fc83d09939fb0f626f32800b.png",
				tags: [
					"tokens"
				]
			},
			"0x0feadcc3824e7f3c12f40e324a60c23ca51627fc": {
				symbol: "Warden",
				name: "WardenSwap Token",
				decimals: 18,
				address: "0x0feadcc3824e7f3c12f40e324a60c23ca51627fc",
				logoURI: "https://tokens.1inch.io/0x0feadcc3824e7f3c12f40e324a60c23ca51627fc.png",
				tags: [
					"tokens"
				]
			},
			"0x9f589e3eabe42ebc94a44727b3f3531c0c877809": {
				symbol: "TKO",
				name: "Tokocrypto Token",
				decimals: 18,
				address: "0x9f589e3eabe42ebc94a44727b3f3531c0c877809",
				logoURI: "https://tokens.1inch.io/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png",
				tags: [
					"tokens"
				]
			},
			"0x477bc8d23c634c154061869478bce96be6045d12": {
				symbol: "SFUND",
				name: "SeedifyFund",
				decimals: 18,
				address: "0x477bc8d23c634c154061869478bce96be6045d12",
				logoURI: "https://tokens.1inch.io/0x477bc8d23c634c154061869478bce96be6045d12.png",
				tags: [
					"tokens"
				]
			},
			"0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816": {
				symbol: "NFTL",
				name: "NFTL Token",
				decimals: 18,
				address: "0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816",
				logoURI: "https://tokens.1inch.io/0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816.png",
				tags: [
					"tokens"
				]
			},
			"0x5857c96dae9cf8511b08cb07f85753c472d36ea3": {
				symbol: "FUSE",
				name: "Fuse Token on BSC",
				decimals: 18,
				address: "0x5857c96dae9cf8511b08cb07f85753c472d36ea3",
				logoURI: "https://tokens.1inch.io/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xfad8e46123d7b4e77496491769c167ff894d2acb": {
				symbol: "FOX",
				name: "Fox Finance",
				decimals: 9,
				address: "0xfad8e46123d7b4e77496491769c167ff894d2acb",
				logoURI: "https://tokens.1inch.io/0xfad8e46123d7b4e77496491769c167ff894d2acb.png",
				tags: [
					"tokens"
				]
			},
			"0x6f817a0ce8f7640add3bc0c1c2298635043c2423": {
				symbol: "anyETH",
				name: "ANY Ethereum",
				decimals: 18,
				address: "0x6f817a0ce8f7640add3bc0c1c2298635043c2423",
				logoURI: "https://tokens.1inch.io/0x6f817a0ce8f7640add3bc0c1c2298635043c2423.png",
				tags: [
					"tokens"
				]
			},
			"0x54261774905f3e6e9718f2abb10ed6555cae308a": {
				symbol: "anyBTC",
				name: "ANY Bitcoin",
				decimals: 8,
				address: "0x54261774905f3e6e9718f2abb10ed6555cae308a",
				logoURI: "https://tokens.1inch.io/0x54261774905f3e6e9718f2abb10ed6555cae308a.png",
				tags: [
					"tokens"
				]
			},
			"0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af": {
				symbol: "FREN",
				name: "Frenchie",
				decimals: 18,
				address: "0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af",
				logoURI: "https://tokens.1inch.io/0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af.png",
				tags: [
					"tokens"
				]
			},
			"0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f": {
				symbol: "XED",
				name: "Exeedme",
				decimals: 18,
				address: "0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f",
				logoURI: "https://tokens.1inch.io/0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x67d012f731c23f0313cea1186d0121779c77fcfe": {
				symbol: "SOUL",
				name: "APOyield SOULS",
				decimals: 8,
				address: "0x67d012f731c23f0313cea1186d0121779c77fcfe",
				logoURI: "https://tokens.1inch.io/0x67d012f731c23f0313cea1186d0121779c77fcfe.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x7b0409a3a3f79baa284035d48e1dfd581d7d7654": {
				symbol: "RUPEE",
				name: "Rupee Token",
				decimals: 18,
				address: "0x7b0409a3a3f79baa284035d48e1dfd581d7d7654",
				logoURI: "https://tokens.1inch.io/0x7b0409a3a3f79baa284035d48e1dfd581d7d7654.png",
				tags: [
					"tokens"
				]
			},
			"0x6b51231c43b1604815313801db5e9e614914d6e4": {
				symbol: "SAFEGALAXY",
				name: "SafeGalaxy",
				decimals: 9,
				address: "0x6b51231c43b1604815313801db5e9e614914d6e4",
				logoURI: "https://tokens.1inch.io/0x6b51231c43b1604815313801db5e9e614914d6e4.png",
				tags: [
					"tokens"
				]
			},
			"0x6d949f9297a522c0f97c232cc209a67bd7cfa471": {
				symbol: "MRAT",
				name: "Moon Rat Token",
				decimals: 9,
				address: "0x6d949f9297a522c0f97c232cc209a67bd7cfa471",
				logoURI: "https://tokens.1inch.io/0x6d949f9297a522c0f97c232cc209a67bd7cfa471.png",
				tags: [
					"tokens"
				]
			},
			"0x3ad9594151886ce8538c1ff615efa2385a8c3a88": {
				symbol: "SAFEMARS",
				name: "SafeMars",
				decimals: 9,
				address: "0x3ad9594151886ce8538c1ff615efa2385a8c3a88",
				logoURI: "https://tokens.1inch.io/0x3ad9594151886ce8538c1ff615efa2385a8c3a88.png",
				tags: [
					"tokens"
				]
			},
			"0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf": {
				symbol: "BGOV",
				name: "BGOV Token",
				decimals: 18,
				address: "0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf",
				logoURI: "https://tokens.1inch.io/0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf.png",
				tags: [
					"tokens"
				]
			},
			"0x26a5dfab467d4f58fb266648cae769503cec9580": {
				symbol: "xMARK",
				name: "Standard on xDai on BSC",
				decimals: 9,
				address: "0x26a5dfab467d4f58fb266648cae769503cec9580",
				logoURI: "https://tokens.1inch.io/0x26a5dfab467d4f58fb266648cae769503cec9580.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xee738a9e5fb78c24d26cecd30389ed977c38d0ca": {
				symbol: "FSAFE",
				name: "Fair Safe",
				decimals: 9,
				address: "0xee738a9e5fb78c24d26cecd30389ed977c38d0ca",
				logoURI: "https://tokens.1inch.io/0xee738a9e5fb78c24d26cecd30389ed977c38d0ca.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x380624a4a7e69db1ca07deecf764025fc224d056": {
				symbol: "SAFEBTC",
				name: "SafeBTC",
				decimals: 9,
				address: "0x380624a4a7e69db1ca07deecf764025fc224d056",
				logoURI: "https://tokens.1inch.io/0x380624a4a7e69db1ca07deecf764025fc224d056.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x07af67b392b7a202fad8e0fbc64c34f33102165b": {
				symbol: "AQUAGOAT",
				name: "Aquagoat",
				decimals: 9,
				address: "0x07af67b392b7a202fad8e0fbc64c34f33102165b",
				logoURI: "https://tokens.1inch.io/0x07af67b392b7a202fad8e0fbc64c34f33102165b.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x8850d2c68c632e3b258e612abaa8fada7e6958e5": {
				symbol: "PIG",
				name: "Pig Token",
				decimals: 9,
				address: "0x8850d2c68c632e3b258e612abaa8fada7e6958e5",
				logoURI: "https://tokens.1inch.io/0x8850d2c68c632e3b258e612abaa8fada7e6958e5.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x375483cfa7fc18f6b455e005d835a8335fbdbb1f": {
				symbol: "ECP",
				name: "Eclipse",
				decimals: 9,
				address: "0x375483cfa7fc18f6b455e005d835a8335fbdbb1f",
				logoURI: "https://tokens.1inch.io/0x375483cfa7fc18f6b455e005d835a8335fbdbb1f.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x81e4d494b85a24a58a6ba45c9b418b32a4e039de": {
				symbol: "MOONTOKEN",
				name: "Moon Token",
				decimals: 18,
				address: "0x81e4d494b85a24a58a6ba45c9b418b32a4e039de",
				logoURI: "https://tokens.1inch.io/0x81e4d494b85a24a58a6ba45c9b418b32a4e039de.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x2a9718deff471f3bb91fa0eceab14154f150a385": {
				symbol: "ElonGate",
				name: "ElonGate",
				decimals: 9,
				address: "0x2a9718deff471f3bb91fa0eceab14154f150a385",
				logoURI: "https://tokens.1inch.io/0x2a9718deff471f3bb91fa0eceab14154f150a385.png",
				tags: [
					"tokens"
				]
			},
			"0x5bccfbd33873a5498f8406146868eddd5e998962": {
				symbol: "PDO",
				name: "pDollar",
				decimals: 18,
				address: "0x5bccfbd33873a5498f8406146868eddd5e998962",
				logoURI: "https://tokens.1inch.io/0x5bccfbd33873a5498f8406146868eddd5e998962.png",
				tags: [
					"tokens"
				]
			},
			"0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2": {
				symbol: "DFY",
				name: "DeFi For You.",
				decimals: 18,
				address: "0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2",
				logoURI: "https://tokens.1inch.io/0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2.png",
				tags: [
					"tokens"
				]
			},
			"0x045c4324039da91c52c55df5d785385aab073dcf": {
				symbol: "bCFX",
				name: "BSC Conflux",
				decimals: 18,
				address: "0x045c4324039da91c52c55df5d785385aab073dcf",
				logoURI: "https://tokens.1inch.io/0x045c4324039da91c52c55df5d785385aab073dcf.png",
				tags: [
					"tokens"
				]
			},
			"0x658a109c5900bc6d2357c87549b651670e5b0539": {
				symbol: "FOR",
				name: "The Force Token",
				decimals: 18,
				address: "0x658a109c5900bc6d2357c87549b651670e5b0539",
				logoURI: "https://tokens.1inch.io/0x658a109c5900bc6d2357c87549b651670e5b0539.png",
				tags: [
					"tokens"
				]
			},
			"0xb86abcb37c3a4b64f74f59301aff131a1becc787": {
				symbol: "ZIL",
				name: "Zilliqa",
				decimals: 12,
				address: "0xb86abcb37c3a4b64f74f59301aff131a1becc787",
				logoURI: "https://tokens.1inch.io/0xb86abcb37c3a4b64f74f59301aff131a1becc787_1.png",
				tags: [
					"tokens"
				]
			},
			"0xc9132c76060f6b319764ea075973a650a1a53bc9": {
				symbol: "DDIM",
				name: "DuckDaoDime",
				decimals: 18,
				address: "0xc9132c76060f6b319764ea075973a650a1a53bc9",
				logoURI: "https://tokens.1inch.io/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png",
				tags: [
					"tokens"
				]
			},
			"0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed": {
				symbol: "MDA",
				name: "Moeda Loyalty Points",
				decimals: 18,
				address: "0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed",
				logoURI: "https://tokens.1inch.io/0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed.png",
				tags: [
					"tokens"
				]
			},
			"0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28": {
				symbol: "OCTA",
				name: "Octans",
				decimals: 9,
				address: "0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28",
				logoURI: "https://tokens.1inch.io/0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x7e52a123ed6db6ac872a875552935fbbd2544c86": {
				symbol: "SYL",
				name: "SYL",
				decimals: 6,
				address: "0x7e52a123ed6db6ac872a875552935fbbd2544c86",
				logoURI: "https://tokens.1inch.io/0x7e52a123ed6db6ac872a875552935fbbd2544c86.png",
				tags: [
					"tokens"
				]
			},
			"0x42f6f551ae042cbe50c739158b4f0cac0edb9096": {
				symbol: "NRV",
				name: "Nerve",
				decimals: 18,
				address: "0x42f6f551ae042cbe50c739158b4f0cac0edb9096",
				logoURI: "https://tokens.1inch.io/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png",
				tags: [
					"tokens"
				]
			},
			"0x97a30c692ece9c317235d48287d23d358170fc40": {
				symbol: "CRX",
				name: "CryptEx Token",
				decimals: 18,
				address: "0x97a30c692ece9c317235d48287d23d358170fc40",
				logoURI: "https://tokens.1inch.io/0x97a30c692ece9c317235d48287d23d358170fc40.png",
				tags: [
					"tokens"
				]
			},
			"0x7e624fa0e1c4abfd309cc15719b7e2580887f570": {
				symbol: "POLS",
				name: "PolkastarterToken",
				decimals: 18,
				address: "0x7e624fa0e1c4abfd309cc15719b7e2580887f570",
				logoURI: "https://tokens.1inch.io/0x7e624fa0e1c4abfd309cc15719b7e2580887f570.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x181de8c57c4f25eba9fd27757bbd11cc66a55d31": {
				symbol: "BELUGA",
				name: "BelugaToken",
				decimals: 18,
				address: "0x181de8c57c4f25eba9fd27757bbd11cc66a55d31",
				logoURI: "https://tokens.1inch.io/0x181de8c57c4f25eba9fd27757bbd11cc66a55d31.png",
				tags: [
					"tokens"
				]
			},
			"0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8": {
				symbol: "PET",
				name: "Pet Token",
				decimals: 18,
				address: "0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8",
				logoURI: "https://tokens.1inch.io/0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8.png",
				tags: [
					"tokens"
				]
			},
			"0xf16e81dce15b08f326220742020379b855b87df9": {
				symbol: "ICE",
				name: "IceToken",
				decimals: 18,
				address: "0xf16e81dce15b08f326220742020379b855b87df9",
				logoURI: "https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x4a080377f83d669d7bb83b3184a8a5e61b500608": {
				symbol: "XEND",
				name: "XEND",
				decimals: 18,
				address: "0x4a080377f83d669d7bb83b3184a8a5e61b500608",
				logoURI: "https://tokens.1inch.io/0x4a080377f83d669d7bb83b3184a8a5e61b500608.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d": {
				symbol: "BSCS",
				name: "BSCS Token",
				decimals: 18,
				address: "0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d",
				logoURI: "https://tokens.1inch.io/0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d.png",
				tags: [
					"tokens"
				]
			},
			"0xb93ba7dc61ecfced69067151fc00c41ca369a797": {
				symbol: "WENMOON",
				name: "WenMoon Token",
				decimals: 7,
				address: "0xb93ba7dc61ecfced69067151fc00c41ca369a797",
				logoURI: "https://tokens.1inch.io/0xb93ba7dc61ecfced69067151fc00c41ca369a797.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xd4fbc57b6233f268e7fba3b66e62719d74deecbc": {
				symbol: "MOD",
				name: "Modefi",
				decimals: 18,
				address: "0xd4fbc57b6233f268e7fba3b66e62719d74deecbc",
				logoURI: "https://tokens.1inch.io/0xd4fbc57b6233f268e7fba3b66e62719d74deecbc.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x99c6e435ec259a7e8d65e1955c9423db624ba54c": {
				symbol: "FMT",
				name: "Finminity",
				decimals: 18,
				address: "0x99c6e435ec259a7e8d65e1955c9423db624ba54c",
				logoURI: "https://tokens.1inch.io/0x99c6e435ec259a7e8d65e1955c9423db624ba54c.png",
				tags: [
					"tokens"
				]
			},
			"0x0e0e877894a101ad8711ae3a0194fa44ca837a79": {
				symbol: "MOONMOON",
				name: "MoonMoon",
				decimals: 9,
				address: "0x0e0e877894a101ad8711ae3a0194fa44ca837a79",
				logoURI: "https://tokens.1inch.io/0x0e0e877894a101ad8711ae3a0194fa44ca837a79.png",
				tags: [
					"tokens"
				]
			},
			"0xd7b729ef857aa773f47d37088a1181bb3fbf0099": {
				symbol: "BOG",
				name: "Bogged Finance",
				decimals: 18,
				address: "0xd7b729ef857aa773f47d37088a1181bb3fbf0099",
				logoURI: "https://tokens.1inch.io/0xd7b729ef857aa773f47d37088a1181bb3fbf0099.png",
				tags: [
					"tokens"
				]
			},
			"0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967": {
				symbol: "GEN",
				name: "Gen Token",
				decimals: 18,
				address: "0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967",
				logoURI: "https://tokens.1inch.io/0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967.png",
				tags: [
					"tokens"
				]
			},
			"0x85c128ee1feeb39a59490c720a9c563554b51d33": {
				symbol: "KEY",
				name: "MoMo KEY",
				decimals: 18,
				address: "0x85c128ee1feeb39a59490c720a9c563554b51d33",
				logoURI: "https://tokens.1inch.io/0x85c128ee1feeb39a59490c720a9c563554b51d33.png",
				tags: [
					"tokens"
				]
			},
			"0x4e6415a5727ea08aae4580057187923aec331227": {
				symbol: "FINE",
				name: "Refinable",
				decimals: 18,
				address: "0x4e6415a5727ea08aae4580057187923aec331227",
				logoURI: "https://tokens.1inch.io/0x4e6415a5727ea08aae4580057187923aec331227.png",
				tags: [
					"tokens"
				]
			},
			"0x2fa5daf6fe0708fbd63b1a7d1592577284f52256": {
				symbol: "MARSH",
				name: "UnmarshalToken",
				decimals: 18,
				address: "0x2fa5daf6fe0708fbd63b1a7d1592577284f52256",
				logoURI: "https://tokens.1inch.io/0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37.png",
				tags: [
					"tokens"
				]
			},
			"0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90": {
				symbol: "WEX",
				name: "WaultSwap",
				decimals: 18,
				address: "0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90",
				logoURI: "https://tokens.1inch.io/0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90.png",
				tags: [
					"tokens"
				]
			},
			"0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac": {
				symbol: "HAKKA",
				name: "Hakka Finance on xDai on BSC",
				decimals: 18,
				address: "0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac",
				logoURI: "https://tokens.1inch.io/0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8519ea49c997f50ceffa444d240fb655e89248aa": {
				symbol: "RAMP",
				name: "RAMP DEFI",
				decimals: 18,
				address: "0x8519ea49c997f50ceffa444d240fb655e89248aa",
				logoURI: "https://tokens.1inch.io/0x8519ea49c997f50ceffa444d240fb655e89248aa.png",
				tags: [
					"tokens"
				]
			},
			"0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa": {
				symbol: "SEA",
				name: "Sea Token",
				decimals: 18,
				address: "0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa",
				logoURI: "https://tokens.1inch.io/0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa.png",
				tags: [
					"tokens"
				]
			},
			"0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1": {
				symbol: "CUB",
				name: "Cub Finance",
				decimals: 18,
				address: "0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1",
				logoURI: "https://tokens.1inch.io/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1.png",
				tags: [
					"tokens"
				]
			},
			"0xe7cb24f449973d5b3520e5b93d88b405903c75fb": {
				symbol: "BNBTC",
				name: "BNbitcoin Token - minable bitcoin on BSC",
				decimals: 8,
				address: "0xe7cb24f449973d5b3520e5b93d88b405903c75fb",
				logoURI: "https://tokens.1inch.io/0xe7cb24f449973d5b3520e5b93d88b405903c75fb.png",
				tags: [
					"tokens"
				]
			},
			"0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987": {
				symbol: "SAFESPACE",
				name: "SAFESPACE",
				decimals: 9,
				address: "0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987",
				logoURI: "https://tokens.1inch.io/0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xce5814efff15d53efd8025b9f2006d4d7d640b9b": {
				symbol: "MOONSTAR",
				name: "MoonStar",
				decimals: 9,
				address: "0xce5814efff15d53efd8025b9f2006d4d7d640b9b",
				logoURI: "https://tokens.1inch.io/0xce5814efff15d53efd8025b9f2006d4d7d640b9b.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf": {
				symbol: "LUNAR",
				name: "LunarHighway",
				decimals: 9,
				address: "0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf",
				logoURI: "https://tokens.1inch.io/0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xf7844cb890f4c339c497aeab599abdc3c874b67a": {
				symbol: "NFTART",
				name: "NFTArt.Finance",
				decimals: 9,
				address: "0xf7844cb890f4c339c497aeab599abdc3c874b67a",
				logoURI: "https://tokens.1inch.io/0xf7844cb890f4c339c497aeab599abdc3c874b67a.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x14016e85a25aeb13065688cafb43044c2ef86784": {
				symbol: "TUSD",
				name: "TrueUSD",
				decimals: 18,
				address: "0x14016e85a25aeb13065688cafb43044c2ef86784",
				logoURI: "https://tokens.1inch.io/0x0000000000085d4780b73119b644ae5ecd22b376.png",
				tags: [
					"tokens"
				]
			},
			"0x6421531af54c7b14ea805719035ebf1e3661c44a": {
				symbol: "bLEO",
				name: "BEP20 LEO",
				decimals: 3,
				address: "0x6421531af54c7b14ea805719035ebf1e3661c44a",
				logoURI: "https://tokens.1inch.io/0x6421531af54c7b14ea805719035ebf1e3661c44a.png",
				tags: [
					"tokens"
				]
			},
			"0xce5347fdd503f25f8428151a274544a5bd1bd8ca": {
				symbol: "UNIF",
				name: "Unified",
				decimals: 9,
				address: "0xce5347fdd503f25f8428151a274544a5bd1bd8ca",
				logoURI: "https://tokens.1inch.io/0xce5347fdd503f25f8428151a274544a5bd1bd8ca.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8": {
				symbol: "BINGUS",
				name: "Bingus Token",
				decimals: 9,
				address: "0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8",
				logoURI: "https://tokens.1inch.io/0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8.png",
				tags: [
					"tokens"
				]
			},
			"0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe": {
				symbol: "bROOBEE",
				name: "ROOBEE",
				decimals: 18,
				address: "0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe",
				logoURI: "https://tokens.1inch.io/0xa31b1767e09f842ecfd4bc471fe44f830e3891aa.png",
				tags: [
					"tokens"
				]
			},
			"0x039471b9e8a86b977aaeb5ec4182cf3866f436b0": {
				symbol: "TREE",
				name: "OakTree Token",
				decimals: 18,
				address: "0x039471b9e8a86b977aaeb5ec4182cf3866f436b0",
				logoURI: "https://tokens.1inch.io/0x039471b9e8a86b977aaeb5ec4182cf3866f436b0.png",
				tags: [
					"tokens"
				]
			},
			"0xfeea0bdd3d07eb6fe305938878c0cadbfa169042": {
				symbol: "8PAY",
				name: "8PAY Network",
				decimals: 18,
				address: "0xfeea0bdd3d07eb6fe305938878c0cadbfa169042",
				logoURI: "https://tokens.1inch.io/0xfeea0bdd3d07eb6fe305938878c0cadbfa169042.png",
				tags: [
					"tokens"
				]
			},
			"0x57bb0f40479d7dd0caa67f2a579273a8e9c038ee": {
				symbol: "RUGBUST",
				name: "Rug Busters ",
				decimals: 18,
				address: "0x57bb0f40479d7dd0caa67f2a579273a8e9c038ee",
				logoURI: "https://tokens.1inch.io/0x57bb0f40479d7dd0caa67f2a579273a8e9c038ee.png",
				tags: [
					"tokens"
				]
			},
			"0x27ae27110350b98d564b9a3eed31baebc82d878d": {
				symbol: "CUMMIES",
				name: "CumRocket",
				decimals: 18,
				address: "0x27ae27110350b98d564b9a3eed31baebc82d878d",
				logoURI: "https://tokens.1inch.io/0x27ae27110350b98d564b9a3eed31baebc82d878d.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7": {
				symbol: "LOT",
				name: "Lottery Token",
				decimals: 9,
				address: "0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7",
				logoURI: "https://tokens.1inch.io/0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x64d5baf5ac030e2b7c435add967f787ae94d0205": {
				symbol: "GTON",
				name: "Graviton",
				decimals: 18,
				address: "0x64d5baf5ac030e2b7c435add967f787ae94d0205",
				logoURI: "https://tokens.1inch.io/0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d_1.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d": {
				symbol: "POODL",
				name: "Poodl",
				decimals: 9,
				address: "0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d",
				logoURI: "https://tokens.1inch.io/0x56a980328aee33aabb540a02e002c8323326bf36.png",
				tags: [
					"tokens"
				]
			},
			"0xb5389a679151c4b8621b1098c6e0961a3cfee8d4": {
				symbol: "LAUNCH",
				name: "Super Launcher",
				decimals: 18,
				address: "0xb5389a679151c4b8621b1098c6e0961a3cfee8d4",
				logoURI: "https://tokens.1inch.io/0xb5389a679151c4b8621b1098c6e0961a3cfee8d4.png",
				tags: [
					"tokens"
				]
			},
			"0x843d4a358471547f51534e3e51fae91cb4dc3f28": {
				symbol: "lowb",
				name: "loser coin",
				decimals: 18,
				address: "0x843d4a358471547f51534e3e51fae91cb4dc3f28",
				logoURI: "https://tokens.1inch.io/0x843d4a358471547f51534e3e51fae91cb4dc3f28.png",
				tags: [
					"tokens"
				]
			},
			"0xe5a09784b16e1065c37df14c6e2f06fdce317a1b": {
				symbol: "KaiInu",
				name: "Kai Inu",
				decimals: 9,
				address: "0xe5a09784b16e1065c37df14c6e2f06fdce317a1b",
				logoURI: "https://tokens.1inch.io/0xe5a09784b16e1065c37df14c6e2f06fdce317a1b.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xd0dff49de3e314fdfd3f93c5eeee7d5d2f5515cd": {
				symbol: "ZBTC",
				name: "ZBTC",
				decimals: 18,
				address: "0xd0dff49de3e314fdfd3f93c5eeee7d5d2f5515cd",
				logoURI: "https://tokens.1inch.io/0xd0dff49de3e314fdfd3f93c5eeee7d5d2f5515cd.png",
				tags: [
					"tokens"
				]
			},
			"0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6": {
				symbol: "DOGGY",
				name: "DOGGY",
				decimals: 18,
				address: "0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6",
				logoURI: "https://tokens.1inch.io/0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6.png",
				tags: [
					"tokens"
				]
			},
			"0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506": {
				symbol: "UNCX",
				name: "UniCrypt on xDai on BSC",
				decimals: 18,
				address: "0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506",
				logoURI: "https://tokens.1inch.io/0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0f9e4d49f25de22c2202af916b681fbb3790497b": {
				symbol: "PERL",
				name: "Perlin",
				decimals: 18,
				address: "0x0f9e4d49f25de22c2202af916b681fbb3790497b",
				logoURI: "https://tokens.1inch.io/0x0f9e4d49f25de22c2202af916b681fbb3790497b.png",
				tags: [
					"tokens"
				]
			},
			"0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2": {
				symbol: "OM",
				name: "MANTRA DAO",
				decimals: 18,
				address: "0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2",
				logoURI: "https://tokens.1inch.io/0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2.png",
				tags: [
					"tokens"
				]
			},
			"0x16939ef78684453bfdfb47825f8a5f714f12623a": {
				symbol: "XTZ",
				name: "Tezos Token",
				decimals: 18,
				address: "0x16939ef78684453bfdfb47825f8a5f714f12623a",
				logoURI: "https://tokens.1inch.io/0x16939ef78684453bfdfb47825f8a5f714f12623a.png",
				tags: [
					"tokens"
				]
			},
			"0x31b9773f225408129a90788ef013bd449e283865": {
				symbol: "PORN",
				name: "Porn",
				decimals: 9,
				address: "0x31b9773f225408129a90788ef013bd449e283865",
				logoURI: "https://tokens.1inch.io/0x31b9773f225408129a90788ef013bd449e283865.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x994517e000aa3f117e7ad61b0e2336c76b4fd94a": {
				symbol: "MTDR",
				name: "Matador Token",
				decimals: 18,
				address: "0x994517e000aa3f117e7ad61b0e2336c76b4fd94a",
				logoURI: "https://tokens.1inch.io/0x994517e000aa3f117e7ad61b0e2336c76b4fd94a.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x050787de0cf5da03d9387b344334d51cae5dd0fd": {
				symbol: "PEKC",
				name: "PEACOCKCOIN",
				decimals: 9,
				address: "0x050787de0cf5da03d9387b344334d51cae5dd0fd",
				logoURI: "https://tokens.1inch.io/0x050787de0cf5da03d9387b344334d51cae5dd0fd.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x4691937a7508860f876c9c0a2a617e7d9e945d4b": {
				symbol: "WOO",
				name: "Wootrade Network",
				decimals: 18,
				address: "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
				logoURI: "https://tokens.1inch.io/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png",
				tags: [
					"tokens"
				]
			},
			"0x55671114d774ee99d653d6c12460c780a67f1d18": {
				symbol: "PACOCA",
				name: "Pacoca",
				decimals: 18,
				address: "0x55671114d774ee99d653d6c12460c780a67f1d18",
				logoURI: "https://tokens.1inch.io/0x55671114d774ee99d653d6c12460c780a67f1d18.png",
				tags: [
					"tokens"
				]
			},
			"0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26": {
				symbol: "PAPR",
				name: "PAPR",
				decimals: 18,
				address: "0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26",
				logoURI: "https://tokens.1inch.io/0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26.png",
				tags: [
					"tokens"
				]
			},
			"0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf": {
				symbol: "PRNTR",
				name: "PRNTR",
				decimals: 18,
				address: "0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf",
				logoURI: "https://tokens.1inch.io/0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf.png",
				tags: [
					"tokens"
				]
			},
			"0x7ee7f14427cc41d6db17829eb57dc74a26796b9d": {
				symbol: "MOONRISE",
				name: "MoonRise",
				decimals: 9,
				address: "0x7ee7f14427cc41d6db17829eb57dc74a26796b9d",
				logoURI: "https://tokens.1inch.io/0x7ee7f14427cc41d6db17829eb57dc74a26796b9d.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x18b426813731c144108c6d7faf5ede71a258fd9a": {
				symbol: "OLYMPUS",
				name: "OLYMPUS",
				decimals: 9,
				address: "0x18b426813731c144108c6d7faf5ede71a258fd9a",
				logoURI: "https://tokens.1inch.io/0x18b426813731c144108c6d7faf5ede71a258fd9a.png",
				tags: [
					"tokens"
				]
			},
			"0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f": {
				symbol: "WSPP",
				name: "WolfSafePoorPeople",
				decimals: 0,
				address: "0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f",
				logoURI: "https://tokens.1inch.io/0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f.png",
				tags: [
					"tokens"
				]
			},
			"0x728c5bac3c3e370e372fc4671f9ef6916b814d8b": {
				symbol: "UNFI",
				name: "UNFI",
				decimals: 18,
				address: "0x728c5bac3c3e370e372fc4671f9ef6916b814d8b",
				logoURI: "https://tokens.1inch.io/0x728c5bac3c3e370e372fc4671f9ef6916b814d8b.png",
				tags: [
					"tokens"
				]
			},
			"0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf": {
				symbol: "TFT",
				name: "TFT on BSC",
				decimals: 7,
				address: "0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf",
				logoURI: "https://tokens.1inch.io/0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf.png",
				tags: [
					"tokens"
				]
			},
			"0x3fcca8648651e5b974dd6d3e50f61567779772a8": {
				symbol: "POTS",
				name: "Moonpot",
				decimals: 18,
				address: "0x3fcca8648651e5b974dd6d3e50f61567779772a8",
				logoURI: "https://tokens.1inch.io/0x3fcca8648651e5b974dd6d3e50f61567779772a8.png",
				tags: [
					"tokens"
				]
			},
			"0xf750a26eb0acf95556e8529e72ed530f3b60f348": {
				symbol: "GNT",
				name: "GreenTrust",
				decimals: 18,
				address: "0xf750a26eb0acf95556e8529e72ed530f3b60f348",
				logoURI: "https://tokens.1inch.io/0xf750a26eb0acf95556e8529e72ed530f3b60f348.png",
				tags: [
					"tokens"
				]
			},
			"0x9d986a3f147212327dd658f712d5264a73a1fdb0": {
				symbol: "LAND",
				name: "Landshare Token",
				decimals: 18,
				address: "0x9d986a3f147212327dd658f712d5264a73a1fdb0",
				logoURI: "https://tokens.1inch.io/0x9d986a3f147212327dd658f712d5264a73a1fdb0.png",
				tags: [
					"tokens"
				]
			},
			"0x0255af6c9f86f6b0543357bacefa262a2664f80f": {
				symbol: "DARA",
				name: "Immutable",
				decimals: 18,
				address: "0x0255af6c9f86f6b0543357bacefa262a2664f80f",
				logoURI: "https://tokens.1inch.io/0x0255af6c9f86f6b0543357bacefa262a2664f80f.png",
				tags: [
					"tokens"
				]
			},
			"0xc74cd0042c837ce59210857504ebb0859e06aa22": {
				symbol: "SAFUYIELD",
				name: "SafuYield Protocol",
				decimals: 9,
				address: "0xc74cd0042c837ce59210857504ebb0859e06aa22",
				logoURI: "https://tokens.1inch.io/0xc74cd0042c837ce59210857504ebb0859e06aa22.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493": {
				symbol: "FEED",
				name: "Feeder.finance",
				decimals: 18,
				address: "0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493",
				logoURI: "https://tokens.1inch.io/0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493.png",
				tags: [
					"tokens"
				]
			},
			"0x14c358b573a4ce45364a3dbd84bbb4dae87af034": {
				symbol: "DND",
				name: "DungeonSwap Token",
				decimals: 18,
				address: "0x14c358b573a4ce45364a3dbd84bbb4dae87af034",
				logoURI: "https://tokens.1inch.io/0x14c358b573a4ce45364a3dbd84bbb4dae87af034.png",
				tags: [
					"tokens"
				]
			},
			"0x8bac6b4af65c8c1967a0fbc27cd37fd6059daa00": {
				symbol: "SPH",
				name: "Sphynx Network",
				decimals: 18,
				address: "0x8bac6b4af65c8c1967a0fbc27cd37fd6059daa00",
				logoURI: "https://tokens.1inch.io/0x8bac6b4af65c8c1967a0fbc27cd37fd6059daa00.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034": {
				symbol: "wBAN",
				name: "Wrapped Banano",
				decimals: 18,
				address: "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034",
				logoURI: "https://tokens.1inch.io/0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034.png",
				tags: [
					"tokens"
				]
			},
			"0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b": {
				symbol: "KNC",
				name: "Kyber Network Crystal",
				decimals: 18,
				address: "0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b",
				logoURI: "https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png",
				tags: [
					"tokens"
				]
			},
			"0x965f527d9159dce6288a2219db51fc6eef120dd1": {
				symbol: "BSW",
				name: "Biswap",
				decimals: 18,
				address: "0x965f527d9159dce6288a2219db51fc6eef120dd1",
				logoURI: "https://tokens.1inch.io/0x965f527d9159dce6288a2219db51fc6eef120dd1.png",
				tags: [
					"tokens"
				]
			},
			"0xbb238fce6e2ee90781cd160c9c6eaf3a4cfad801": {
				symbol: "BAGEL",
				name: "BAGEL",
				decimals: 18,
				address: "0xbb238fce6e2ee90781cd160c9c6eaf3a4cfad801",
				logoURI: "https://tokens.1inch.io/0xbb238fce6e2ee90781cd160c9c6eaf3a4cfad801.png",
				tags: [
					"tokens"
				]
			},
			"0xbb46693ebbea1ac2070e59b4d043b47e2e095f86": {
				symbol: "BFG",
				name: "BFG Token",
				decimals: 18,
				address: "0xbb46693ebbea1ac2070e59b4d043b47e2e095f86",
				logoURI: "https://tokens.1inch.io/0xbb46693ebbea1ac2070e59b4d043b47e2e095f86_1.png",
				tags: [
					"tokens"
				]
			},
			"0x6679eb24f59dfe111864aec72b443d1da666b360": {
				symbol: "ARV",
				name: "ARIVA",
				decimals: 8,
				address: "0x6679eb24f59dfe111864aec72b443d1da666b360",
				logoURI: "https://tokens.1inch.io/0x6679eb24f59dfe111864aec72b443d1da666b360.png",
				tags: [
					"tokens"
				]
			},
			"0x0047a0deadafb7ee6b1a0d219e70fb6767057d93": {
				symbol: "xYSL",
				name: "xYSL token",
				decimals: 18,
				address: "0x0047a0deadafb7ee6b1a0d219e70fb6767057d93",
				logoURI: "https://tokens.1inch.io/0x0047a0deadafb7ee6b1a0d219e70fb6767057d93.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x4ef29f3b804c316ba8ba464a765c601fc092a2e9": {
				symbol: "QA",
				name: "Quantum Assets Token",
				decimals: 18,
				address: "0x4ef29f3b804c316ba8ba464a765c601fc092a2e9",
				logoURI: "https://tokens.1inch.io/0x4ef29f3b804c316ba8ba464a765c601fc092a2e9.png",
				tags: [
					"tokens"
				]
			},
			"0xe56a473043eaab7947c0a2408cea623074500ee3": {
				symbol: "SWAP",
				name: "SafeSwap Token",
				decimals: 18,
				address: "0xe56a473043eaab7947c0a2408cea623074500ee3",
				logoURI: "https://tokens.1inch.io/0xe56a473043eaab7947c0a2408cea623074500ee3.png",
				tags: [
					"tokens"
				]
			},
			"0xe9db02a654b74ca04734b26ef3b2a79808d43404": {
				symbol: "OKBOOMER",
				name: "OKBoomer",
				decimals: 9,
				address: "0xe9db02a654b74ca04734b26ef3b2a79808d43404",
				logoURI: "https://tokens.1inch.io/0xe9db02a654b74ca04734b26ef3b2a79808d43404.png",
				tags: [
					"tokens"
				]
			},
			"0x57457b5d725d85a70a3625d6a71818304e773618": {
				symbol: "PETN",
				name: "Pylon Eco Token",
				decimals: 18,
				address: "0x57457b5d725d85a70a3625d6a71818304e773618",
				logoURI: "https://tokens.1inch.io/0x57457b5d725d85a70a3625d6a71818304e773618.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed": {
				symbol: "SUSHIBA",
				name: "Sushiba",
				decimals: 9,
				address: "0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed",
				logoURI: "https://tokens.1inch.io/0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xebc76079da0c245fae7225b58a57a54809b40618": {
				symbol: "BPAY",
				name: "BNBPay",
				decimals: 9,
				address: "0xebc76079da0c245fae7225b58a57a54809b40618",
				logoURI: "https://tokens.1inch.io/0xebc76079da0c245fae7225b58a57a54809b40618.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x58d372a8db7696c0c066f25c9eaf2af6f147b726": {
				symbol: "TSUGA",
				name: "Tsukiverse: Galactic Adventures",
				decimals: 18,
				address: "0x58d372a8db7696c0c066f25c9eaf2af6f147b726",
				logoURI: "https://tokens.1inch.io/0x58d372a8db7696c0c066f25c9eaf2af6f147b726.png",
				tags: [
					"tokens"
				]
			},
			"0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4": {
				symbol: "ROOM",
				name: "OptionRoom Token",
				decimals: 18,
				address: "0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4",
				logoURI: "https://tokens.1inch.io/0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4.png",
				tags: [
					"tokens"
				]
			},
			"0xb7fda7374362f66a50665b991aa7ee77b2c6abbe": {
				symbol: "TCUB",
				name: "TCUB www.tiger-king.org",
				decimals: 9,
				address: "0xb7fda7374362f66a50665b991aa7ee77b2c6abbe",
				logoURI: "https://tokens.1inch.io/0xb7fda7374362f66a50665b991aa7ee77b2c6abbe.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x747d74db20cc422f39ab54edb2a3ce21f3c98af1": {
				symbol: "CGU",
				name: "Crypto Gaming United",
				decimals: 8,
				address: "0x747d74db20cc422f39ab54edb2a3ce21f3c98af1",
				logoURI: "https://tokens.1inch.io/0x747d74db20cc422f39ab54edb2a3ce21f3c98af1.png",
				tags: [
					"tokens"
				]
			},
			"0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50": {
				symbol: "PIT",
				name: "Pitbull",
				decimals: 9,
				address: "0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50",
				logoURI: "https://tokens.1inch.io/0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a": {
				symbol: "ROCK",
				name: "Bedrock",
				decimals: 18,
				address: "0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a",
				logoURI: "https://tokens.1inch.io/0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a.png",
				tags: [
					"tokens"
				]
			},
			"0x4477b28e8b797ebaebd2539bb24290fdfcc27807": {
				symbol: "$RFG",
				name: "Refugees Token",
				decimals: 9,
				address: "0x4477b28e8b797ebaebd2539bb24290fdfcc27807",
				logoURI: "https://tokens.1inch.io/0x4477b28e8b797ebaebd2539bb24290fdfcc27807.png",
				tags: [
					"tokens"
				]
			},
			"0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e": {
				symbol: "DRIVENx",
				name: "DVX",
				decimals: 18,
				address: "0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e",
				logoURI: "https://tokens.1inch.io/0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e.png",
				tags: [
					"tokens"
				]
			},
			"0x7c1608c004f20c3520f70b924e2bfef092da0043": {
				symbol: "CZF",
				name: "CZFarm",
				decimals: 18,
				address: "0x7c1608c004f20c3520f70b924e2bfef092da0043",
				logoURI: "https://tokens.1inch.io/0x7c1608c004f20c3520f70b924e2bfef092da0043.png",
				tags: [
					"tokens"
				]
			},
			"0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8": {
				symbol: "HOKK",
				name: "Hokkaido Inu",
				decimals: 18,
				address: "0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8",
				logoURI: "https://tokens.1inch.io/0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53": {
				symbol: "ccCLO",
				name: "Callisto Network Token",
				decimals: 18,
				address: "0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53",
				logoURI: "https://tokens.1inch.io/0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53_2.png",
				tags: [
					"tokens"
				]
			},
			"0x6dc3d0d6ec970bf5522611d8eff127145d02b675": {
				symbol: "RVL",
				name: "Revolotto",
				decimals: 18,
				address: "0x6dc3d0d6ec970bf5522611d8eff127145d02b675",
				logoURI: "https://tokens.1inch.io/0x6dc3d0d6ec970bf5522611d8eff127145d02b675.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7": {
				symbol: "SQUID",
				name: "SQUID",
				decimals: 9,
				address: "0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7",
				logoURI: "https://tokens.1inch.io/0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7.png",
				tags: [
					"tokens"
				]
			},
			"0x69083b64988933e8b4783e8302b9bbf90163280e": {
				symbol: "PFY",
				name: "Portify",
				decimals: 9,
				address: "0x69083b64988933e8b4783e8302b9bbf90163280e",
				logoURI: "https://tokens.1inch.io/0x69083b64988933e8b4783e8302b9bbf90163280e.png",
				tags: [
					"tokens"
				]
			},
			"0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851": {
				symbol: "CMERGE",
				name: "Coin Merge",
				decimals: 9,
				address: "0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851",
				logoURI: "https://tokens.1inch.io/0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x29a63f4b209c29b4dc47f06ffa896f32667dad2c": {
				symbol: "PURSE",
				name: "PURSE TOKEN",
				decimals: 18,
				address: "0x29a63f4b209c29b4dc47f06ffa896f32667dad2c",
				logoURI: "https://tokens.1inch.io/0x29a63f4b209c29b4dc47f06ffa896f32667dad2c.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271": {
				symbol: "ATL",
				name: "Atlantis",
				decimals: 18,
				address: "0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271",
				logoURI: "https://tokens.1inch.io/0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271.png",
				tags: [
					"tokens"
				]
			},
			"0x9000cac49c3841926baac5b2e13c87d43e51b6a4": {
				symbol: "POR",
				name: "Portuma",
				decimals: 18,
				address: "0x9000cac49c3841926baac5b2e13c87d43e51b6a4",
				logoURI: "https://tokens.1inch.io/0x9000cac49c3841926baac5b2e13c87d43e51b6a4.png",
				tags: [
					"tokens"
				]
			},
			"0x016cf83732f1468150d87dcc5bdf67730b3934d3": {
				symbol: "AIRT",
				name: "AirNFT Token",
				decimals: 18,
				address: "0x016cf83732f1468150d87dcc5bdf67730b3934d3",
				logoURI: "https://tokens.1inch.io/0x016cf83732f1468150d87dcc5bdf67730b3934d3.png",
				tags: [
					"tokens"
				]
			},
			"0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f": {
				symbol: "BORING",
				name: "BoringDAO",
				decimals: 18,
				address: "0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f",
				logoURI: "https://tokens.1inch.io/0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f.png",
				tags: [
					"tokens"
				]
			},
			"0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb": {
				symbol: "KTY",
				name: "Krypto Kitty",
				decimals: 9,
				address: "0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb",
				logoURI: "https://tokens.1inch.io/0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xfb981ed9a92377ca4d75d924b9ca06df163924fd": {
				symbol: "SA",
				name: "Superalgos",
				decimals: 18,
				address: "0xfb981ed9a92377ca4d75d924b9ca06df163924fd",
				logoURI: "https://tokens.1inch.io/0xfb981ed9a92377ca4d75d924b9ca06df163924fd.png",
				tags: [
					"tokens"
				]
			},
			"0x3045d1a840364c3657b8df6c6f86a4359c23472b": {
				symbol: "ORI",
				name: "Orica",
				decimals: 18,
				address: "0x3045d1a840364c3657b8df6c6f86a4359c23472b",
				logoURI: "https://tokens.1inch.io/0x3045d1a840364c3657b8df6c6f86a4359c23472b_1.png",
				tags: [
					"tokens"
				]
			},
			"0xace3574b8b054e074473a9bd002e5dc6dd3dff1b": {
				symbol: "RBX",
				name: "RBX",
				decimals: 18,
				address: "0xace3574b8b054e074473a9bd002e5dc6dd3dff1b",
				logoURI: "https://tokens.1inch.io/0xace3574b8b054e074473a9bd002e5dc6dd3dff1b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0": {
				symbol: "INCOME",
				name: "Income",
				decimals: 18,
				address: "0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0",
				logoURI: "https://tokens.1inch.io/0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xaef0a177c8c329cbc8508292bb7e06c00786bbfc": {
				symbol: "PULI",
				name: "PULI INU",
				decimals: 9,
				address: "0xaef0a177c8c329cbc8508292bb7e06c00786bbfc",
				logoURI: "https://tokens.1inch.io/0xaef0a177c8c329cbc8508292bb7e06c00786bbfc.png",
				tags: [
					"tokens"
				]
			},
			"0xfb5b838b6cfeedc2873ab27866079ac55363d37e": {
				symbol: "FLOKI",
				name: "FLOKI",
				decimals: 9,
				address: "0xfb5b838b6cfeedc2873ab27866079ac55363d37e",
				logoURI: "https://tokens.1inch.io/0xfb5b838b6cfeedc2873ab27866079ac55363d37e.png",
				tags: [
					"tokens"
				]
			},
			"0x1ba8d3c4c219b124d351f603060663bd1bcd9bbf": {
				symbol: "TORN",
				name: "TornadoCash",
				decimals: 18,
				address: "0x1ba8d3c4c219b124d351f603060663bd1bcd9bbf",
				logoURI: "https://tokens.1inch.io/0x1ba8d3c4c219b124d351f603060663bd1bcd9bbf.png",
				tags: [
					"tokens"
				]
			},
			"0x531780face85306877d7e1f05d713d1b50a37f7a": {
				symbol: "BSHARE",
				name: "BSHARE",
				decimals: 18,
				address: "0x531780face85306877d7e1f05d713d1b50a37f7a",
				logoURI: "https://tokens.1inch.io/0x531780face85306877d7e1f05d713d1b50a37f7a.png",
				tags: [
					"tokens"
				]
			},
			"0x522348779dcb2911539e76a1042aa922f9c47ee3": {
				symbol: "BOMB",
				name: "bomb.money",
				decimals: 18,
				address: "0x522348779dcb2911539e76a1042aa922f9c47ee3",
				logoURI: "https://tokens.1inch.io/0x522348779dcb2911539e76a1042aa922f9c47ee3.png",
				tags: [
					"tokens"
				]
			},
			"0xaf44400a99a9693bf3c2e89b02652babacc5cdb9": {
				symbol: "MAFA",
				name: "MafaCoin",
				decimals: 18,
				address: "0xaf44400a99a9693bf3c2e89b02652babacc5cdb9",
				logoURI: "https://tokens.1inch.io/0xaf44400a99a9693bf3c2e89b02652babacc5cdb9.png",
				tags: [
					"tokens"
				]
			},
			"0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca": {
				symbol: "RVZ",
				name: "Revoluzion",
				decimals: 9,
				address: "0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca",
				logoURI: "https://tokens.1inch.io/0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x475bfaa1848591ae0e6ab69600f48d828f61a80e": {
				symbol: "DOME",
				name: "Everdome",
				decimals: 18,
				address: "0x475bfaa1848591ae0e6ab69600f48d828f61a80e",
				logoURI: "https://tokens.1inch.io/0x475bfaa1848591ae0e6ab69600f48d828f61a80e.png",
				tags: [
					"tokens"
				]
			},
			"0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd": {
				symbol: "BBS",
				name: "BBS [via ChainPort.io]",
				decimals: 18,
				address: "0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd",
				logoURI: "https://tokens.1inch.io/0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd.png",
				tags: [
					"tokens"
				]
			},
			"0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa": {
				symbol: "deUSDC",
				name: "deBridge USD Coin",
				decimals: 6,
				address: "0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa",
				logoURI: "https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png",
				tags: [
					"tokens"
				]
			},
			"0x2cace984dab08bd192a7fd044276060cb955dd9c": {
				symbol: "ACCEL",
				name: "ACCEL",
				decimals: 18,
				address: "0x2cace984dab08bd192a7fd044276060cb955dd9c",
				logoURI: "https://tokens.1inch.io/0x2cace984dab08bd192a7fd044276060cb955dd9c.png",
				tags: [
					"tokens"
				]
			},
			"0x90c97f71e18723b0cf0dfa30ee176ab653e89f40": {
				symbol: "FRAX",
				name: "Frax",
				decimals: 18,
				address: "0x90c97f71e18723b0cf0dfa30ee176ab653e89f40",
				logoURI: "https://tokens.1inch.io/0x90c97f71e18723b0cf0dfa30ee176ab653e89f40.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261": {
				symbol: "SHIELD",
				name: "Shield Protocol",
				decimals: 18,
				address: "0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261",
				logoURI: "https://tokens.1inch.io/0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261.png",
				tags: [
					"tokens"
				]
			},
			"0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa": {
				symbol: "VINU",
				name: "Vita Inu",
				decimals: 18,
				address: "0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa",
				logoURI: "https://tokens.1inch.io/0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa.png",
				tags: [
					"tokens"
				]
			},
			"0x95ee03e1e2c5c4877f9a298f1c0d6c98698fab7b": {
				symbol: "DUET",
				name: "Duet Governance Token",
				decimals: 18,
				address: "0x95ee03e1e2c5c4877f9a298f1c0d6c98698fab7b",
				logoURI: "https://tokens.1inch.io/0x95ee03e1e2c5c4877f9a298f1c0d6c98698fab7b.png",
				tags: [
					"tokens"
				]
			},
			"0x2d871631058827b703535228fb9ab5f35cf19e76": {
				symbol: "deFRAX",
				name: "deBridge Frax",
				decimals: 18,
				address: "0x2d871631058827b703535228fb9ab5f35cf19e76",
				logoURI: "https://tokens.1inch.io/0x2d871631058827b703535228fb9ab5f35cf19e76.png",
				tags: [
					"tokens"
				]
			},
			"0x4518231a8fdf6ac553b9bbd51bbb86825b583263": {
				symbol: "MLT",
				name: "Media Licensing Token",
				decimals: 18,
				address: "0x4518231a8fdf6ac553b9bbd51bbb86825b583263",
				logoURI: "https://tokens.1inch.io/0x4518231a8fdf6ac553b9bbd51bbb86825b583263.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9": {
				symbol: "ORE",
				name: "pTokens ORE [via ChainPort.io]",
				decimals: 18,
				address: "0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9",
				logoURI: "https://tokens.1inch.io/0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9.png",
				tags: [
					"tokens"
				]
			},
			"0x69b14e8d3cebfdd8196bfe530954a0c226e5008e": {
				symbol: "SpacePi",
				name: "SpacePi Token",
				decimals: 9,
				address: "0x69b14e8d3cebfdd8196bfe530954a0c226e5008e",
				logoURI: "https://tokens.1inch.io/0x69b14e8d3cebfdd8196bfe530954a0c226e5008e.png",
				tags: [
					"tokens"
				]
			},
			"0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec": {
				symbol: "ASIA",
				name: "ASIA COIN",
				decimals: 18,
				address: "0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec",
				logoURI: "https://tokens.1inch.io/0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa5f249f401ba8931899a364d8e2699b5fa1d87a9": {
				symbol: "MAIN",
				name: "MAIN",
				decimals: 18,
				address: "0xa5f249f401ba8931899a364d8e2699b5fa1d87a9",
				logoURI: "https://tokens.1inch.io/0xa5f249f401ba8931899a364d8e2699b5fa1d87a9_1.png",
				tags: [
					"tokens"
				]
			},
			"0x52419258e3fa44deac7e670eadd4c892b480a805": {
				symbol: "STARSHIP",
				name: "StarShip",
				decimals: 9,
				address: "0x52419258e3fa44deac7e670eadd4c892b480a805",
				logoURI: "https://tokens.1inch.io/0x52419258e3fa44deac7e670eadd4c892b480a805.png",
				tags: [
					"tokens"
				]
			},
			"0xe7c9c6bc87b86f9e5b57072f907ee6460b593924": {
				symbol: "TOWER",
				name: "TOWER",
				decimals: 18,
				address: "0xe7c9c6bc87b86f9e5b57072f907ee6460b593924",
				logoURI: "https://tokens.1inch.io/0xe7c9c6bc87b86f9e5b57072f907ee6460b593924.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x9096b4309224d751fcb43d7eb178dcffc122ad15": {
				symbol: "LGX",
				name: "Legion Token",
				decimals: 18,
				address: "0x9096b4309224d751fcb43d7eb178dcffc122ad15",
				logoURI: "https://tokens.1inch.io/0x9096b4309224d751fcb43d7eb178dcffc122ad15.png",
				tags: [
					"tokens"
				]
			},
			"0x9ab70e92319f0b9127df78868fd3655fb9f1e322": {
				symbol: "WWY",
				name: "WeWay Token",
				decimals: 18,
				address: "0x9ab70e92319f0b9127df78868fd3655fb9f1e322",
				logoURI: "https://tokens.1inch.io/0x9ab70e92319f0b9127df78868fd3655fb9f1e322.png",
				tags: [
					"tokens"
				]
			},
			"0x373e768f79c820aa441540d254dca6d045c6d25b": {
				symbol: "DERC",
				name: "DeRace Token",
				decimals: 18,
				address: "0x373e768f79c820aa441540d254dca6d045c6d25b",
				logoURI: "https://tokens.1inch.io/0x373e768f79c820aa441540d254dca6d045c6d25b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3": {
				symbol: "STACK",
				name: "StackOS",
				decimals: 18,
				address: "0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3",
				logoURI: "https://tokens.1inch.io/0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3.png",
				tags: [
					"tokens"
				]
			},
			"0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1": {
				symbol: "GMT",
				name: "Green Metaverse Token",
				decimals: 8,
				address: "0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1",
				logoURI: "https://tokens.1inch.io/0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1_1.png",
				tags: [
					"tokens"
				]
			},
			"0x75d107de2217ffe2cd574a1b3297c70c8fafd159": {
				symbol: "TRY",
				name: "TryHards",
				decimals: 18,
				address: "0x75d107de2217ffe2cd574a1b3297c70c8fafd159",
				logoURI: "https://tokens.1inch.io/0x75d107de2217ffe2cd574a1b3297c70c8fafd159.png",
				tags: [
					"tokens"
				]
			},
			"0x347e430b7cd1235e216be58ffa13394e5009e6e2": {
				symbol: "GAIA",
				name: "GAIA Everworld",
				decimals: 18,
				address: "0x347e430b7cd1235e216be58ffa13394e5009e6e2",
				logoURI: "https://tokens.1inch.io/0x347e430b7cd1235e216be58ffa13394e5009e6e2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea": {
				symbol: "$ANRX",
				name: "pTokens $ANRX",
				decimals: 18,
				address: "0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea",
				logoURI: "https://tokens.1inch.io/0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea.png",
				tags: [
					"tokens"
				]
			},
			"0xe9c803f48dffe50180bd5b01dc04da939e3445fc": {
				symbol: "VLX",
				name: "Velas",
				decimals: 18,
				address: "0xe9c803f48dffe50180bd5b01dc04da939e3445fc",
				logoURI: "https://tokens.1inch.io/0xe9c803f48dffe50180bd5b01dc04da939e3445fc.png",
				tags: [
					"tokens"
				]
			},
			"0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc": {
				symbol: "FRM",
				name: "Ferrum Network Token",
				decimals: 18,
				address: "0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc",
				logoURI: "https://tokens.1inch.io/0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc.png",
				tags: [
					"tokens"
				]
			},
			"0x833f307ac507d47309fd8cdd1f835bef8d702a93": {
				symbol: "REVV",
				name: "REVV",
				decimals: 18,
				address: "0x833f307ac507d47309fd8cdd1f835bef8d702a93",
				logoURI: "https://tokens.1inch.io/0x833f307ac507d47309fd8cdd1f835bef8d702a93.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf7686f43591302cd9b4b9c4fe1291473fae7d9c9": {
				symbol: "LSS",
				name: "Chainport.io-Peg Lossless Token",
				decimals: 18,
				address: "0xf7686f43591302cd9b4b9c4fe1291473fae7d9c9",
				logoURI: "https://tokens.1inch.io/0xf7686f43591302cd9b4b9c4fe1291473fae7d9c9.png",
				tags: [
					"tokens"
				]
			},
			"0xc10358f062663448a3489fc258139944534592ac": {
				symbol: "BCMC",
				name: "Blockchain Monster Coin",
				decimals: 18,
				address: "0xc10358f062663448a3489fc258139944534592ac",
				logoURI: "https://tokens.1inch.io/0xc10358f062663448a3489fc258139944534592ac.png",
				tags: [
					"tokens"
				]
			},
			"0x84e9a6f9d240fdd33801f7135908bfa16866939a": {
				symbol: "GMEE",
				name: "GAMEE",
				decimals: 18,
				address: "0x84e9a6f9d240fdd33801f7135908bfa16866939a",
				logoURI: "https://tokens.1inch.io/0x84e9a6f9d240fdd33801f7135908bfa16866939a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xeeeeeb57642040be42185f49c52f7e9b38f8eeee": {
				symbol: "ELK",
				name: "Elk",
				decimals: 18,
				address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x411ec510c85c9e56271bf4e10364ffa909e685d9": {
				symbol: "MOWA",
				name: "Moniwar",
				decimals: 18,
				address: "0x411ec510c85c9e56271bf4e10364ffa909e685d9",
				logoURI: "https://tokens.1inch.io/0x411ec510c85c9e56271bf4e10364ffa909e685d9.png",
				tags: [
					"tokens"
				]
			},
			"0x3da932456d082cba208feb0b096d49b202bf89c8": {
				symbol: "DEGOV2",
				name: "dego.finance",
				decimals: 18,
				address: "0x3da932456d082cba208feb0b096d49b202bf89c8",
				logoURI: "https://tokens.1inch.io/0x3da932456d082cba208feb0b096d49b202bf89c8.png",
				tags: [
					"tokens"
				]
			},
			"0xd3b71117e6c1558c1553305b44988cd944e97300": {
				symbol: "YEL",
				name: "YEL Token",
				decimals: 18,
				address: "0xd3b71117e6c1558c1553305b44988cd944e97300",
				logoURI: "https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png",
				tags: [
					"tokens"
				]
			},
			"0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30": {
				symbol: "INSUR",
				name: "Bsc-Peg INSUR Token",
				decimals: 18,
				address: "0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30",
				logoURI: "https://tokens.1inch.io/0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30.png",
				tags: [
					"tokens"
				]
			},
			"0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2": {
				symbol: "MYST",
				name: "Mysterium",
				decimals: 18,
				address: "0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2",
				logoURI: "https://tokens.1inch.io/0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf606bd19b1e61574ed625d9ea96c841d4e247a32": {
				symbol: "GUARD",
				name: "Guardian",
				decimals: 18,
				address: "0xf606bd19b1e61574ed625d9ea96c841d4e247a32",
				logoURI: "https://tokens.1inch.io/0xf606bd19b1e61574ed625d9ea96c841d4e247a32.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x232fb065d9d24c34708eedbf03724f2e95abe768": {
				symbol: "SHEESHA",
				name: "Sheesha Finance",
				decimals: 18,
				address: "0x232fb065d9d24c34708eedbf03724f2e95abe768",
				logoURI: "https://tokens.1inch.io/0x232fb065d9d24c34708eedbf03724f2e95abe768.png",
				tags: [
					"tokens"
				]
			},
			"0x98936bde1cf1bff1e7a8012cee5e2583851f2067": {
				symbol: "ANN",
				name: "Annex",
				decimals: 18,
				address: "0x98936bde1cf1bff1e7a8012cee5e2583851f2067",
				logoURI: "https://tokens.1inch.io/0x98936bde1cf1bff1e7a8012cee5e2583851f2067.png",
				tags: [
					"tokens"
				]
			},
			"0xd17479997f34dd9156deef8f95a52d81d265be9c": {
				symbol: "USDD",
				name: "Decentralized USD",
				decimals: 18,
				address: "0xd17479997f34dd9156deef8f95a52d81d265be9c",
				logoURI: "https://tokens.1inch.io/0xd17479997f34dd9156deef8f95a52d81d265be9c.png",
				tags: [
					"tokens"
				]
			}
		}
	},
	{
		name: "Gnosis",
		coin: "xDAI",
		chainId: 100,
		oracle: "0x142DB045195CEcaBe415161e1dF1CF0337A4d02E",
		wrappedToken: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
		multicall: "0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a",
		rpc: [
			"https://rpc.gnosischain.com",
			"https://rpc.ankr.com/gnosis",
			"https://gnosischain-rpc.gateway.pokt.network",
			"https://gnosis-mainnet.public.blastapi.io",
			"wss://rpc.gnosischain.com/wss",
			"https://xdai-rpc.gateway.pokt.network",
			"https://xdai-archive.blockscout.com"
		],
		tokens: {
			"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
				name: "xDAI",
				address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
				symbol: "xDAI",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
				tags: [
					"native"
				]
			},
			"0x3a97704a1b25f08aa230ae53b352e2e72ef52843": {
				name: "Agave",
				address: "0x3a97704a1b25f08aa230ae53b352e2e72ef52843",
				symbol: "AGVE",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0x3a97704a1b25f08aa230ae53b352e2e72ef52843/logo.png",
				tags: [
					"tokens"
				]
			},
			"0x82dfe19164729949fd66da1a37bc70dd6c4746ce": {
				name: "BaoToken on xDai",
				address: "0x82dfe19164729949fd66da1a37bc70dd6c4746ce",
				symbol: "BAO",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x374cb8c27130e2c9e04f44303f3c8351b9de61c1.png",
				tags: [
					"tokens"
				]
			},
			"0x83ff60e2f93f8edd0637ef669c69d5fb4f64ca8e": {
				name: "Bright from Ethereum",
				address: "0x83ff60e2f93f8edd0637ef669c69d5fb4f64ca8e",
				symbol: "BRIGHT",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/1Hive/dao-list/master/assets/BrightDAO/logo.png",
				tags: [
					"tokens"
				]
			},
			"0xdd96b45877d0e8361a4ddb732da741e97f3191ff": {
				name: "BUSD Token from BSC",
				address: "0xdd96b45877d0e8361a4ddb732da741e97f3191ff",
				symbol: "BUSD",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png",
				tags: [
					"tokens"
				]
			},
			"0x44fa8e6f47987339850636f88629646662444217": {
				name: "Dai Stablecoin from Ethereum",
				address: "0x44fa8e6f47987339850636f88629646662444217",
				symbol: "DAI",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
				tags: [
					"tokens"
				]
			},
			"0x256eb8a51f382650b2a1e946b8811953640ee47d": {
				name: "Streamr DATA on xDai",
				address: "0x256eb8a51f382650b2a1e946b8811953640ee47d",
				symbol: "DATA",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x8f693ca8d21b157107184d29d398a8d082b38b76.png",
				tags: [
					"tokens"
				]
			},
			"0x48b1b0d077b4919b65b4e4114806dd803901e1d9": {
				name: "Decentralized Insurance Protocol on xDai",
				address: "0x48b1b0d077b4919b65b4e4114806dd803901e1d9",
				symbol: "DIP",
				decimals: 18,
				logoURI: "https://etherscan.io/token/images/etherisc_28.png",
				tags: [
					"tokens"
				]
			},
			"0x524b969793a64a602342d89bc2789d43a016b13a": {
				name: "Donut on xDai",
				address: "0x524b969793a64a602342d89bc2789d43a016b13a",
				symbol: "DONUT",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9.png",
				tags: [
					"tokens"
				]
			},
			"0xd3d47d5578e55c880505dc40648f7f9307c3e7a8": {
				name: "DefiPulse Index from Ethereum",
				address: "0xd3d47d5578e55c880505dc40648f7f9307c3e7a8",
				symbol: "DPI",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png",
				tags: [
					"tokens"
				]
			},
			"0xb90d6bec20993be5d72a5ab353343f7a0281f158": {
				name: "DXdao from Ethereum",
				address: "0xb90d6bec20993be5d72a5ab353343f7a0281f158",
				symbol: "DXD",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xa1d65e8fb6e87b60feccbc582f7f97804b725521.png",
				tags: [
					"tokens"
				]
			},
			"0x21a42669643f45bc0e086b8fc2ed70c23d67509d": {
				name: "FOX from Ethereum",
				address: "0x21a42669643f45bc0e086b8fc2ed70c23d67509d",
				symbol: "FOX",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xc770eefad204b5180df6a14ee197d99d808ee52d.png",
				tags: [
					"tokens"
				]
			},
			"0x4f4f9b8d5b4d0dc10506e5551b0513b61fd59e75": {
				name: "Giveth from Mainnet",
				address: "0x4f4f9b8d5b4d0dc10506e5551b0513b61fd59e75",
				symbol: "GIV",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/Giveth/giveth-design-assets/master/02-logos/GIV%20Token/GIVToken_200x200.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x9c58bacc331c9aa871afd802db6379a98e80cedb": {
				name: "Gnosis from Ethereum",
				address: "0x9c58bacc331c9aa871afd802db6379a98e80cedb",
				symbol: "GNO",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x6810e776880c02933d47db1b9fc05908e5386b96.png",
				tags: [
					"tokens"
				]
			},
			"0xb0c5f3100a4d9d9532a4cfd68c55f1ae8da987eb": {
				name: "Haus",
				address: "0xb0c5f3100a4d9d9532a4cfd68c55f1ae8da987eb",
				symbol: "HAUS",
				decimals: 18,
				logoURI: "https://assets.coingecko.com/coins/images/14551/small/jN3kkqke_400x400.png",
				tags: [
					"tokens"
				]
			},
			"0x71850b7e9ee3f13ab46d67167341e4bdc905eef9": {
				name: "Honey",
				address: "0x71850b7e9ee3f13ab46d67167341e4bdc905eef9",
				symbol: "HNY",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9/logo.png",
				tags: [
					"tokens"
				]
			},
			"0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2": {
				name: "ChainLink Token from Ethereum",
				address: "0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2",
				symbol: "LINK",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
				tags: [
					"tokens"
				]
			},
			"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51": {
				name: "Minerva Wallet SuperToken",
				address: "0x63e62989d9eb2d37dfdb1f93a22f063635b07d51",
				symbol: "MIVA",
				decimals: 18,
				logoURI: "https://minerva.digital/i/MIVA-Token_200x200.png",
				tags: [
					"tokens"
				]
			},
			"0x981fb9ba94078a2275a8fc906898ea107b9462a8": {
				name: "Panvala pan on xDai",
				address: "0x981fb9ba94078a2275a8fc906898ea107b9462a8",
				symbol: "PAN",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xd56dac73a4d6766464b38ec6d91eb45ce7457c44.png",
				tags: [
					"tokens"
				]
			},
			"0x37b60f4e9a31a64ccc0024dce7d0fd07eaa0f7b3": {
				name: "Pinakion on xDai",
				address: "0x37b60f4e9a31a64ccc0024dce7d0fd07eaa0f7b3",
				symbol: "PNK",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d.png",
				tags: [
					"tokens"
				]
			},
			"0xb5d592f85ab2d955c25720ebe6ff8d4d1e1be300": {
				name: "Particle",
				address: "0xb5d592f85ab2d955c25720ebe6ff8d4d1e1be300",
				symbol: "PRTCLE",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/ShenaniganDApp/docs/master/static/img/SHELogo.png",
				tags: [
					"tokens"
				]
			},
			"0x988d1be68f2c5cde2516a2287c59bd6302b7d20d": {
				name: "Punk from Mainnet",
				address: "0x988d1be68f2c5cde2516a2287c59bd6302b7d20d",
				symbol: "PUNK",
				decimals: 18,
				logoURI: "https://xdaipunks.com/punk-200x200.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x18e9262e68cc6c6004db93105cc7c001bb103e49": {
				name: "Raid Guild Token from Ethereum",
				address: "0x18e9262e68cc6c6004db93105cc7c001bb103e49",
				symbol: "RAID",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0x18e9262e68cc6c6004db93105cc7c001bb103e49/logo.png",
				tags: [
					"tokens"
				]
			},
			"0x57e93bb58268de818b42e3795c97bad58afcd3fe": {
				name: "Rare Coin v2",
				address: "0x57e93bb58268de818b42e3795c97bad58afcd3fe",
				symbol: "RAREv2",
				decimals: 18,
				logoURI: "https://affinityharmonics.s3.ca-central-1.amazonaws.com/Cloud/rare-logo.png",
				tags: [
					"tokens"
				]
			},
			"0x97edc0e345fbbbd8460847fcfa3bc2a13bf8641f": {
				name: "DAOSquare Governance Token from Ethereum",
				address: "0x97edc0e345fbbbd8460847fcfa3bc2a13bf8641f",
				symbol: "RICE",
				decimals: 18,
				logoURI: "https://daodkp.oss-ap-southeast-1.aliyuncs.com/assets/logo-sm.png",
				tags: [
					"tokens"
				]
			},
			"0x27b9c2bd4baea18abdf49169054c1c1c12af9862": {
				name: "SNAFU",
				address: "0x27b9c2bd4baea18abdf49169054c1c1c12af9862",
				symbol: "SNAFU",
				decimals: 18,
				logoURI: "https://gateway.ipfs.io/ipfs/QmaEPqRKrJDN8iNKVSFj19rbHzZSyWENdj241oek3EJYn7",
				tags: [
					"tokens"
				]
			},
			"0xb7d311e2eb55f2f68a9440da38e7989210b9a05e": {
				name: "Stake Token on xDai",
				address: "0xb7d311e2eb55f2f68a9440da38e7989210b9a05e",
				symbol: "STAKE",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0x0ae055097c6d159879521c384f1d2123d1f195e6.png",
				tags: [
					"tokens"
				]
			},
			"0xc45b3c1c24d5f54e7a2cf288ac668c74dd507a84": {
				name: "Symmetric",
				address: "0xc45b3c1c24d5f54e7a2cf288ac668c74dd507a84",
				symbol: "SYMM",
				decimals: 18,
				logoURI: "https://etherscan.io/token/images/symmetricfinance_32.png",
				tags: [
					"tokens"
				]
			},
			"0x479e32cdff5f216f93060700c711d1cc8e811a6b": {
				name: "Trips on xDai",
				address: "0x479e32cdff5f216f93060700c711d1cc8e811a6b",
				symbol: "TRIPS",
				decimals: 18,
				logoURI: "https://etherscan.io/token/images/trips_32.png",
				tags: [
					"tokens"
				]
			},
			"0x703120f2f2011a0d03a03a531ac0e84e81f15989": {
				name: "UNCL on xDai",
				address: "0x703120f2f2011a0d03a03a531ac0e84e81f15989",
				symbol: "UNCL",
				decimals: 18,
				logoURI: "https://etherscan.io/token/images/unicrypt-uncl_32.png",
				tags: [
					"tokens"
				]
			},
			"0x0116e28b43a358162b96f70b4de14c98a4465f25": {
				name: "UniCrypt on xDai",
				address: "0x0116e28b43a358162b96f70b4de14c98a4465f25",
				symbol: "UNCX",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xadb2437e6f65682b85f814fbc12fec0508a7b1d0.png",
				tags: [
					"tokens"
				]
			},
			"0xddafbb505ad214d7b80b1f830fccc89b60fb7a83": {
				name: "USDC from Ethereum",
				address: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
				symbol: "USDC",
				decimals: 6,
				logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
				tags: [
					"tokens"
				]
			},
			"0x4ecaba5870353805a9f068101a40e0f32ed605c6": {
				name: "Tether on xDai",
				address: "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
				symbol: "USDT",
				decimals: 6,
				logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
				tags: [
					"tokens"
				]
			},
			"0x8e5bbbb09ed1ebde8674cda39a0c169401db4252": {
				name: "Wrapped BTC on xDai",
				address: "0x8e5bbbb09ed1ebde8674cda39a0c169401db4252",
				symbol: "WBTC",
				decimals: 8,
				logoURI: "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
				tags: [
					"tokens"
				]
			},
			"0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1": {
				name: "Wrapped Ether from Ethereum",
				address: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1",
				symbol: "WETH",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
				tags: [
					"tokens"
				]
			},
			"0xe91d153e0b41518a2ce8dd3d7944fa863463a97d": {
				name: "Wrapped XDAI",
				address: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
				symbol: "WXDAI",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d/logo.png",
				tags: [
					"tokens"
				]
			},
			"0x38fb649ad3d6ba1113be5f57b927053e97fc5bf7": {
				name: "xDai Native Comb",
				address: "0x38fb649ad3d6ba1113be5f57b927053e97fc5bf7",
				symbol: "xCOMB",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/1Hive/default-token-list/master/src/assets/xdai/0x38Fb649Ad3d6BA1113Be5F57B927053E97fC5bF7/logo.png",
				tags: [
					"tokens"
				]
			},
			"0xc25af3123d2420054c8fcd144c21113aa2853f39": {
				name: "Xion Global Token",
				address: "0xc25af3123d2420054c8fcd144c21113aa2853f39",
				symbol: "XGTv2",
				decimals: 18,
				logoURI: "https://xion.finance/images/xgt_icon.png",
				tags: [
					"tokens"
				]
			},
			"0x1e16aa4df73d29c029d94ceda3e3114ec191e25a": {
				name: "xMOON on xDai",
				address: "0x1e16aa4df73d29c029d94ceda3e3114ec191e25a",
				symbol: "XMOON",
				decimals: 18,
				logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/xdai/assets/0x1e16aa4Df73d29C029d94CeDa3e3114EC191E25A/logo.png",
				tags: [
					"tokens"
				]
			},
			"0xeeeeeb57642040be42185f49c52f7e9b38f8eeee": {
				symbol: "ELK",
				name: "Elk",
				decimals: 18,
				address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88": {
				symbol: "SOON",
				name: "RealT SOON Token",
				decimals: 18,
				address: "0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88",
				logoURI: "https://tokens.1inch.io/0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88.png",
				tags: [
					"tokens"
				]
			}
		}
	},
	{
		name: "Polygon Mainnet",
		coin: "MATIC",
		chainId: 137,
		oracle: "0x7F069df72b7A39bCE9806e3AfaF579E54D8CF2b9",
		wrappedToken: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
		multicall: "0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507",
		rpc: [
			"https://polygon-rpc.com",
			"https://rpc-mainnet.matic.network",
			"https://matic-mainnet.chainstacklabs.com",
			"https://rpc-mainnet.maticvigil.com",
			"https://rpc-mainnet.matic.quiknode.pro",
			"https://matic-mainnet-full-rpc.bwarelabs.com",
			"https://matic-mainnet-archive-rpc.bwarelabs.com",
			"https://poly-rpc.gateway.pokt.network",
			"https://rpc.ankr.com/polygon",
			"https://polygon-mainnet.public.blastapi.io"
		],
		tokens: {
			"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
				symbol: "MATIC",
				name: "MATIC",
				decimals: 18,
				address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
				logoURI: "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
				tags: [
					"native"
				]
			},
			"0xd6df932a45c0f255f85145f286ea0b292b21c90b": {
				symbol: "AAVE",
				name: "Aave",
				decimals: 18,
				address: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
				logoURI: "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
				tags: [
					"tokens"
				]
			},
			"0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f": {
				symbol: "MUST",
				name: "Must",
				decimals: 18,
				address: "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f",
				logoURI: "https://tokens.1inch.io/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f.png",
				tags: [
					"tokens"
				]
			},
			"0xb33eaad8d922b1083446dc23f610c2567fb5180f": {
				symbol: "UNI",
				name: "Uniswap",
				decimals: 18,
				address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
				logoURI: "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
				tags: [
					"tokens"
				]
			},
			"0xc2132d05d31c914a87c6611c10748aeb04b58e8f": {
				symbol: "USDT",
				name: "Tether USD",
				decimals: 6,
				address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
				logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
				tags: [
					"tokens"
				]
			},
			"0x8f3cf7ad23cd3cadbd9735aff958023239c6a063": {
				symbol: "DAI",
				name: "Dai Stablecoin",
				decimals: 18,
				address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
				logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
				tags: [
					"tokens"
				]
			},
			"0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6": {
				symbol: "WBTC",
				name: "Wrapped BTC",
				decimals: 8,
				address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
				logoURI: "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
				tags: [
					"tokens"
				]
			},
			"0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39": {
				symbol: "LINK",
				name: "ChainLink Token",
				decimals: 18,
				address: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
				logoURI: "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
				tags: [
					"tokens"
				]
			},
			"0xa1428174f516f527fafdd146b883bb4428682737": {
				symbol: "SUPER",
				name: "SuperFarm",
				decimals: 18,
				address: "0xa1428174f516f527fafdd146b883bb4428682737",
				logoURI: "https://tokens.1inch.io/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png",
				tags: [
					"tokens"
				]
			},
			"0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4": {
				symbol: "MANA",
				name: "Decentraland MANA",
				decimals: 18,
				address: "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4",
				logoURI: "https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png",
				tags: [
					"tokens"
				]
			},
			"0x831753dd7087cac61ab5644b308642cc1c33dc13": {
				symbol: "QUICK",
				name: "Quickswap",
				decimals: 18,
				address: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
				logoURI: "https://tokens.1inch.io/0x6c28aef8977c9b773996d0e8376d2ee379446f2f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": {
				symbol: "WMATIC",
				name: "Wrapped Matic",
				decimals: 18,
				address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
				logoURI: "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
				tags: [
					"tokens"
				]
			},
			"0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c": {
				symbol: "COMP",
				name: "Compound",
				decimals: 18,
				address: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
				logoURI: "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
				tags: [
					"tokens"
				]
			},
			"0xfdc26cda2d2440d0e83cd1dee8e8be48405806dc": {
				symbol: "BTU",
				name: "BTU Protocol",
				decimals: 18,
				address: "0xfdc26cda2d2440d0e83cd1dee8e8be48405806dc",
				logoURI: "https://tokens.1inch.io/0xb683d83a532e2cb7dfa5275eed3698436371cc9f.png",
				tags: [
					"tokens"
				]
			},
			"0x2a93172c8dccbfbc60a39d56183b7279a2f647b4": {
				symbol: "$DG",
				name: "decentral.games",
				decimals: 18,
				address: "0x2a93172c8dccbfbc60a39d56183b7279a2f647b4",
				logoURI: "https://tokens.1inch.io/0xee06a81a695750e71a662b51066f2c74cf4478a0.png",
				tags: [
					"tokens"
				]
			},
			"0x033d942a6b495c4071083f4cde1f17e986fe856c": {
				symbol: "AGA",
				name: "AGA Token",
				decimals: 4,
				address: "0x033d942a6b495c4071083f4cde1f17e986fe856c",
				logoURI: "https://tokens.1inch.io/0x2d80f5f5328fdcb6eceb7cacf5dd8aedaec94e20.png",
				tags: [
					"tokens"
				]
			},
			"0xf84bd51eab957c2e7b7d646a3427c5a50848281d": {
				symbol: "AGAr",
				name: "AGA Rewards",
				decimals: 8,
				address: "0xf84bd51eab957c2e7b7d646a3427c5a50848281d",
				logoURI: "https://tokens.1inch.io/0xb453f1f2ee776daf2586501361c457db70e1ca0f.png",
				tags: [
					"tokens"
				]
			},
			"0x46f48fbdedaa6f5500993bede9539ef85f4bee8e": {
				symbol: "ARIA20",
				name: "ARIANEE",
				decimals: 18,
				address: "0x46f48fbdedaa6f5500993bede9539ef85f4bee8e",
				logoURI: "https://tokens.1inch.io/0x46f48fbdedaa6f5500993bede9539ef85f4bee8e.png",
				tags: [
					"tokens"
				]
			},
			"0x7cdc0421469398e0f3aa8890693d86c840ac8931": {
				symbol: "AZUKI",
				name: "DokiDokiAzuki",
				decimals: 18,
				address: "0x7cdc0421469398e0f3aa8890693d86c840ac8931",
				logoURI: "https://tokens.1inch.io/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png",
				tags: [
					"tokens"
				]
			},
			"0xd85d1e945766fea5eda9103f918bd915fbca63e6": {
				symbol: "CEL",
				name: "Celsius",
				decimals: 4,
				address: "0xd85d1e945766fea5eda9103f918bd915fbca63e6",
				logoURI: "https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png",
				tags: [
					"tokens"
				]
			},
			"0xecf8f2fa183b1c4d2a269bf98a54fce86c812d3e": {
				symbol: "CFI",
				name: "CyberFi Token",
				decimals: 18,
				address: "0xecf8f2fa183b1c4d2a269bf98a54fce86c812d3e",
				logoURI: "https://tokens.1inch.io/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png",
				tags: [
					"tokens"
				]
			},
			"0xd28449bb9bb659725accad52947677cce3719fd7": {
				symbol: "DMT",
				name: "Dark Matter Token",
				decimals: 18,
				address: "0xd28449bb9bb659725accad52947677cce3719fd7",
				logoURI: "https://tokens.1inch.io/0xd28449bb9bb659725accad52947677cce3719fd7.png",
				tags: [
					"tokens"
				]
			},
			"0xa0e390e9cea0d0e8cd40048ced9fa9ea10d71639": {
				symbol: "DSLA",
				name: "DSLA",
				decimals: 18,
				address: "0xa0e390e9cea0d0e8cd40048ced9fa9ea10d71639",
				logoURI: "https://tokens.1inch.io/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe.png",
				tags: [
					"tokens"
				]
			},
			"0x7ceb23fd6bc0add59e62ac25578270cff1b9f619": {
				symbol: "ETH",
				name: "Ether",
				decimals: 18,
				address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
				logoURI: "https://tokens.1inch.io/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619.png",
				tags: [
					"tokens"
				]
			},
			"0x8d1566569d5b695d44a9a234540f68d393cdc40d": {
				symbol: "GAME",
				name: "GAME Credits",
				decimals: 18,
				address: "0x8d1566569d5b695d44a9a234540f68d393cdc40d",
				logoURI: "https://tokens.1inch.io/0x63f88a2298a5c4aee3c216aa6d926b184a4b2437.png",
				tags: [
					"tokens"
				]
			},
			"0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7": {
				symbol: "GHST",
				name: "Aavegotchi GHST Token",
				decimals: 18,
				address: "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
				logoURI: "https://tokens.1inch.io/0x3f382dbd960e3a9bbceae22651e88158d2791550.png",
				tags: [
					"tokens"
				]
			},
			"0x23d29d30e35c5e8d321e1dc9a8a61bfd846d4c5c": {
				symbol: "HEX",
				name: "HEXX",
				decimals: 8,
				address: "0x23d29d30e35c5e8d321e1dc9a8a61bfd846d4c5c",
				logoURI: "https://tokens.1inch.io/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png",
				tags: [
					"tokens"
				]
			},
			"0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce": {
				symbol: "IGG",
				name: "IG Gold",
				decimals: 6,
				address: "0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce",
				logoURI: "https://tokens.1inch.io/0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce.png",
				tags: [
					"tokens"
				]
			},
			"0x6968105460f67c3bf751be7c15f92f5286fd0ce5": {
				symbol: "MONA",
				name: "Monavale",
				decimals: 18,
				address: "0x6968105460f67c3bf751be7c15f92f5286fd0ce5",
				logoURI: "https://tokens.1inch.io/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png",
				tags: [
					"tokens"
				]
			},
			"0xc3ec80343d2bae2f8e680fdadde7c17e71e114ea": {
				symbol: "OM",
				name: "OM",
				decimals: 18,
				address: "0xc3ec80343d2bae2f8e680fdadde7c17e71e114ea",
				logoURI: "https://tokens.1inch.io/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png",
				tags: [
					"tokens"
				]
			},
			"0x2b88ad57897a8b496595925f43048301c37615da": {
				symbol: "PICKLE",
				name: "PickleToken",
				decimals: 18,
				address: "0x2b88ad57897a8b496595925f43048301c37615da",
				logoURI: "https://tokens.1inch.io/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png",
				tags: [
					"tokens"
				]
			},
			"0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e": {
				symbol: "PPDEX",
				name: "Pepedex",
				decimals: 18,
				address: "0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e",
				logoURI: "https://tokens.1inch.io/0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e.png",
				tags: [
					"tokens"
				]
			},
			"0x361a5a4993493ce00f61c32d4ecca5512b82ce90": {
				symbol: "SDT",
				name: "Stake DAO Token",
				decimals: 18,
				address: "0x361a5a4993493ce00f61c32d4ecca5512b82ce90",
				logoURI: "https://tokens.1inch.io/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png",
				tags: [
					"tokens"
				]
			},
			"0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a": {
				symbol: "SUSHI",
				name: "SushiToken",
				decimals: 18,
				address: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
				logoURI: "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png",
				tags: [
					"tokens"
				]
			},
			"0x840195888db4d6a99ed9f73fcd3b225bb3cb1a79": {
				symbol: "SX",
				name: "SportX",
				decimals: 18,
				address: "0x840195888db4d6a99ed9f73fcd3b225bb3cb1a79",
				logoURI: "https://tokens.1inch.io/0x99fe3b1391503a1bc1788051347a1324bff41452.png",
				tags: [
					"tokens"
				]
			},
			"0x7fbc10850cae055b27039af31bd258430e714c62": {
				symbol: "UBT",
				name: "Unibright",
				decimals: 8,
				address: "0x7fbc10850cae055b27039af31bd258430e714c62",
				logoURI: "https://tokens.1inch.io/0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e.png",
				tags: [
					"tokens"
				]
			},
			"0x034b2090b579228482520c589dbd397c53fc51cc": {
				symbol: "VISION",
				name: "Vision Token",
				decimals: 18,
				address: "0x034b2090b579228482520c589dbd397c53fc51cc",
				logoURI: "https://tokens.1inch.io/0x034b2090b579228482520c589dbd397c53fc51cc.png",
				tags: [
					"tokens"
				]
			},
			"0xb77e62709e39ad1cbeebe77cf493745aec0f453a": {
				symbol: "WISE",
				name: "Wise Token",
				decimals: 18,
				address: "0xb77e62709e39ad1cbeebe77cf493745aec0f453a",
				logoURI: "https://tokens.1inch.io/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png",
				tags: [
					"tokens"
				]
			},
			"0x8f18dc399594b451eda8c5da02d0563c0b2d0f16": {
				symbol: "WOLF",
				name: "moonwolf.io",
				decimals: 9,
				address: "0x8f18dc399594b451eda8c5da02d0563c0b2d0f16",
				logoURI: "https://tokens.1inch.io/0x8f18dc399594b451eda8c5da02d0563c0b2d0f16.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff": {
				symbol: "iFARM",
				name: "iFARM",
				decimals: 18,
				address: "0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff",
				logoURI: "https://tokens.1inch.io/0xa0246c9032bc3a600820415ae600c6388619a14d.png",
				tags: [
					"tokens"
				]
			},
			"0x282d8efce846a88b159800bd4130ad77443fa1a1": {
				symbol: "mOCEAN",
				name: "Ocean Token",
				decimals: 18,
				address: "0x282d8efce846a88b159800bd4130ad77443fa1a1",
				logoURI: "https://tokens.1inch.io/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png",
				tags: [
					"tokens"
				]
			},
			"0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8": {
				symbol: "ANY",
				name: "Anyswap",
				decimals: 18,
				address: "0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8",
				logoURI: "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x7075cab6bcca06613e2d071bd918d1a0241379e2": {
				symbol: "GFARM2",
				name: "Gains V2",
				decimals: 18,
				address: "0x7075cab6bcca06613e2d071bd918d1a0241379e2",
				logoURI: "https://tokens.1inch.io/0x7075cab6bcca06613e2d071bd918d1a0241379e2.png",
				tags: [
					"tokens"
				]
			},
			"0x05089c9ebffa4f0aca269e32056b1b36b37ed71b": {
				symbol: "Krill",
				name: "Krill",
				decimals: 18,
				address: "0x05089c9ebffa4f0aca269e32056b1b36b37ed71b",
				logoURI: "https://tokens.1inch.io/0x05089c9ebffa4f0aca269e32056b1b36b37ed71b.png",
				tags: [
					"tokens"
				]
			},
			"0xe82808eaa78339b06a691fd92e1be79671cad8d3": {
				symbol: "PLOT",
				name: "PLOT",
				decimals: 18,
				address: "0xe82808eaa78339b06a691fd92e1be79671cad8d3",
				logoURI: "https://tokens.1inch.io/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png",
				tags: [
					"tokens"
				]
			},
			"0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32": {
				symbol: "TEL",
				name: "Telcoin",
				decimals: 2,
				address: "0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32",
				logoURI: "https://tokens.1inch.io/0x467bccd9d29f223bce8043b84e8c8b282827790f.png",
				tags: [
					"tokens"
				]
			},
			"0x1a13f4ca1d028320a707d99520abfefca3998b7f": {
				symbol: "amUSDC",
				name: "Aave Matic Market USDC",
				decimals: 6,
				address: "0x1a13f4ca1d028320a707d99520abfefca3998b7f",
				logoURI: "https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x60d55f02a771d515e077c9c2403a1ef324885cec": {
				symbol: "amUSDT",
				name: "Aave Matic Market USDT",
				decimals: 6,
				address: "0x60d55f02a771d515e077c9c2403a1ef324885cec",
				logoURI: "https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x5c2ed810328349100a66b82b78a1791b101c9d61": {
				symbol: "amWBTC",
				name: "Aave Matic Market WBTC",
				decimals: 8,
				address: "0x5c2ed810328349100a66b82b78a1791b101c9d61",
				logoURI: "https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x28424507fefb6f7f8e9d3860f56504e4e5f5f390": {
				symbol: "amWETH",
				name: "Aave Matic Market WETH",
				decimals: 18,
				address: "0x28424507fefb6f7f8e9d3860f56504e4e5f5f390",
				logoURI: "https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4": {
				symbol: "amWMATIC",
				name: "Aave Matic Market WMATIC",
				decimals: 18,
				address: "0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4",
				logoURI: "https://tokens.1inch.io/0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x1d2a0e5ec8e5bbdca5cb219e649b565d8e5c3360": {
				symbol: "amAAVE",
				name: "Aave Matic Market AAVE",
				decimals: 18,
				address: "0x1d2a0e5ec8e5bbdca5cb219e649b565d8e5c3360",
				logoURI: "https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x27f8d03b3a2196956ed754badc28d73be8830a6e": {
				symbol: "amDAI",
				name: "Aave Matic Market DAI",
				decimals: 18,
				address: "0x27f8d03b3a2196956ed754badc28d73be8830a6e",
				logoURI: "https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x172370d5cd63279efa6d502dab29171933a610af": {
				symbol: "CRV",
				name: "CRV",
				decimals: 18,
				address: "0x172370d5cd63279efa6d502dab29171933a610af",
				logoURI: "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
				tags: [
					"tokens"
				]
			},
			"0xfbdd194376de19a88118e84e279b977f165d01b8": {
				symbol: "BIFI",
				name: "beefy.finance",
				decimals: 18,
				address: "0xfbdd194376de19a88118e84e279b977f165d01b8",
				logoURI: "https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3a3df212b7aa91aa0402b9035b098891d276572b": {
				symbol: "FISH",
				name: "Fish",
				decimals: 18,
				address: "0x3a3df212b7aa91aa0402b9035b098891d276572b",
				logoURI: "https://tokens.1inch.io/0x3a3df212b7aa91aa0402b9035b098891d276572b.png",
				tags: [
					"tokens"
				]
			},
			"0x8a953cfe442c5e8855cc6c61b1293fa648bae472": {
				symbol: "PolyDoge",
				name: "PolyDoge",
				decimals: 18,
				address: "0x8a953cfe442c5e8855cc6c61b1293fa648bae472",
				logoURI: "https://tokens.1inch.io/0x8a953cfe442c5e8855cc6c61b1293fa648bae472.png",
				tags: [
					"tokens"
				]
			},
			"0xd86b5923f3ad7b585ed81b448170ae026c65ae9a": {
				symbol: "IRON",
				name: "IRON Stablecoin",
				decimals: 18,
				address: "0xd86b5923f3ad7b585ed81b448170ae026c65ae9a",
				logoURI: "https://tokens.1inch.io/0xd86b5923f3ad7b585ed81b448170ae026c65ae9a.png",
				tags: [
					"tokens"
				]
			},
			"0xaaa5b9e6c589642f98a1cda99b9d024b8407285a": {
				symbol: "TITAN",
				name: "IRON Titanium Token",
				decimals: 18,
				address: "0xaaa5b9e6c589642f98a1cda99b9d024b8407285a",
				logoURI: "https://tokens.1inch.io/0xaaa5b9e6c589642f98a1cda99b9d024b8407285a.png",
				tags: [
					"tokens"
				]
			},
			"0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97": {
				symbol: "DFYN",
				name: "DFYN Token",
				decimals: 18,
				address: "0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97",
				logoURI: "https://tokens.1inch.io/0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97.png",
				tags: [
					"tokens"
				]
			},
			"0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603": {
				symbol: "WOO",
				name: "Wootrade Network",
				decimals: 18,
				address: "0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603",
				logoURI: "https://tokens.1inch.io/0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603.png",
				tags: [
					"tokens"
				]
			},
			"0x4c4bf319237d98a30a929a96112effa8da3510eb": {
				symbol: "WEXpoly",
				name: "WaultSwap Polygon",
				decimals: 18,
				address: "0x4c4bf319237d98a30a929a96112effa8da3510eb",
				logoURI: "https://tokens.1inch.io/0x4c4bf319237d98a30a929a96112effa8da3510eb.png",
				tags: [
					"tokens"
				]
			},
			"0x580a84c73811e1839f75d86d75d88cca0c241ff4": {
				symbol: "QI",
				name: "Qi Dao",
				decimals: 18,
				address: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
				logoURI: "https://tokens.1inch.io/0x580a84c73811e1839f75d86d75d88cca0c241ff4.png",
				tags: [
					"tokens"
				]
			},
			"0xa3fa99a148fa48d14ed51d610c367c61876997f1": {
				symbol: "miMATIC",
				name: "miMATIC",
				decimals: 18,
				address: "0xa3fa99a148fa48d14ed51d610c367c61876997f1",
				logoURI: "https://tokens.1inch.io/0xa3fa99a148fa48d14ed51d610c367c61876997f1.png",
				tags: [
					"tokens"
				]
			},
			"0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e": {
				symbol: "OMEN",
				name: "Augury Finance",
				decimals: 18,
				address: "0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e",
				logoURI: "https://tokens.1inch.io/0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e.png",
				tags: [
					"tokens"
				]
			},
			"0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c": {
				symbol: "KNC",
				name: "Kyber Network Crystal v2",
				decimals: 18,
				address: "0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c",
				logoURI: "https://tokens.1inch.io/0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c.png",
				tags: [
					"tokens"
				]
			},
			"0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3": {
				symbol: "BAL",
				name: "Balancer",
				decimals: 18,
				address: "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
				logoURI: "https://tokens.1inch.io/0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3.png",
				tags: [
					"tokens"
				]
			},
			"0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef": {
				symbol: "ICE_1",
				name: "Iron Finance ICE Token",
				decimals: 18,
				address: "0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef",
				logoURI: "https://tokens.1inch.io/0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef.png",
				displayedSymbol: "ICE",
				tags: [
					"tokens"
				]
			},
			"0xfbe49330e7b9f58a822788f86c1be38ab902bab1": {
				symbol: "PAPR",
				name: "PAPR",
				decimals: 18,
				address: "0xfbe49330e7b9f58a822788f86c1be38ab902bab1",
				logoURI: "https://tokens.1inch.io/0xfbe49330e7b9f58a822788f86c1be38ab902bab1.png",
				tags: [
					"tokens"
				]
			},
			"0x03cba0cff3bf727711eae7ef11d152dce3163901": {
				symbol: "PRNTR",
				name: "PRNTR",
				decimals: 18,
				address: "0x03cba0cff3bf727711eae7ef11d152dce3163901",
				logoURI: "https://tokens.1inch.io/0x03cba0cff3bf727711eae7ef11d152dce3163901.png",
				tags: [
					"tokens"
				]
			},
			"0x59e9261255644c411afdd00bd89162d09d862e38": {
				symbol: "ETHA",
				name: "ETHA",
				decimals: 18,
				address: "0x59e9261255644c411afdd00bd89162d09d862e38",
				logoURI: "https://tokens.1inch.io/0x59e9261255644c411afdd00bd89162d09d862e38.png",
				tags: [
					"tokens"
				]
			},
			"0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539": {
				symbol: "ADDY",
				name: "Adamant",
				decimals: 18,
				address: "0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539",
				logoURI: "https://tokens.1inch.io/0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539.png",
				tags: [
					"tokens"
				]
			},
			"0x692597b009d13c4049a947cab2239b7d6517875f": {
				symbol: "UST",
				name: "Wrapped UST Token (PoS)",
				decimals: 18,
				address: "0x692597b009d13c4049a947cab2239b7d6517875f",
				logoURI: "https://tokens.1inch.io/0x692597b009d13c4049a947cab2239b7d6517875f.png",
				tags: [
					"tokens"
				]
			},
			"0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309": {
				symbol: "SNK",
				name: "Snook",
				decimals: 18,
				address: "0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309",
				logoURI: "https://tokens.1inch.io/0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309.png",
				tags: [
					"tokens"
				]
			},
			"0xdab35042e63e93cc8556c9bae482e5415b5ac4b1": {
				symbol: "IRIS",
				name: "Iris",
				decimals: 18,
				address: "0xdab35042e63e93cc8556c9bae482e5415b5ac4b1",
				logoURI: "https://tokens.1inch.io/0xdab35042e63e93cc8556c9bae482e5415b5ac4b1.png",
				tags: [
					"tokens"
				]
			},
			"0x3a3e7650f8b9f667da98f236010fbf44ee4b2975": {
				symbol: "xUSD",
				name: "xDollar Stablecoin",
				decimals: 18,
				address: "0x3a3e7650f8b9f667da98f236010fbf44ee4b2975",
				logoURI: "https://tokens.1inch.io/0x3a3e7650f8b9f667da98f236010fbf44ee4b2975.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x13748d548d95d78a3c83fe3f32604b4796cffa23": {
				symbol: "KOGECOIN",
				name: "kogecoin.io",
				decimals: 9,
				address: "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
				logoURI: "https://tokens.1inch.io/0x13748d548d95d78a3c83fe3f32604b4796cffa23.png",
				tags: [
					"tokens"
				]
			},
			"0xe111178a87a3bff0c8d18decba5798827539ae99": {
				symbol: "EURS",
				name: "STASIS EURS Token (PoS)",
				decimals: 2,
				address: "0xe111178a87a3bff0c8d18decba5798827539ae99",
				logoURI: "https://tokens.1inch.io/0xe111178a87a3bff0c8d18decba5798827539ae99.png",
				tags: [
					"tokens"
				]
			},
			"0x769434dca303597c8fc4997bf3dab233e961eda2": {
				symbol: "XSGD",
				name: "XSGD (PoS)",
				decimals: 6,
				address: "0x769434dca303597c8fc4997bf3dab233e961eda2",
				logoURI: "https://tokens.1inch.io/0x769434dca303597c8fc4997bf3dab233e961eda2.png",
				tags: [
					"tokens"
				]
			},
			"0x255707b70bf90aa112006e1b07b9aea6de021424": {
				symbol: "TETU",
				name: "TETU Reward Token",
				decimals: 18,
				address: "0x255707b70bf90aa112006e1b07b9aea6de021424",
				logoURI: "https://tokens.1inch.io/0x255707b70bf90aa112006e1b07b9aea6de021424.png",
				tags: [
					"tokens"
				]
			},
			"0x5f0197ba06860dac7e31258bdf749f92b6a636d4": {
				symbol: "1FLR",
				name: "Flare Token",
				decimals: 18,
				address: "0x5f0197ba06860dac7e31258bdf749f92b6a636d4",
				logoURI: "https://tokens.1inch.io/0x5f0197ba06860dac7e31258bdf749f92b6a636d4.png",
				tags: [
					"tokens"
				]
			},
			"0x6c0ab120dbd11ba701aff6748568311668f63fe0": {
				symbol: "APW",
				name: "APWine Token (PoS)",
				decimals: 18,
				address: "0x6c0ab120dbd11ba701aff6748568311668f63fe0",
				logoURI: "https://tokens.1inch.io/0x4104b135dbc9609fc1a9490e61369036497660c8.png",
				tags: [
					"tokens"
				]
			},
			"0x8c92e38eca8210f4fcbf17f0951b198dd7668292": {
				symbol: "DHT",
				name: "dHedge DAO Token (PoS)",
				decimals: 18,
				address: "0x8c92e38eca8210f4fcbf17f0951b198dd7668292",
				logoURI: "https://tokens.1inch.io/0x8c92e38eca8210f4fcbf17f0951b198dd7668292.png",
				tags: [
					"tokens"
				]
			},
			"0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2": {
				symbol: "NACHO",
				name: "NACHO",
				decimals: 18,
				address: "0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2",
				logoURI: "https://tokens.1inch.io/0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2.png",
				tags: [
					"tokens"
				]
			},
			"0xac63686230f64bdeaf086fe6764085453ab3023f": {
				symbol: "USV",
				name: "Universal Store of Value",
				decimals: 9,
				address: "0xac63686230f64bdeaf086fe6764085453ab3023f",
				logoURI: "https://tokens.1inch.io/0xac63686230f64bdeaf086fe6764085453ab3023f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf50d05a1402d0adafa880d36050736f9f6ee7dee": {
				symbol: "INST",
				name: "Instadapp (PoS)",
				decimals: 18,
				address: "0xf50d05a1402d0adafa880d36050736f9f6ee7dee",
				logoURI: "https://tokens.1inch.io/0xf50d05a1402d0adafa880d36050736f9f6ee7dee.png",
				tags: [
					"tokens"
				]
			},
			"0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8": {
				symbol: "WIXS",
				name: "Wrapped Ixs Token",
				decimals: 18,
				address: "0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8",
				logoURI: "https://tokens.1inch.io/0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xe0b52e49357fd4daf2c15e02058dce6bc0057db4": {
				symbol: "agEUR",
				name: "agEUR",
				decimals: 18,
				address: "0xe0b52e49357fd4daf2c15e02058dce6bc0057db4",
				logoURI: "https://tokens.1inch.io/0xe0b52e49357fd4daf2c15e02058dce6bc0057db4.png",
				tags: [
					"tokens"
				]
			},
			"0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a": {
				symbol: "NFTI",
				name: "Scalara NFT Index (PoS)",
				decimals: 18,
				address: "0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a",
				logoURI: "https://tokens.1inch.io/0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a.png",
				tags: [
					"tokens"
				]
			},
			"0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa": {
				symbol: "deUSDC",
				name: "deBridge USD Coin",
				decimals: 6,
				address: "0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa",
				logoURI: "https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x45c32fa6df82ead1e2ef74d17b76547eddfaff89": {
				symbol: "FRAX",
				name: "Frax",
				decimals: 18,
				address: "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
				logoURI: "https://tokens.1inch.io/0x45c32fa6df82ead1e2ef74d17b76547eddfaff89.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x1a3acf6d19267e2d3e7f898f42803e90c9219062": {
				symbol: "FXS",
				name: "Frax Share",
				decimals: 18,
				address: "0x1a3acf6d19267e2d3e7f898f42803e90c9219062",
				logoURI: "https://tokens.1inch.io/0x1a3acf6d19267e2d3e7f898f42803e90c9219062.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x5314ba045a459f63906aa7c76d9f337dcb7d6995": {
				symbol: "FODL",
				name: "Fodl (PoS)",
				decimals: 18,
				address: "0x5314ba045a459f63906aa7c76d9f337dcb7d6995",
				logoURI: "https://tokens.1inch.io/0x5314ba045a459f63906aa7c76d9f337dcb7d6995.png",
				tags: [
					"tokens"
				]
			},
			"0xbae28251b2a4e621aa7e20538c06dee010bc06de": {
				symbol: "dUSD",
				name: "dHEDGE Stablecoin Yield",
				decimals: 18,
				address: "0xbae28251b2a4e621aa7e20538c06dee010bc06de",
				logoURI: "https://tokens.1inch.io/0xbae28251b2a4e621aa7e20538c06dee010bc06de.png",
				tags: [
					"tokens"
				]
			},
			"0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762": {
				symbol: "REQ",
				name: "Request",
				decimals: 18,
				address: "0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762",
				logoURI: "https://tokens.1inch.io/0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3f46a70adb395cddb81ff9bfe3b62adae1b44816": {
				symbol: "WARP",
				name: "Warp Token",
				decimals: 9,
				address: "0x3f46a70adb395cddb81ff9bfe3b62adae1b44816",
				logoURI: "https://tokens.1inch.io/0x3f46a70adb395cddb81ff9bfe3b62adae1b44816.png",
				tags: [
					"tokens"
				]
			},
			"0x0a5926027d407222f8fe20f24cb16e103f617046": {
				symbol: "NFD",
				name: "Feisty Doge NFT (PoS)",
				decimals: 18,
				address: "0x0a5926027d407222f8fe20f24cb16e103f617046",
				logoURI: "https://tokens.1inch.io/0x0a5926027d407222f8fe20f24cb16e103f617046.png",
				tags: [
					"tokens"
				]
			},
			"0x59b5654a17ac44f3068b3882f298881433bb07ef": {
				symbol: "CHP",
				name: "CoinPoker Chips (PoS)",
				decimals: 18,
				address: "0x59b5654a17ac44f3068b3882f298881433bb07ef",
				logoURI: "https://tokens.1inch.io/0x59b5654a17ac44f3068b3882f298881433bb07ef.png",
				tags: [
					"tokens"
				]
			},
			"0xeee3371b89fc43ea970e908536fcddd975135d8a": {
				symbol: "DOG",
				name: "The Doge NFT",
				decimals: 18,
				address: "0xeee3371b89fc43ea970e908536fcddd975135d8a",
				logoURI: "https://tokens.1inch.io/0xeee3371b89fc43ea970e908536fcddd975135d8a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7": {
				symbol: "ABI",
				name: "Abachi",
				decimals: 9,
				address: "0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7",
				logoURI: "https://tokens.1inch.io/0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8623e66bea0dce41b6d47f9c44e806a115babae0": {
				symbol: "NFTY",
				name: "NFTY Token",
				decimals: 18,
				address: "0x8623e66bea0dce41b6d47f9c44e806a115babae0",
				logoURI: "https://tokens.1inch.io/0x8623e66bea0dce41b6d47f9c44e806a115babae0.png",
				tags: [
					"tokens"
				]
			},
			"0xf0059cc2b3e980065a906940fbce5f9db7ae40a7": {
				symbol: "ULT",
				name: "Shardus (PoS)",
				decimals: 18,
				address: "0xf0059cc2b3e980065a906940fbce5f9db7ae40a7",
				logoURI: "https://tokens.1inch.io/0xf0059cc2b3e980065a906940fbce5f9db7ae40a7.png",
				tags: [
					"tokens"
				]
			},
			"0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8": {
				symbol: "RIOT",
				name: "RIOT (PoS)",
				decimals: 18,
				address: "0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8",
				logoURI: "https://tokens.1inch.io/0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8.png",
				tags: [
					"tokens"
				]
			},
			"0x49690541e3f6e933a9aa3cffee6010a7bb5b72d7": {
				symbol: "AXIA",
				name: "Axia (axiaprotocol.io)",
				decimals: 18,
				address: "0x49690541e3f6e933a9aa3cffee6010a7bb5b72d7",
				logoURI: "https://tokens.1inch.io/0x49690541e3f6e933a9aa3cffee6010a7bb5b72d7.png",
				tags: [
					"tokens"
				]
			},
			"0xba3cb8329d442e6f9eb70fafe1e214251df3d275": {
				symbol: "SWASH",
				name: "Swash Token",
				decimals: 18,
				address: "0xba3cb8329d442e6f9eb70fafe1e214251df3d275",
				logoURI: "https://tokens.1inch.io/0xba3cb8329d442e6f9eb70fafe1e214251df3d275.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x29f1e986fca02b7e54138c04c4f503dddd250558": {
				symbol: "VSQ",
				name: "VSQ",
				decimals: 9,
				address: "0x29f1e986fca02b7e54138c04c4f503dddd250558",
				logoURI: "https://tokens.1inch.io/0x29f1e986fca02b7e54138c04c4f503dddd250558.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d": {
				symbol: "ORE",
				name: "pTokens ORE (PoS)",
				decimals: 18,
				address: "0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d",
				logoURI: "https://tokens.1inch.io/0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d.png",
				tags: [
					"tokens"
				]
			},
			"0x7f280dac515121dcda3eac69eb4c13a52392cace": {
				symbol: "FNC",
				name: "Fancy Games",
				decimals: 18,
				address: "0x7f280dac515121dcda3eac69eb4c13a52392cace",
				logoURI: "https://tokens.1inch.io/0x7f280dac515121dcda3eac69eb4c13a52392cace.png",
				tags: [
					"tokens"
				]
			},
			"0x3ad707da309f3845cd602059901e39c4dcd66473": {
				symbol: "ETH2x-FLI-P",
				name: "ETH 2x Flexible Leverage Index",
				decimals: 18,
				address: "0x3ad707da309f3845cd602059901e39c4dcd66473",
				logoURI: "https://tokens.1inch.io/0x3ad707da309f3845cd602059901e39c4dcd66473.png",
				tags: [
					"tokens"
				]
			},
			"0x8d546026012bf75073d8a586f24a5d5ff75b9716": {
				symbol: "SPHERE",
				name: "Sphere Finance",
				decimals: 18,
				address: "0x8d546026012bf75073d8a586f24a5d5ff75b9716",
				logoURI: "https://tokens.1inch.io/0x8d546026012bf75073d8a586f24a5d5ff75b9716.png",
				tags: [
					"tokens"
				]
			},
			"0x7e7ff932fab08a0af569f93ce65e7b8b23698ad8": {
				symbol: "Yf-DAI",
				name: "YfDAI.finance (PoS)",
				decimals: 18,
				address: "0x7e7ff932fab08a0af569f93ce65e7b8b23698ad8",
				logoURI: "https://tokens.1inch.io/0x7e7ff932fab08a0af569f93ce65e7b8b23698ad8.png",
				tags: [
					"tokens"
				]
			},
			"0xeeeeeb57642040be42185f49c52f7e9b38f8eeee": {
				symbol: "ELK",
				name: "Elk",
				decimals: 18,
				address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9": {
				symbol: "cxETH",
				name: "CelsiusX Wrapped ETH",
				decimals: 18,
				address: "0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9",
				logoURI: "https://tokens.1inch.io/0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9.png",
				tags: [
					"tokens"
				]
			},
			"0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f": {
				symbol: "GENE",
				name: "GenomesDAO (PoS)",
				decimals: 18,
				address: "0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f",
				logoURI: "https://tokens.1inch.io/0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f.png",
				tags: [
					"tokens"
				]
			},
			"0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae": {
				symbol: "PGX",
				name: "Pegaxy Stone",
				decimals: 18,
				address: "0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae",
				logoURI: "https://tokens.1inch.io/0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae.png",
				tags: [
					"tokens"
				]
			},
			"0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe": {
				symbol: "IXT",
				name: "PlanetIX",
				decimals: 18,
				address: "0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe",
				logoURI: "https://tokens.1inch.io/0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe.png",
				tags: [
					"tokens"
				]
			},
			"0xbbba073c31bf03b8acf7c28ef0738decf3695683": {
				symbol: "SAND",
				name: "SAND",
				decimals: 18,
				address: "0xbbba073c31bf03b8acf7c28ef0738decf3695683",
				logoURI: "https://tokens.1inch.io/0xbbba073c31bf03b8acf7c28ef0738decf3695683.png",
				tags: [
					"tokens"
				]
			},
			"0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c": {
				symbol: "ICE_2",
				name: "Decentral Games ICE",
				decimals: 18,
				address: "0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c",
				logoURI: "https://tokens.1inch.io/0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c.png",
				displayedSymbol: "ICE",
				tags: [
					"tokens"
				]
			},
			"0x50b728d8d964fd00c2d0aad81718b71311fef68a": {
				symbol: "SNX",
				name: "Synthetix Network Token (PoS)",
				decimals: 18,
				address: "0x50b728d8d964fd00c2d0aad81718b71311fef68a",
				logoURI: "https://tokens.1inch.io/0x50b728d8d964fd00c2d0aad81718b71311fef68a.png",
				tags: [
					"tokens"
				]
			},
			"0x229b1b6c23ff8953d663c4cbb519717e323a0a84": {
				symbol: "BLOK",
				name: "BLOK",
				decimals: 18,
				address: "0x229b1b6c23ff8953d663c4cbb519717e323a0a84",
				logoURI: "https://tokens.1inch.io/0x229b1b6c23ff8953d663c4cbb519717e323a0a84.png",
				tags: [
					"tokens"
				]
			},
			"0x3b56a704c01d650147ade2b8cee594066b3f9421": {
				symbol: "FYN",
				name: "Affyn",
				decimals: 18,
				address: "0x3b56a704c01d650147ade2b8cee594066b3f9421",
				logoURI: "https://tokens.1inch.io/0x3b56a704c01d650147ade2b8cee594066b3f9421.png",
				tags: [
					"tokens"
				]
			},
			"0x4e78011ce80ee02d2c3e649fb657e45898257815": {
				symbol: "KLIMA",
				name: "Klima DAO",
				decimals: 9,
				address: "0x4e78011ce80ee02d2c3e649fb657e45898257815",
				logoURI: "https://tokens.1inch.io/0x4e78011ce80ee02d2c3e649fb657e45898257815.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b": {
				symbol: "AVAX",
				name: "Avalanche Token",
				decimals: 18,
				address: "0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b",
				logoURI: "https://tokens.1inch.io/0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b.png",
				tags: [
					"tokens"
				]
			},
			"0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4": {
				symbol: "ROUTE (PoS)",
				name: "Route",
				decimals: 18,
				address: "0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4",
				logoURI: "https://tokens.1inch.io/0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xef938b6da8576a896f6e0321ef80996f4890f9c4": {
				symbol: "DG",
				name: "Decentral Games (PoS)",
				decimals: 18,
				address: "0xef938b6da8576a896f6e0321ef80996f4890f9c4",
				logoURI: "https://tokens.1inch.io/0xef938b6da8576a896f6e0321ef80996f4890f9c4.png",
				tags: [
					"tokens"
				]
			},
			"0x2bc07124d8dac638e290f401046ad584546bc47b": {
				symbol: "TOWER",
				name: "TOWER",
				decimals: 18,
				address: "0x2bc07124d8dac638e290f401046ad584546bc47b",
				logoURI: "https://tokens.1inch.io/0x2bc07124d8dac638e290f401046ad584546bc47b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x235737dbb56e8517391473f7c964db31fa6ef280": {
				symbol: "KASTA",
				name: "KastaToken",
				decimals: 18,
				address: "0x235737dbb56e8517391473f7c964db31fa6ef280",
				logoURI: "https://tokens.1inch.io/0x235737dbb56e8517391473f7c964db31fa6ef280.png",
				tags: [
					"tokens"
				]
			},
			"0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c": {
				symbol: "JPYC",
				name: "JPY Coin (PoS)",
				decimals: 18,
				address: "0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c",
				logoURI: "https://tokens.1inch.io/0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c.png",
				tags: [
					"tokens"
				]
			},
			"0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6": {
				symbol: "DERC",
				name: "DeRace Token",
				decimals: 18,
				address: "0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6",
				logoURI: "https://tokens.1inch.io/0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x980111ae1b84e50222c8843e3a7a038f36fecd2b": {
				symbol: "STACK",
				name: "StackOS",
				decimals: 18,
				address: "0x980111ae1b84e50222c8843e3a7a038f36fecd2b",
				logoURI: "https://tokens.1inch.io/0x980111ae1b84e50222c8843e3a7a038f36fecd2b.png",
				tags: [
					"tokens"
				]
			},
			"0x8765f05adce126d70bcdf1b0a48db573316662eb": {
				symbol: "PLA",
				name: "PlayDapp Token (PoS)",
				decimals: 18,
				address: "0x8765f05adce126d70bcdf1b0a48db573316662eb",
				logoURI: "https://tokens.1inch.io/0x8765f05adce126d70bcdf1b0a48db573316662eb.png",
				tags: [
					"tokens"
				]
			},
			"0xe8377a076adabb3f9838afb77bee96eac101ffb1": {
				symbol: "MSU",
				name: "MetaSoccer Universe",
				decimals: 18,
				address: "0xe8377a076adabb3f9838afb77bee96eac101ffb1",
				logoURI: "https://tokens.1inch.io/0xe8377a076adabb3f9838afb77bee96eac101ffb1.png",
				tags: [
					"tokens"
				]
			},
			"0x5d47baba0d66083c52009271faf3f50dcc01023c": {
				symbol: "BANANA",
				name: "ApeSwapFinance Banana",
				decimals: 18,
				address: "0x5d47baba0d66083c52009271faf3f50dcc01023c",
				logoURI: "https://tokens.1inch.io/0x5d47baba0d66083c52009271faf3f50dcc01023c.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xefee2de82343be622dcb4e545f75a3b9f50c272d": {
				symbol: "TRY",
				name: "TryHards",
				decimals: 18,
				address: "0xefee2de82343be622dcb4e545f75a3b9f50c272d",
				logoURI: "https://tokens.1inch.io/0xefee2de82343be622dcb4e545f75a3b9f50c272d.png",
				tags: [
					"tokens"
				]
			},
			"0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f": {
				symbol: "VOXEL",
				name: "VOXEL Token",
				decimals: 18,
				address: "0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f",
				logoURI: "https://tokens.1inch.io/0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f.png",
				tags: [
					"tokens"
				]
			},
			"0x723b17718289a91af252d616de2c77944962d122": {
				symbol: "GAIA",
				name: "GAIA Everworld",
				decimals: 18,
				address: "0x723b17718289a91af252d616de2c77944962d122",
				logoURI: "https://tokens.1inch.io/0x723b17718289a91af252d616de2c77944962d122.png",
				tags: [
					"tokens"
				]
			},
			"0xa3c322ad15218fbfaed26ba7f616249f7705d945": {
				symbol: "MV",
				name: "Metaverse (PoS)",
				decimals: 18,
				address: "0xa3c322ad15218fbfaed26ba7f616249f7705d945",
				logoURI: "https://tokens.1inch.io/0xa3c322ad15218fbfaed26ba7f616249f7705d945.png",
				tags: [
					"tokens"
				]
			},
			"0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195": {
				symbol: "gOHM",
				name: "Governance OHM",
				decimals: 18,
				address: "0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195",
				logoURI: "https://tokens.1inch.io/0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x554f074d9ccda8f483d1812d4874cbebd682644e": {
				symbol: "$ANRX",
				name: "AnRKey X (PoS)",
				decimals: 18,
				address: "0x554f074d9ccda8f483d1812d4874cbebd682644e",
				logoURI: "https://tokens.1inch.io/0x554f074d9ccda8f483d1812d4874cbebd682644e.png",
				tags: [
					"tokens"
				]
			},
			"0x8f9e8e833a69aa467e42c46cca640da84dd4585f": {
				symbol: "CHAMP",
				name: "NFT Champions",
				decimals: 8,
				address: "0x8f9e8e833a69aa467e42c46cca640da84dd4585f",
				logoURI: "https://tokens.1inch.io/0x8f9e8e833a69aa467e42c46cca640da84dd4585f.png",
				tags: [
					"tokens"
				]
			},
			"0xe0339c80ffde91f3e20494df88d4206d86024cdf": {
				symbol: "ELON",
				name: "Dogelon (PoS)",
				decimals: 18,
				address: "0xe0339c80ffde91f3e20494df88d4206d86024cdf",
				logoURI: "https://tokens.1inch.io/0xe0339c80ffde91f3e20494df88d4206d86024cdf.png",
				tags: [
					"tokens"
				]
			},
			"0xc004e2318722ea2b15499d6375905d75ee5390b8": {
				symbol: "KOM",
				name: "Kommunitas",
				decimals: 8,
				address: "0xc004e2318722ea2b15499d6375905d75ee5390b8",
				logoURI: "https://tokens.1inch.io/0xc004e2318722ea2b15499d6375905d75ee5390b8.png",
				tags: [
					"tokens"
				]
			},
			"0x42d61d766b85431666b39b89c43011f24451bff6": {
				symbol: "PSP",
				name: "ParaSwap (PoS)",
				decimals: 18,
				address: "0x42d61d766b85431666b39b89c43011f24451bff6",
				logoURI: "https://tokens.1inch.io/0x42d61d766b85431666b39b89c43011f24451bff6.png",
				tags: [
					"tokens"
				]
			},
			"0xe5417af564e4bfda1c483642db72007871397896": {
				symbol: "GNS",
				name: "Gains Network",
				decimals: 18,
				address: "0xe5417af564e4bfda1c483642db72007871397896",
				logoURI: "https://tokens.1inch.io/0xe5417af564e4bfda1c483642db72007871397896.png",
				tags: [
					"tokens"
				]
			},
			"0xd99bafe5031cc8b345cb2e8c80135991f12d7130": {
				symbol: "FRM",
				name: "Ferrum Network Token",
				decimals: 18,
				address: "0xd99bafe5031cc8b345cb2e8c80135991f12d7130",
				logoURI: "https://tokens.1inch.io/0xd99bafe5031cc8b345cb2e8c80135991f12d7130.png",
				tags: [
					"tokens"
				]
			},
			"0x70c006878a5a50ed185ac4c87d837633923de296": {
				symbol: "REVV",
				name: "REVV",
				decimals: 18,
				address: "0x70c006878a5a50ed185ac4c87d837633923de296",
				logoURI: "https://tokens.1inch.io/0x70c006878a5a50ed185ac4c87d837633923de296.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0d0b8488222f7f83b23e365320a4021b12ead608": {
				symbol: "NXTT",
				name: "NextEarthToken",
				decimals: 18,
				address: "0x0d0b8488222f7f83b23e365320a4021b12ead608",
				logoURI: "https://tokens.1inch.io/0x0d0b8488222f7f83b23e365320a4021b12ead608.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x071ac29d569a47ebffb9e57517f855cb577dcc4c": {
				symbol: "GFC",
				name: "GCOIN",
				decimals: 18,
				address: "0x071ac29d569a47ebffb9e57517f855cb577dcc4c",
				logoURI: "https://tokens.1inch.io/0x071ac29d569a47ebffb9e57517f855cb577dcc4c.png",
				tags: [
					"tokens"
				]
			},
			"0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f": {
				symbol: "USD+",
				name: "USD+",
				decimals: 6,
				address: "0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f",
				logoURI: "https://tokens.1inch.io/0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f.png",
				tags: [
					"tokens"
				]
			},
			"0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59": {
				symbol: "ICE_3",
				name: "IceToken",
				decimals: 18,
				address: "0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59",
				logoURI: "https://tokens.1inch.io/0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59.png",
				eip2612: true,
				displayedSymbol: "ICE",
				tags: [
					"tokens"
				]
			},
			"0xc10358f062663448a3489fc258139944534592ac": {
				symbol: "BCMC",
				name: "Blockchain Monster Coin",
				decimals: 18,
				address: "0xc10358f062663448a3489fc258139944534592ac",
				logoURI: "https://tokens.1inch.io/0xc10358f062663448a3489fc258139944534592ac.png",
				tags: [
					"tokens"
				]
			},
			"0x24834bbec7e39ef42f4a75eaf8e5b6486d3f0e57": {
				symbol: "LUNA",
				name: "Wrapped LUNA Token (PoS)",
				decimals: 18,
				address: "0x24834bbec7e39ef42f4a75eaf8e5b6486d3f0e57",
				logoURI: "https://tokens.1inch.io/0x24834bbec7e39ef42f4a75eaf8e5b6486d3f0e57.png",
				tags: [
					"tokens"
				]
			},
			"0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a": {
				symbol: "UM",
				name: "Continuum",
				decimals: 18,
				address: "0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a",
				logoURI: "https://tokens.1inch.io/0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a.png",
				tags: [
					"tokens"
				]
			},
			"0xcf32822ff397ef82425153a9dcb726e5ff61dca7": {
				symbol: "GMEE",
				name: "GAMEE",
				decimals: 18,
				address: "0xcf32822ff397ef82425153a9dcb726e5ff61dca7",
				logoURI: "https://tokens.1inch.io/0xcf32822ff397ef82425153a9dcb726e5ff61dca7.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x2791bca1f2de4661ed88a30c99a7a9449aa84174": {
				symbol: "USDC",
				name: "USD Coin",
				decimals: 6,
				address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
				logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
				tags: [
					"tokens"
				]
			},
			"0x146e58d34eab0bff7e0a63cfe9332908d680c667": {
				symbol: "PDDOLLAR",
				name: "pddollar",
				decimals: 18,
				address: "0x146e58d34eab0bff7e0a63cfe9332908d680c667",
				logoURI: "https://tokens.1inch.io/0x146e58d34eab0bff7e0a63cfe9332908d680c667.png",
				tags: [
					"tokens"
				]
			},
			"0x3068382885602fc0089aec774944b5ad6123ae60": {
				symbol: "PDSHARE",
				name: "PDSHARE",
				decimals: 18,
				address: "0x3068382885602fc0089aec774944b5ad6123ae60",
				logoURI: "https://tokens.1inch.io/0x3068382885602fc0089aec774944b5ad6123ae60.png",
				tags: [
					"tokens"
				]
			},
			"0xe7804d91dfcde7f776c90043e03eaa6df87e6395": {
				symbol: "DFX",
				name: "DFX Token (PoS)",
				decimals: 18,
				address: "0xe7804d91dfcde7f776c90043e03eaa6df87e6395",
				logoURI: "https://tokens.1inch.io/0xe7804d91dfcde7f776c90043e03eaa6df87e6395.png",
				tags: [
					"tokens"
				]
			},
			"0xaa7dbd1598251f856c12f63557a4c4397c253cea": {
				symbol: "MCO2",
				name: "Moss Carbon Credit (PoS)",
				decimals: 18,
				address: "0xaa7dbd1598251f856c12f63557a4c4397c253cea",
				logoURI: "https://tokens.1inch.io/0xaa7dbd1598251f856c12f63557a4c4397c253cea.png",
				tags: [
					"tokens"
				]
			},
			"0x60bb3d364b765c497c8ce50ae0ae3f0882c5bd05": {
				symbol: "IMX",
				name: "Impermax (PoS)",
				decimals: 18,
				address: "0x60bb3d364b765c497c8ce50ae0ae3f0882c5bd05",
				logoURI: "https://tokens.1inch.io/0x60bb3d364b765c497c8ce50ae0ae3f0882c5bd05.png",
				tags: [
					"tokens"
				]
			},
			"0x381d168de3991c7413d46e3459b48a5221e3dfe4": {
				symbol: "CUBO",
				name: "CUBO token",
				decimals: 18,
				address: "0x381d168de3991c7413d46e3459b48a5221e3dfe4",
				logoURI: "https://tokens.1inch.io/0x381d168de3991c7413d46e3459b48a5221e3dfe4.png",
				tags: [
					"tokens"
				]
			},
			"0x23e8b6a3f6891254988b84da3738d2bfe5e703b9": {
				symbol: "WELT",
				name: "FABWELT",
				decimals: 18,
				address: "0x23e8b6a3f6891254988b84da3738d2bfe5e703b9",
				logoURI: "https://tokens.1inch.io/0x23e8b6a3f6891254988b84da3738d2bfe5e703b9.png",
				tags: [
					"tokens"
				]
			},
			"0xfe712251173a2cd5f5be2b46bb528328ea3565e1": {
				symbol: "MVI",
				name: "Metaverse Index (PoS)",
				decimals: 18,
				address: "0xfe712251173a2cd5f5be2b46bb528328ea3565e1",
				logoURI: "https://tokens.1inch.io/0xfe712251173a2cd5f5be2b46bb528328ea3565e1.png",
				tags: [
					"tokens"
				]
			},
			"0x34d4ab47bee066f361fa52d792e69ac7bd05ee23": {
				symbol: "AURUM",
				name: "RaiderAurum",
				decimals: 18,
				address: "0x34d4ab47bee066f361fa52d792e69ac7bd05ee23",
				logoURI: "https://tokens.1inch.io/0x34d4ab47bee066f361fa52d792e69ac7bd05ee23.png",
				tags: [
					"tokens"
				]
			},
			"0xcd7361ac3307d1c5a46b63086a90742ff44c63b3": {
				symbol: "RAIDER",
				name: "RaiderToken",
				decimals: 18,
				address: "0xcd7361ac3307d1c5a46b63086a90742ff44c63b3",
				logoURI: "https://tokens.1inch.io/0xcd7361ac3307d1c5a46b63086a90742ff44c63b3.png",
				tags: [
					"tokens"
				]
			},
			"0x90f3edc7d5298918f7bb51694134b07356f7d0c7": {
				symbol: "DDAO",
				name: "DEFI HUNTERS DAO Token",
				decimals: 18,
				address: "0x90f3edc7d5298918f7bb51694134b07356f7d0c7",
				logoURI: "https://tokens.1inch.io/0x90f3edc7d5298918f7bb51694134b07356f7d0c7.png",
				tags: [
					"tokens"
				]
			},
			"0xd3b71117e6c1558c1553305b44988cd944e97300": {
				symbol: "YEL",
				name: "YEL Token",
				decimals: 18,
				address: "0xd3b71117e6c1558c1553305b44988cd944e97300",
				logoURI: "https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png",
				tags: [
					"tokens"
				]
			},
			"0x8839e639f210b80ffea73aedf51baed8dac04499": {
				symbol: "DWEB",
				name: "DecentraWeb (PoS)",
				decimals: 18,
				address: "0x8839e639f210b80ffea73aedf51baed8dac04499",
				logoURI: "https://tokens.1inch.io/0x8839e639f210b80ffea73aedf51baed8dac04499.png",
				tags: [
					"tokens"
				]
			},
			"0x1599fe55cda767b1f631ee7d414b41f5d6de393d": {
				symbol: "MILK",
				name: "Milk",
				decimals: 18,
				address: "0x1599fe55cda767b1f631ee7d414b41f5d6de393d",
				logoURI: "https://tokens.1inch.io/0x1599fe55cda767b1f631ee7d414b41f5d6de393d.png",
				tags: [
					"tokens"
				]
			},
			"0x00e5646f60ac6fb446f621d146b6e1886f002905": {
				symbol: "RAI",
				name: "Rai Reflex Index (PoS)",
				decimals: 18,
				address: "0x00e5646f60ac6fb446f621d146b6e1886f002905",
				logoURI: "https://tokens.1inch.io/0x00e5646f60ac6fb446f621d146b6e1886f002905.png",
				tags: [
					"tokens"
				]
			},
			"0x8a0e8b4b0903929f47c3ea30973940d4a9702067": {
				symbol: "INSUR",
				name: "InsurAce (PoS)",
				decimals: 18,
				address: "0x8a0e8b4b0903929f47c3ea30973940d4a9702067",
				logoURI: "https://tokens.1inch.io/0x8a0e8b4b0903929f47c3ea30973940d4a9702067.png",
				tags: [
					"tokens"
				]
			},
			"0x5fe2b58c013d7601147dcdd68c143a77499f5531": {
				symbol: "GRT",
				name: "Graph Token (PoS)",
				decimals: 18,
				address: "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
				logoURI: "https://tokens.1inch.io/0x5fe2b58c013d7601147dcdd68c143a77499f5531.png",
				tags: [
					"tokens"
				]
			},
			"0x187ae45f2d361cbce37c6a8622119c91148f261b": {
				symbol: "POLX",
				name: "Polylastic",
				decimals: 18,
				address: "0x187ae45f2d361cbce37c6a8622119c91148f261b",
				logoURI: "https://tokens.1inch.io/0x187ae45f2d361cbce37c6a8622119c91148f261b.png",
				tags: [
					"tokens"
				]
			},
			"0x1379e8886a944d2d9d440b3d88df536aea08d9f3": {
				symbol: "MYST",
				name: "Mysterium (PoS)",
				decimals: 18,
				address: "0x1379e8886a944d2d9d440b3d88df536aea08d9f3",
				logoURI: "https://tokens.1inch.io/0x1379e8886a944d2d9d440b3d88df536aea08d9f3.png",
				tags: [
					"tokens"
				]
			},
			"0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6": {
				symbol: "GEO$",
				name: "GEOPOLY",
				decimals: 18,
				address: "0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6",
				logoURI: "https://tokens.1inch.io/0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6.png",
				tags: [
					"tokens"
				]
			},
			"0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591": {
				symbol: "PRXY",
				name: "Proxy",
				decimals: 18,
				address: "0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591",
				logoURI: "https://tokens.1inch.io/0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591.png",
				tags: [
					"tokens"
				]
			},
			"0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb": {
				symbol: "NEX",
				name: "Nash Exchange Token (PoS)",
				decimals: 8,
				address: "0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb",
				logoURI: "https://tokens.1inch.io/0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb.png",
				tags: [
					"tokens"
				]
			},
			"0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128": {
				symbol: "PAR",
				name: "PAR Stablecoin",
				decimals: 18,
				address: "0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128",
				logoURI: "https://tokens.1inch.io/0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128.png",
				tags: [
					"tokens"
				]
			},
			"0xadac33f543267c4d59a8c299cf804c303bc3e4ac": {
				symbol: "MIMO",
				name: "MIMO Parallel Governance Token (PoS)",
				decimals: 18,
				address: "0xadac33f543267c4d59a8c299cf804c303bc3e4ac",
				logoURI: "https://tokens.1inch.io/0xadac33f543267c4d59a8c299cf804c303bc3e4ac.png",
				tags: [
					"tokens"
				]
			},
			"0xc250e9987a032acac293d838726c511e6e1c029d": {
				symbol: "CLAM",
				name: "Otter Clam",
				decimals: 9,
				address: "0xc250e9987a032acac293d838726c511e6e1c029d",
				logoURI: "https://tokens.1inch.io/0xc250e9987a032acac293d838726c511e6e1c029d.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x88c949b4eb85a90071f2c0bef861bddee1a7479d": {
				symbol: "mSHEESHA",
				name: "SHEESHA POLYGON",
				decimals: 18,
				address: "0x88c949b4eb85a90071f2c0bef861bddee1a7479d",
				logoURI: "https://tokens.1inch.io/0x88c949b4eb85a90071f2c0bef861bddee1a7479d.png",
				tags: [
					"tokens"
				]
			},
			"0x51b5619f5180e333d18b6310c8d540aea43a0371": {
				symbol: "VHC",
				name: "Vault Hill City (PoS)",
				decimals: 18,
				address: "0x51b5619f5180e333d18b6310c8d540aea43a0371",
				logoURI: "https://tokens.1inch.io/0x51b5619f5180e333d18b6310c8d540aea43a0371.png",
				tags: [
					"tokens"
				]
			},
			"0x39ab6574c289c3ae4d88500eec792ab5b947a5eb": {
				symbol: "DYST",
				name: "Dystopia token",
				decimals: 18,
				address: "0x39ab6574c289c3ae4d88500eec792ab5b947a5eb",
				logoURI: "https://tokens.1inch.io/0x39ab6574c289c3ae4d88500eec792ab5b947a5eb.png",
				tags: [
					"tokens"
				]
			},
			"0x82362ec182db3cf7829014bc61e9be8a2e82868a": {
				symbol: "MESH",
				name: "Meshswap Protocol",
				decimals: 18,
				address: "0x82362ec182db3cf7829014bc61e9be8a2e82868a",
				logoURI: "https://tokens.1inch.io/0x82362ec182db3cf7829014bc61e9be8a2e82868a.png",
				tags: [
					"tokens"
				]
			}
		}
	},
	{
		name: "Fantom Opera",
		coin: "FTM",
		chainId: 250,
		oracle: "0xE8E598A1041b6fDB13999D275a202847D9b654ca",
		wrappedToken: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
		multicall: "0x0118EF741097D0d3cc88e46233Da1e407d9ac139",
		rpc: [
			"https://rpc.ftm.tools",
			"https://fantom-mainnet.gateway.pokt.network/v1/lb/62759259ea1b320039c9e7ac",
			"https://rpc.ankr.com/fantom",
			"https://rpc.fantom.network",
			"https://rpc2.fantom.network",
			"https://rpc3.fantom.network",
			"https://rpcapi.fantom.network",
			"https://fantom-mainnet.public.blastapi.io"
		],
		tokens: {
			"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
				symbol: "FTM",
				name: "Fantom Token",
				decimals: 18,
				address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
				logoURI: "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png",
				tags: [
					"native"
				]
			},
			"0x6a07a792ab2965c72a5b8088d3a069a7ac3a993b": {
				symbol: "AAVE",
				name: "Aave",
				decimals: 18,
				address: "0x6a07a792ab2965c72a5b8088d3a069a7ac3a993b",
				logoURI: "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x841fad6eae12c286d1fd18d1d525dffa75c7effe": {
				symbol: "BOO",
				name: "SpookyToken",
				decimals: 18,
				address: "0x841fad6eae12c286d1fd18d1d525dffa75c7effe",
				logoURI: "https://tokens.1inch.io/0xbd83010eb60f12112908774998f65761cf9f6f9a.png",
				tags: [
					"tokens"
				]
			},
			"0x1e4f97b9f9f913c46f1632781732927b9019c68b": {
				symbol: "CRV",
				name: "Curve DAO",
				decimals: 18,
				address: "0x1e4f97b9f9f913c46f1632781732927b9019c68b",
				logoURI: "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e": {
				symbol: "DAI",
				name: "Dai Stablecoin",
				decimals: 18,
				address: "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
				logoURI: "https://tokens.1inch.io/0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x049d68029688eabf473097a2fc38ef61633a3c7a": {
				symbol: "fUSDT",
				name: "Frapped USDT",
				decimals: 6,
				address: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
				logoURI: "https://tokens.1inch.io/0x049d68029688eabf473097a2fc38ef61633a3c7a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc1be9a4d5d45beeacae296a7bd5fadbfc14602c4": {
				symbol: "GTON",
				name: "Graviton",
				decimals: 18,
				address: "0xc1be9a4d5d45beeacae296a7bd5fadbfc14602c4",
				logoURI: "https://tokens.1inch.io/0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d_1.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf16e81dce15b08f326220742020379b855b87df9": {
				symbol: "ICE",
				name: "IceToken",
				decimals: 18,
				address: "0xf16e81dce15b08f326220742020379b855b87df9",
				logoURI: "https://tokens.1inch.io/0xe0ce60af0850bf54072635e66e79df17082a1109.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8": {
				symbol: "LINK",
				name: "ChainLink",
				decimals: 18,
				address: "0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8",
				logoURI: "https://tokens.1inch.io/0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x56ee926bd8c72b2d5fa1af4d9e4cbb515a1e3adc": {
				symbol: "SNX",
				name: "Synthetix Network",
				decimals: 18,
				address: "0x56ee926bd8c72b2d5fa1af4d9e4cbb515a1e3adc",
				logoURI: "https://tokens.1inch.io/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xae75a438b2e0cb8bb01ec1e1e376de11d44477cc": {
				symbol: "SUSHI",
				name: "Sushi",
				decimals: 18,
				address: "0xae75a438b2e0cb8bb01ec1e1e376de11d44477cc",
				logoURI: "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x04068da6c83afcfa0e13ba15a6696662335d5b75": {
				symbol: "USDC",
				name: "USD Coin",
				decimals: 6,
				address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
				logoURI: "https://tokens.1inch.io/0xddafbb505ad214d7b80b1f830fccc89b60fb7a83.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x321162cd933e2be498cd2267a90534a804051b11": {
				symbol: "BTC",
				name: "Bitcoin",
				decimals: 8,
				address: "0x321162cd933e2be498cd2267a90534a804051b11",
				logoURI: "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x74b23882a30290451a17c44f4f05243b6b58c76d": {
				symbol: "ETH",
				name: "Ethereum",
				decimals: 18,
				address: "0x74b23882a30290451a17c44f4f05243b6b58c76d",
				logoURI: "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83": {
				symbol: "WFTM",
				name: "Wrapped Fantom",
				decimals: 18,
				address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
				logoURI: "https://tokens.1inch.io/0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83.png",
				tags: [
					"tokens"
				]
			},
			"0x29b0da86e484e1c0029b56e817912d778ac0ec69": {
				symbol: "YFI",
				name: "yearn.finance",
				decimals: 18,
				address: "0x29b0da86e484e1c0029b56e817912d778ac0ec69",
				logoURI: "https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454": {
				symbol: "BNB",
				name: "BNB",
				decimals: 18,
				address: "0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454",
				logoURI: "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png",
				tags: [
					"tokens"
				]
			},
			"0xddcb3ffd12750b45d32e084887fdf1aabab34239": {
				symbol: "ANY",
				name: "Anyswap",
				decimals: 18,
				address: "0xddcb3ffd12750b45d32e084887fdf1aabab34239",
				logoURI: "https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png",
				tags: [
					"tokens"
				]
			},
			"0xd6070ae98b8069de6b494332d1a1a81b6179d960": {
				symbol: "BIFI",
				name: "Beefy.Finance",
				decimals: 18,
				address: "0xd6070ae98b8069de6b494332d1a1a81b6179d960",
				logoURI: "https://tokens.1inch.io/0xfbdd194376de19a88118e84e279b977f165d01b8.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x6c021ae822bea943b2e66552bde1d2696a53fbb7": {
				symbol: "TOMB",
				name: "TOMB",
				decimals: 18,
				address: "0x6c021ae822bea943b2e66552bde1d2696a53fbb7",
				logoURI: "https://tokens.1inch.io/0x6c021ae822bea943b2e66552bde1d2696a53fbb7.png",
				tags: [
					"tokens"
				]
			},
			"0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37": {
				symbol: "TSHARE",
				name: "TSHARE",
				decimals: 18,
				address: "0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37",
				logoURI: "https://tokens.1inch.io/0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37.png",
				tags: [
					"tokens"
				]
			},
			"0x34d33dc8ac6f1650d94a7e9a972b47044217600b": {
				symbol: "SMART",
				name: "Smart Token",
				decimals: 18,
				address: "0x34d33dc8ac6f1650d94a7e9a972b47044217600b",
				logoURI: "https://tokens.1inch.io/0x34d33dc8ac6f1650d94a7e9a972b47044217600b.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xdc301622e621166bd8e82f2ca0a26c13ad0be355": {
				symbol: "FRAX",
				name: "Frax",
				decimals: 18,
				address: "0xdc301622e621166bd8e82f2ca0a26c13ad0be355",
				logoURI: "https://tokens.1inch.io/0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x82f0b8b456c1a451378467398982d4834b6829c1": {
				symbol: "MIM",
				name: "Magic Internet Money",
				decimals: 18,
				address: "0x82f0b8b456c1a451378467398982d4834b6829c1",
				logoURI: "https://tokens.1inch.io/0x130966628846bfd36ff31a822705796e8cb8c18d.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x3a3841f5fa9f2c283ea567d5aeea3af022dd2262": {
				symbol: "SHADE",
				name: "ShadeToken",
				decimals: 18,
				address: "0x3a3841f5fa9f2c283ea567d5aeea3af022dd2262",
				logoURI: "https://tokens.1inch.io/0x3a3841f5fa9f2c283ea567d5aeea3af022dd2262.png",
				tags: [
					"tokens"
				]
			},
			"0x627524d78b4fc840c887ffec90563c7a42b671fd": {
				symbol: "KEK",
				name: "Cryptokek.com",
				decimals: 18,
				address: "0x627524d78b4fc840c887ffec90563c7a42b671fd",
				logoURI: "https://tokens.1inch.io/0x627524d78b4fc840c887ffec90563c7a42b671fd.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xd3b71117e6c1558c1553305b44988cd944e97300": {
				symbol: "YEL",
				name: "YEL Token",
				decimals: 18,
				address: "0xd3b71117e6c1558c1553305b44988cd944e97300",
				logoURI: "https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png",
				tags: [
					"tokens"
				]
			},
			"0xe0654c8e6fd4d733349ac7e09f6f23da256bf475": {
				symbol: "SCREAM",
				name: "Scream",
				decimals: 18,
				address: "0xe0654c8e6fd4d733349ac7e09f6f23da256bf475",
				logoURI: "https://tokens.1inch.io/0xe0654c8e6fd4d733349ac7e09f6f23da256bf475.png",
				tags: [
					"tokens"
				]
			},
			"0xc5e2b037d30a390e62180970b3aa4e91868764cd": {
				symbol: "TAROT",
				name: "Tarot",
				decimals: 18,
				address: "0xc5e2b037d30a390e62180970b3aa4e91868764cd",
				logoURI: "https://tokens.1inch.io/0xc5e2b037d30a390e62180970b3aa4e91868764cd.png",
				tags: [
					"tokens"
				]
			},
			"0x9bd0611610a0f5133e4dd1bfdd71c5479ee77f37": {
				symbol: "FTMO",
				name: "Fantom Oasis Token",
				decimals: 18,
				address: "0x9bd0611610a0f5133e4dd1bfdd71c5479ee77f37",
				logoURI: "https://tokens.1inch.io/0x9bd0611610a0f5133e4dd1bfdd71c5479ee77f37.png",
				tags: [
					"tokens"
				]
			},
			"0x6626c47c00f1d87902fc13eecfac3ed06d5e8d8a": {
				symbol: "WOO",
				name: "Wootrade Network",
				decimals: 18,
				address: "0x6626c47c00f1d87902fc13eecfac3ed06d5e8d8a",
				logoURI: "https://tokens.1inch.io/0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc60d7067dfbc6f2caf30523a064f416a5af52963": {
				symbol: "TREEB",
				name: "Treeb",
				decimals: 18,
				address: "0xc60d7067dfbc6f2caf30523a064f416a5af52963",
				logoURI: "https://tokens.1inch.io/0xc60d7067dfbc6f2caf30523a064f416a5af52963.png",
				tags: [
					"tokens"
				]
			},
			"0x49894fcc07233957c35462cfc3418ef0cc26129f": {
				symbol: "FANG",
				name: "FANG Token",
				decimals: 18,
				address: "0x49894fcc07233957c35462cfc3418ef0cc26129f",
				logoURI: "https://tokens.1inch.io/0x49894fcc07233957c35462cfc3418ef0cc26129f.png",
				tags: [
					"tokens"
				]
			},
			"0xbbc4a8d076f4b1888fec42581b6fc58d242cf2d5": {
				symbol: "FONT",
				name: "Font",
				decimals: 18,
				address: "0xbbc4a8d076f4b1888fec42581b6fc58d242cf2d5",
				logoURI: "https://tokens.1inch.io/0x4c25bdf026ea05f32713f00f73ca55857fbf6342.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9": {
				symbol: "LQDR",
				name: "Liquid Driver",
				decimals: 18,
				address: "0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9",
				logoURI: "https://tokens.1inch.io/0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9.png",
				tags: [
					"tokens"
				]
			},
			"0xd8321aa83fb0a4ecd6348d4577431310a6e0814d": {
				symbol: "GEIST",
				name: "Geist.Finance Protocol Token",
				decimals: 18,
				address: "0xd8321aa83fb0a4ecd6348d4577431310a6e0814d",
				logoURI: "https://tokens.1inch.io/0xd8321aa83fb0a4ecd6348d4577431310a6e0814d.png",
				tags: [
					"tokens"
				]
			},
			"0x468003b688943977e6130f4f68f23aad939a1040": {
				symbol: "SPELL",
				name: "Spell Token",
				decimals: 18,
				address: "0x468003b688943977e6130f4f68f23aad939a1040",
				logoURI: "https://tokens.1inch.io/0xce1bffbd5374dac86a2893119683f4911a2f7814.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0def844ed26409c5c46dda124ec28fb064d90d27": {
				symbol: "CoUSD",
				name: "CoffinDollar",
				decimals: 18,
				address: "0x0def844ed26409c5c46dda124ec28fb064d90d27",
				logoURI: "https://tokens.1inch.io/0x0def844ed26409c5c46dda124ec28fb064d90d27.png",
				tags: [
					"tokens"
				]
			},
			"0x593ab53baffaf1e821845cf7080428366f030a9c": {
				symbol: "COFFIN",
				name: "CoffinToken",
				decimals: 18,
				address: "0x593ab53baffaf1e821845cf7080428366f030a9c",
				logoURI: "https://tokens.1inch.io/0x593ab53baffaf1e821845cf7080428366f030a9c.png",
				tags: [
					"tokens"
				]
			},
			"0x6a545f9c64d8f7b957d8d2e6410b52095a9e6c29": {
				symbol: "CFi",
				name: "CyberFi Token",
				decimals: 18,
				address: "0x6a545f9c64d8f7b957d8d2e6410b52095a9e6c29",
				logoURI: "https://tokens.1inch.io/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x90e892fed501ae00596448aecf998c88816e5c0f": {
				symbol: "DMD",
				name: "DarkMatter",
				decimals: 18,
				address: "0x90e892fed501ae00596448aecf998c88816e5c0f",
				logoURI: "https://tokens.1inch.io/0x90e892fed501ae00596448aecf998c88816e5c0f.png",
				tags: [
					"tokens"
				]
			},
			"0x3dc57b391262e3aae37a08d91241f9ba9d58b570": {
				symbol: "YOSHI",
				name: "Yoshi.exchange",
				decimals: 18,
				address: "0x3dc57b391262e3aae37a08d91241f9ba9d58b570",
				logoURI: "https://tokens.1inch.io/0x3dc57b391262e3aae37a08d91241f9ba9d58b570.png",
				tags: [
					"tokens"
				]
			},
			"0x1d43697d67cb5d0436cc38d583ca473a1bfebc7a": {
				symbol: "RIP",
				name: "Fantom Doge",
				decimals: 9,
				address: "0x1d43697d67cb5d0436cc38d583ca473a1bfebc7a",
				logoURI: "https://tokens.1inch.io/0x1d43697d67cb5d0436cc38d583ca473a1bfebc7a.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x3b57f3feaaf1e8254ec680275ee6e7727c7413c7": {
				symbol: "EXOD",
				name: "Exodia",
				decimals: 9,
				address: "0x3b57f3feaaf1e8254ec680275ee6e7727c7413c7",
				logoURI: "https://tokens.1inch.io/0x3b57f3feaaf1e8254ec680275ee6e7727c7413c7.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc758295cd1a564cdb020a78a681a838cf8e0627d": {
				symbol: "FS",
				name: "FantomStarter",
				decimals: 18,
				address: "0xc758295cd1a564cdb020a78a681a838cf8e0627d",
				logoURI: "https://tokens.1inch.io/0xc758295cd1a564cdb020a78a681a838cf8e0627d.png",
				tags: [
					"tokens"
				]
			},
			"0xd3c325848d7c6e29b574cb0789998b2ff901f17e": {
				symbol: "1ART",
				name: "ArtWallet",
				decimals: 18,
				address: "0xd3c325848d7c6e29b574cb0789998b2ff901f17e",
				logoURI: "https://tokens.1inch.io/0xd3c325848d7c6e29b574cb0789998b2ff901f17e.png",
				tags: [
					"tokens"
				]
			},
			"0xeff6fcfbc2383857dd66ddf57efffc00d58b7d9d": {
				symbol: "JulD",
				name: "JulSwap",
				decimals: 18,
				address: "0xeff6fcfbc2383857dd66ddf57efffc00d58b7d9d",
				logoURI: "https://tokens.1inch.io/0x5a41f637c3f7553dba6ddc2d3ca92641096577ea.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xfb98b335551a418cd0737375a2ea0ded62ea213b": {
				symbol: "miMATIC",
				name: "miMATIC",
				decimals: 18,
				address: "0xfb98b335551a418cd0737375a2ea0ded62ea213b",
				logoURI: "https://tokens.1inch.io/0xa3fa99a148fa48d14ed51d610c367c61876997f1.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x5c4fdfc5233f935f20d2adba572f770c2e377ab0": {
				symbol: "HEC",
				name: "Hector",
				decimals: 9,
				address: "0x5c4fdfc5233f935f20d2adba572f770c2e377ab0",
				logoURI: "https://tokens.1inch.io/0x5c4fdfc5233f935f20d2adba572f770c2e377ab0.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x5602df4a94eb6c680190accfa2a475621e0ddbdc": {
				symbol: "SPA",
				name: "Spartacus",
				decimals: 9,
				address: "0x5602df4a94eb6c680190accfa2a475621e0ddbdc",
				logoURI: "https://tokens.1inch.io/0x5602df4a94eb6c680190accfa2a475621e0ddbdc.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x9f47f313acfd4bdc52f4373b493eae7d5ac5b765": {
				symbol: "JOE",
				name: "JoeToken",
				decimals: 18,
				address: "0x9f47f313acfd4bdc52f4373b493eae7d5ac5b765",
				logoURI: "https://tokens.1inch.io/0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xfa1fbb8ef55a4855e5688c0ee13ac3f202486286": {
				symbol: "FHM",
				name: "Fantohm",
				decimals: 9,
				address: "0xfa1fbb8ef55a4855e5688c0ee13ac3f202486286",
				logoURI: "https://tokens.1inch.io/0xfa1fbb8ef55a4855e5688c0ee13ac3f202486286.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xe2fb177009ff39f52c0134e8007fa0e4baacbd07": {
				symbol: "SOUL",
				name: "SoulPower",
				decimals: 18,
				address: "0xe2fb177009ff39f52c0134e8007fa0e4baacbd07",
				logoURI: "https://tokens.1inch.io/0x67d012f731c23f0313cea1186d0121779c77fcfe.png",
				tags: [
					"tokens"
				]
			},
			"0x9879abdea01a879644185341f7af7d8343556b7a": {
				symbol: "TUSD",
				name: "TrueUSD",
				decimals: 18,
				address: "0x9879abdea01a879644185341f7af7d8343556b7a",
				logoURI: "https://tokens.1inch.io/0x1c20e891bab6b1727d14da358fae2984ed9b59eb.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x248cb87dda803028dfead98101c9465a2fbda0d4": {
				symbol: "CHARM",
				name: "Charm Token",
				decimals: 18,
				address: "0x248cb87dda803028dfead98101c9465a2fbda0d4",
				logoURI: "https://tokens.1inch.io/0x248cb87dda803028dfead98101c9465a2fbda0d4.png",
				tags: [
					"tokens"
				]
			},
			"0x94ccf60f700146bea8ef7832820800e2dfa92eda": {
				symbol: "wsHEC",
				name: "Wrapped sHEC",
				decimals: 18,
				address: "0x94ccf60f700146bea8ef7832820800e2dfa92eda",
				logoURI: "https://tokens.1inch.io/0x94ccf60f700146bea8ef7832820800e2dfa92eda.png",
				tags: [
					"tokens"
				]
			},
			"0x69d17c151ef62421ec338a0c92ca1c1202a427ec": {
				symbol: "SNT",
				name: "Supernova Token",
				decimals: 18,
				address: "0x69d17c151ef62421ec338a0c92ca1c1202a427ec",
				logoURI: "https://tokens.1inch.io/0x744d70fdbe2ba4cf95131626614a1763df805b9e.png",
				tags: [
					"tokens"
				]
			},
			"0x152888854378201e173490956085c711f1ded565": {
				symbol: "MST",
				name: "Monster",
				decimals: 18,
				address: "0x152888854378201e173490956085c711f1ded565",
				logoURI: "https://tokens.1inch.io/0x152888854378201e173490956085c711f1ded565.png",
				tags: [
					"tokens"
				]
			},
			"0xc3118248e7a3b2c103d87392fca5eb6ed8daa754": {
				symbol: "DUCAT",
				name: "Ducat",
				decimals: 18,
				address: "0xc3118248e7a3b2c103d87392fca5eb6ed8daa754",
				logoURI: "https://tokens.1inch.io/0xc3118248e7a3b2c103d87392fca5eb6ed8daa754.png",
				tags: [
					"tokens"
				]
			},
			"0x9d8f97a3c2f9f397b6d46cbe2d39cc1d8cf19010": {
				symbol: "OOE",
				name: "OpenOcean",
				decimals: 18,
				address: "0x9d8f97a3c2f9f397b6d46cbe2d39cc1d8cf19010",
				logoURI: "https://tokens.1inch.io/0x9d8f97a3c2f9f397b6d46cbe2d39cc1d8cf19010.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x230576a0455d7ae33c6defe64182c0bb68bafaf3": {
				symbol: "BRO",
				name: "DexBrowser",
				decimals: 18,
				address: "0x230576a0455d7ae33c6defe64182c0bb68bafaf3",
				logoURI: "https://tokens.1inch.io/0x230576a0455d7ae33c6defe64182c0bb68bafaf3.png",
				tags: [
					"tokens"
				]
			},
			"0x85dec8c4b2680793661bca91a8f129607571863d": {
				symbol: "BRUSH",
				name: "PaintSwap Token",
				decimals: 18,
				address: "0x85dec8c4b2680793661bca91a8f129607571863d",
				logoURI: "https://tokens.1inch.io/0x85dec8c4b2680793661bca91a8f129607571863d.png",
				tags: [
					"tokens"
				]
			},
			"0x511d35c52a3c244e7b8bd92c0c297755fbd89212": {
				symbol: "AVAX",
				name: "Avalanche",
				decimals: 18,
				address: "0x511d35c52a3c244e7b8bd92c0c297755fbd89212",
				logoURI: "https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x9fb9a33956351cf4fa040f65a13b835a3c8764e3": {
				symbol: "MULTI",
				name: "Multichain",
				decimals: 18,
				address: "0x9fb9a33956351cf4fa040f65a13b835a3c8764e3",
				logoURI: "https://tokens.1inch.io/0x9fb9a33956351cf4fa040f65a13b835a3c8764e3.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x40df1ae6074c35047bff66675488aa2f9f6384f3": {
				symbol: "MATIC",
				name: "MATIC",
				decimals: 18,
				address: "0x40df1ae6074c35047bff66675488aa2f9f6384f3",
				logoURI: "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa231d452e4bca86672fd6109de94688d1e17aae5": {
				symbol: "SCC",
				name: "ScaryChainCapital V2",
				decimals: 9,
				address: "0xa231d452e4bca86672fd6109de94688d1e17aae5",
				logoURI: "https://tokens.1inch.io/0xa231d452e4bca86672fd6109de94688d1e17aae5.png",
				tags: [
					"tokens"
				]
			},
			"0x10010078a54396f62c96df8532dc2b4847d47ed3": {
				symbol: "HND",
				name: "Hundred Finance",
				decimals: 18,
				address: "0x10010078a54396f62c96df8532dc2b4847d47ed3",
				logoURI: "https://tokens.1inch.io/0x10010078a54396f62c96df8532dc2b4847d47ed3.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x77128dfdd0ac859b33f44050c6fa272f34872b5e": {
				symbol: "CREDIT",
				name: "Creditum",
				decimals: 18,
				address: "0x77128dfdd0ac859b33f44050c6fa272f34872b5e",
				logoURI: "https://tokens.1inch.io/0x77128dfdd0ac859b33f44050c6fa272f34872b5e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xe3a486c1903ea794eed5d5fa0c9473c7d7708f40": {
				symbol: "cUSD",
				name: "Creditum USD",
				decimals: 18,
				address: "0xe3a486c1903ea794eed5d5fa0c9473c7d7708f40",
				logoURI: "https://tokens.1inch.io/0xe3a486c1903ea794eed5d5fa0c9473c7d7708f40.png",
				tags: [
					"tokens"
				]
			},
			"0x33333ee26a7d02e41c33828b42fb1e0889143477": {
				symbol: "LIQR",
				name: "LIQR",
				decimals: 18,
				address: "0x33333ee26a7d02e41c33828b42fb1e0889143477",
				logoURI: "https://tokens.1inch.io/0x33333ee26a7d02e41c33828b42fb1e0889143477.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x59d07a115fe3ffe5db3d52029d43cc0ef5e9ba08": {
				symbol: "SUPA",
				name: "SUPA Foundation",
				decimals: 18,
				address: "0x59d07a115fe3ffe5db3d52029d43cc0ef5e9ba08",
				logoURI: "https://tokens.1inch.io/0x59d07a115fe3ffe5db3d52029d43cc0ef5e9ba08.png",
				tags: [
					"tokens"
				]
			},
			"0xe1e6b01ae86ad82b1f1b4eb413b219ac32e17bf6": {
				symbol: "XRUNE",
				name: "Thorstarter Token",
				decimals: 18,
				address: "0xe1e6b01ae86ad82b1f1b4eb413b219ac32e17bf6",
				logoURI: "https://tokens.1inch.io/0xe1e6b01ae86ad82b1f1b4eb413b219ac32e17bf6.png",
				tags: [
					"tokens"
				]
			},
			"0xe64b9fd040d1f9d4715c645e0d567ef69958d3d9": {
				symbol: "MOD",
				name: "Modefi",
				decimals: 18,
				address: "0xe64b9fd040d1f9d4715c645e0d567ef69958d3d9",
				logoURI: "https://tokens.1inch.io/0xd4fbc57b6233f268e7fba3b66e62719d74deecbc.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x89d5e71e275b4be094df9551627bcf4e3b24ce22": {
				symbol: "STA",
				name: "Statera",
				decimals: 18,
				address: "0x89d5e71e275b4be094df9551627bcf4e3b24ce22",
				logoURI: "https://tokens.1inch.io/0xa7de087329bfcda5639247f96140f9dabe3deed1.png",
				eip2612: true,
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae": {
				symbol: "2OMB",
				name: "2omb Token",
				decimals: 18,
				address: "0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae",
				logoURI: "https://tokens.1inch.io/0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae.png",
				tags: [
					"tokens"
				]
			},
			"0x92df3eabf7c1c2a6b3d5793f6d53778ea78c48b2": {
				symbol: "ATLAS",
				name: "Atlas Cloud",
				decimals: 18,
				address: "0x92df3eabf7c1c2a6b3d5793f6d53778ea78c48b2",
				logoURI: "https://tokens.1inch.io/0x92df3eabf7c1c2a6b3d5793f6d53778ea78c48b2.png",
				tags: [
					"tokens"
				]
			},
			"0xc54a1684fd1bef1f077a336e6be4bd9a3096a6ca": {
				symbol: "2SHARES",
				name: "2SHARE Token",
				decimals: 18,
				address: "0xc54a1684fd1bef1f077a336e6be4bd9a3096a6ca",
				logoURI: "https://tokens.1inch.io/0xc54a1684fd1bef1f077a336e6be4bd9a3096a6ca.png",
				tags: [
					"tokens"
				]
			},
			"0x131c7afb4e5f5c94a27611f7210dfec2215e85ae": {
				symbol: "POWER",
				name: "Power",
				decimals: 18,
				address: "0x131c7afb4e5f5c94a27611f7210dfec2215e85ae",
				logoURI: "https://tokens.1inch.io/0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509.png",
				tags: [
					"tokens"
				]
			},
			"0x4ae3fa715e21f328c2b61c037b9cc1761b6af0bd": {
				symbol: "POS",
				name: "Poseidon",
				decimals: 18,
				address: "0x4ae3fa715e21f328c2b61c037b9cc1761b6af0bd",
				logoURI: "https://tokens.1inch.io/0x4ae3fa715e21f328c2b61c037b9cc1761b6af0bd.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xf24bcf4d1e507740041c9cfd2dddb29585adce1e": {
				symbol: "BEETS",
				name: "BeethovenxToken",
				decimals: 18,
				address: "0xf24bcf4d1e507740041c9cfd2dddb29585adce1e",
				logoURI: "https://tokens.1inch.io/0xf24bcf4d1e507740041c9cfd2dddb29585adce1e.png",
				tags: [
					"tokens"
				]
			},
			"0xc165d941481e68696f43ee6e99bfb2b23e0e3114": {
				symbol: "OXD",
				name: "0xDAO",
				decimals: 18,
				address: "0xc165d941481e68696f43ee6e99bfb2b23e0e3114",
				logoURI: "https://tokens.1inch.io/0xc165d941481e68696f43ee6e99bfb2b23e0e3114.png",
				tags: [
					"tokens"
				]
			},
			"0x00a35fd824c717879bf370e70ac6868b95870dfb": {
				symbol: "IB",
				name: "IronBank",
				decimals: 18,
				address: "0x00a35fd824c717879bf370e70ac6868b95870dfb",
				logoURI: "https://tokens.1inch.io/0x00a35fd824c717879bf370e70ac6868b95870dfb.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x59c6606ed2af925f270733e378d6af7829b5b3cf": {
				symbol: "WBOND",
				name: "War Bond Token",
				decimals: 18,
				address: "0x59c6606ed2af925f270733e378d6af7829b5b3cf",
				logoURI: "https://tokens.1inch.io/0x59c6606ed2af925f270733e378d6af7829b5b3cf.png",
				tags: [
					"tokens"
				]
			},
			"0x65def5029a0e7591e46b38742bfedd1fb7b24436": {
				symbol: "KAE",
				name: "Kanpeki",
				decimals: 18,
				address: "0x65def5029a0e7591e46b38742bfedd1fb7b24436",
				logoURI: "https://tokens.1inch.io/0x65def5029a0e7591e46b38742bfedd1fb7b24436.png",
				tags: [
					"tokens"
				]
			},
			"0x14d6111dbfd64ceb9676a494bf86aa9f7dd54acc": {
				symbol: "5TABLE",
				name: "5table Token",
				decimals: 18,
				address: "0x14d6111dbfd64ceb9676a494bf86aa9f7dd54acc",
				logoURI: "https://tokens.1inch.io/0x14d6111dbfd64ceb9676a494bf86aa9f7dd54acc.png",
				tags: [
					"tokens"
				]
			},
			"0x582423c10c9e83387a96d00a69ba3d11ee47b7b5": {
				symbol: "RING",
				name: "OneRing",
				decimals: 18,
				address: "0x582423c10c9e83387a96d00a69ba3d11ee47b7b5",
				logoURI: "https://tokens.1inch.io/0x9469d013805bffb7d3debe5e7839237e535ec483.png",
				tags: [
					"tokens"
				]
			},
			"0x14def7584a6c52f470ca4f4b9671056b22f4ffde": {
				symbol: "3OMB",
				name: "3OMB Token",
				decimals: 18,
				address: "0x14def7584a6c52f470ca4f4b9671056b22f4ffde",
				logoURI: "https://tokens.1inch.io/0x14def7584a6c52f470ca4f4b9671056b22f4ffde.png",
				tags: [
					"tokens"
				]
			},
			"0x6437adac543583c4b31bf0323a0870430f5cc2e7": {
				symbol: "3SHARES",
				name: "3SHARE Token",
				decimals: 18,
				address: "0x6437adac543583c4b31bf0323a0870430f5cc2e7",
				logoURI: "https://tokens.1inch.io/0x6437adac543583c4b31bf0323a0870430f5cc2e7.png",
				tags: [
					"tokens"
				]
			},
			"0xc2a45fe7d40bcac8369371b08419ddafd3131b4a": {
				symbol: "LCD",
				name: "Lucidao",
				decimals: 18,
				address: "0xc2a45fe7d40bcac8369371b08419ddafd3131b4a",
				logoURI: "https://tokens.1inch.io/0xc2a45fe7d40bcac8369371b08419ddafd3131b4a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8a41f13a4fae75ca88b1ee726ee9d52b148b0498": {
				symbol: "PAE",
				name: "Ripae",
				decimals: 18,
				address: "0x8a41f13a4fae75ca88b1ee726ee9d52b148b0498",
				logoURI: "https://tokens.1inch.io/0x8a41f13a4fae75ca88b1ee726ee9d52b148b0498.png",
				tags: [
					"tokens"
				]
			},
			"0x112df7e3b4b7ab424f07319d4e92f41e6608c48b": {
				symbol: "pFTM",
				name: "pFTM",
				decimals: 18,
				address: "0x112df7e3b4b7ab424f07319d4e92f41e6608c48b",
				logoURI: "https://tokens.1inch.io/0x112df7e3b4b7ab424f07319d4e92f41e6608c48b.png",
				tags: [
					"tokens"
				]
			},
			"0xfb4d42bed5618fb1a377ddb64eb56b92a6d117f2": {
				symbol: "NOKU",
				name: "NOKU v2",
				decimals: 18,
				address: "0xfb4d42bed5618fb1a377ddb64eb56b92a6d117f2",
				logoURI: "https://tokens.1inch.io/0xfb4d42bed5618fb1a377ddb64eb56b92a6d117f2.png",
				tags: [
					"tokens"
				]
			},
			"0x1c174f6ab0753162befbb916c69def2cc1bfdec1": {
				symbol: "TEMP",
				name: "Tempus",
				decimals: 18,
				address: "0x1c174f6ab0753162befbb916c69def2cc1bfdec1",
				logoURI: "https://tokens.1inch.io/0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x74e23df9110aa9ea0b6ff2faee01e740ca1c642e": {
				symbol: "TOR",
				name: "TOR",
				decimals: 18,
				address: "0x74e23df9110aa9ea0b6ff2faee01e740ca1c642e",
				logoURI: "https://tokens.1inch.io/0x74e23df9110aa9ea0b6ff2faee01e740ca1c642e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xad996a45fd2373ed0b10efa4a8ecb9de445a4302": {
				symbol: "ALPACA",
				name: "AlpacaToken",
				decimals: 18,
				address: "0xad996a45fd2373ed0b10efa4a8ecb9de445a4302",
				logoURI: "https://tokens.1inch.io/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8d7d3409881b51466b483b11ea1b8a03cded89ae": {
				symbol: "BASED",
				name: "BASED",
				decimals: 18,
				address: "0x8d7d3409881b51466b483b11ea1b8a03cded89ae",
				logoURI: "https://tokens.1inch.io/0x8d7d3409881b51466b483b11ea1b8a03cded89ae.png",
				tags: [
					"tokens"
				]
			},
			"0x49c290ff692149a4e16611c694fded42c954ab7a": {
				symbol: "BSHARE",
				name: "BSHARE",
				decimals: 18,
				address: "0x49c290ff692149a4e16611c694fded42c954ab7a",
				logoURI: "https://tokens.1inch.io/0x531780face85306877d7e1f05d713d1b50a37f7a.png",
				tags: [
					"tokens"
				]
			},
			"0xe83dfaaafd3310474d917583ae9633b4f68fb036": {
				symbol: "RAINI",
				name: "Raini",
				decimals: 18,
				address: "0xe83dfaaafd3310474d917583ae9633b4f68fb036",
				logoURI: "https://tokens.1inch.io/0xe83dfaaafd3310474d917583ae9633b4f68fb036.png",
				tags: [
					"tokens"
				]
			},
			"0x940f41f0ec9ba1a34cf001cc03347ac092f5f6b5": {
				symbol: "gfUSDT",
				name: "Geist fUSDT",
				decimals: 6,
				address: "0x940f41f0ec9ba1a34cf001cc03347ac092f5f6b5",
				logoURI: "https://tokens.1inch.io/0x940f41f0ec9ba1a34cf001cc03347ac092f5f6b5.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x5cc61a78f164885776aa610fb0fe1257df78e59b": {
				symbol: "SPIRIT",
				name: "SpiritSwap Token",
				decimals: 18,
				address: "0x5cc61a78f164885776aa610fb0fe1257df78e59b",
				logoURI: "https://tokens.1inch.io/0x5cc61a78f164885776aa610fb0fe1257df78e59b.png",
				tags: [
					"tokens"
				]
			},
			"0xa23c4e69e5eaf4500f2f9301717f12b578b948fb": {
				symbol: "PROTO",
				name: "Protofi Token",
				decimals: 18,
				address: "0xa23c4e69e5eaf4500f2f9301717f12b578b948fb",
				logoURI: "https://tokens.1inch.io/0xa23c4e69e5eaf4500f2f9301717f12b578b948fb.png",
				tags: [
					"tokens"
				]
			},
			"0xeeeeeb57642040be42185f49c52f7e9b38f8eeee": {
				symbol: "ELK",
				name: "Elk",
				decimals: 18,
				address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x91fa20244fb509e8289ca630e5db3e9166233fdc": {
				symbol: "gOHM",
				name: "Governance OHM",
				decimals: 18,
				address: "0x91fa20244fb509e8289ca630e5db3e9166233fdc",
				logoURI: "https://tokens.1inch.io/0x91fa20244fb509e8289ca630e5db3e9166233fdc.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x1d1764f04de29da6b90ffbef372d1a45596c4855": {
				symbol: "MIMO",
				name: "MIMO Parallel Governance Token",
				decimals: 18,
				address: "0x1d1764f04de29da6b90ffbef372d1a45596c4855",
				logoURI: "https://tokens.1inch.io/0x1d1764f04de29da6b90ffbef372d1a45596c4855.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x13082681e8ce9bd0af505912d306403592490fc7": {
				symbol: "PAR",
				name: "PAR Stablecoin",
				decimals: 18,
				address: "0x13082681e8ce9bd0af505912d306403592490fc7",
				logoURI: "https://tokens.1inch.io/0x13082681e8ce9bd0af505912d306403592490fc7.png",
				tags: [
					"tokens"
				]
			}
		}
	},
	{
		name: "Arbitrum One",
		coin: "ETH",
		chainId: 42161,
		oracle: "0x735247fb0a604c0adC6cab38ACE16D0DbA31295F",
		wrappedToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
		multicall: "0x7A7443F8c577d537f1d8cD4a629d40a3148Dd7ee",
		rpc: [
			"https://arbitrum-mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
			"https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
			"https://arb1.arbitrum.io/rpc",
			"https://rpc.ankr.com/arbitrum"
		],
		tokens: {
			"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
				symbol: "ETH",
				name: "Ethereum",
				decimals: 18,
				address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
				tags: [
					"native"
				]
			},
			"0xbfa641051ba0a0ad1b0acf549a89536a0d76472e": {
				symbol: "BADGER",
				name: "Badger",
				decimals: 18,
				address: "0xbfa641051ba0a0ad1b0acf549a89536a0d76472e",
				logoURI: "https://tokens.1inch.io/0x3472a5a71965499acd81997a54bba8d852c6e53d.png",
				tags: [
					"tokens"
				]
			},
			"0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8": {
				symbol: "BAL",
				name: "Balancer",
				decimals: 18,
				address: "0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8",
				logoURI: "https://tokens.1inch.io/0xba100000625a3754423978a60c9317c58a424e3d.png",
				tags: [
					"tokens"
				]
			},
			"0x3a8b787f78d775aecfeea15706d4221b40f345ab": {
				symbol: "CELR",
				name: "CelerToken",
				decimals: 18,
				logoURI: "https://zapper.fi/images/CELR-icon.png",
				address: "0x3a8b787f78d775aecfeea15706d4221b40f345ab",
				tags: [
					"tokens"
				]
			},
			"0x354a6da3fcde098f8389cad84b0182725c6c91de": {
				symbol: "COMP",
				name: "Compound",
				decimals: 18,
				address: "0x354a6da3fcde098f8389cad84b0182725c6c91de",
				logoURI: "https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
				tags: [
					"tokens"
				]
			},
			"0x11cdb42b0eb46d95f990bedd4695a6e3fa034978": {
				symbol: "CRV",
				name: "Curve DAO Token",
				decimals: 18,
				address: "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978",
				logoURI: "https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
				tags: [
					"tokens"
				]
			},
			"0x8038f3c971414fd1fc220ba727f2d4a0fc98cb65": {
				symbol: "DHT",
				name: "dHedge DAO Token",
				decimals: 18,
				address: "0x8038f3c971414fd1fc220ba727f2d4a0fc98cb65",
				logoURI: "https://tokens.1inch.io/0xca1207647ff814039530d7d35df0e1dd2e91fa84.png",
				tags: [
					"tokens"
				]
			},
			"0xc3ae0333f0f34aa734d5493276223d95b8f9cb37": {
				symbol: "DXD",
				name: "DXdao",
				decimals: 18,
				address: "0xc3ae0333f0f34aa734d5493276223d95b8f9cb37",
				logoURI: "https://tokens.1inch.io/0xa1d65e8fb6e87b60feccbc582f7f97804b725521.png",
				tags: [
					"tokens"
				]
			},
			"0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a": {
				symbol: "GMX",
				name: "GMX",
				decimals: 18,
				address: "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
				logoURI: "https://tokens.1inch.io/0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a.png",
				tags: [
					"tokens"
				]
			},
			"0xa0b862f60edef4452f25b4160f177db44deb6cf1": {
				symbol: "GNO",
				name: "Gnosis Token",
				decimals: 18,
				address: "0xa0b862f60edef4452f25b4160f177db44deb6cf1",
				logoURI: "https://tokens.1inch.io/0x6810e776880c02933d47db1b9fc05908e5386b96.png",
				tags: [
					"tokens"
				]
			},
			"0x23a941036ae778ac51ab04cea08ed6e2fe103614": {
				symbol: "GRT",
				name: "Graph Token",
				decimals: 18,
				address: "0x23a941036ae778ac51ab04cea08ed6e2fe103614",
				logoURI: "https://tokens.1inch.io/0xc944e90c64b2c07662a292be6244bdf05cda44a7.png",
				tags: [
					"tokens"
				]
			},
			"0x3cd1833ce959e087d0ef0cb45ed06bffe60f23ba": {
				symbol: "LAND",
				name: "Land",
				decimals: 18,
				address: "0x3cd1833ce959e087d0ef0cb45ed06bffe60f23ba",
				logoURI: "https://tokens.1inch.io/0x9d986a3f147212327dd658f712d5264a73a1fdb0.png",
				tags: [
					"tokens"
				]
			},
			"0xf97f4df75117a78c1a5a0dbb814af92458539fb4": {
				symbol: "LINK",
				name: "ChainLink Token",
				decimals: 18,
				address: "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
				logoURI: "https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png",
				tags: [
					"tokens"
				]
			},
			"0x99f40b01ba9c469193b360f72740e416b17ac332": {
				symbol: "MATH",
				name: "MATH Token",
				decimals: 18,
				address: "0x99f40b01ba9c469193b360f72740e416b17ac332",
				logoURI: "https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png",
				tags: [
					"tokens"
				]
			},
			"0x4e352cf164e64adcbad318c3a1e222e9eba4ce42": {
				symbol: "MCB",
				name: "MCDEX Token",
				decimals: 18,
				address: "0x4e352cf164e64adcbad318c3a1e222e9eba4ce42",
				logoURI: "https://tokens.1inch.io/0x4e352cf164e64adcbad318c3a1e222e9eba4ce42.png",
				tags: [
					"tokens"
				]
			},
			"0x2e9a6df78e42a30712c10a9dc4b1c8656f8f2879": {
				symbol: "MKR",
				name: "Maker",
				decimals: 18,
				address: "0x2e9a6df78e42a30712c10a9dc4b1c8656f8f2879",
				logoURI: "https://tokens.1inch.io/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png",
				tags: [
					"tokens"
				]
			},
			"0x3642c0680329ae3e103e2b5ab29ddfed4d43cbe5": {
				symbol: "PL2",
				name: "Plenny",
				decimals: 18,
				address: "0x3642c0680329ae3e103e2b5ab29ddfed4d43cbe5",
				tags: [
					"tokens"
				]
			},
			"0x51fc0f6660482ea73330e414efd7808811a57fa2": {
				symbol: "PREMIA",
				name: "Premia",
				decimals: 18,
				address: "0x51fc0f6660482ea73330e414efd7808811a57fa2",
				logoURI: "https://tokens.1inch.io/0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70.png",
				tags: [
					"tokens"
				]
			},
			"0xd4d42f0b6def4ce0383636770ef773390d85c61a": {
				symbol: "SUSHI",
				name: "SushiToken",
				decimals: 18,
				address: "0xd4d42f0b6def4ce0383636770ef773390d85c61a",
				logoURI: "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png",
				tags: [
					"tokens"
				]
			},
			"0xde903e2712288a1da82942dddf2c20529565ac30": {
				symbol: "SWPR",
				name: "Swapr",
				decimals: 18,
				address: "0xde903e2712288a1da82942dddf2c20529565ac30",
				tags: [
					"tokens"
				]
			},
			"0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0": {
				symbol: "UNI",
				name: "Uniswap",
				decimals: 18,
				address: "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
				logoURI: "https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
				tags: [
					"tokens"
				]
			},
			"0xff970a61a04b1ca14834a43f5de4533ebddb5cc8": {
				symbol: "USDC",
				name: "USD Coin Arb1",
				decimals: 6,
				address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
				logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
				tags: [
					"tokens"
				]
			},
			"0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": {
				symbol: "USDT",
				name: "Tether USD",
				decimals: 6,
				address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
				logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
				tags: [
					"tokens"
				]
			},
			"0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f": {
				symbol: "WBTC",
				name: "Wrapped BTC",
				decimals: 8,
				address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
				logoURI: "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
				tags: [
					"tokens"
				]
			},
			"0x82af49447d8a07e3bd95bd0d56f35241523fbab1": {
				symbol: "WETH",
				name: "Wrapped Ether",
				decimals: 18,
				address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
				logoURI: "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
				tags: [
					"tokens"
				]
			},
			"0x0f61b24272af65eacf6adfe507028957698e032f": {
				symbol: "ZIPT",
				name: "Zippie",
				decimals: 18,
				address: "0x0f61b24272af65eacf6adfe507028957698e032f",
				logoURI: "https://tokens.1inch.io/0xedd7c94fd7b4971b916d15067bc454b9e1bad980.png",
				tags: [
					"tokens"
				]
			},
			"0xda10009cbd5d07dd0cecc66161fc93d7c9000da1": {
				symbol: "DAI",
				name: "Dai Stablecoin",
				decimals: 18,
				address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
				logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
				tags: [
					"tokens"
				]
			},
			"0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a": {
				symbol: "MIM",
				name: "Magic Internet Money",
				decimals: 18,
				eip2612: true,
				address: "0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
				logoURI: "https://tokens.1inch.io/0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a.png",
				tags: [
					"tokens"
				]
			},
			"0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af": {
				symbol: "SPELL",
				name: "Spell Token",
				decimals: 18,
				address: "0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af",
				logoURI: "https://tokens.1inch.io/0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af.png",
				tags: [
					"tokens"
				]
			},
			"0x739ca6d71365a08f584c8fc4e1029045fa8abc4b": {
				symbol: "wsOHM",
				name: "Wrapped sOHM",
				decimals: 18,
				address: "0x739ca6d71365a08f584c8fc4e1029045fa8abc4b",
				logoURI: "https://tokens.1inch.io/0x739ca6d71365a08f584c8fc4e1029045fa8abc4b.png",
				tags: [
					"tokens"
				]
			},
			"0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa": {
				symbol: "deUSDC",
				name: "deBridge USD Coin",
				decimals: 6,
				address: "0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa",
				logoURI: "https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png",
				tags: [
					"tokens"
				]
			},
			"0xcfe3fbc98d80f7eca0bc76cd1f406a19dd425896": {
				symbol: "NFTI",
				name: "Scalara NFT Index",
				decimals: 18,
				address: "0xcfe3fbc98d80f7eca0bc76cd1f406a19dd425896",
				logoURI: "https://tokens.1inch.io/0xcfe3fbc98d80f7eca0bc76cd1f406a19dd425896.png",
				tags: [
					"tokens"
				]
			},
			"0x123389c2f0e9194d9ba98c21e63c375b67614108": {
				symbol: "EMAX",
				name: "EthereumMax",
				decimals: 18,
				address: "0x123389c2f0e9194d9ba98c21e63c375b67614108",
				logoURI: "https://tokens.1inch.io/0x123389c2f0e9194d9ba98c21e63c375b67614108.png",
				eip2612: true,
				tags: [
					"tokens"
				],
				isFoT: true
			},
			"0xcab86f6fb6d1c2cbeeb97854a0c023446a075fe3": {
				symbol: "deETH",
				name: "deBridge Ether",
				decimals: 18,
				address: "0xcab86f6fb6d1c2cbeeb97854a0c023446a075fe3",
				logoURI: "https://tokens.1inch.io/0xcab86f6fb6d1c2cbeeb97854a0c023446a075fe3.png",
				tags: [
					"tokens"
				]
			},
			"0xeeeeeb57642040be42185f49c52f7e9b38f8eeee": {
				symbol: "ELK",
				name: "Elk",
				decimals: 18,
				address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			}
		}
	},
	{
		name: "Avalanche C-Chain",
		coin: "AVAX",
		chainId: 43114,
		oracle: "0xBd0c7AaF0bF082712EbE919a9dD94b2d978f79A9",
		wrappedToken: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
		multicall: "0x82979a6f8D628270B29F5687bEA2F73D5D0eC77d",
		rpc: [
			"https://api.avax.network/ext/bc/C/rpc",
			"https://rpc.ankr.com/avalanche",
			"https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc"
		],
		tokens: {
			"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
				symbol: "AVAX",
				name: "Avalanche",
				decimals: 18,
				address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
				logoURI: "https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png",
				tags: [
					"native"
				]
			},
			"0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab": {
				symbol: "WETH.e",
				name: "Wrapped Ether",
				decimals: 18,
				address: "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab",
				logoURI: "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
				tags: [
					"tokens"
				]
			},
			"0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7": {
				symbol: "WAVAX",
				name: "Wrapped AVAX",
				decimals: 18,
				address: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
				logoURI: "https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png",
				tags: [
					"tokens"
				]
			},
			"0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664": {
				symbol: "USDC.e",
				name: "USD Coin",
				decimals: 6,
				address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",
				logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
				tags: [
					"tokens"
				]
			},
			"0xc7198437980c041c805a1edcba50c1ce5db95118": {
				symbol: "USDT.e",
				name: "Tether USD",
				decimals: 6,
				address: "0xc7198437980c041c805a1edcba50c1ce5db95118",
				logoURI: "https://tokens.1inch.io/0xc7198437980c041c805a1edcba50c1ce5db95118.png",
				tags: [
					"tokens"
				]
			},
			"0x50b7545627a5162f82a992c33b87adc75187b218": {
				symbol: "WBTC.e",
				name: "Wrapped BTC",
				decimals: 8,
				address: "0x50b7545627a5162f82a992c33b87adc75187b218",
				logoURI: "https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
				tags: [
					"tokens"
				]
			},
			"0xd586e7f844cea2f87f50152665bcbc2c279d8d70": {
				symbol: "DAI.e",
				name: "Dai Stablecoin",
				decimals: 18,
				address: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
				logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
				tags: [
					"tokens"
				]
			},
			"0x53f7c5869a859f0aec3d334ee8b4cf01e3492f21": {
				symbol: "avWETH",
				name: "Aave Avalanche Market WETH",
				decimals: 18,
				address: "0x53f7c5869a859f0aec3d334ee8b4cf01e3492f21",
				logoURI: "https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x47afa96cdc9fab46904a55a6ad4bf6660b53c38a": {
				symbol: "avDAI",
				name: "Aave Avalanche Market DAI",
				decimals: 18,
				address: "0x47afa96cdc9fab46904a55a6ad4bf6660b53c38a",
				logoURI: "https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x532e6537fea298397212f09a61e03311686f548e": {
				symbol: "avUSDT",
				name: "Aave Avalanche Market USDT",
				decimals: 6,
				address: "0x532e6537fea298397212f09a61e03311686f548e",
				logoURI: "https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x46a51127c3ce23fb7ab1de06226147f446e4a857": {
				symbol: "avUSDC",
				name: "Aave Avalanche Market USDC",
				decimals: 6,
				address: "0x46a51127c3ce23fb7ab1de06226147f446e4a857",
				logoURI: "https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x63a72806098bd3d9520cc43356dd78afe5d386d9": {
				symbol: "AAVE.e",
				name: "Aave Token",
				decimals: 18,
				address: "0x63a72806098bd3d9520cc43356dd78afe5d386d9",
				logoURI: "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
				tags: [
					"tokens"
				]
			},
			"0xd45b7c061016102f9fa220502908f2c0f1add1d7": {
				symbol: "avAAVE",
				name: "Aave Avalanche Market AAVE",
				decimals: 18,
				address: "0xd45b7c061016102f9fa220502908f2c0f1add1d7",
				logoURI: "https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x686bef2417b6dc32c50a3cbfbcc3bb60e1e9a15d": {
				symbol: "avWBTC",
				name: "Aave Avalanche Market WBTC",
				decimals: 8,
				address: "0x686bef2417b6dc32c50a3cbfbcc3bb60e1e9a15d",
				logoURI: "https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xdfe521292ece2a4f44242efbcd66bc594ca9714b": {
				symbol: "avWAVAX",
				name: "Aave Avalanche Market WAVAX",
				decimals: 18,
				address: "0xdfe521292ece2a4f44242efbcd66bc594ca9714b",
				logoURI: "https://tokens.1inch.io/0xdfe521292ece2a4f44242efbcd66bc594ca9714b.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xdbf31df14b66535af65aac99c32e9ea844e14501": {
				symbol: "renBTC",
				name: "renBTC",
				decimals: 8,
				address: "0xdbf31df14b66535af65aac99c32e9ea844e14501",
				logoURI: "https://tokens.1inch.io/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d.png",
				tags: [
					"tokens"
				]
			},
			"0x60781c2586d68229fde47564546784ab3faca982": {
				symbol: "PNG",
				name: "Pangolin",
				decimals: 18,
				address: "0x60781c2586d68229fde47564546784ab3faca982",
				logoURI: "https://tokens.1inch.io/0x60781c2586d68229fde47564546784ab3faca982.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x78ea17559b3d2cf85a7f9c2c704eda119db5e6de": {
				symbol: "AVE",
				name: "Avaware",
				decimals: 18,
				address: "0x78ea17559b3d2cf85a7f9c2c704eda119db5e6de",
				logoURI: "https://tokens.1inch.io/0x78ea17559b3d2cf85a7f9c2c704eda119db5e6de.png",
				tags: [
					"tokens"
				]
			},
			"0x488f73cddda1de3664775ffd91623637383d6404": {
				symbol: "YTS",
				name: "YetiSwap",
				decimals: 18,
				address: "0x488f73cddda1de3664775ffd91623637383d6404",
				logoURI: "https://tokens.1inch.io/0x488f73cddda1de3664775ffd91623637383d6404.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xc38f41a296a4493ff429f1238e030924a1542e50": {
				symbol: "SNOB",
				name: "Snowball",
				decimals: 18,
				address: "0xc38f41a296a4493ff429f1238e030924a1542e50",
				logoURI: "https://tokens.1inch.io/0xc38f41a296a4493ff429f1238e030924a1542e50.png",
				tags: [
					"tokens"
				]
			},
			"0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985": {
				symbol: "SPORE",
				name: "Spore.Finance",
				decimals: 9,
				address: "0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985",
				logoURI: "https://tokens.1inch.io/0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xe896cdeaac9615145c0ca09c8cd5c25bced6384c": {
				symbol: "PEFI",
				name: "PenguinToken",
				decimals: 18,
				address: "0xe896cdeaac9615145c0ca09c8cd5c25bced6384c",
				logoURI: "https://tokens.1inch.io/0xe896cdeaac9615145c0ca09c8cd5c25bced6384c.png",
				tags: [
					"tokens"
				]
			},
			"0x4c9b4e1ac6f24cde3660d5e4ef1ebf77c710c084": {
				symbol: "LYD",
				name: "LydiaFinance Token",
				decimals: 18,
				address: "0x4c9b4e1ac6f24cde3660d5e4ef1ebf77c710c084",
				logoURI: "https://tokens.1inch.io/0x4c9b4e1ac6f24cde3660d5e4ef1ebf77c710c084.png",
				tags: [
					"tokens"
				]
			},
			"0x846d50248baf8b7ceaa9d9b53bfd12d7d7fbb25a": {
				symbol: "VSO",
				name: "VersoToken",
				decimals: 18,
				address: "0x846d50248baf8b7ceaa9d9b53bfd12d7d7fbb25a",
				logoURI: "https://tokens.1inch.io/0x846d50248baf8b7ceaa9d9b53bfd12d7d7fbb25a.png",
				tags: [
					"tokens"
				]
			},
			"0x1ecd47ff4d9598f89721a2866bfeb99505a413ed": {
				symbol: "AVME",
				name: "AVME",
				decimals: 18,
				address: "0x1ecd47ff4d9598f89721a2866bfeb99505a413ed",
				logoURI: "https://tokens.1inch.io/0x1ecd47ff4d9598f89721a2866bfeb99505a413ed.png",
				tags: [
					"tokens"
				]
			},
			"0x65378b697853568da9ff8eab60c13e1ee9f4a654": {
				symbol: "HUSKY",
				name: "Husky",
				decimals: 18,
				address: "0x65378b697853568da9ff8eab60c13e1ee9f4a654",
				logoURI: "https://tokens.1inch.io/0x65378b697853568da9ff8eab60c13e1ee9f4a654.png",
				tags: [
					"tokens"
				]
			},
			"0xd1c3f94de7e5b45fa4edbba472491a9f4b166fc4": {
				symbol: "XAVA",
				name: "Avalaunch",
				decimals: 18,
				address: "0xd1c3f94de7e5b45fa4edbba472491a9f4b166fc4",
				logoURI: "https://tokens.1inch.io/0xd1c3f94de7e5b45fa4edbba472491a9f4b166fc4.png",
				tags: [
					"tokens"
				]
			},
			"0xa5e59761ebd4436fa4d20e1a27cba29fb2471fc6": {
				symbol: "SHERPA",
				name: "Sherpa",
				decimals: 18,
				address: "0xa5e59761ebd4436fa4d20e1a27cba29fb2471fc6",
				logoURI: "https://tokens.1inch.io/0xa5e59761ebd4436fa4d20e1a27cba29fb2471fc6.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17": {
				symbol: "DYP",
				name: "DeFiYieldProtocol",
				decimals: 18,
				address: "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
				logoURI: "https://tokens.1inch.io/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17.png",
				tags: [
					"tokens"
				]
			},
			"0x264c1383ea520f73dd837f915ef3a732e204a493": {
				symbol: "BNB",
				name: "Binance",
				decimals: 18,
				address: "0x264c1383ea520f73dd837f915ef3a732e204a493",
				logoURI: "https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xb1466d4cf0dcfc0bcddcf3500f473cdacb88b56d": {
				symbol: "WET",
				name: "Weble Ecosystem Token",
				decimals: 18,
				address: "0xb1466d4cf0dcfc0bcddcf3500f473cdacb88b56d",
				logoURI: "https://tokens.1inch.io/0xb1466d4cf0dcfc0bcddcf3500f473cdacb88b56d.png",
				tags: [
					"tokens"
				]
			},
			"0x59414b3089ce2af0010e7523dea7e2b35d776ec7": {
				symbol: "YAK",
				name: "Yak Token",
				decimals: 18,
				address: "0x59414b3089ce2af0010e7523dea7e2b35d776ec7",
				logoURI: "https://tokens.1inch.io/0x59414b3089ce2af0010e7523dea7e2b35d776ec7.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8729438eb15e2c8b576fcc6aecda6a148776c0f5": {
				symbol: "QI",
				name: "BENQI",
				decimals: 18,
				address: "0x8729438eb15e2c8b576fcc6aecda6a148776c0f5",
				logoURI: "https://tokens.1inch.io/0x8729438eb15e2c8b576fcc6aecda6a148776c0f5.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd": {
				symbol: "JOE",
				name: "JoeToken",
				decimals: 18,
				address: "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd",
				logoURI: "https://tokens.1inch.io/0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd.png",
				tags: [
					"tokens"
				]
			},
			"0xe1c110e1b1b4a1ded0caf3e42bfbdbb7b5d7ce1c": {
				symbol: "ELK",
				name: "Elk",
				decimals: 18,
				address: "0xe1c110e1b1b4a1ded0caf3e42bfbdbb7b5d7ce1c",
				logoURI: "https://tokens.1inch.io/0xe1c110e1b1b4a1ded0caf3e42bfbdbb7b5d7ce1c.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x440abbf18c54b2782a4917b80a1746d3a2c2cce1": {
				symbol: "SHIBX",
				name: "SHIBAVAX",
				decimals: 18,
				address: "0x440abbf18c54b2782a4917b80a1746d3a2c2cce1",
				logoURI: "https://tokens.1inch.io/0x440abbf18c54b2782a4917b80a1746d3a2c2cce1.png",
				isFoT: true,
				tags: [
					"tokens"
				]
			},
			"0xc7b5d72c836e718cda8888eaf03707faef675079": {
				symbol: "SWAP.e",
				name: "TrustSwap Token",
				decimals: 18,
				address: "0xc7b5d72c836e718cda8888eaf03707faef675079",
				logoURI: "https://tokens.1inch.io/0xcc4304a31d09258b0029ea7fe63d032f52e44efe.png",
				tags: [
					"tokens"
				]
			},
			"0x01c2086facfd7aa38f69a6bd8c91bef3bb5adfca": {
				symbol: "YAY",
				name: "YAY Games",
				decimals: 18,
				address: "0x01c2086facfd7aa38f69a6bd8c91bef3bb5adfca",
				logoURI: "https://tokens.1inch.io/0x01c2086facfd7aa38f69a6bd8c91bef3bb5adfca.png",
				tags: [
					"tokens"
				]
			},
			"0xb54f16fb19478766a268f172c9480f8da1a7c9c3": {
				symbol: "TIME",
				name: "Time",
				decimals: 9,
				address: "0xb54f16fb19478766a268f172c9480f8da1a7c9c3",
				logoURI: "https://tokens.1inch.io/0x485d17a6f1b8780392d53d64751824253011a260.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x938fe3788222a74924e062120e7bfac829c719fb": {
				symbol: "APEIN",
				name: "Ape In",
				decimals: 18,
				address: "0x938fe3788222a74924e062120e7bfac829c719fb",
				logoURI: "https://tokens.1inch.io/0x938fe3788222a74924e062120e7bfac829c719fb.png",
				tags: [
					"tokens"
				]
			},
			"0xd039c9079ca7f2a87d632a9c0d7cea0137bacfb5": {
				symbol: "APE-X",
				name: "Ape-X",
				decimals: 9,
				address: "0xd039c9079ca7f2a87d632a9c0d7cea0137bacfb5",
				logoURI: "https://tokens.1inch.io/0xd039c9079ca7f2a87d632a9c0d7cea0137bacfb5.png",
				tags: [
					"tokens"
				]
			},
			"0xddaaad7366b455aff8e7c82940c43ceb5829b604": {
				symbol: "mYAK",
				name: "MiniYAK",
				decimals: 12,
				address: "0xddaaad7366b455aff8e7c82940c43ceb5829b604",
				logoURI: "https://tokens.1inch.io/0xddaaad7366b455aff8e7c82940c43ceb5829b604.png",
				tags: [
					"tokens"
				]
			},
			"0xce1bffbd5374dac86a2893119683f4911a2f7814": {
				symbol: "SPELL",
				name: "Spell Token",
				decimals: 18,
				address: "0xce1bffbd5374dac86a2893119683f4911a2f7814",
				logoURI: "https://tokens.1inch.io/0x090185f2135308bad17527004364ebcc2d37e5f6.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xb27c8941a7df8958a1778c0259f76d1f8b711c35": {
				symbol: "KLO",
				name: "Kalao Token",
				decimals: 18,
				address: "0xb27c8941a7df8958a1778c0259f76d1f8b711c35",
				logoURI: "https://tokens.1inch.io/0xb27c8941a7df8958a1778c0259f76d1f8b711c35.png",
				tags: [
					"tokens"
				]
			},
			"0x027dbca046ca156de9622cd1e2d907d375e53aa7": {
				symbol: "AMPL",
				name: "Ampleforth secured by Meter Passport",
				decimals: 9,
				address: "0x027dbca046ca156de9622cd1e2d907d375e53aa7",
				logoURI: "https://tokens.1inch.io/0xd46ba6d942050d489dbd938a2c909a5d5039a161.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x544c42fbb96b39b21df61cf322b5edc285ee7429": {
				symbol: "INSUR",
				name: "InsurAce",
				decimals: 18,
				address: "0x544c42fbb96b39b21df61cf322b5edc285ee7429",
				logoURI: "https://tokens.1inch.io/0x544c42fbb96b39b21df61cf322b5edc285ee7429.png",
				tags: [
					"tokens"
				]
			},
			"0x6c6f910a79639dcc94b4feef59ff507c2e843929": {
				symbol: "aAVAXb",
				name: "Ankr Reward-Earning Staked AVAX",
				decimals: 18,
				address: "0x6c6f910a79639dcc94b4feef59ff507c2e843929",
				logoURI: "https://tokens.1inch.io/0x6c6f910a79639dcc94b4feef59ff507c2e843929.png",
				tags: [
					"tokens"
				]
			},
			"0xb00f1ad977a949a3ccc389ca1d1282a2946963b0": {
				symbol: "BOOFI",
				name: "Boo Finance Token",
				decimals: 18,
				address: "0xb00f1ad977a949a3ccc389ca1d1282a2946963b0",
				logoURI: "https://tokens.1inch.io/0xb00f1ad977a949a3ccc389ca1d1282a2946963b0.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x214db107654ff987ad859f34125307783fc8e387": {
				symbol: "FXS",
				name: "Frax Share",
				decimals: 18,
				address: "0x214db107654ff987ad859f34125307783fc8e387",
				logoURI: "https://tokens.1inch.io/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xb2a85c5ecea99187a977ac34303b80acbddfa208": {
				symbol: "ROCO",
				name: "ROCO",
				decimals: 18,
				address: "0xb2a85c5ecea99187a977ac34303b80acbddfa208",
				logoURI: "https://tokens.1inch.io/0xb2a85c5ecea99187a977ac34303b80acbddfa208.png",
				tags: [
					"tokens"
				]
			},
			"0x937e077abaea52d3abf879c9b9d3f2ebd15baa21": {
				symbol: "OH",
				name: "Oh! Finance",
				decimals: 18,
				address: "0x937e077abaea52d3abf879c9b9d3f2ebd15baa21",
				logoURI: "https://tokens.1inch.io/0x937e077abaea52d3abf879c9b9d3f2ebd15baa21.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x7d1232b90d3f809a54eeaeebc639c62df8a8942f": {
				symbol: "SB",
				name: "Snowbank",
				decimals: 9,
				address: "0x7d1232b90d3f809a54eeaeebc639c62df8a8942f",
				logoURI: "https://tokens.1inch.io/0x7d1232b90d3f809a54eeaeebc639c62df8a8942f.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa32608e873f9ddef944b24798db69d80bbb4d1ed": {
				symbol: "CRA",
				name: "CRA",
				decimals: 18,
				address: "0xa32608e873f9ddef944b24798db69d80bbb4d1ed",
				logoURI: "https://tokens.1inch.io/0xa32608e873f9ddef944b24798db69d80bbb4d1ed.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x4f60a160d8c2dddaafe16fcc57566db84d674bd6": {
				symbol: "JEWEL",
				name: "Jewels",
				decimals: 18,
				address: "0x4f60a160d8c2dddaafe16fcc57566db84d674bd6",
				logoURI: "https://tokens.1inch.io/0x4f60a160d8c2dddaafe16fcc57566db84d674bd6.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8ae8be25c23833e0a01aa200403e826f611f9cd2": {
				symbol: "CRAFT",
				name: "CRAFT",
				decimals: 18,
				address: "0x8ae8be25c23833e0a01aa200403e826f611f9cd2",
				logoURI: "https://tokens.1inch.io/0x8ae8be25c23833e0a01aa200403e826f611f9cd2.png",
				tags: [
					"tokens"
				]
			},
			"0x321e7092a180bb43555132ec53aaa65a5bf84251": {
				symbol: "gOHM",
				name: "Governance OHM",
				decimals: 18,
				address: "0x321e7092a180bb43555132ec53aaa65a5bf84251",
				logoURI: "https://tokens.1inch.io/0x321e7092a180bb43555132ec53aaa65a5bf84251.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x637afeff75ca669ff92e4570b14d6399a658902f": {
				symbol: "COOK",
				name: "Poly-Peg COOK",
				decimals: 18,
				address: "0x637afeff75ca669ff92e4570b14d6399a658902f",
				logoURI: "https://tokens.1inch.io/0xff75ced57419bcaebe5f05254983b013b0646ef5.png",
				tags: [
					"tokens"
				]
			},
			"0xec3492a2508ddf4fdc0cd76f31f340b30d1793e6": {
				symbol: "CLY",
				name: "Colony Token",
				decimals: 18,
				address: "0xec3492a2508ddf4fdc0cd76f31f340b30d1793e6",
				logoURI: "https://tokens.1inch.io/0xec3492a2508ddf4fdc0cd76f31f340b30d1793e6.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xbd100d061e120b2c67a24453cf6368e63f1be056": {
				symbol: "iDYP",
				name: "iDeFiYieldProtocol",
				decimals: 18,
				address: "0xbd100d061e120b2c67a24453cf6368e63f1be056",
				logoURI: "https://tokens.1inch.io/0xbd100d061e120b2c67a24453cf6368e63f1be056.png",
				tags: [
					"tokens"
				]
			},
			"0x22d4002028f537599be9f666d1c4fa138522f9c8": {
				symbol: "PTP",
				name: "Platypus",
				decimals: 18,
				address: "0x22d4002028f537599be9f666d1c4fa138522f9c8",
				logoURI: "https://tokens.1inch.io/0x22d4002028f537599be9f666d1c4fa138522f9c8.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x7086e045b78e1e72f741f25231c08d238812cf8a": {
				symbol: "RACEX",
				name: "RaceX",
				decimals: 18,
				address: "0x7086e045b78e1e72f741f25231c08d238812cf8a",
				logoURI: "https://tokens.1inch.io/0x7086e045b78e1e72f741f25231c08d238812cf8a.png",
				tags: [
					"tokens"
				]
			},
			"0xff579d6259dedcc80488c9b89d2820bcb5609160": {
				symbol: "LVT",
				name: "Louverture",
				decimals: 18,
				address: "0xff579d6259dedcc80488c9b89d2820bcb5609160",
				logoURI: "https://tokens.1inch.io/0xff579d6259dedcc80488c9b89d2820bcb5609160.png",
				tags: [
					"tokens"
				]
			},
			"0x6d923f688c7ff287dc3a5943caeefc994f97b290": {
				symbol: "SMRTr",
				name: "SmarterCoin",
				decimals: 18,
				address: "0x6d923f688c7ff287dc3a5943caeefc994f97b290",
				logoURI: "https://tokens.1inch.io/0x6d923f688c7ff287dc3a5943caeefc994f97b290.png",
				tags: [
					"tokens"
				]
			},
			"0x0f34919404a290e71fc6a510cb4a6acb8d764b24": {
				symbol: "BLZZ",
				name: "Blizz.Finance Protocol Token",
				decimals: 18,
				address: "0x0f34919404a290e71fc6a510cb4a6acb8d764b24",
				logoURI: "https://tokens.1inch.io/0x0f34919404a290e71fc6a510cb4a6acb8d764b24.png",
				tags: [
					"tokens"
				]
			},
			"0x1f1e7c893855525b303f99bdf5c3c05be09ca251": {
				symbol: "SYN",
				name: "Synapse",
				decimals: 18,
				address: "0x1f1e7c893855525b303f99bdf5c3c05be09ca251",
				logoURI: "https://tokens.1inch.io/0x1f1e7c893855525b303f99bdf5c3c05be09ca251_1.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79": {
				symbol: "THOR",
				name: "THOR v2",
				decimals: 18,
				address: "0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79",
				logoURI: "https://tokens.1inch.io/0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79.png",
				tags: [
					"tokens"
				]
			},
			"0x47eb6f7525c1aa999fbc9ee92715f5231eb1241d": {
				symbol: "MELT",
				name: "Defrost Finance Token",
				decimals: 18,
				address: "0x47eb6f7525c1aa999fbc9ee92715f5231eb1241d",
				logoURI: "https://tokens.1inch.io/0x47eb6f7525c1aa999fbc9ee92715f5231eb1241d.png",
				tags: [
					"tokens"
				]
			},
			"0x2147efff675e4a4ee1c2f918d181cdbd7a8e208f": {
				symbol: "ALPHA.e",
				name: "AlphaToken",
				decimals: 18,
				address: "0x2147efff675e4a4ee1c2f918d181cdbd7a8e208f",
				logoURI: "https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975.png",
				tags: [
					"tokens"
				]
			},
			"0x4939b3313e73ae8546b90e53e998e82274afdbdb": {
				symbol: "CCC",
				name: "Cross Chain Capital V2",
				decimals: 9,
				address: "0x4939b3313e73ae8546b90e53e998e82274afdbdb",
				logoURI: "https://tokens.1inch.io/0x4939b3313e73ae8546b90e53e998e82274afdbdb.png",
				tags: [
					"tokens"
				]
			},
			"0xbd83010eb60f12112908774998f65761cf9f6f9a": {
				symbol: "BOO",
				name: "SpookyToken",
				decimals: 18,
				address: "0xbd83010eb60f12112908774998f65761cf9f6f9a",
				logoURI: "https://tokens.1inch.io/0xbd83010eb60f12112908774998f65761cf9f6f9a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xe0ce60af0850bf54072635e66e79df17082a1109": {
				symbol: "ICE",
				name: "IceToken",
				decimals: 18,
				address: "0xe0ce60af0850bf54072635e66e79df17082a1109",
				logoURI: "https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xf693248f96fe03422fea95ac0afbbbc4a8fdd172": {
				symbol: "TUS",
				name: "Treasure Under Sea",
				decimals: 18,
				address: "0xf693248f96fe03422fea95ac0afbbbc4a8fdd172",
				logoURI: "https://tokens.1inch.io/0xf693248f96fe03422fea95ac0afbbbc4a8fdd172.png",
				tags: [
					"tokens"
				]
			},
			"0xf891214fdcf9cdaa5fdc42369ee4f27f226adad6": {
				symbol: "IME",
				name: "Imperium Empires Token",
				decimals: 18,
				address: "0xf891214fdcf9cdaa5fdc42369ee4f27f226adad6",
				logoURI: "https://tokens.1inch.io/0xf891214fdcf9cdaa5fdc42369ee4f27f226adad6.png",
				tags: [
					"tokens"
				]
			},
			"0xfb98b335551a418cd0737375a2ea0ded62ea213b": {
				symbol: "PENDLE",
				name: "Pendle",
				decimals: 18,
				address: "0xfb98b335551a418cd0737375a2ea0ded62ea213b",
				logoURI: "https://tokens.1inch.io/0x808507121b80c02388fad14726482e061b8da827.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xb15f02f9da8cd1f99e9dd375f21dc96d25ddd82c": {
				symbol: "HERMES",
				name: "HERMES",
				decimals: 18,
				address: "0xb15f02f9da8cd1f99e9dd375f21dc96d25ddd82c",
				logoURI: "https://tokens.1inch.io/0xb15f02f9da8cd1f99e9dd375f21dc96d25ddd82c.png",
				tags: [
					"tokens"
				]
			},
			"0xfa4b6db72a650601e7bd50a0a9f537c9e98311b2": {
				symbol: "HSHARES",
				name: "HERMES Shares",
				decimals: 18,
				address: "0xfa4b6db72a650601e7bd50a0a9f537c9e98311b2",
				logoURI: "https://tokens.1inch.io/0xfa4b6db72a650601e7bd50a0a9f537c9e98311b2.png",
				tags: [
					"tokens"
				]
			},
			"0x1db749847c4abb991d8b6032102383e6bfd9b1c7": {
				symbol: "DON",
				name: "Dogeon Token",
				decimals: 18,
				address: "0x1db749847c4abb991d8b6032102383e6bfd9b1c7",
				logoURI: "https://snowtrace.io/token/images/dogeon_32.png",
				tags: [
					"tokens"
				]
			},
			"0x3eefb18003d033661f84e48360ebecd181a84709": {
				symbol: "ISA",
				name: "Islander",
				decimals: 18,
				address: "0x3eefb18003d033661f84e48360ebecd181a84709",
				logoURI: "https://snowtrace.io/token/images/theislander_32.png",
				tags: [
					"tokens"
				]
			},
			"0x7f041ce89a2079873693207653b24c15b5e6a293": {
				symbol: "LOOT",
				name: "LOOT",
				decimals: 18,
				address: "0x7f041ce89a2079873693207653b24c15b5e6a293",
				logoURI: "https://tokens.1inch.io/0x7b3d36eb606f873a75a6ab68f8c999848b04f935.png",
				tags: [
					"tokens"
				]
			},
			"0x921f99719eb6c01b4b8f0ba7973a7c24891e740a": {
				symbol: "MAGE",
				name: "MetaBrands",
				decimals: 18,
				address: "0x921f99719eb6c01b4b8f0ba7973a7c24891e740a",
				logoURI: "https://tokens.1inch.io/0x921f99719eb6c01b4b8f0ba7973a7c24891e740a.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x0fec6d8a84a85b79a1ffe0e28c1902e08b653efe": {
				symbol: "HOOP",
				name: "Hoopoe Ventures",
				decimals: 18,
				address: "0x0fec6d8a84a85b79a1ffe0e28c1902e08b653efe",
				logoURI: "https://tokens.1inch.io/0x0fec6d8a84a85b79a1ffe0e28c1902e08b653efe.png",
				tags: [
					"tokens"
				]
			},
			"0x7b2b702706d9b361dfe3f00bd138c0cfda7fb2cf": {
				symbol: "PLN",
				name: "Pollen",
				decimals: 18,
				address: "0x7b2b702706d9b361dfe3f00bd138c0cfda7fb2cf",
				logoURI: "https://snowtrace.io/token/images/pollendefi_32.png",
				tags: [
					"tokens"
				]
			},
			"0x7761e2338b35bceb6bda6ce477ef012bde7ae611": {
				symbol: "EGG",
				name: "chikn egg",
				decimals: 18,
				address: "0x7761e2338b35bceb6bda6ce477ef012bde7ae611",
				logoURI: "https://snowtrace.io/token/images/chikneeg_32.png",
				tags: [
					"tokens"
				]
			},
			"0x100cc3a819dd3e8573fd2e46d1e66ee866068f30": {
				symbol: "DCAU",
				name: "Dragon Crypto Aurum",
				decimals: 18,
				address: "0x100cc3a819dd3e8573fd2e46d1e66ee866068f30",
				logoURI: "https://tokens.1inch.io/0x100cc3a819dd3e8573fd2e46d1e66ee866068f30.png",
				tags: [
					"tokens"
				]
			},
			"0x19860ccb0a68fd4213ab9d8266f7bbf05a8dde98": {
				symbol: "BUSD.e",
				name: "Binance USD",
				decimals: 18,
				address: "0x19860ccb0a68fd4213ab9d8266f7bbf05a8dde98",
				logoURI: "https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png",
				tags: [
					"tokens"
				]
			},
			"0x5947bb275c521040051d82396192181b413227a3": {
				symbol: "LINK.e",
				name: "Chainlink Token",
				decimals: 18,
				address: "0x5947bb275c521040051d82396192181b413227a3",
				logoURI: "https://tokens.1inch.io/0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9.png",
				tags: [
					"tokens"
				]
			},
			"0x37b608519f91f70f2eeb0e5ed9af4061722e4f76": {
				symbol: "SUSHI.e",
				name: "SushiToken",
				decimals: 18,
				address: "0x37b608519f91f70f2eeb0e5ed9af4061722e4f76",
				logoURI: "https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png",
				tags: [
					"tokens"
				]
			},
			"0xabc9547b534519ff73921b1fba6e672b5f58d083": {
				symbol: "WOO.e",
				name: "Wootrade Network",
				decimals: 18,
				address: "0xabc9547b534519ff73921b1fba6e672b5f58d083",
				logoURI: "https://snowtrace.io/token/images/wootradenetwork_32.png",
				tags: [
					"tokens"
				]
			},
			"0x564a341df6c126f90cf3ecb92120fd7190acb401": {
				symbol: "TRYB",
				name: "BiLira",
				decimals: 6,
				address: "0x564a341df6c126f90cf3ecb92120fd7190acb401",
				logoURI: "https://tokens.1inch.io/0x2c537e5624e4af88a7ae4060c022609376c8d0eb.png",
				tags: [
					"tokens"
				]
			},
			"0x4fbf0429599460d327bd5f55625e30e4fc066095": {
				symbol: "TSD",
				name: "TSD Stablecoin",
				decimals: 18,
				address: "0x4fbf0429599460d327bd5f55625e30e4fc066095",
				logoURI: "https://snowtrace.io/token/images/teddy-tsd_32.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x130966628846bfd36ff31a822705796e8cb8c18d": {
				symbol: "MIM",
				name: "Magic Internet Money",
				decimals: 18,
				address: "0x130966628846bfd36ff31a822705796e8cb8c18d",
				logoURI: "https://snowtrace.io/token/images/mimstablecoin_32.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x783c08b5f26e3daf8c4681f3bf49844e425b6393": {
				symbol: "AUSD",
				name: "Avaware USD",
				decimals: 18,
				address: "0x783c08b5f26e3daf8c4681f3bf49844e425b6393",
				logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/15807.png",
				tags: [
					"tokens"
				]
			},
			"0x346a59146b9b4a77100d369a3d18e8007a9f46a6": {
				symbol: "AVAI",
				name: "AVAI",
				decimals: 18,
				address: "0x346a59146b9b4a77100d369a3d18e8007a9f46a6",
				logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/12500.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64": {
				symbol: "FRAX",
				name: "Frax",
				decimals: 18,
				address: "0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64",
				logoURI: "https://tokens.1inch.io/0x853d955acef822db058eb8505911ed77f175b99e.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x026187bdbc6b751003517bcb30ac7817d5b766f8": {
				symbol: "H2O",
				name: "Defrost Finance H2O",
				decimals: 18,
				address: "0x026187bdbc6b751003517bcb30ac7817d5b766f8",
				logoURI: "https://snowtrace.io/token/images/defrostfinance_32.png",
				tags: [
					"tokens"
				]
			},
			"0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e": {
				symbol: "USDC",
				name: "USD Coin",
				decimals: 6,
				address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
				logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
				tags: [
					"tokens"
				]
			},
			"0xcf8419a615c57511807236751c0af38db4ba3351": {
				symbol: "AXIAL",
				name: "AxialToken",
				decimals: 18,
				address: "0xcf8419a615c57511807236751c0af38db4ba3351",
				logoURI: "https://tokens.1inch.io/0xcf8419a615c57511807236751c0af38db4ba3351.png",
				tags: [
					"tokens"
				]
			},
			"0x6fefd97f328342a8a840546a55fdcfee7542f9a8": {
				symbol: "agEUR",
				name: "agEUR",
				decimals: 18,
				address: "0x6fefd97f328342a8a840546a55fdcfee7542f9a8",
				logoURI: "https://tokens.1inch.io/0x6fefd97f328342a8a840546a55fdcfee7542f9a8.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x1c20e891bab6b1727d14da358fae2984ed9b59eb": {
				symbol: "TUSD",
				name: "TrueUSD",
				decimals: 18,
				address: "0x1c20e891bab6b1727d14da358fae2984ed9b59eb",
				logoURI: "https://tokens.1inch.io/0x1c20e891bab6b1727d14da358fae2984ed9b59eb.png",
				tags: [
					"tokens"
				]
			},
			"0xfcde4a87b8b6fa58326bb462882f1778158b02f1": {
				symbol: "WXT",
				name: "Wirex Token",
				decimals: 18,
				address: "0xfcde4a87b8b6fa58326bb462882f1778158b02f1",
				logoURI: "https://tokens.1inch.io/0xfcde4a87b8b6fa58326bb462882f1778158b02f1.png",
				tags: [
					"tokens"
				]
			},
			"0x62edc0692bd897d2295872a9ffcac5425011c661": {
				symbol: "GMX",
				name: "GMX",
				decimals: 18,
				address: "0x62edc0692bd897d2295872a9ffcac5425011c661",
				logoURI: "https://tokens.1inch.io/0x62edc0692bd897d2295872a9ffcac5425011c661.png",
				tags: [
					"tokens"
				]
			},
			"0x28690ec942671ac8d9bc442b667ec338ede6dfd3": {
				symbol: "deUSDC",
				name: "deBridge USD Coin",
				decimals: 6,
				address: "0x28690ec942671ac8d9bc442b667ec338ede6dfd3",
				logoURI: "https://tokens.1inch.io/0x28690ec942671ac8d9bc442b667ec338ede6dfd3.png",
				tags: [
					"tokens"
				]
			},
			"0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7": {
				symbol: "USDt",
				name: "TetherToken",
				decimals: 6,
				address: "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
				logoURI: "https://tokens.1inch.io/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x75739a693459f33b1fbcc02099eea3ebcf150cbe": {
				symbol: "TIC",
				name: "ElasticSwap Tic Token",
				decimals: 18,
				address: "0x75739a693459f33b1fbcc02099eea3ebcf150cbe",
				logoURI: "https://tokens.1inch.io/0x75739a693459f33b1fbcc02099eea3ebcf150cbe.png",
				tags: [
					"tokens"
				]
			},
			"0xeeeeeb57642040be42185f49c52f7e9b38f8eeee": {
				symbol: "ELK",
				name: "Elk",
				decimals: 18,
				address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			}
		}
	},
	{
		name: "Aurora Mainnet",
		coin: "ETH",
		chainId: 1313161554,
		oracle: "0xE4E0552452e5cC1306A2bF5B2Fd9b1eA19418795",
		wrappedToken: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
		multicall: "0x32b50c286DEFd2932a0247b8bb940b78c063F16c",
		rpc: [
			"https://mainnet.aurora.dev"
		],
		tokens: {
			"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
				symbol: "ETH",
				name: "Ethereum",
				decimals: 18,
				address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
				logoURI: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
				tags: [
					"native"
				]
			},
			"0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb": {
				address: "0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb",
				symbol: "WETH",
				name: "Wrapped ETH",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb.png",
				tags: [
					"tokens"
				]
			},
			"0xe3520349f477a5f6eb06107066048508498a291b": {
				address: "0xe3520349f477a5f6eb06107066048508498a291b",
				symbol: "DAI",
				name: "Dai Stablecoin",
				decimals: 18,
				logoURI: "https://tokens.1inch.io/0xe3520349f477a5f6eb06107066048508498a291b.png",
				tags: [
					"tokens"
				]
			},
			"0x026dda7f0f0a2e42163c9c80d2a5b6958e35fc49": {
				symbol: "CRF",
				name: "Crafting Finance",
				decimals: 18,
				address: "0x026dda7f0f0a2e42163c9c80d2a5b6958e35fc49",
				logoURI: "https://tokens.1inch.io/0x026dda7f0f0a2e42163c9c80d2a5b6958e35fc49.png",
				tags: [
					"tokens"
				]
			},
			"0xda2585430fef327ad8ee44af8f1f989a2a91a3d2": {
				symbol: "FRAX",
				name: "Frax",
				decimals: 18,
				address: "0xda2585430fef327ad8ee44af8f1f989a2a91a3d2",
				logoURI: "https://tokens.1inch.io/0xda2585430fef327ad8ee44af8f1f989a2a91a3d2.png",
				tags: [
					"tokens"
				]
			},
			"0x885f8cf6e45bdd3fdcdc644efdcd0ac93880c781": {
				symbol: "PAD",
				name: "NearPad Token",
				decimals: 18,
				address: "0x885f8cf6e45bdd3fdcdc644efdcd0ac93880c781",
				logoURI: "https://tokens.1inch.io/0x885f8cf6e45bdd3fdcdc644efdcd0ac93880c781.png",
				tags: [
					"tokens"
				]
			},
			"0x291c8fceaca3342b29cc36171deb98106f712c66": {
				symbol: "PICKLE",
				name: "PickleToken",
				decimals: 18,
				address: "0x291c8fceaca3342b29cc36171deb98106f712c66",
				logoURI: "https://tokens.1inch.io/0x291c8fceaca3342b29cc36171deb98106f712c66.png",
				tags: [
					"tokens"
				]
			},
			"0x4988a896b1227218e4a686fde5eabdcabd91571f": {
				symbol: "USDT",
				name: "Tether USD",
				decimals: 6,
				address: "0x4988a896b1227218e4a686fde5eabdcabd91571f",
				logoURI: "https://tokens.1inch.io/0x4988a896b1227218e4a686fde5eabdcabd91571f.png",
				tags: [
					"tokens"
				]
			},
			"0xb12bfca5a55806aaf64e99521918a4bf0fc40802": {
				symbol: "USDC",
				name: "USD Coin",
				decimals: 6,
				address: "0xb12bfca5a55806aaf64e99521918a4bf0fc40802",
				logoURI: "https://tokens.1inch.io/0xb12bfca5a55806aaf64e99521918a4bf0fc40802.png",
				tags: [
					"tokens"
				]
			},
			"0xf4eb217ba2454613b15dbdea6e5f22276410e89e": {
				symbol: "WBTC",
				name: "Wrapped BTC",
				decimals: 8,
				address: "0xf4eb217ba2454613b15dbdea6e5f22276410e89e",
				logoURI: "https://tokens.1inch.io/0xf4eb217ba2454613b15dbdea6e5f22276410e89e.png",
				tags: [
					"tokens"
				]
			},
			"0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d": {
				symbol: "NEAR",
				name: "NEAR",
				decimals: 24,
				address: "0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d",
				logoURI: "https://tokens.1inch.io/0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d.png",
				tags: [
					"tokens"
				]
			},
			"0x74974575d2f1668c63036d51ff48dbaa68e52408": {
				symbol: "MODA",
				name: "moda",
				decimals: 18,
				address: "0x74974575d2f1668c63036d51ff48dbaa68e52408",
				logoURI: "https://tokens.1inch.io/0x74974575d2f1668c63036d51ff48dbaa68e52408.png",
				tags: [
					"tokens"
				]
			},
			"0x8bec47865ade3b172a928df8f990bc7f2a3b9f79": {
				symbol: "AURORA",
				name: "Aurora",
				decimals: 18,
				address: "0x8bec47865ade3b172a928df8f990bc7f2a3b9f79",
				logoURI: "https://tokens.1inch.io/0x8bec47865ade3b172a928df8f990bc7f2a3b9f79.png",
				tags: [
					"tokens"
				]
			},
			"0x5ce9f0b6afb36135b5ddbf11705ceb65e634a9dc": {
				symbol: "atUST",
				name: "UST Terra",
				decimals: 18,
				address: "0x5ce9f0b6afb36135b5ddbf11705ceb65e634a9dc",
				logoURI: "https://tokens.1inch.io/0x5ce9f0b6afb36135b5ddbf11705ceb65e634a9dc.png",
				tags: [
					"tokens"
				]
			},
			"0xdcd6d4e2b3e1d1e1e6fa8c21c8a323dcbecff970": {
				symbol: "ROSE",
				name: "Rose Token",
				decimals: 18,
				address: "0xdcd6d4e2b3e1d1e1e6fa8c21c8a323dcbecff970",
				logoURI: "https://tokens.1inch.io/0xdcd6d4e2b3e1d1e1e6fa8c21c8a323dcbecff970.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0xa33c3b53694419824722c10d99ad7cb16ea62754": {
				symbol: "MECHA",
				name: "Mecha",
				decimals: 18,
				address: "0xa33c3b53694419824722c10d99ad7cb16ea62754",
				logoURI: "https://tokens.1inch.io/0xa33c3b53694419824722c10d99ad7cb16ea62754.png",
				tags: [
					"tokens"
				]
			},
			"0xc21ff01229e982d7c8b8691163b0a3cb8f357453": {
				symbol: "META",
				name: "Meta Token",
				decimals: 24,
				address: "0xc21ff01229e982d7c8b8691163b0a3cb8f357453",
				logoURI: "https://tokens.1inch.io/0xc21ff01229e982d7c8b8691163b0a3cb8f357453.png",
				tags: [
					"tokens"
				]
			},
			"0xf0f3b9eee32b1f490a4b8720cf6f005d4ae9ea86": {
				symbol: "POLAR",
				name: "POLAR",
				decimals: 18,
				address: "0xf0f3b9eee32b1f490a4b8720cf6f005d4ae9ea86",
				logoURI: "https://tokens.1inch.io/0xf0f3b9eee32b1f490a4b8720cf6f005d4ae9ea86.png",
				tags: [
					"tokens"
				]
			},
			"0x9d6fc90b25976e40adad5a3edd08af9ed7a21729": {
				symbol: "SPOLAR",
				name: "SPOLAR",
				decimals: 18,
				address: "0x9d6fc90b25976e40adad5a3edd08af9ed7a21729",
				logoURI: "https://tokens.1inch.io/0x9d6fc90b25976e40adad5a3edd08af9ed7a21729.png",
				tags: [
					"tokens"
				]
			},
			"0x5183e1b1091804bc2602586919e6880ac1cf2896": {
				symbol: "USN",
				name: "USN",
				decimals: 18,
				address: "0x5183e1b1091804bc2602586919e6880ac1cf2896",
				logoURI: "https://tokens.1inch.io/0x5183e1b1091804bc2602586919e6880ac1cf2896.png",
				tags: [
					"tokens"
				]
			},
			"0x25e801eb75859ba4052c4ac4233cec0264eadf8c": {
				symbol: "LUNAR",
				name: "LUNAR",
				decimals: 18,
				address: "0x25e801eb75859ba4052c4ac4233cec0264eadf8c",
				logoURI: "https://tokens.1inch.io/0x25e801eb75859ba4052c4ac4233cec0264eadf8c.png",
				tags: [
					"tokens"
				]
			},
			"0xc4bdd27c33ec7daa6fcfd8532ddb524bf4038096": {
				symbol: "atLUNA",
				name: "Luna Terra",
				decimals: 18,
				address: "0xc4bdd27c33ec7daa6fcfd8532ddb524bf4038096",
				logoURI: "https://tokens.1inch.io/0xc4bdd27c33ec7daa6fcfd8532ddb524bf4038096.png",
				tags: [
					"tokens"
				]
			},
			"0xd126b48c072f4668e944a8895bc74044d5f2e85b": {
				symbol: "MNFT",
				name: "MANUFACTORY",
				decimals: 18,
				address: "0xd126b48c072f4668e944a8895bc74044d5f2e85b",
				logoURI: "https://tokens.1inch.io/0xd126b48c072f4668e944a8895bc74044d5f2e85b.png",
				tags: [
					"tokens"
				]
			},
			"0xfa94348467f64d5a457f75f8bc40495d33c65abb": {
				symbol: "TRI",
				name: "Trisolaris",
				decimals: 18,
				address: "0xfa94348467f64d5a457f75f8bc40495d33c65abb",
				logoURI: "https://tokens.1inch.io/0xfa94348467f64d5a457f75f8bc40495d33c65abb.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x7faa64faf54750a2e3ee621166635feaf406ab22": {
				symbol: "WANNA",
				name: "WannaSwap",
				decimals: 18,
				address: "0x7faa64faf54750a2e3ee621166635feaf406ab22",
				logoURI: "https://tokens.1inch.io/0x7faa64faf54750a2e3ee621166635feaf406ab22.png",
				eip2612: true,
				tags: [
					"tokens"
				]
			},
			"0x293074789b247cab05357b08052468b5d7a23c5a": {
				symbol: "aUSDO",
				name: "aUSDO",
				decimals: 8,
				address: "0x293074789b247cab05357b08052468b5d7a23c5a",
				logoURI: "https://tokens.1inch.io/0x293074789b247cab05357b08052468b5d7a23c5a.png",
				tags: [
					"tokens"
				]
			}
		}
	}
];

bignumber_js.BigNumber.config({
  ROUNDING_MODE: bignumber_js.BigNumber.ROUND_DOWN,
  DECIMAL_PLACES: 1e3,
  EXPONENTIAL_AT: 1e3
});
function getDecimals(tokens, tokenAddr) {
  return tokens[`${tokenAddr.toLowerCase()}`].decimals;
}
function getTokenAddress(tokens, type, chainId, symbol) {
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
function getTokens(tokens, wrappedToken, srcToken, dstToken, chainId) {
  let SrcToken = ethers.ethers.utils.isAddress(srcToken) ? srcToken : getTokenAddress(tokens, "src", chainId, srcToken);
  let DstToken = ethers.ethers.utils.isAddress(dstToken) ? dstToken : getTokenAddress(tokens, "dst", chainId, dstToken);
  if (SrcToken.includes("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")) {
    SrcToken = wrappedToken;
  }
  if (DstToken.includes("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")) {
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
async function getRate(srcToken, dstToken, chainId, provider) {
  const ChainID = chainId ? chainId : provider ? await provider.getNetwork().then((r) => r.chainId) : 1;
  const config = Config.find((cfg) => cfg.chainId === ChainID);
  if (config === void 0) {
    throw new Error(`ChainID ${ChainID} not supported`);
  }
  const [SrcToken, DstToken, SrcTokenDecimals, DstTokenDecimals] = getTokens(config.tokens, config.wrappedToken, srcToken, dstToken, ChainID);
  let Provider = provider;
  if (provider === void 0) {
    Provider = new ethers.ethers.providers.Web3Provider(new Web3AxiosProvider__default["default"](config.rpc.join(", ")));
  }
  const OffchainOracle = new ethers.ethers.Contract(config.oracle, OffchainABI, Provider);
  const result = await OffchainOracle.getRate(SrcToken, DstToken, false).then((rate) => {
    const numerator = new bignumber_js.BigNumber(10).pow(SrcTokenDecimals);
    const denumerator = new bignumber_js.BigNumber(10).pow(DstTokenDecimals);
    const price = new bignumber_js.BigNumber(ethers.BigNumber.from(rate).toString()).times(numerator).div(denumerator);
    return price.div(new bignumber_js.BigNumber(10).pow(18)).toString();
  });
  return result;
}
async function getMultiRates(srcToken, dstToken, chainId, provider) {
  const ChainID = chainId ? chainId : provider ? await provider.getNetwork().then((r) => r.chainId) : 1;
  const config = Config.find((cfg) => cfg.chainId === ChainID);
  if (config === void 0) {
    throw new Error(`ChainID ${ChainID} not supported`);
  }
  if (srcToken.length !== dstToken.length) {
    throw new Error("Invalid token length");
  }
  const tokens = [];
  for (let i = 0; i < srcToken.length; i++) {
    tokens.push(getTokens(config.tokens, config.wrappedToken, srcToken[i], dstToken[i], ChainID));
  }
  let Provider = provider;
  if (provider === void 0) {
    Provider = new ethers.ethers.providers.Web3Provider(new Web3AxiosProvider__default["default"](config.rpc.join(", ")));
  }
  const OffchainOracle = new ethers.ethers.Contract(config.oracle, OffchainABI, Provider);
  const Multicall = new ethers.ethers.Contract(config.multicall, MulticallABI, Provider);
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

bignumber_js.BigNumber.config({
  DECIMAL_PLACES: 1e3,
  EXPONENTIAL_AT: 1e3
});
const RATE = "200";
const BINANCE = "https://api.binance.com/api/v3/avgPrice?symbol=";
const plusRate = new bignumber_js.BigNumber("10000").plus(RATE).div("10000");
const minusRate = new bignumber_js.BigNumber("10000").minus(RATE).div("10000");
const toFetch = [
  ["ETH", "USDT", 1, "ETHUSDT"],
  ["WBTC", "USDT", 1, "BTCUSDT"],
  ["ETH", "WBTC", 1, "ETHBTC"],
  ["AVAX", "USDT.e", 43114, "AVAXUSDT"],
  ["BNB", "USDT", 56, "BNBUSDT"]
];
const toMultiFetch = [
  ["ETH", "USDT", "ETHUSDT"],
  ["WBTC", "USDT", "BTCUSDT"],
  ["ETH", "WBTC", "ETHBTC"]
];
const fetchRates = async (price1, price2, chainId, ticker) => {
  const rate = await getRate(price1, price2, chainId).then((r) => new bignumber_js.BigNumber(r));
  const binanceRate = await axios__namespace.get(`${BINANCE}${ticker}`).then((r) => new bignumber_js.BigNumber(r.price));
  return [
    rate,
    binanceRate,
    ticker
  ];
};
const multiFetchRates = async (multiFetch) => {
  const token1 = [];
  const token2 = [];
  multiFetch.forEach((args) => {
    token1.push(args[0]);
    token2.push(args[1]);
  });
  return await getMultiRates(token1, token2).then(async (r) => await Promise.all(r.map(async (rate) => {
    const ticker = multiFetch[r.indexOf(rate)][2];
    const binanceRate = await axios__namespace.get(`${BINANCE}${ticker}`).then((result) => new bignumber_js.BigNumber(result.price));
    return [
      new bignumber_js.BigNumber(rate),
      binanceRate,
      ticker
    ];
  })));
};
describe("1inch-spot-price", () => {
  it("getRate", async () => {
    const rates = await Promise.all(toFetch.map((f) => fetchRates(...f)));
    for (const rate of rates) {
      const oneInchRate = rate[0];
      const binanceRate = rate[1];
      const notLessThan = new bignumber_js.BigNumber(binanceRate).times(minusRate);
      const notBiggerThan = new bignumber_js.BigNumber(binanceRate).times(plusRate);
      console.log(`Binance ${rate[2]}: ${binanceRate.toString()}`);
      console.log(`OneInch ${rate[2]}: ${oneInchRate.toString()}`);
      assert.strict.ok(oneInchRate.gte(notLessThan) && oneInchRate.lte(notBiggerThan));
    }
  });
  it("getMultiRates", async () => {
    const rates = await multiFetchRates(toMultiFetch);
    for (const rate of rates) {
      const oneInchRate = rate[0];
      const binanceRate = rate[1];
      const notLessThan = new bignumber_js.BigNumber(binanceRate).times(minusRate);
      const notBiggerThan = new bignumber_js.BigNumber(binanceRate).times(plusRate);
      console.log(`Binance ${rate[2]}: ${binanceRate.toString()}`);
      console.log(`OneInch ${rate[2]}: ${oneInchRate.toString()}`);
      assert.strict.ok(oneInchRate.gte(notLessThan) && oneInchRate.lte(notBiggerThan));
    }
  });
});
