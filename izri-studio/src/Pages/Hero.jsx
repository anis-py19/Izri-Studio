import Home from "../Components/Home";
import SlidePromo from "../Components/SlidePromo";
import About from "./About";
import WhyChoose from "../Components/WhyChoose";
import Process from "../Components/Process";
import BuildTogether from "../Components/BuildTogether";
import PromoBanner from "../Components/PromoBanner";
import FAQ from "../Components/FAQ";
import FinalCTA from "../Components/FinalCTA";

function Hero() {
  return (
    <>
      <Home />
      <SlidePromo />
      <About />
      <WhyChoose />
      <Process />
      <BuildTogether />
      <PromoBanner />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export default Hero;