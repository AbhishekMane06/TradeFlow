import Footer from "../components/Footer";
import CaSection from "../sections/CaSection";
import FeatureSection from "../sections/FeatureSection";
import HeroSection from "../sections/HeroSEction";
import LogoCarousel from "../sections/LogoCarousel";
import PriceSection from "../sections/PriceSection";
import TestimonialSection from "../sections/TestimonialSection";


const HomePage = () => {
  return (
    <>
      <div className="bg-black mx-auto">
        <HeroSection />
        <LogoCarousel />
        <FeatureSection />
        <PriceSection />
        <TestimonialSection />
        <CaSection />
      </div>
    </>
  );
}

export default HomePage;
