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
      setTimeout(() => {
        animate(
          "span",
          {
            opacity: 1,
          },
          {
            duration: 1.5,
            delay: stagger(0.1),
          }
        );
      }, 800); // Delay of 1 second (1000 milliseconds)
    }
  }, [inView]);

  const renderWords = () => {
    const highlightedWords = ["Frontend", "Developer", "UI/UX", "Designer"];
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`text-slate-400 opacity-0 leading-9 tracking-wider ${
                highlightedWords.includes(word) &&
                "text-white font-gilroyBold uppercase"
              }`}
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
        <div>{renderWords()}</div>
      </div>
    </div>
  );
};
