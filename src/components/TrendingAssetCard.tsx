import { Pair, TrendingAsset } from "../types";
import clsx from "clsx";

const GRADIENT_BACKGROUND_STYLE =
  "bg-gradient-to-b from-[#626A88]/10 to-[#2E3149]/10";

const BORDER_GRADIENT_BACKGROUND_STYLE = "bg-gradient-to-b from-[#F3ECFF]/10";

const CIRCLE_GRADIENTS = {
  bitcoin: "bg-gradient-to-b from-[#626A88]/10 to-[#EAB300]/10",
};

const Curve: React.FC = () => {
  return (
    <div className="rounded-b-full w-1/3 h-10 bg-primary p-2 left-1/2 -translate-x-1/2 -translate-y-1/3 absolute border border-[#F3ECFF]/10 border-t-0 ">
      <div className="overflow-hidden h-full w-56 absolute -top-2/3 -left-6 bg-primary" />
    </div>
  );
};

const TopSide: React.FC<{
  side?: "left" | "right";
}> = ({ side }) => {
  return (
    <div
      className={clsx(
        "p-[0.05rem] pb-0 absolute w-[77px] h-3 -top-[12px]  bg-[#F3ECFF]/10",
        {
          "-left-0 rounded-tr-[18px] rounded-tl-xl": side === "left",
          "rounded-tl-[18px] rounded-tr-xl left-full -translate-x-full":
            side === "right",
        }
      )}
    >
      <div
        className={clsx("bg-primary overflow-hidden h-full", {
          "rounded-tr-[18px] rounded-tl-xl": side === "left",
          "rounded-tl-[18px] rounded-tr-xl": side === "right",
        })}
      >
        <div className={clsx("h-full w-full bg-[#626A88]/10")} />
      </div>
    </div>
  );
};

const Circle: React.FC<{
  iconUrl: string;
}> = ({ iconUrl }) => {
  return (
    <div className="absolute h-16 w-16 rounded-full overflow-hidden left-1/2 -translate-x-1/2 -translate-y-2/3">
      <div className="w-full h-full bg-gradient-to-b from-[#ECF0FF]/10 p-[0.05rem]">
        <div className="bg-primary w-full h-full rounded-full">
          <div
            className={clsx(
              "h-full w-full rounded-full flex items-center justify-center",
              CIRCLE_GRADIENTS["bitcoin"]
            )}
          >
            <img src={iconUrl} className="h-2/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const HighlightBox: React.FC<{
  price: number;
  percentageChange?: number;
}> = ({ price, percentageChange }) => {
  return (
    <div className="bg-gradient-to-b from-[#ECF0FF]/10 w-full p-[0.05rem] rounded-full flex justify-center ">
      <div className="flex bg-primary w-full h-ful p-2 rounded-full justify-center items-center">
        <p className="text-white text-sm">${price}</p>
        {percentageChange && (
          <span className="text-xs ml-3">
            {percentageChange > 0 ? (
              <span className="text-green-500">+{percentageChange}%</span>
            ) : (
              <span className="text-red-500">{percentageChange}%</span>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

const Pairs: React.FC<{
  pairs: Pair[];
}> = ({ pairs }) => {
  return (
    <div className="bg-gradient-to-b from-[#ECF0FF]/10 w-full p-[0.05rem] rounded-full flex justify-center ">
      <div className="flex bg-primary w-full h-ful p-2 rounded-full justify-center items-center gap-x-2">
        {pairs.map((pair, index) => (
          <img src={pair.iconUrl} className="h-5 w-5" key={index} />
        ))}
      </div>
    </div>
  );
};

const TrendingAssetCard: React.FC<TrendingAsset> = ({
  name,
  shortName,
  price,
  percentageChange,
  tvl,
  popularPairs,
  iconUrl,
}) => {
  return (
    <div
      className={clsx(
        "p-[0.05rem] pt-0 rounded-b-xl relative h-72 w-56",
        BORDER_GRADIENT_BACKGROUND_STYLE
      )}
    >
      <Curve />
      <TopSide side="left" />
      <TopSide side="right" />
      <Circle iconUrl={iconUrl} />
      <div className="bg-primary rounded-b-xl overflow-hidden h-full w-full">
        <div
          className={clsx(
            "h-full w-full flex justify-center",
            GRADIENT_BACKGROUND_STYLE
          )}
        >
          <div className="mt-8 flex flex-1 items-center w-full flex-col p-3">
            <div className="w-full flex flex-col items-center">
              <p className="text-secondary text-xs">
                {name} ({shortName})
              </p>
              <div className="mt-2" />

              <HighlightBox price={price} percentageChange={percentageChange} />
              <p className="text-secondary text-xs mt-1">Price</p>
              <div className="mt-3" />
              <HighlightBox price={tvl} />
              <p className="text-secondary text-xs mt-1">TVL</p>
              <div className="mt-3" />

              <Pairs pairs={popularPairs} />
              <p className="text-secondary text-xs mt-1">Popular pairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingAssetCard;
