import { motion } from "framer-motion";
import WaterDropGrid from "../../ui/water-drop-grid";
import TextEffect from "../../ui/text-effect";
import Social from "./Social";
import Button from "../../ui/button";
const Hero = () => {
  return (
    <section id="hero" className="h-screen max-h-[1000px] overflow-hidden">
      <Social />
      <div className="flex flex-col md:flex-row justify-between items-center gap-20 md:gap-0 lg:gap-10 xl:gap-0 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center pt-[22vh] md:pt-0 md:w-1/2 lg:w-2/5 "
        >
          <div className="pt-5 md:pl-10 md:pt-10 border-[.5px] rounded-casual-round border-slate-800">
            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=" font-seaweed text-lg text-slate-400 opacity-70 mb-5 text-left w-full"
            >
              hi, I'm
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-left text-5xl xl:text-6xl font-gilroyBold uppercase tracking-wide leading-[2.5rem] text-violet-400"
            >
              <TextEffect text="Osman" />{" "}
              <span className="block ml-10 mt-2 text-slate-200">
                <TextEffect text="Rasooli" />
              </span>
            </motion.h1>
            <h3 className="mt-3 text-center font-gilroyLight uppercase tracking-wide text-xl text-slate-400">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="block"
              >
                Fronend Developer{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="block ml-28"
              >
                UI/UX Designer
              </motion.span>
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="mt-5"
            >
              <Button href="#">Let's Connect</Button>
            </motion.div>
          </div>
        </motion.div>
        <div className="md:w-1/2 lg:w-3/5 overflow-hidden">
          <WaterDropGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
