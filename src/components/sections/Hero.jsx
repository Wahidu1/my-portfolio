import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Wahid from "../../assets/wahid.png";
import CV from "../../assets/cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";
import { highlightText } from "../../utils/highlightText";
import { useSettingsFiles } from "../../context/settingsFilesContext";

export default function Hero() {
  const { settings } = useSettings();
  const { settingsFiles } = useSettingsFiles();


  return (
    <>

      <section className="bg-white min-h-screen flex items-center justify-center px-6 md:px-20">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 py-16">
          {/* Left: Text Section */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight font-asimovian">
              Hello, I’m <span className="text-gray-800">Wahid</span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0 font-gowun"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {highlightText(
                settings.header,
                settings.highlightText,
              )}
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={settingsFiles.cv || CV}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-2xl shadow-sm bg-black text-white hover:bg-gray-800 transition"
              >
                <Download size={18} /> Download CV
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-2xl border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-5 mt-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a href={settings.github || "#"} target="_blank" className="text-gray-600 hover:text-black transition text-xl">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={settings.linkedin || "#"} target="_blank" className="text-gray-600 hover:text-black transition text-xl">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href={settings.twitter || "#"} target="_blank" className="text-gray-600 hover:text-black transition text-xl">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image in Circle */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Background floating circle */}
              <div className="absolute inset-0 rounded-full bg-gray-100 shadow-lg animate-float"></div>

              {/* Profile image */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition-transform duration-500">
                <img
                  src={Wahid}
                  alt="Wahid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
