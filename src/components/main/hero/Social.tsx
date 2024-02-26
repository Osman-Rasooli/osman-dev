import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { motion } from "framer-motion";
import AnimatedTooltip from "../../ui/animated-tooltip";

const Social = () => {
  return (
    <motion.div
      className="absolute md:fixed top-0 left-5 flex flex-col z-50"
      initial={{ opacity: 0.2, height: "0" }}
      whileInView={{ opacity: 0.8, height: "12rem" }}
      viewport={{ once: true }}
      transition={{
        delay: 1.5,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="border-l-2 border-violet-400 relative mx-auto h-20"></div>
      <AnimatedTooltip tooltipText="Github">
        <motion.a
          href="https://github.com/Osman-Rasooli"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-2xl mb-3"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.8, y: 10 }}
          transition={{ duration: 0.5, delay: 1.9 }}
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
          animate={{ opacity: 0.8, y: 10 }}
          transition={{ duration: 0.5, delay: 2.1 }}
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
          animate={{ opacity: 0.8, y: 10 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        >
          <FaXTwitter />
        </motion.a>
      </AnimatedTooltip>
      <AnimatedTooltip tooltipText="Mail">
        <motion.a
          href="mailto:moh.osmanrasooli@gmail.com"
          className="block text-white text-2xl"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.8, y: 10 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <MdOutlineAlternateEmail />
        </motion.a>
      </AnimatedTooltip>
    </motion.div>
  );
};

export default Social;
