import type { TrendingAsset } from "./types";
import BitcoinIconUrl from "./assets/bitcoin.svg";
import EthereumIconUrl from "./assets/ethereum.svg";
import BinanceIconUrl from "./assets/binance.svg";
import ShibaIconUrl from "./assets/shiba.svg";
import SolanaIconUrl from "./assets/solana.svg";

export const TRENDING_ASSETS: TrendingAsset[] = [
  {
    name: "Bitcoin",
    shortName: "BTC",
    price: 31812.8,
    percentageChange: 10,
    tvl: 60000,
    popularPairs: [
      {
        coin: "Solana",
        iconUrl: SolanaIconUrl,
      },
      {
        coin: "Ethereum",
        iconUrl: EthereumIconUrl,
      },
      {
        coin: "Binance",
        iconUrl: BinanceIconUrl,
      },
    ],
    iconUrl: BitcoinIconUrl,
  },
  {
    name: "Solana",
    shortName: "SOL",
    price: 32.83,
    percentageChange: -12.32,
    tvl: 60000,
    popularPairs: [
      {
        coin: "Bitcoin",
        iconUrl: BitcoinIconUrl,
      },
      {
        coin: "Ethereum",
        iconUrl: EthereumIconUrl,
      },
      {
        coin: "Binance",
        iconUrl: BinanceIconUrl,
      },
    ],
    iconUrl: SolanaIconUrl,
  },
  {
    name: "Ethereum",
    shortName: "ETH",
    price: 1466.45,
    percentageChange: -11.93,
    tvl: 60000,
    popularPairs: [
      {
        coin: "Solana",
        iconUrl: SolanaIconUrl,
      },
      {
        coin: "Bitcoin",
        iconUrl: BitcoinIconUrl,
      },
      {
        coin: "Binance",
        iconUrl: BinanceIconUrl,
      },
    ],
    iconUrl: EthereumIconUrl,
  },
  {
    name: "Binance",
    shortName: "BUSD",
    price: 1.0,
    percentageChange: 0.26,
    tvl: 60000,
    popularPairs: [
      {
        coin: "Solana",
        iconUrl: SolanaIconUrl,
      },
      {
        coin: "Ethereum",
        iconUrl: EthereumIconUrl,
      },
      {
        coin: "Binance",
        iconUrl: BinanceIconUrl,
      },
    ],
    iconUrl: BinanceIconUrl,
  },
  {
    name: "Shiba Inu",
    shortName: "SHIB",
    price: 0.00000001948,
    percentageChange: -8.1,
    tvl: 60000,
    popularPairs: [
      {
        coin: "Solana",
        iconUrl: SolanaIconUrl,
      },
      {
        coin: "Ethereum",
        iconUrl: EthereumIconUrl,
      },
      {
        coin: "Binance",
        iconUrl: BinanceIconUrl,
      },
    ],
    iconUrl: ShibaIconUrl,
  },
];
