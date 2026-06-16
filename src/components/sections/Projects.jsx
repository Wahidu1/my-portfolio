import { useState, useEffect } from "react";
import SectionCard from "../ui/SectionCard";
import ProjectCard from "../ui/ProjectCard";
import { getProjects } from "../../services/projectService";
import projectsData from "../../data/projects.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await getProjects();
        const list = res.results || [];
        setProjects(list.map((item) => ({
          id: item.id,
          title: item.title,
          subtext: item.subtext,
          image: item.image,
          technologies: item.technologies,
          live_link: item.live_link,
          github_link: item.github_link,
        })));
      } catch (err) {
        console.error("Error loading projects:", err);
        setProjects(projectsData.map((item) => ({
          id: item.id,
          title: item.title,
          subtext: item.subtext,
          image: item.image,
          technologies: item.technologies,
          live_link: item.live_link,
          github_link: item.github_link,
        })));
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className="section-padding section-alt">
      <div className="section-container">
        <SectionCard heading="Selected Work" label="// projects" subtext="Enterprise systems under NDA and selected open-source work." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.length === 0 ? (
            <p className="font-mono text-sm text-gray-500 col-span-full">&gt; loading projects...</p>
          ) : (
            projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} stagger={false} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
