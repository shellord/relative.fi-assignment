import Container from "./components/ui/Container";
import activityIconUrl from "./assets/activity.svg";
import TrendingAssetCard from "./components/TrendingAssetCard";
import { TRENDING_ASSETS } from "./data";

const App = () => {
  return (
    <Container>
      <section className="flex h-full px-20 items-center">
        <div>
          <div className="flex gap-4">
            <img src={activityIconUrl} />
            <span className="text-white">Trending Assets</span>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-10">
            {TRENDING_ASSETS.map((trendingAsset) => (
              <div className="mt-20">
                <TrendingAssetCard {...trendingAsset} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default App;
