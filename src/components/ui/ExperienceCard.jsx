import { motion } from "framer-motion";

export default function ExperienceCard({ exp, index }) {
  const {title, company, description, start_date, end_date} = exp;
  return (
    <motion.div
      className="relative pl-10 pb-12 border-l border-gray-300 last:pb-0"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* Timeline dot */}
      <span className="absolute left-0 top-1 w-4 h-4 bg-black rounded-full border-2 border-white shadow-md"></span>

      {/* Content */}
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <span className="text-sm text-gray-500">{company} • {start_date} - {end_date ? end_date : "Present"}</span>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
