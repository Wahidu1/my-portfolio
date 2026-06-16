import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";
import { useSettingsFiles } from "../../context/settingsFilesContext";
import { scrollToTop } from "../../utils/scrollToTop";

const footerLinks = [
  { id: "about", label: "~/about" },
  { id: "skills", label: "~/skills" },
  { id: "works", label: "~/works" },
  { id: "contact", label: "~/contact" },
];

export default function Footer() {
  const { settings } = useSettings();
  const { settingsFiles } = useSettingsFiles();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const getHref = (id) => (isHome ? `#${id}` : `/#${id}`);

  const handleBrandClick = (e) => {
    if (isHome) {
      e.preventDefault();
      window.history.replaceState(null, "", "/");
      scrollToTop();
    } else {
      e.preventDefault();
      navigate("/");
    }
  };

  return (
    <footer className="bg-white border-t border-[var(--color-border-strong)] py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link
            to="/"
            onClick={handleBrandClick}
            className="flex items-center gap-3 group"
            aria-label="Scroll to top"
          >
            <img src={settingsFiles.logo} alt="Logo" className="h-9 w-auto" />
            <span className="font-mono text-xs text-gray-700 group-hover:text-[var(--color-accent)] transition-colors">
              Wahidul Islam
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-gray-500">
            {footerLinks.map(({ id, label }) => (
              <a key={id} href={getHref(id)} className="hover:text-[var(--color-accent)] transition-colors">
                {label}
              </a>
            ))}
          </div>

          <div className="flex gap-5 text-lg text-gray-400">
            <a href={settings.github || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={settings.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={settings.twitter || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        <p className="text-center font-mono text-xs text-gray-400 mt-8">
          <span className="text-[var(--color-accent)]">&gt; </span>
          © {new Date().getFullYear()} Wahidul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
