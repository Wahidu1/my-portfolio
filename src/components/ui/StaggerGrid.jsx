import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motionVariants';

export default function StaggerGrid({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.div>
  );
}
