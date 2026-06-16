import { useEffect, useState } from "react";
import ExperienceCard from "../ui/ExperienceCard";
import SectionCard from "../ui/SectionCard";
import { getExperiences } from "../../services/experienceService";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const response = await getExperiences();
        setExperiences((response.results || []).map((item) => ({
          id: item.id, title: item.title, company: item.company,
          description: item.description, start_date: item.start_date, end_date: item.end_date,
        })));
      } catch (err) {
        console.error("Error loading experiences:", err);
      }
    }
    fetchExperiences();
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="section-container max-w-3xl">
        <SectionCard heading="Experience" label="// git_log" subtext="Professional journey — commits to production." />
        <div className="mt-4">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id || idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
