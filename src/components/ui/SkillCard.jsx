import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 bg-white rounded-2xl p-6 shadow-md cursor-pointer hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
        {skill.isImage ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 object-contain"
          />
        ) : (
          <FontAwesomeIcon icon={skill.icon} size="2x" className="text-black" />
        )}
      </div>

      <h3 className="text-lg font-semibold text-black">{skill.name}</h3>

      {/* Skill level bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-2">
        <motion.div
          className="bg-black h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  );
}
