import { motion } from "framer-motion";

export default function SectionSeparator({ color = "#E5E7EB", height = 80 }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {/* Animated Wavy Line */}
      <motion.svg
        className="w-full h-full absolute top-0 left-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,138.7C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </motion.svg>

      {/* Floating Circles */}
      <motion.div
        className="absolute bg-gray-200 rounded-full w-8 h-8 top-10 left-1/4 opacity-40 pointer-events-none"
        animate={{ y: [0, 10, 0], x: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-gray-300 rounded-full w-12 h-12 bottom-0 right-1/3 opacity-30 pointer-events-none"
        animate={{ y: [0, -15, 0], x: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bg-gray-100 rounded-full w-6 h-6 top-1/3 right-1/4 opacity-40 pointer-events-none"
        animate={{ y: [0, 8, 0], x: [0, 4, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
