/** Modern motion presets — spring-based, scroll-triggered */

export const springSnappy = { type: 'spring', stiffness: 260, damping: 24 };
export const springSmooth = { type: 'spring', stiffness: 120, damping: 18 };
export const springSoft = { type: 'spring', stiffness: 80, damping: 16 };

export const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: easeOut },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.45, ease: easeOut },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

export const slideInRight = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: springSmooth,
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springSmooth,
  },
};

export const viewFadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: easeOut },
};

/** Card scroll reveal with index-based stagger */
export function cardReveal(index = 0) {
  return {
    initial: { opacity: 0, y: 32, scale: 0.96 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: '-40px' },
    transition: { ...springSmooth, delay: index * 0.07 },
  };
}

/** Lift + subtle scale on hover */
export const cardHoverLift = {
  whileHover: {
    y: -8,
    transition: { duration: 0.28, ease: easeOut },
  },
  whileTap: { scale: 0.985 },
};

export const imageHoverZoom = {
  whileHover: { scale: 1.06 },
  transition: { duration: 0.45, ease: easeOut },
};

export const tagPop = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  transition: springSnappy,
};

export const sectionHeaderLabel = {
  initial: { opacity: 0, y: 12, letterSpacing: '0.2em' },
  whileInView: { opacity: 1, y: 0, letterSpacing: '0.05em' },
  viewport: { once: true },
  transition: { duration: 0.5, ease: easeOut },
};

export const sectionHeaderTitle = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: easeOut, delay: 0.08 },
};

export const progressBarFill = (level, index = 0) => ({
  initial: { width: 0 },
  whileInView: { width: `${level}%` },
  viewport: { once: true },
  transition: { duration: 1.1, ease: easeOut, delay: 0.15 + index * 0.06 },
});

export const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
};

export const modalContent = {
  initial: { opacity: 0, scale: 0.9, y: 16 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 8 },
  transition: springSmooth,
};

export const heroStagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

export const heroItem = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: easeOut },
};
