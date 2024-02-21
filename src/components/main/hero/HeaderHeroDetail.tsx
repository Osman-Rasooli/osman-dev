import { motion } from "framer-motion";

export default function HeaderHeroDetail() {
  return (
    <div className="absolute z-10 inset-0 flex flex-col items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="bg-gradient-to-br from-slate-400 to-slate-50 py-4 bg-clip-text text-center tracking-tight text-transparent"
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
  );
}
