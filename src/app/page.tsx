import Slider from "./components/Slider/slider";
import CategoryProducts from "./components/MidSection/midsection";
import Categorieswrapper from "./components/Categorieswrapper/categorieswrapper";
import Minishop from "./components/MiniShop/minishop";
import ImageSlider from "./components/Framemotion/Framemotion";
import FeatureBar from "./components/Info/info";
import Details from "./components/Details/details";
import Companies from "./components/Companies/companies";


export default function Home() {
  return (
    <div>
      <main>
        <Slider />
        <CategoryProducts />
        <Categorieswrapper />
        <FeatureBar />
        <Minishop />
        <ImageSlider />
        <Details />
        <Companies />
      </main>
    </div>
  );
}
