import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";
import { useSettingsFiles } from "../../context/settingsFilesContext";

export default function Footer() {
  const { settings } = useSettings();
  const { settingsFiles } = useSettingsFiles();

  return (
    <footer className="bg-black text-gray-300 py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo with white overlay */}
        <div className="flex items-center space-x-2">
          <img
            src={settingsFiles.logo}
            alt="Logo"
            className="h-10 md:h-12 filter brightness-0 invert"
          />
          <span className="text-white font-asimovian text-2xl font-bold">Wahidul Islam</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/projects" className="hover:text-white transition">My Works</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
          <Link to="/blog" className="hover:text-white transition">Blog</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl justify-center md:justify-end">
          <a href={settings.github || "#"} className="hover:text-amber-500 transition">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={settings.linkedin || "#"} className="hover:text-amber-500 transition">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={settings.twitter || "#"} className="hover:text-amber-500 transition">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Wahid75. All rights reserved.
      </div>
    </footer>
  );
}
