import type { Provider } from '@ethersproject/abstract-provider';
import type { HttpProviderOptions, AxiosAutoOptions } from 'web3-providers-axios';
export declare function getRate(srcToken: string, dstToken: string, chainId?: number, provider?: Provider, providerOptions?: HttpProviderOptions, axiosOptions?: AxiosAutoOptions): Promise<string>;
export declare function getMultiRates(srcToken: string[], dstToken: string[], chainId?: number, provider?: Provider, providerOptions?: HttpProviderOptions, axiosOptions?: AxiosAutoOptions): Promise<string[]>;
declare const _default: {
    getRate: typeof getRate;
    getMultiRates: typeof getMultiRates;
};
export default _default;
