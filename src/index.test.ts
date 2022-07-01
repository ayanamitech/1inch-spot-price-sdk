import { getRate, getMultiRates } from './index';
import { strict as assert } from 'assert';
import * as axios from 'axios-auto';
import { BigNumber } from 'bignumber.js';

BigNumber.config({
  DECIMAL_PLACES: 1000,
  EXPONENTIAL_AT: 1000
});

// Basis Point
const RATE = '200';

const BINANCE = 'https://api.binance.com/api/v3/avgPrice?symbol=';

const plusRate = new BigNumber('10000').plus(RATE).div('10000');
const minusRate = new BigNumber('10000').minus(RATE).div('10000');

const toFetch: [string, string, number, string][] = [
  ['ETH', 'USDT', 1, 'ETHUSDT'],
  ['WBTC', 'USDT', 1, 'BTCUSDT'],
  ['ETH', 'WBTC', 1, 'ETHBTC'],
  ['AVAX', 'USDT.e', 43114, 'AVAXUSDT'],
  ['BNB', 'USDT', 56, 'BNBUSDT']
];

const toMultiFetch: [string, string, string][] = [
  ['ETH', 'USDT', 'ETHUSDT'],
  ['WBTC', 'USDT', 'BTCUSDT'],
  ['ETH', 'WBTC', 'ETHBTC'],
];

const fetchRates = async (price1: string, price2: string, chainId: number, ticker: string): Promise<[BigNumber, BigNumber, string]> => {
  const rate = await getRate(price1, price2, chainId).then(r => new BigNumber(r));
  const binanceRate = await axios.get(`${BINANCE}${ticker}`).then(r => new BigNumber(r.price));
  return [
    rate,
    binanceRate,
    ticker
  ];
};

const multiFetchRates = async (multiFetch: [string, string, string][]): Promise<[BigNumber, BigNumber, string][]> => {
  const token1: string[] = [];
  const token2: string[] = [];

  multiFetch.forEach(args => {
    token1.push(args[0]);
    token2.push(args[1]);
  });

  return await getMultiRates(token1, token2).then(async r => await Promise.all(r.map(async rate => {
    const ticker = multiFetch[r.indexOf(rate)][2];
    const binanceRate = await axios.get(`${BINANCE}${ticker}`).then(result => new BigNumber(result.price));
    return [
      new BigNumber(rate),
      binanceRate,
      ticker
    ];
  })));
};

describe('1inch-spot-price', () => {
  it('getRate', async () => {
    const rates = await Promise.all(toFetch.map(f => fetchRates(...f)));
    for (const rate of rates) {
      const oneInchRate = rate[0];
      const binanceRate = rate[1];

      const notLessThan = new BigNumber(binanceRate).times(minusRate);
      const notBiggerThan = new BigNumber(binanceRate).times(plusRate);

      console.log(`Binance ${rate[2]}: ${binanceRate.toString()}`);
      console.log(`OneInch ${rate[2]}: ${oneInchRate.toString()}`);

      assert.ok(oneInchRate.gte(notLessThan) && oneInchRate.lte(notBiggerThan));
    }
  });

  it('getMultiRates', async () => {
    const rates = await multiFetchRates(toMultiFetch);
    for (const rate of rates) {
      const oneInchRate = rate[0];
      const binanceRate = rate[1];

      const notLessThan = new BigNumber(binanceRate).times(minusRate);
      const notBiggerThan = new BigNumber(binanceRate).times(plusRate);

      console.log(`Binance ${rate[2]}: ${binanceRate.toString()}`);
      console.log(`OneInch ${rate[2]}: ${oneInchRate.toString()}`);

      assert.ok(oneInchRate.gte(notLessThan) && oneInchRate.lte(notBiggerThan));
    }
  });
});
