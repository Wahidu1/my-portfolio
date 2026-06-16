import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

const STROKE = '#2D323E';
const STROKE_BRIGHT = '#3D4454';

export default function AnimatedLogo({
  className = '',
  size = 120,
  animate = true,
}) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  const pathProps = shouldAnimate
    ? {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: 0.8, ease: 'easeInOut' },
      }
    : {};

  const delayPath = (delay) =>
    shouldAnimate
      ? {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.7, ease: 'easeInOut', delay },
        }
      : {};

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-label="Wahidul Islam logo"
      role="img"
    >
      {/* Square frame - broken at bottom-left and top-right by W */}
      <motion.path
        d="M12 12 H88 V88 H12 Z"
        fill="none"
        stroke={STROKE}
        strokeWidth="3"
        strokeLinecap="square"
        {...pathProps}
      />
      {/* Frame break - bottom left */}
      <motion.line
        x1="12"
        y1="88"
        x2="28"
        y2="88"
        stroke={STROKE}
        strokeWidth="3"
        {...delayPath(0.2)}
      />
      {/* Frame break - top right segment */}
      <motion.line
        x1="72"
        y1="12"
        x2="88"
        y2="12"
        stroke={STROKE}
        strokeWidth="3"
        {...delayPath(0.25)}
      />

      {/* Terminal prompt > _ top-left */}
      <motion.text
        x="18"
        y="28"
        fill={STROKE_BRIGHT}
        fontSize="8"
        fontFamily="JetBrains Mono, monospace"
        initial={shouldAnimate ? { opacity: 0 } : {}}
        animate={shouldAnimate ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        {`> _`}
      </motion.text>

      {/* Underscore bottom-right */}
      <motion.line
        x1="72"
        y1="82"
        x2="82"
        y2="82"
        stroke={STROKE_BRIGHT}
        strokeWidth="2"
        {...delayPath(0.6)}
      />

      {/* Stylized W */}
      <motion.path
        d="M8 88 L22 42 L38 72 L54 32 L70 72 L86 42 L92 88"
        fill="none"
        stroke={STROKE}
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        {...delayPath(0.35)}
      />
      {/* W left stroke extending out */}
      <motion.line
        x1="8"
        y1="88"
        x2="8"
        y2="55"
        stroke={STROKE}
        strokeWidth="4"
        {...delayPath(0.3)}
      />
      {/* W right diagonals breaking frame */}
      <motion.line
        x1="86"
        y1="42"
        x2="92"
        y2="12"
        stroke={STROKE}
        strokeWidth="4"
        {...delayPath(0.45)}
      />
    </svg>
  );
}
