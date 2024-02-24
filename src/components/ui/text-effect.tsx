import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

interface TextEffectProps {
  text: string;
  className?: string;
}

const TextEffect: React.FC<TextEffectProps> = ({ text, className = "" }) => {
  const renderedText = text
    .split("")
    .map((char, idx) => <TextSpan key={idx}>{char}</TextSpan>);

  return <div className={className}>{renderedText}</div>;
};

const TextSpan: React.FC<{ children: string }> = ({ children }) => {
  const controls = useAnimationControls();

  const [isAnimating, setIsAnimating] = useState(false);

  const Effect = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      controls.start({
        transform: [
          "scale3d(1,1,1)",
          "scale3d(1.4,.55,1)",
          "scale3d(.75,1.25,1)",
          "scale3d(1.25,.85,1)",
          "scale3d(.9,1.05,1)",
          "scale3d(1,1,1)",
        ],
        color: ["white"],
      });
    }
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={Effect}
      onAnimationComplete={() => setIsAnimating(false)}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.span>
  );
};

export default TextEffect;
