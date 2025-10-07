import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, base } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ReownAdapter } from '@reown/appkit-adapter-wagmi';

export const { chains, publicClient } = configureChains(
  [mainnet, polygon, base],
  [publicProvider()]
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [new ReownAdapter()],
  publicClient
});
