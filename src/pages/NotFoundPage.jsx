import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedLogo from "../components/ui/AnimatedLogo";

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center section-padding text-center bg-white">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <AnimatedLogo size={90} />
      </motion.div>
      <motion.div className="mt-8 font-mono" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <p className="text-[var(--color-accent)] text-sm mb-2">$ curl /unknown-route</p>
        <h1 className="terminal-page-title mb-2">&gt; command not found</h1>
        <p className="terminal-section-sub mb-8">Error 404: The requested path does not exist.</p>
        <Link to="/" className="btn-primary">&gt; cd ~/</Link>
      </motion.div>
    </section>
  );
}
