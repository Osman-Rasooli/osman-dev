import { motion } from "framer-motion";
const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="flex pt-20 pb-10 md:p-0  justify-start items-center gap-5 max-w-[25vw]">
      <motion.div
        initial={{ opacity: 0.2, width: 0 }}
        whileInView={{ opacity: 0.8, width: "5rem" }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="border-b-2 border-slate-400 w-20"
      ></motion.div>
      <motion.h2
        initial={{ opacity: 0, x: "-1rem" }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className=" text-slate-200 font-gilroyBold text-5xl md:text-[5vw]"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
