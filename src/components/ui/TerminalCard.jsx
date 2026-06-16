import { motion } from 'framer-motion';
import { cardReveal, cardHoverLift, staggerItem } from '../../utils/motionVariants';
import TerminalCardChrome from './TerminalCardChrome';

export default function TerminalCard({
  index = 0,
  filePath,
  tabLabel,
  children,
  className = '',
  onClick,
  role,
  tabIndex,
  onKeyDown,
  'aria-label': ariaLabel,
  hover = true,
  stagger = false,
}) {
  const motionProps = stagger ? { variants: staggerItem } : cardReveal(index);
  const hoverProps = hover ? cardHoverLift : {};

  return (
    <motion.div
      className={`terminal-card flex flex-col ${className}`}
      {...motionProps}
      {...hoverProps}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
    >
      {filePath && <TerminalCardChrome filePath={filePath} tabLabel={tabLabel} />}
      <div className="terminal-card-body flex flex-col flex-1">{children}</div>
    </motion.div>
  );
}
