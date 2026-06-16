import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import TerminalCard from "./TerminalCard";

export default function ProjectCard({ project, index, stagger = false }) {
  const { id, title, subtext, live_link, github_link, technologies, image } = project;
  const isConfidential = !live_link && !github_link;

  return (
    <TerminalCard index={index} stagger={stagger} filePath={`projects/${id}.tsx`}>
      <Link to={`/projects/${id}`} className="block group flex-1 flex flex-col">
        <div className="terminal-card-image-wrap terminal-card-shimmer h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="p-5 flex-1">
          <h3 className="terminal-card-title mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {title}
          </h3>
          <p className="terminal-card-body line-clamp-2">{subtext}</p>
        </div>
      </Link>

      <div className="px-5 pb-5 space-y-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span key={idx} className="terminal-tag">{tech}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          {isConfidential && (
            <span className="font-mono text-xs px-2 py-1 border border-[var(--color-border-strong)] text-gray-500 bg-[var(--color-bg-muted)]">
              nda · no public demo
            </span>
          )}
          {live_link && (
            <a href={live_link} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-3">
              <ExternalLink size={13} /> live
            </a>
          )}
          {github_link && (
            <a href={github_link} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs py-2 px-3">
              github
            </a>
          )}
        </div>
      </div>
    </TerminalCard>
  );
}
