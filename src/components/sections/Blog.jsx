import { useEffect, useState } from "react";
import BlogCard from "../ui/BlogCard";
import SectionCard from "../ui/SectionCard";
import StaggerGrid from "../ui/StaggerGrid";
import { getBlogs } from "../../services/blogService";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await getBlogs();
        setBlogs((res.results || []).map((item) => ({
          id: item.id, title: item.title, slug: item.slug,
          content: item.content, image: item.image, published_at: item.published_at,
        })));
      } catch (err) {
        console.error("Error loading blogs:", err);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <section className="section-padding section-alt">
      <div className="section-container">
        <SectionCard heading="Blog" label="// blog" subtext="Insights on backend development and software engineering." />
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog, idx) => (
            <BlogCard key={blog.id || idx} blog={blog} index={idx} stagger />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
