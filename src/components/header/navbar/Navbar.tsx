import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../../utils/cn";

const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto gap-1 rounded-[5px] border-zinc-900 border-[1px]  bg-violet-800 shadow-md shadow-stone-700 z-[5000]  px-4 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map(
          (
            navItem: { link: string; name: string; icon?: React.ReactNode },
            idx: number
          ) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-slate-200 font-gilroyBold  hover:text-slate-400 transition-all duration-200 px-[1px] sm:px-2 py-3"
              )}
            >
              <span className="hidden sm:inline-block mr-[0px] sm:mr-[2px]">
                {navItem.icon}
              </span>
              <span className=" text-sm text-[14px]">{navItem.name}</span>
            </a>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
