import { motion } from 'framer-motion';
import { scaleIn } from '../../utils/motionVariants';

export default function TerminalWindow({
  title = '~/portfolio',
  tabLabel = 'terminal',
  children,
  className = '',
}) {
  return (
    <motion.div
      className={`terminal-card overflow-hidden ${className}`}
      {...scaleIn}
    >
      <div className="terminal-card-chrome flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border-strong)] bg-gradient-to-r from-[var(--color-bg-muted)] to-white">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="ml-1.5 font-mono text-xs text-gray-500 truncate flex-1">{title}</span>
        {tabLabel && (
          <span className="font-mono text-xs text-[var(--color-accent)] hidden sm:inline">{tabLabel}</span>
        )}
      </div>
      <div className="p-4 md:p-6 font-mono text-sm relative z-[1]">{children}</div>
    </motion.div>
  );
}
