import type { Provider } from '@ethersproject/abstract-provider';
export declare function getRate(srcToken: string, dstToken: string, chainId?: number, provider?: Provider): Promise<string>;
export declare function getMultiRates(srcToken: string[], dstToken: string[], chainId?: number, provider?: Provider): Promise<string[]>;
declare const _default: {
    getRate: typeof getRate;
    getMultiRates: typeof getMultiRates;
};
export default _default;
