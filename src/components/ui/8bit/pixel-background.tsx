import { motion } from "framer-motion";

export const PixelBackground = () => {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/80"
          initial={{ top: -50, left: `${Math.random() * 100}%` }}
          animate={{ top: "110%", left: `${Math.random() * 100}%` }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{ width: 10, height: 10 }}
        />
      ))}
    </div>
  );
};
