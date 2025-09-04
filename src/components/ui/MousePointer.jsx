import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MousePointer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 0.8,
      // boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
    },
    hover: {
      scale: 1.5,
      opacity: 1,
      // boxShadow: "0 0 12px rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      transition={{ type: "spring", stiffness: 600, damping: 25 }}
    >
      <motion.div
        className="w-8 h-8 rounded-full border-2 border-black/70 bg-transparent mix-blend-difference"
        variants={cursorVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 rounded-full border border-black/30 mix-blend-difference"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
