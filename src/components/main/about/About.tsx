import { motion } from "framer-motion";
import SectionHeading from "../../ui/section-heading";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import AnimatedCircleShape from "../../ui/animated-circle-shape";

const About = () => {
  return (
    <section className="about-me min-h-[500px] pt-20 pb-10 flex flex-col md:flex-row justify-center items-start gap-5 relative overflow-hidden">
      <AnimatedCircleShape
        deg={[-10, 16, -10]}
        duration={10}
        color="border-pink-500"
        className="opacity-20 -left-6 -top-5 -bottom-1"
      />
      <AnimatedCircleShape
        deg={[-15, 15, -15]}
        duration={8}
        color="border-slate-50"
        className="opacity-10 -left-5 -top-8 -bottom-5"
      />
      <AnimatedCircleShape
        deg={[-8, 15, -8]}
        duration={10}
        color="border-slate-100"
        className="opacity-10 left-2 -top-6 -bottom-2"
      />

      <SectionHeading title="About" />
      <div className="px-8 md:px-10 md:pl-8 lg:px-16 lg:pl-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className=" font-seaweed text-slate-400 italic"
        >
          Hey there,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="mt-3 text-slate-400 font-gilroyLight text-xl italic"
        >
          I'm{" "}
          <span className="inline-block ml-2 not-italic font-gilroyBold text-4xl text-violet-600 tracking-wider">
            Osman Rasooli
          </span>
        </motion.p>
        <TextGenerateEffect words="A dedicated Frontend Developer and UI/UX designer with a passion for crafting seamless digital experiences. With a meticulous eye for detail and a commitment to excellence, I strive to deliver user-centric designs that not only captivate but also elevate." />
      </div>
    </section>
  );
};

export default About;
