import HeroSection from "./components/HeroSection";
import SuperDelicious from "./components/SuperDelicious";
import PopularCategories from "./components/PopularCategories";
import Recommendations from "./components/Recommendations";
import HandPick from "./components/HandPick";
import LatestRecipes from "./components/LatestRecipes";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <HeroSection/>
      <SuperDelicious/>
      <PopularCategories/>
      <Recommendations/>
      <HandPick/>
      <LatestRecipes/>
    </main>
  )
}
