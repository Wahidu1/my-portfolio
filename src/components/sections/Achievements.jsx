import { useEffect, useState } from "react";
import AchievementCard from "../ui/AchievementCard";
import SectionCard from "../ui/SectionCard";
import { getAchievements } from "../../services/achievementsService";



export default function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const response = await getAchievements();
        const data = response.results || []; // your API wraps in "results"
        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          organization: item.organization,
          image: item.image,
          date: item.date,
        }))
        setAchievements(formatted);
      } catch (err) {
        console.error("Error loading achievements:", err);
      }
    }
    fetchAchievements();
  }, []);

  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50 dark:bg-gray-900">
      <SectionCard
        heading="Achievements & Certificates"
        subtext="Click a certificate to view full screen."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {achievements.map((achievement, idx) => (
          <AchievementCard key={idx} {...achievement} />
        ))}
      </div>
    </section>
  );
}
