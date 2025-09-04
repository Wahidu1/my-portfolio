import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogCard({ blog, index }) {

  const {id, title, slug, excerpt, content, image, published_at} = blog;
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:scale-[1.02] transition-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      {/* Blog Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-gray-500 text-sm mb-2">{published_at}</p>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700 text-sm line-clamp-3">{content}</p>
        </div>
        <Link
          to={`/blog/${slug}`}
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm font-semibold text-black border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
}
