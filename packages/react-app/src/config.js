import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x1D07D2E536D7786bd74b8F66A07C0AF22f799aC0"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/BeHhDQV6u1LdkMLoBknmjs-0O2w2-jsK",
  },
};