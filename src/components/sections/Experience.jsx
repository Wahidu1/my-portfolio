import { useEffect, useState } from "react";
import ExperienceCard from "../ui/ExperienceCard";
import { motion } from "framer-motion";
import { getExperiences } from "../../services/experienceService";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const response = await getExperiences();
        const data = response.results || [];
        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          company: item.company,
          description: item.description,
          start_date: item.start_date,
          end_date: item.end_date,
        }))
        setExperiences(formatted);
      } catch (err) {
        console.error("Error loading experiences:", err);
      }
    }
    fetchExperiences();
  }, []);

  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-black font-asimovian mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
