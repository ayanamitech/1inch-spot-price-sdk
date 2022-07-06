import type { Provider } from '@ethersproject/abstract-provider';
import type { fetchConfig } from 'axios-auto';
import type { HttpProviderOptions, AxiosAutoOptions } from 'web3-providers-axios';
export default class OneInchSpotPrice {
    chainId: number;
    provider: Provider;
    private configURL;
    private config;
    private initializer;
    private isInititialized;
    constructor(chainId?: number, provider?: Provider, axiosConfig?: fetchConfig, providerOptions?: HttpProviderOptions, axiosOptions?: AxiosAutoOptions);
    private init;
    private getDecimals;
    private getTokenAddress;
    private getTokens;
    initialize(): Promise<void>;
    getRate(srcToken: string, dstToken: string): Promise<string>;
    getMultiRates(srcToken: string[], dstToken: string[]): Promise<string[]>;
}
