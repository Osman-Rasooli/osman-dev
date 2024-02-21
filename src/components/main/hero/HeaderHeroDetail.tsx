import { motion } from "framer-motion";
import LampContainer from "../../ui/lamp";

export default function HeaderHeroDetail() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center tracking-tight text-transparent"
      >
        <h1 className="text-4xl font-medium md:text-7xl">Osman Rasooli</h1>
        <h3 className="text-2xl">Fronend Developer | UI/UX Designer</h3>
      </motion.h1>
    </LampContainer>
  );
}
