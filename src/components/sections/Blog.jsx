import { useEffect, useState } from "react";
import BlogCard from "../ui/BlogCard";
import SectionCard from "../ui/SectionCard";
import { getBlogs } from "../../services/blogService";

export default function Blog() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogs = await getBlogs();
        const data = blogs.results || [];
        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          excerpt: item.excerpt,
          content: item.content,
          image: item.image,
          published_at: item.published_at
        }))

        setBlogs(formatted);
      } catch (err) {
        console.error("Error loading projects:", err);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <section className="bg-gray-50 text-black py-24 px-6 md:px-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <SectionCard
        heading={"Blog"}
        subtext={"Sharing insights, tutorials, and my thoughts on backend development, Django, and software engineering."}

        />
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
