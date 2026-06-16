import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function MousePointer() {
  const prefersReducedMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      setHover(!!e.target.closest("a, button, [data-hover], input, textarea"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      animate={{ x: pos.x - 8, y: pos.y - 8 }}
      transition={{ type: "spring", stiffness: 800, damping: 30 }}
    >
      <div
        className={`w-4 h-4 border transition-all duration-150 ${
          hover
            ? "border-[var(--color-accent)] bg-[var(--color-accent)]/20 scale-150"
            : "border-[var(--color-accent)]/70 bg-transparent"
        }`}
        style={{ borderRadius: 0 }}
      />
    </motion.div>
  );
}
