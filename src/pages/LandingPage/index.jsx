import Beneficios from "../../components/Beneficios";
import HeroSection from "../../components/HeroSection";
import Included from "../../components/Included";
import InfoSection from "../../components/InfoSection";
import KeyFeatures from "../../components/KeyFeatures";
import VideoSection from "../../components/VideoSection";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <KeyFeatures />
      <Included />
      <VideoSection />
      <Beneficios />
      <InfoSection />
    </>
  );
}

export default LandingPage;
