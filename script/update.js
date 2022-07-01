const axios = require('axios-auto');
const fs = require('fs');

const CHAINID = 'https://chainid.network/chains.json';
const RPCS = 'https://raw.githubusercontent.com/DefiLlama/chainlist/main/constants/extraRpcs.json';

// Public RPC api key with basic rate limits
const INFURA = '9aa3d95b3bc440fa88ea12eaa4456161';

const removeDuplicates = (arr) => [...new Set(arr)];

const config = JSON.parse(fs.readFileSync('data/1inch.json', { encoding: 'utf8' }));

let chainslist = [];
let tokens = {};

const updateChains = async () => {
  try {
    const chains = await axios.get(CHAINID);
    const rpcs = await axios.get(RPCS);
    const result = Object.keys(rpcs).map(chainId => {
      const chain = chains.find(c => c.chainId === parseInt(chainId));
      if (chain !== undefined) {
        chain.rpc = removeDuplicates(chain.rpc.concat(rpcs[chainId].rpcs).map(r => {
          if (!r) {
            return;
          }
          let s = r;
          // Remove / from the last character of rpc url
          if (s[s.length - 1] === '/') {
            s = s.substring(0, s.length - 1);
          }
          // Replace ${INFURA_API_KEY} with API KEY value
          if (s.includes('${INFURA_API_KEY}')) {
            s = s.replace(/\$\{.*\}/g, INFURA);
          }
          return s;
        }));
      }
      return chain;
    }).filter(r => r);
    chainslist = result;
    fs.writeFileSync('data/chains.json', JSON.stringify(result, null, 2), { encoding: 'utf8' });
  } catch (e) {
    console.error('Error while updating chainid resources');
    console.error(e);
    throw e;
  }
}

const updateTokens = async () => {
  try {
    await Promise.all(config.map(async cfg => {
      tokens[cfg.chainId] = await axios.get(`https://tokens.1inch.io/v1.1/${cfg.chainId}`);
    }));
    fs.writeFileSync('data/tokens.json', JSON.stringify(tokens, null, 2), { encoding: 'utf8' });
  } catch (e) {
    console.error('Error while fetching tokens');
    console.error(e);
    throw e;
  }
}

const genConfig = () => {
  try {
    const result = config.map(cfg => {
      const cfg2 = cfg;
      const rpc = chainslist.find(c => c.chainId === cfg2.chainId);
      cfg2.rpc = removeDuplicates(cfg2.rpc.concat(rpc.rpc));
      cfg2.tokens = tokens[cfg2.chainId];
      return cfg2;
    });
    fs.writeFileSync('data/1inch.json', JSON.stringify(result, null, 2), { encoding: 'utf8' });
  } catch (e) {
    console.error('Error while generating config');
    console.error(e);
    throw e;
  }
}

const update = async () => {
  await updateChains();
  await updateTokens();
}

update().then(genConfig);
