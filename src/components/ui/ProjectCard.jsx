import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index }) {

  const {id, title, subtext, live_link, github_link, technologies, image } = project;
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      <div className="flex flex-col">
        {/* Image, Title, and Subtext are clickable */}
        <Link to={`/projects/${id}`}>
          <div className="relative w-full h-48 md:h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-black">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{subtext}</p>
          </div>
        </Link>

        {/* Technology tags and buttons are not wrapped in Link */}
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs md:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            {live_link && (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white rounded-xl text-sm hover:bg-gray-800 transition"
              >
                Live Demo
              </a>
            )}
            {github_link && (
              <a
                href={github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 text-gray-800 rounded-xl text-sm hover:bg-gray-100 transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
