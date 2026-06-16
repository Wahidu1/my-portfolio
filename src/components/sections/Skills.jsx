import SkillCard from "../ui/SkillCard";
import SectionCard from "../ui/SectionCard";
import StaggerGrid from "../ui/StaggerGrid";
import { useEffect, useState } from "react";
import { getSkills } from "../../services/skillService";
import { faPython, faJs, faReact, faNodeJs, faGitAlt, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  python: faPython, javascript: faJs, react: faReact, nodejs: faNodeJs,
  git: faGitAlt, docker: faDocker, postgresql: faDatabase, django: faPython,
  "django rest framework": faPython,
};

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await getSkills();
        const data = response.results || [];
        setSkills(data.map((item) => ({
          name: item.name,
          icon: item.icon ? `${item.icon}` : iconMap[item.name.toLowerCase()] || faPython,
          level: item.percentage,
          isImage: !!item.icon,
        })));
      } catch (err) {
        console.error("Error loading skills:", err);
      }
    }
    fetchSkills();
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionCard heading="Skills" label="// skills" subtext="Technologies and tools for building backend systems." />
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} stagger />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
