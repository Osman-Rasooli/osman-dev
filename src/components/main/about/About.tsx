import SectionHeading from "../../ui/section-heading";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import AnimatedCircleShape from "../../ui/animated-circle-shape";
const About = () => {
  return (
    <section className="about-me min-h-[500px] pt-5 pb-20 flex flex-col md:flex-row justify-center items-center gap-5 relative overflow-hidden">
      <AnimatedCircleShape
        deg={[-10, 16, -10]}
        duration={10}
        color="border-pink-500"
        className="opacity-20 -left-6 -top-2 -bottom-1"
      />
      <AnimatedCircleShape
        deg={[-15, 15, -15]}
        duration={8}
        color="border-slate-50"
        className="opacity-10 -left-5 -top-5 -bottom-5"
      />
      <AnimatedCircleShape
        deg={[-8, 15, -8]}
        duration={10}
        color="border-slate-100"
        className="opacity-10 left-2 -top-2 -bottom-2"
      />

      <SectionHeading title="About" />
      <div className="px-8 md:px-10 md:pl-8 lg:px-16 lg:pl-12">
        <p className=" font-seaweed text-slate-400 italic">Hey there,</p>
        <p className="mt-3 text-slate-400 font-gilroyLight text-xl italic">
          I'm{" "}
          <span className="inline-block ml-2 not-italic font-gilroyBold text-4xl text-slate-100 tracking-wider">
            Osman Rasooli
          </span>
        </p>
        <TextGenerateEffect words="A dedicated Frontend Developer and UI/UX designer with a passion for crafting seamless digital experiences. With a meticulous eye for detail and a commitment to excellence, I strive to deliver user-centric designs that not only captivate but also elevate." />
      </div>
    </section>
  );
};

export default About;
