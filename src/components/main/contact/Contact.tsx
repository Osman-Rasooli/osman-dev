import { motion } from "framer-motion";
import Button from "../../ui/button";
import SectionHeading from "../../ui/section-heading";
import Spotlight from "../../ui/Spotlight";

import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

import AnimatedTooltip from "../../ui/animated-tooltip";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative max-w-[1100px] mx-auto px-[25px] sm:px-[50px] md:px-[70px] lg:px-[100px] py-[60px] md:py-[80px] lg:py-[100px]"
    >
      <SectionHeading title="Contact" />
      <div className="h-[30rem] w-full rounded-md flex items-center justify-center relative ">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
            className="text-md font-gilroyLight text-center uppercase text-slate-400 mb-2"
          >
            Got a project in mind?
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.5, ease: "easeInOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-gilroyBold text-center uppercase text-slate-50"
          >
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.5, ease: "easeInOut" }}
            className="md:text-center pl-6  md:pl-0 md:pr-36 uppercase"
          >
            <Button href="#">Drop me an Email</Button>
          </motion.div>
          <div className="mt-10 flex gap-5 justify-center ">
            <AnimatedTooltip tooltipText="Github">
              <motion.a
                href="https://github.com/Osman-Rasooli"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-2xl mb-3"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 0.8, y: 10 }}
                transition={{ duration: 0.3, delay: 1.6 }}
                viewport={{ once: true }}
              >
                <FaGithub />
              </motion.a>
            </AnimatedTooltip>

            <AnimatedTooltip tooltipText="LinkedIn">
              <motion.a
                href="https://www.linkedin.com/in/mohammad-osman-rasooli-420228192/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-2xl mb-3"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 0.8, y: 10 }}
                transition={{ duration: 0.3, delay: 1.8 }}
                viewport={{ once: true }}
              >
                <FaLinkedinIn />
              </motion.a>
            </AnimatedTooltip>
            <AnimatedTooltip tooltipText="X">
              <motion.a
                href="https://twitter.com/OsRasooli"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-2xl mb-3"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 0.8, y: 10 }}
                transition={{ duration: 0.3, delay: 2 }}
                viewport={{ once: true }}
              >
                <FaXTwitter />
              </motion.a>
            </AnimatedTooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
