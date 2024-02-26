import { motion } from "framer-motion";
import SectionHeading from "../../ui/section-heading";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import AnimatedCircleShape from "../../ui/animated-circle-shape";
import TextEffect from "../../ui/text-effect";
import Button from "../../ui/button";
import Resume from "../../../assets/OsmanRasooli.pdf";

const About = () => {
  return (
    <section
      id="about"
      className=" max-w-[1100px] mx-auto px-[25px] sm:px-[50px] md:px-[70px] lg:px-[100px] pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] lg:pt-[200px] lg:pb-[100px] relative"
    >
      <AnimatedCircleShape
        deg={[-10, 16, -10]}
        duration={10}
        color="border-pink-500"
        className="opacity-10 -left-6 top-20 bottom-20"
      />
      <AnimatedCircleShape
        deg={[-15, 15, -15]}
        duration={8}
        color="border-slate-200"
        className="opacity-10 -left-5 top-16 bottom-20"
      />
      <AnimatedCircleShape
        deg={[-8, 15, -8]}
        duration={10}
        color="border-slate-300"
        className="opacity-5 -left-5 top-16 bottom-20"
      />

      <SectionHeading title="About" />
      <div className="relative z-20 ">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className=" text-slate-400 font-gilroyLight text-xl "
        >
          <span className=" font-seaweed">I'm </span>
          <span className="inline-block ml-2 font-gilroyBold text-[26px] md:text-[32px] text-violet-400 tracking-wider uppercase">
            <TextEffect text="Osman Rasooli" />{" "}
          </span>
        </motion.p>
        <div className=" font-gilroyLight lg:text-xl">
          <TextGenerateEffect words="A dedicated Frontend Developer and UI/UX Designer with a passion for crafting seamless digital experiences. With a meticulous eye for detail and a commitment to excellence, I strive to deliver user-centric designs that not only captivate but also elevate." />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 4.9, duration: 0.5 }}
          className="text-center md:text-left"
        >
          <Button href={Resume} download={true}>
            Get Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
