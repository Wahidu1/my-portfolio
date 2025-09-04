// ui/TestimonialCard.jsx
import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 mx-auto border border-gray-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start text-gray-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>

          <p className="text-gray-700 text-lg italic mb-6 relative">
            <span className="absolute -top-4 -left-2 text-5xl text-gray-300 font-serif">"</span>
            {testimonial.feedback}
            <span className="absolute -bottom-6 -right-2 text-5xl text-gray-300 font-serif">"</span>
          </p>

          <div>
            <h4 className="text-lg font-semibold text-black">{testimonial.name}</h4>
            <span className="text-sm text-gray-600">{testimonial.role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
