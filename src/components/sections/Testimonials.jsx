// sections/Testimonials.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../ui/TestimonialCard";
import SectionCard from "../ui/SectionCard";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback:
      "Wahid is an exceptional developer. His backend expertise in Django and DRF helped us scale seamlessly.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Product Manager, InnovateX",
    feedback:
      "Clean APIs, scalable systems, and clear communication — Wahid delivered everything beyond expectations!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Michael Smith",
    role: "CTO, StartHub",
    feedback:
      "Working with Wahid was a smooth experience. He has strong technical skills and is highly reliable.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-16 relative bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <SectionCard heading={"Client Testimonials"} subtext={"Don't just take our word for it. Here's what clients and colleagues have to say about working with me."}/>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 30
              }
            }}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active'
            }}
            className="pb-16"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <TestimonialCard testimonial={t} index={idx} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination flex justify-center gap-2 mt-8" />
        </div>
      </div>

      <style jsx>{`
        :global(.testimonial-bullet) {
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        :global(.testimonial-bullet-active) {
          width: 30px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
