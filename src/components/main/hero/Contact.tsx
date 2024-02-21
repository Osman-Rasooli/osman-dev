import { FaGithub, FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-7 z-50 flex flex-col gap-3"
      initial={{ opacity: 0.2, height: "0" }}
      whileInView={{ opacity: 1, height: "9.5rem" }}
      viewport={{ once: true }}
      transition={{
        delay: 0.8,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white text-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-white text-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <FaFacebook />
      </motion.a>
      <div className="border-l-2 border-gray-300 mx-auto h-20"></div>
    </motion.div>
  );
};

export default Contact;
