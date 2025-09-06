import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogBySlug } from "../../services/blogService";
import ReactMarkdown from 'react-markdown';

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const data = await getBlogBySlug(slug);
        const blogData = data.results; // <-- use results from API
        const formatted = {
          id: blogData.id,
          title: blogData.title,
          slug: blogData.slug,
          excerpt: blogData.excerpt,
          content: blogData.content,
          image: blogData.image,
          published_at: blogData.published_at
        }
        setBlog(formatted);
      } catch (err) {
        console.error("Failed to load blog:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!blog) {
    return <div className="text-center py-20">Blog not found.</div>;
  }

  return (
    <motion.section
      className="max-w-4xl mx-auto py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Blog Header */}
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {blog.published_at ? new Date(blog.published_at).toLocaleDateString() : ""}
      </p>

      {/* Blog Image */}
      {blog.image && (
        <div className="w-full h-80 mb-8 overflow-hidden rounded-xl shadow">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Blog Content */}
  <article className="prose prose-lg max-w-none !text-justify">
    <ReactMarkdown>{blog.content}</ReactMarkdown>
  </article>
    </motion.section>
  );
}
