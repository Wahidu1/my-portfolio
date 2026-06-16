import { motion } from "framer-motion";
import { springSmooth } from "../../utils/motionVariants";

export default function ExperienceCard({ exp, index }) {
  const { title, company, description, start_date, end_date } = exp;

  return (
    <motion.div
      className="relative pl-8 pb-10 border-l-2 border-gray-200 last:pb-0 group"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ ...springSmooth, delay: index * 0.1 }}
    >
      <motion.span
        className="absolute left-0 top-1.5 -translate-x-1/2 w-3.5 h-3.5 bg-[var(--color-accent)] border-[3px] border-white shadow-sm"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ ...springSmooth, delay: index * 0.1 + 0.15 }}
        whileHover={{ scale: 1.3 }}
      />

      <motion.p
        className="font-mono text-xs text-[var(--color-syntax)] mb-1.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        commit {String(index + 1).padStart(4, "0")}
      </motion.p>

      <h3 className="terminal-card-title group-hover:text-[var(--color-accent)] transition-colors duration-300">
        {title}
      </h3>
      <p className="terminal-meta mt-1">
        @ {company} · {start_date} — {end_date || "present"}
      </p>
      <p className="terminal-card-body mt-3 border-l-2 border-gray-100 pl-4 group-hover:border-[var(--color-accent)]/30 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
}
