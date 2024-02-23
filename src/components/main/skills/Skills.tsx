import { motion } from "framer-motion";
import SectionHeading from "../../ui/section-heading";
const Skills = () => {
  const frontend = ["html", "css", "sass", "js", "reactjs", "nextjs"];
  const backend = [
    "php",
    "laravel",
    "nodejs",
    "expressjs",
    "firebase",
    "mysql",
    "mongodb",
  ];
  const others = ["wordpress", "figma", "jest", "gulp"];
  return (
    <section className="skills pt-5 pb-20 flex flex-col md:flex-row justify-center items-start gap-5 relative overflow-hidden">
      <SectionHeading title="Skills" />
      <div className="px-8 md:px-10 md:pl-8 lg:px-32 lg:pl-12 w-full lg:ml-10">
        {/* Frontend */}
        <div className="w-full text-slate-100 mb-10">
          <div className="">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className=" text-violet-500 text-3xl mb-5 font-gilroyLight"
            >
              Frontend
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="flex gap-4 px-10"
            >
              {frontend.map((fr, idx) => (
                <li
                  key={fr + idx}
                  className="bg-slate-300 px-4 py-3 rounded-casual-round bg-opacity-5 text-slate-200 border-[1px] border-violet-600 font-bold uppercase"
                >
                  {fr}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="w-full text-slate-100 mb-10">
          <div className="my-5">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className=" text-violet-500 text-3xl mb-5 font-gilroyLight"
            >
              Backend
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 1,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="flex gap-4 px-10"
            >
              {backend.map((be, idx) => (
                <li
                  key={be + idx}
                  className="bg-slate-300 px-4 py-3 rounded-casual-round bg-opacity-5 text-slate-200 border-[1px] border-violet-600 font-bold uppercase"
                >
                  {be}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="w-full text-slate-100 mb-10">
          <div className="">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.2,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className=" text-violet-500 text-3xl mb-5 font-gilroyLight"
            >
              Other Tools
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.4,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="flex gap-4 px-10"
            >
              {others.map((ot, idx) => (
                <li
                  key={ot + idx}
                  className="bg-slate-300 px-4 py-3 rounded-casual-round bg-opacity-5 text-slate-200 border-[1px] border-violet-600 font-bold uppercase"
                >
                  {ot}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
