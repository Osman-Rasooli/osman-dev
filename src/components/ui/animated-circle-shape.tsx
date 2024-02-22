import { motion } from "framer-motion";
const AnimatedCircleShape = ({
  deg,
  duration,
  color,
  className,
}: {
  deg: number[];
  duration: number;
  color: string;
  className: string;
}) => {
  return (
    <motion.div
      animate={{ rotate: deg }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      className={` w-96 absolute ${className} z-1000 ${color} border-[1px] rounded-casual-round text-white`}
    ></motion.div>
  );
};

export default AnimatedCircleShape;
