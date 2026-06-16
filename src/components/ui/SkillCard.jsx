import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TerminalCard from "./TerminalCard";
import { progressBarFill } from "../../utils/motionVariants";

function buildBar(level) {
  const filled = Math.round(level / 10);
  const empty = 10 - filled;
  return `[${"█".repeat(filled)}${"░".repeat(empty)}] ${level}%`;
}

export default function SkillCard({ skill, index, stagger = false }) {
  return (
    <TerminalCard index={index} stagger={stagger} filePath={`skills/${skill.name.toLowerCase().replace(/\s+/g, "_")}.json`}>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 flex items-center justify-center border border-[var(--color-border-strong)] bg-[var(--color-bg-muted)]"
            whileHover={{ rotate: [0, -4, 4, 0], transition: { duration: 0.4 } }}
          >
            {skill.isImage ? (
              <img src={skill.icon} alt={skill.name} className="w-7 h-7 object-contain" />
            ) : (
              <FontAwesomeIcon icon={skill.icon} className="text-gray-700 text-lg" />
            )}
          </motion.div>
          <h3 className="terminal-card-title">{skill.name}</h3>
        </div>

        <motion.p
          className="font-mono text-xs text-[var(--color-syntax)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.05 }}
        >
          {buildBar(skill.level)}
        </motion.p>

        <div className="w-full bg-gray-100 h-1.5 mt-3 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-[var(--color-accent)] to-[#38bdf8] h-full"
            {...progressBarFill(skill.level, index)}
          />
        </div>
      </div>
    </TerminalCard>
  );
}
