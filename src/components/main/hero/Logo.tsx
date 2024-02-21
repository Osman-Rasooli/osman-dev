import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo absolute top-5 left-0 z-50 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0.2, width: "0" }}
        whileInView={{ opacity: 0.8, width: "43vw" }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="border-t-2 border-slate-400 w-20 h-2"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 0.8, x: 10 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="w-32 h-32 -m-10 md:-m-5"
      >
        <a href="/" className="block w-full h-full">
          <img src={logo} alt="Logo - Osman Rasooli" />
        </a>
      </motion.div>
    </div>
  );
};

export default Logo;
