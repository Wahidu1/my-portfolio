import { motion } from "framer-motion";
import TerminalTyping from "../ui/TerminalTyping";

export default function AnimatedHero({ path = "/portfolio", title = "Portfolio" }) {
  return (
    <section className="min-h-[18vh] flex items-center justify-center section-padding pt-28 pb-8 border-b border-[var(--color-border)]">
      <motion.div
        className="max-w-4xl w-full font-mono text-left"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[var(--color-text-muted)] text-sm mb-2">
          <span className="text-[var(--color-accent)]">$</span> cd {path}
        </p>
        <h1 className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-bold">
          <span className="text-[var(--color-accent)]">&gt; </span>
          <TerminalTyping text={title} speed={40} delay={300} />
        </h1>
      </motion.div>
    </section>
  );
}
