import { useEffect, useState } from "react";
import AchievementCard from "../ui/AchievementCard";
import SectionCard from "../ui/SectionCard";
import StaggerGrid from "../ui/StaggerGrid";
import { getAchievements } from "../../services/achievementsService";

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const data = await getAchievements();
        setAchievements(data.map((item) => ({
          id: item.id, title: item.title, organization: item.organization,
          image: item.image, date: item.date,
        })));
      } catch (err) {
        console.error("Error loading achievements:", err);
      }
    }
    fetchAchievements();
  }, []);

  return (
    <section className="section-padding section-alt">
      <div className="section-container">
        <SectionCard heading="Achievements" label="// certificates" subtext="Click a certificate to view full screen." />
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, idx) => (
            <AchievementCard key={a.id || idx} {...a} index={idx} stagger />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
