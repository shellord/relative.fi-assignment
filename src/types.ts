export type Coins = "Bitcoin" | "Solana" | "Ethereum" | "Binance" | "Shiba Inu";

export type Pair = {
  coin: Coins;
  iconUrl: string;
};

export type TrendingAsset = {
  name: string;
  shortName: string;
  price: number;
  percentageChange: number;
  tvl: number;
  popularPairs: Pair[];
  iconUrl: string;
};
