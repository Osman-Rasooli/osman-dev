import HeaderHeroDetail from "./HeaderHeroDetail";
import { BackgroundBeams } from "../../ui/background-beams";
import Social from "./Social";
const Hero = () => {
  return (
    <section className="hero relative">
      <HeaderHeroDetail />
      <Social />
      <BackgroundBeams />
    </section>
  );
};

export default Hero;
