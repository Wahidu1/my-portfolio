import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProjectById } from "../../services/projectService";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        setLoading(true);
        const data = await getProjectById(id);
        const p = data.results;
        if (p) {
          setProject({
            id: p.id, title: p.title, subtext: p.subtext, description: p.description,
            image: p.image, technologies: p.technologies,
            live_link: p.live_link, github_link: p.github_link,
          });
        } else setProject(null);
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
      <section className="section-padding min-h-[60vh] flex items-center justify-center">
        <p className="font-mono text-gray-400 text-sm animate-pulse">&gt; loading project...</p>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="section-padding min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-gray-500">&gt; project not found</p>
        <Link to="/#works" className="btn-secondary text-sm">&lt; back_to_works</Link>
      </section>
    );
  }

  const isConfidential = !project.live_link && !project.github_link;

  return (    <section className="section-padding bg-white min-h-screen">
      <div className="section-container max-w-3xl">
        <Link to="/#works" className="inline-flex items-center font-mono text-sm text-gray-500 hover:text-[var(--color-accent)] mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> back_to_works
        </Link>

        <motion.div className="terminal-panel overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="px-4 py-2 border-b border-[var(--color-border-strong)] bg-[var(--color-bg-muted)] font-mono text-xs text-gray-500">
            projects/{project.id}.tsx
          </div>
          <div className="h-64 md:h-80 overflow-hidden border-b border-[var(--color-border-strong)]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 md:p-8 space-y-6">
            <h1 className="terminal-page-title">{project.title}</h1>
            <p className="font-mono text-sm text-[var(--color-accent)] italic mt-2">{project.subtext}</p>
            <p className="terminal-card-body mt-4 leading-relaxed">{project.description || "No detailed description available."}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="font-mono text-xs px-2 py-1 border border-[var(--color-border-strong)] text-[var(--color-syntax)]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2 items-center">
              {isConfidential && (
                <span className="font-mono text-xs px-3 py-2 border border-[var(--color-border-strong)] text-gray-500 bg-[var(--color-bg-muted)]">
                  nda · no public demo
                </span>
              )}
              {project.live_link && (                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  <ExternalLink size={14} /> live_demo
                </a>
              )}
              {project.github_link && (
                <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">github</a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
