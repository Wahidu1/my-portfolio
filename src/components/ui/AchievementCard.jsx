import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerminalCard from "./TerminalCard";
import { modalBackdrop, modalContent } from "../../utils/motionVariants";

export default function AchievementCard({ title, organization, date, image, index = 0, stagger = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const fileName = title?.slice(0, 24).replace(/\s+/g, "_") || "certificate";

  return (
    <>
      <TerminalCard
        index={index}
        stagger={stagger}
        filePath={`cert/${fileName}.jpg`}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
        aria-label={`View certificate: ${title}`}
      >
        <div className="terminal-card-image-wrap h-40">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="terminal-card-title">{title}</h3>
          <p className="terminal-meta mt-1">{organization}</p>
          <p className="font-mono text-xs text-[var(--color-accent)] mt-1.5">{date}</p>
        </div>
      </TerminalCard>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            {...modalBackdrop}
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              src={image}
              alt={title}
              className="max-w-full max-h-[90vh] border-2 border-white shadow-2xl"
              {...modalContent}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
