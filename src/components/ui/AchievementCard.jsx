import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AchievementCard({ title, organization, date, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{organization}</p>
        <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">{date}</p>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              src={image}
              alt={title}
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
