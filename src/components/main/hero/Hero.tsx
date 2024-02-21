import HeaderHeroDetail from "./HeaderHeroDetail";
// import { BackgroundBeams } from "../../ui/background-beams";
import BackgroundGradientAnimation from "../../ui/background-gradient-animation";
import Social from "./Social";
import Logo from "./Logo";
const Hero = () => {
  return (
    <section className="hero relative h-screen">
      <Logo />
      {/* <HeaderHeroDetail /> */}
      <BackgroundGradientAnimation>
        <HeaderHeroDetail />
      </BackgroundGradientAnimation>
      <Social />
      {/* <BackgroundBeams /> */}
    </section>
  );
};

export default Hero;
