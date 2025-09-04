import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SectionCard from '../ui/SectionCard';
import ProjectCard from '../ui/ProjectCard';
import { getProjects } from "../../services/projectService";


export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projects = await getProjects();
        const data = projects.results || [];

        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          subtext: item.subtext,
          description: item.description,
          image: item.image,
          technologies: item.technologies,
          live_link: item.live_link,
          github_link: item.github_link,

        }))
        setProjects(formatted);

      } catch (err) {
        console.error("Error loading projects:", err);
      }

    }
    fetchProjects();
  }, []);

  return (
    <section className="bg-white py-24 px-6 md:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        <SectionCard heading={"My Works"} subtext={"Here are some of the projects I’ve worked on, showcasing my ability to design, build, and deliver complete solutions."} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>

      {/* Floating accent shapes for style */}
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
