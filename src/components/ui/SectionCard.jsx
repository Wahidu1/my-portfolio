import { motion } from "framer-motion";
import { sectionHeaderLabel, sectionHeaderTitle } from "../../utils/motionVariants";

export default function SectionCard({ heading, subtext, label }) {
  const sectionLabel = label || `// ${heading?.toLowerCase().replace(/\s+/g, "_")}`;

  return (
    <div className="text-center mb-12 md:mb-14 max-w-2xl mx-auto">
      <motion.p className="terminal-section-label mb-3" {...sectionHeaderLabel}>
        {sectionLabel}
      </motion.p>

      <motion.h2 className="terminal-section-heading" {...sectionHeaderTitle}>
        <motion.span
          className="terminal-section-prompt inline-block mr-1"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          &gt;
        </motion.span>
        {heading}
      </motion.h2>

      {subtext && (
        <motion.p
          className="terminal-section-sub mt-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtext}
        </motion.p>
      )}

      <motion.div
        className="mt-6 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
      />
    </div>
  );
}
