import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TerminalCard from "./TerminalCard";

export default function BlogCard({ blog, index, stagger = false }) {
  const { title, slug, content, image, published_at } = blog;

  return (
    <TerminalCard index={index} stagger={stagger} filePath={`blog/${slug}.md`} className="h-full">
      {image && (
        <div className="terminal-card-image-wrap terminal-card-shimmer h-44">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <p className="font-mono text-xs text-[var(--color-accent)] mb-2">{published_at}</p>
        <h3 className="terminal-card-title mb-2">{title}</h3>
        <p className="terminal-card-body line-clamp-3 flex-grow">{content}</p>
        <Link
          to={`/blog/${slug}`}
          className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-[var(--color-accent)] group/link"
        >
          <span className="group-hover/link:underline">&gt; read_more</span>
          <ArrowUpRight size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </TerminalCard>
  );
}
