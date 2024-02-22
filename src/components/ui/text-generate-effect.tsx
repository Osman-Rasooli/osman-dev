import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [ref, inView] = useInView();
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (inView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 1.8,
          delay: stagger(0.12),
        }
      );
    }
  }, [inView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" text-slate-300 opacity-0 font-gilroyLight"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-slate-300 text-lg md:text-xl  lg:text-2xl leading-relaxed tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
