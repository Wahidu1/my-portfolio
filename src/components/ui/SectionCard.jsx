import { motion } from "framer-motion";

export default function SectionCard({ heading, subtext }) {
  return (
    <motion.div
      className="max-w-3xl mx-auto bg-transparent text-center backdrop-blur-md mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 font-asimovian text-black dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {heading}
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-dancing-script"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {subtext}
      </motion.p>
    </motion.div>
  );
}
