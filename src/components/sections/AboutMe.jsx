import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJs, faReact, faGitAlt, faNodeJs, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Wahid from "../../assets/wahid2.jpg";
import { useSettings } from "../../context/SettingsContext";
import { highlightText } from "../../utils/highlightText";

const iconMap = {
  python: faPython,
  javascript: faJs,
  react: faReact,
  nodejs: faNodeJs,
  git: faGitAlt,
  docker: faDocker,
  postgresql: faDatabase,
  django: faPython,
  "django rest framework": faPython,
};

export default function AboutMe() {
  const { settings } = useSettings();

  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            <img src={Wahid} alt="Wahid" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-black font-asimovian">About Me</h2>
          <p className="text-gray-700 text-lg md:text-xl font-gowun leading-relaxed">
            {highlightText(settings.about, settings.highlightText)}
          </p>

        </motion.div>
      </div>
    </section>
  );
}
