import { motion } from "framer-motion";
import SectionHeading from "../../ui/section-heading";
import TextEffect from "../../ui/text-effect";

const Skills = () => {
  const frontend = [
    "js",
    "react",
    "redux",
    "typescript",
    "nextjs",
    "sass",
    "tailwindcss",
    "gsap",
  ];
  const backend = [
    "php",
    "laravel",
    "nodejs",
    "expressjs",
    "firebase",
    "mysql",
    "mongodb",
  ];
  const others = ["wordpress", "figma", "jest", "gulp", "git"];

  return (
    <section
      id="skills"
      className="relative max-w-[1100px] mx-auto px-[25px] sm:px-[50px] md:px-[70px] lg:px-[100px] py-[60px] md:py-[80px] lg:py-[100px]"
    >
      <SectionHeading title="Skills" />
      <div className="flex relative z-10 gap-10 flex-wrap md:flex-nowrap  flex-1">
        <AnimatedColumn heading="Frontend" skills={frontend} delay={0.7} />
        <AnimatedColumn heading="Backend" skills={backend} delay={1.1} />
        <AnimatedColumn heading="Other Tools" skills={others} delay={1.5} />
      </div>
    </section>
  );
};

const AnimatedColumn = ({
  heading,
  skills,
  delay,
}: {
  heading: string;
  skills: string[];
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5, ease: "easeInOut" }}
      className="rounded-casual-round border-[1px] border-zinc-900 w-full flex-grow md:w-[320px] h-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.5, ease: "easeInOut" }}
        className="font-gilroyBold text-2xl mb-5 text-violet-400"
      >
        {heading}
      </motion.h2>
      <ul className="flex flex-wrap gap-2 font-gilroyLight">
        {skills.map((skill, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: delay + idx * 0.2,
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="bg-zinc-900 p-3 text-center uppercase text-sm h-12 rounded-[8px] border-[.1px] cursor-pointer border-violet-400 hover:shadow-sm transition-all duration-300 hover:shadow-slate-600"
          >
            <span className="inline-block hover:scale-125 transition-all duration-150">
              {<TextEffect text={skill} />}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
