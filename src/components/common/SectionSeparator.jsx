import { motion } from "framer-motion";

export default function SectionSeparator({ label = "", height = 48 }) {
  return (
    <div
      className="relative w-full flex items-center justify-center px-6"
      style={{ minHeight: height }}
    >
      <div className="flex-1 h-px bg-[var(--color-border)]" />
      {label && (
        <motion.span
          className="px-4 font-mono text-xs text-[var(--color-text-muted)] whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {label}
        </motion.span>
      )}
      <div className="flex-1 h-px bg-[var(--color-border)]" />
    </div>
  );
}
