import type { Provider } from '@ethersproject/abstract-provider';
import type { fetchConfig as axiosConfig } from 'axios-auto';
import type { extraConfig as providerConfig } from 'ethers-axios-provider';
export declare type tokens = {
    [key: string]: any;
};
export declare type Config = {
    name: string;
    coin: string;
    chainId: number;
    oracle: string;
    wrappedToken: string;
    multicall: string;
    rpc: string[];
    tokens: tokens;
};
export default class OneInchSpotPrice {
    chainId: number;
    provider: Provider | undefined;
    private configURL;
    private config;
    private initializer;
    private isInititialized;
    constructor(chainId?: number, provider?: Provider, providerConfig?: providerConfig, axiosConfig?: axiosConfig, chainConfig?: any);
    private init;
    private getDecimals;
    private getTokenAddress;
    private getTokens;
    initialize(): Promise<void>;
    getRate(srcToken: string, dstToken: string): Promise<string>;
    getMultiRates(srcToken: string[], dstToken: string[]): Promise<string[]>;
}
