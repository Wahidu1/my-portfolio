import { motion } from "framer-motion";
import SkillCard from '../ui/SkillCard';
import SectionCard from "../ui/SectionCard";
import { useEffect, useState } from "react";
import { getSkills } from "../../services/skillService";
import {
  faPython,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  python: faPython,
  javascript: faJs,
  react: faReact,
  nodejs: faNodeJs,
  git: faGitAlt,
  docker: faDocker,
  postgresql: faDatabase, // fallback generic DB
  django: faPython,       // fallback if no icon image
  "django rest framework": faPython, // fallback
};

export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await getSkills();
        const data = response.results || []; // your API wraps in "results"

        const formatted = data.map((item) => {
          let icon;

          if (item.icon) {
            // case 1: use API image
            icon = `${item.icon}`;
          } else {
            // case 2: fallback to iconMap
            icon = iconMap[item.name.toLowerCase()] || faPython;
          }

          return {
            name: item.name,
            icon,
            level: item.percentage,
            isImage: !!item.icon, // flag for frontend
          };
        });

        setSkills(formatted);
      } catch (err) {
        console.error("Error loading skills:", err);
      }
    }
    fetchSkills();
  }, []);


  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        <SectionCard heading={"My Skills"} subtext={"A selection of technologies and tools I use to create efficient and robust solutions."} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} />
          ))}
        </div>
      </div>

      {/* Floating accent circles */}
      <motion.div
        className="absolute -top-16 left-1/4 w-24 h-24 bg-gray-200 rounded-full opacity-30 pointer-events-none"
        animate={{ y: [0, 10, 0], x: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/3 w-32 h-32 bg-gray-300 rounded-full opacity-20 pointer-events-none"
        animate={{ y: [0, -15, 0], x: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
