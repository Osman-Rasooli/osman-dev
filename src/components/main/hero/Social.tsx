import { FaGithub, FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
import AnimatedTooltip from "../../ui/animated-tooltip";

const Social = () => {
  return (
    <motion.div
      className="absolute md:fixed top-0 left-5  z-50 flex flex-col gap-3"
      initial={{ opacity: 0.2, height: "0" }}
      whileInView={{ opacity: 1, height: "9.5rem" }}
      viewport={{ once: true }}
      transition={{
        delay: 0.9,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="border-l-2 border-gray-300 mx-auto h-20"></div>
      <AnimatedTooltip tooltipText="Github">
        <motion.a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-2xl"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <FaGithub />
        </motion.a>
      </AnimatedTooltip>

      <AnimatedTooltip tooltipText="Facebook">
        <motion.a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white text-2xl"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <FaFacebook />
        </motion.a>
      </AnimatedTooltip>
    </motion.div>
  );
};

export default Social;
