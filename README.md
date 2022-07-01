# 1inch-spot-price-sdk

[![Build Status](https://github.com/ayanamitech/1inch-spot-price-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/ayanamitech/1inch-spot-price-sdk/actions)
[![NPM Package Version](https://img.shields.io/npm/v/1inch-spot-price-sdk.svg)](https://npmjs.org/package/1inch-spot-price-sdk)
[![NPM Package Downloads](https://img.shields.io/npm/dm/1inch-spot-price-sdk.svg)](https://npmjs.org/package/1inch-spot-price-sdk)
[![Known Vulnerabilities](https://snyk.io/test/github/ayanamitech/1inch-spot-price-sdk/badge.svg?style=flat-square)](https://snyk.io/test/github/ayanamitech/1inch-spot-price-sdk)
[![GitHub Views](https://img.shields.io/badge/dynamic/json?color=green&label=Views&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/1inch-spot-price-sdk/views.json?raw=True&logo=github)](https://github.com/ayanamitech/1inch-spot-price-sdk)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=uniques&url=https://github.com/ayanamitech/node-github-repo-stats/blob/main/data/ayanamitech/1inch-spot-price-sdk/clone.json?raw=True&logo=github)](https://github.com/ayanamitech/1inch-spot-price-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Usage](#usage)
  - [Browser](#browser)
  - [Example](#example)

## About

> Typescript module to use Spot Price Aggregator for 1inch supported chains.

`1inch-spot-price-sdk` is a TypeScript / Javascript implementation of [1inch's Spot Price Aggregator](https://docs.1inch.io/docs/spot-price-aggregator/introduction) based on [ethers.js](https://docs.ethers.io/v5/) library to fetch aggregated on-chain token prices without hassle.

Using this library, you don't need any kind of blockchain knowledge to query dex prices, it would be easy as

```js
import OneInchSpotPrice from '1inch-spot-price-sdk';

// It will query ETH/USDT price from the aggregated liquidity of Ethereum Dexes
OneInchSpotPrice.getRate('ETH', 'USDT').then(rate => console.log(rate));
```

## Features

+ Embedded list of tokens supported by 1inch inside the library (No need to query 1inch api endpoint!)
+ Embedded list of chains with public rpc endpoint aggregated from chainid.network & https://chainlist.org/
+ Supports [web3-providers-axios](https://github.com/ayanamitech/web3-providers-axios) by default for querying the fastest returned result from public rpc endpoints. (You can also bring your ethers provider as an alternative).
+ Returns real-time on-chain dex price rate as string value so that it could be read without any help from an external math library.

## Installation

**Node.js**

```sh
npm install 1inch-spot-price-sdk
```

## Documentation

https://ayanamitech.github.io/1inch-spot-price-sdk

## Usage

### Browser

> WARN: We recommend hosting and controlling your own copy for security reasons

```html
<script src="https://cdn.jsdelivr.net/npm/1inch-spot-price-sdk@latest"></script>
```

```html
<script src="https://unpkg.com/1inch-spot-price-sdk@latest"></script>
```

Note that it would be helpful to setup the Subresource Integrity hash to ensure that the imported library has the desired codes.

For more info, see https://www.srihash.org/.

### Example

```js
// CommonJS
const OneInchSpotPrice = require('1inch-spot-price-sdk');

or

// ModuleJS / TypeScript
import OneInchSpotPrice from '1inch-spot-price-sdk';

// It will query ETH/USDT price from the aggregated liquidity of Ethereum Dexes
OneInchSpotPrice.getRate('ETH', 'USDT').then(rate => console.log(rate));
```

Please checkout [Type Definition](./types/src/index.d.ts) for required parameters and expected output.
