import { motion } from "framer-motion";

export default function AnimatedHero() {
  return (
    <section className="bg-white min-h-[20vh] flex items-center justify-center relative overflow-hidden">

      {/* Circle 1 */}
      <motion.div
        className="absolute w-20 h-20 bg-amber-400 rounded-full opacity-40 top-8 left-1/4"
        animate={{ y: [0, 12, 0], x: [0, 8, -8, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Circle 2 */}
      <motion.div
        className="absolute w-28 h-28 bg-cyan-500 rounded-full opacity-30 top-12 right-1/3"
        animate={{ y: [0, -15, 0], x: [0, -10, 10, 0], rotate: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Circle 3 */}
      <motion.div
        className="absolute w-16 h-16 bg-gray-900 rounded-full opacity-20 top-1/2 left-2/3"
        animate={{ y: [0, 8, 0], x: [0, 4, -4, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Circle 4 */}
      <motion.div
        className="absolute w-12 h-12 bg-pink-500 rounded-full opacity-25 top-2/3 left-1/3"
        animate={{ y: [0, -8, 0], x: [0, 6, -6, 0], rotate: [0, 180, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Circle 5 */}
      <motion.div
        className="absolute w-20 h-20 bg-green-400 rounded-full opacity-35 bottom-8 right-1/4"
        animate={{ y: [0, 10, 0], x: [0, -8, 8, 0], rotate: [0, 60, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

    </section>
  );
}
