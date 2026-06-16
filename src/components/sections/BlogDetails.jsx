import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogBySlug } from "../../services/blogService";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const data = await getBlogBySlug(slug);
        const b = data.results;
        if (!b) { setBlog(null); return; }
        setBlog({
          id: b.id, title: b.title, slug: b.slug,
          content: b.content, image: b.image, published_at: b.published_at,
        });
      } catch (err) {
        console.error("Failed to load blog:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  if (loading) {
    return <div className="section-padding text-center font-mono text-gray-400 text-sm animate-pulse">&gt; loading post...</div>;
  }

  if (!blog) {
    return (
      <div className="section-padding text-center">
        <p className="font-mono text-gray-500 mb-4">&gt; blog not found</p>
        <Link to="/#blog" className="btn-secondary text-sm">&lt; back_to_blog</Link>
      </div>
    );
  }

  return (
    <motion.article className="section-padding bg-white min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="section-container max-w-2xl">
        <Link to="/#blog" className="inline-flex items-center font-mono text-sm text-gray-500 hover:text-[var(--color-accent)] mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> back_to_blog
        </Link>

        <div className="terminal-panel overflow-hidden">
          <div className="px-4 py-2 border-b border-[var(--color-border-strong)] bg-[var(--color-bg-muted)] font-mono text-xs text-gray-500">
            blog/{blog.slug}.md
          </div>
          <div className="p-6 md:p-10">
            <h1 className="terminal-page-title mb-3">{blog.title}</h1>
            <p className="font-mono text-xs text-[var(--color-accent)] mb-8">
              {blog.published_at ? new Date(blog.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""}
            </p>
            {blog.image && (
              <div className="w-full h-64 md:h-80 overflow-hidden border border-[var(--color-border-strong)] mb-10">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="prose-light">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
