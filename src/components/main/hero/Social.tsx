import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import AnimatedTooltip from "../../ui/animated-tooltip";

const Social = () => {
  return (
    <motion.div
      className="absolute md:fixed top-0 left-5  z-100000 flex flex-col gap-3"
      initial={{ opacity: 0.2, height: "0" }}
      whileInView={{ opacity: 0.8, height: "12.5rem" }}
      viewport={{ once: true }}
      transition={{
        delay: 0.9,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="border-l-2 border-slate-400 mx-auto h-20"></div>
      <AnimatedTooltip tooltipText="Github">
        <motion.a
          href="https://github.com/Osman-Rasooli"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-2xl"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.8, y: 10 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <FaGithub />
        </motion.a>
      </AnimatedTooltip>

      <AnimatedTooltip tooltipText="LinkedIn">
        <motion.a
          href="https://www.linkedin.com/in/mohammad-osman-rasooli-420228192/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-2xl"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.8, y: 10 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <FaLinkedinIn />
        </motion.a>
      </AnimatedTooltip>
      <AnimatedTooltip tooltipText="X">
        <motion.a
          href="https://twitter.com/OsRasooli"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-2xl"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.8, y: 10 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          <FaXTwitter />
        </motion.a>
      </AnimatedTooltip>
    </motion.div>
  );
};

export default Social;
