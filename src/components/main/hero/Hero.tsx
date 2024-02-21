// import HeaderHeroDetail from "./HeaderHeroDetail";
// import { BackgroundBeams } from "../../ui/background-beams";
import { motion } from "framer-motion";
import BackgroundGradientAnimation from "../../ui/background-gradient-animation";
import logo from "../../../assets/logo.png";
import Social from "./Social";
const Hero = () => {
  return (
    <section className="hero relative h-screen">
      <div className="logo absolute top-5 left-0 z-50 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0.2, width: "0" }}
          whileInView={{ opacity: 1, width: "45vw" }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="border-t-2 border-gray-300 w-20 h-2"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 10 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-32 h-32 -m-10 md:-m-5"
        >
          <img
            src={logo}
            alt="Logo - Osman Rasooli"
            className="block w-full h-full"
          />
        </motion.div>
      </div>
      {/* <HeaderHeroDetail /> */}
      <BackgroundGradientAnimation>
        <div className="absolute z-10 inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="bg-gradient-to-br from-slate-300 to-slate-50 py-4 bg-clip-text text-center tracking-tight text-transparent"
          >
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font-medium font-gilroyBold text-4xl md:text-7xl tracking-wider mb-3"
            >
              OSMAN RASOOLI
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row justify-center items-center md:gap-5 text-xl md:text-2xl font-gilroyLight tracking-widest"
            >
              <span>Frontend Developer</span>
              <span className="hidden md:block">|</span>
              <span>UI/UX Designer</span>
            </motion.h3>
          </motion.div>
        </div>
      </BackgroundGradientAnimation>
      <Social />
      {/* <BackgroundBeams /> */}
    </section>
  );
};

export default Hero;
