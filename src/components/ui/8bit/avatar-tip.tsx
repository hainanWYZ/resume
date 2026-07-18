import { motion } from "framer-motion";

export const AvatarTip = () => {
  return (
    <motion.div
      className="absolute -top-24 -left-16 flex flex-col items-center gap-1 pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <span className="text-white bg-black/80 px-2 py-1 text-xs border border-white whitespace-nowrap">
        tip: 点击头像切换另一个我
      </span>
      <motion.svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50 10 C 20 10, 5 40, 45 50"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M45 50 L 40 45 M 45 50 L 42 55"
          stroke="white"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </motion.svg>
    </motion.div>
  );
};
