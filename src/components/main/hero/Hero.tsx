import HeaderHeroDetail from "./HeaderHeroDetail";
import { BackgroundBeams } from "../../ui/background-beams";
import Contact from "./Contact";
const Hero = () => {
  return (
    <section className="hero relative">
      <HeaderHeroDetail />
      <Contact />
      <BackgroundBeams />
    </section>
  );
};

export default Hero;
