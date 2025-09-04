import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProjectById } from "../../services/projectService";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProject() {
      try {
        setLoading(true);
        const data = await getProjectById(id);
        const projectData = data.results; // <-- use results from API

        if (projectData) {
          setProject({
            id: projectData.id,
            title: projectData.title,
            subtext: projectData.subtext,
            description: projectData.description,
            image: projectData.image,
            technologies: projectData.technologies,
            live_link: projectData.live_link,
            github_link: projectData.github_link,
          });
        } else {
          setProject(null);
        }
      } catch (err) {
        console.error("Failed to load project:", err);
        setProject(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);


  if (loading) {
    return (
      <section className="bg-white py-24 px-6 md:px-20 flex justify-center items-center min-h-screen">
        <div className="text-gray-600 text-lg animate-pulse">Loading Project Details...</div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="bg-white py-24 px-6 md:px-20 flex justify-center items-center min-h-screen">
        <div className="text-gray-600 text-lg">Project not found</div>
      </section>
    );
  }

  return (
    <section className="bg-white py-24 px-6 md:px-20 relative min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition text-sm md:text-base"
            aria-label="Back to projects list"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Details Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Project Image */}
          <div className="relative w-full h-64 md:h-96 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Content */}
          <div className="p-6 md:p-8 flex flex-col gap-6">
            <h1 className="text-2xl md:text-4xl font-bold text-black">{project.title}</h1>
            <p className="text-gray-600 text-base md:text-lg italic">{project.subtext}</p>
            <div className="prose text-gray-800 max-w-none text-sm md:text-base">
              <p>{project.description || "No detailed description available."}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black text-white rounded-xl text-sm md:text-base hover:bg-gray-800 transition"
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo
                </a>
              )}
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 text-gray-800 rounded-xl text-sm md:text-base hover:bg-gray-100 transition"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Accent Shapes */}
      <motion.div
        className="absolute -top-12 -left-12 w-24 h-24 bg-gray-200 rounded-full opacity-30 pointer-events-none"
        animate={{ y: [0, 10, 0], x: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-32 h-32 bg-gray-300 rounded-full opacity-20 pointer-events-none"
        animate={{ y: [0, -15, 0], x: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
