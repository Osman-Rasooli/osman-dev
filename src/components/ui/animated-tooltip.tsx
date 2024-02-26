import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedTooltip = ({
  children,
  tooltipText,
}: {
  children: React.ReactNode;
  tooltipText: string;
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <>
      <div
        className="relative group"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <AnimatePresence>
          {isTooltipVisible && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.6,
                rotate: -45,
                translateX: -50,
              }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, translateX: 0 }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.6,
                rotate: -45,
                translateX: -50,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              style={{
                position: "absolute",
                bottom: "calc(100% + 5px)",
                left: "150%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
              }}
              className="flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-sm shadow-slate-600 px-3 py-2"
            >
              <div className="font-bold text-[10px] text-white">
                {tooltipText}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative z-20">{children}</div>
      </div>
    </>
  );
};

export default AnimatedTooltip;
