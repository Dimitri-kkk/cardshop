import Image from "next/image";
import Slider from "./components/Slider/slider";
import CategoryProducts from "./components/MidSection/midsection";
import Categorieswrapper from "./components/Categorieswrapper/categorieswrapper";
import Minishop from "./components/MiniShop/minishop";
import ImageSlider from "./components/Framemotion/Framemotion";
import FeatureBar from "./components/Info/info";


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
      </main>
    </div>
  );
}
