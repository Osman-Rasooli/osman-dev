// import Logo from "./Logo";
import WaterDropGrid from "../../ui/water-drop-grid";
import TextEffect from "../../ui/text-effect";
import Social from "./Social";
import Button from "../../ui/button";
const Hero = () => {
  return (
    <section className="h-screen overflow-hidden">
      <Social />
      <div className="flex flex-col md:flex-row justify-between items-center gap-20 md:gap-0 lg:gap-10 xl:gap-0">
        <div className="flex flex-col justify-center items-center pt-[22vh] md:pt-0 md:w-1/2 lg:w-2/5 ">
          <div className="pt-5 md:pl-10 md:pt-10 border-[.5px] rounded-casual-round border-slate-800">
            <h4 className=" font-seaweed text-lg text-slate-400 opacity-70 mb-5 text-left w-full">
              hi, I'm
            </h4>
            <h1 className="text-left text-5xl xl:text-6xl font-gilroyBold uppercase tracking-wide leading-[2.5rem] text-violet-400">
              <TextEffect text="Osman" />{" "}
              <span className="block ml-10 mt-2 text-slate-200">
                <TextEffect text="Rasooli" />
              </span>
            </h1>
            <h3 className="mt-3 text-center font-gilroyLight uppercase tracking-wide text-xl text-slate-400">
              Fronend Developer{" "}
              <span className="block ml-28">UI/UX Designer</span>
            </h3>
            <div className="mt-5">
              <Button href="#">Let's Connect</Button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-3/5 overflow-hidden">
          <WaterDropGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
