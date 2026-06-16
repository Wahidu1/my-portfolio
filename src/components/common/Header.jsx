import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSettingsFiles } from "../../context/settingsFilesContext";
import { useActiveSection } from "../../hooks/useActiveSection";
import { scrollToSection, scrollToTop } from "../../utils/scrollToTop";

const SECTION_IDS = ["hero", "about", "skills", "works", "experience", "contact", "blog"];

const navItems = [
  { id: "about", label: "~/about" },
  { id: "skills", label: "~/skills" },
  { id: "works", label: "~/works" },
  { id: "experience", label: "~/experience" },
  { id: "contact", label: "~/contact" },
  { id: "blog", label: "~/blog" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { settingsFiles } = useSettingsFiles();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const activeSection = useActiveSection(isHome ? SECTION_IDS : []);

  const getHref = (id) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, id) => {
    setIsMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      scrollToSection(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const handleBrandClick = (e) => {
    setIsMenuOpen(false);
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[var(--color-border-strong)] shadow-[0_1px_0_rgba(45,50,62,0.06)]">
      <nav className="section-container py-3 flex items-center justify-between">
        <Link
          to="/"
          onClick={handleBrandClick}
          className="flex items-center gap-2.5 group"
          aria-label="Scroll to top"
        >
          <img src={settingsFiles?.logo} alt="Logo" className="h-8 w-auto" />
          <span className="font-mono text-xs text-gray-700 hidden sm:inline group-hover:text-[var(--color-accent)] transition-colors">
            Wahidul Islam
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={getHref(id)}
              onClick={(e) => handleNavClick(e, id)}
              className={`font-mono text-xs transition-colors relative py-1 ${
                isHome && activeSection === id
                  ? "text-[var(--color-accent)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[var(--color-accent)]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {label}
            </a>
          ))}
          <a href={settingsFiles?.cv} download className="btn-primary text-xs py-2 px-4">
            <Download size={13} /> cv
          </a>
        </div>

        <button
          className="lg:hidden text-gray-700 p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border-strong)] px-6 py-4">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={getHref(id)}
              onClick={(e) => handleNavClick(e, id)}
              className={`block py-3 font-mono text-sm border-b border-gray-100 ${
                isHome && activeSection === id ? "text-[var(--color-accent)]" : "text-gray-600"
              }`}
            >
              <span className="text-[var(--color-accent)]">&gt; </span>
              {label}
            </a>
          ))}
          <a href={settingsFiles?.cv} download className="btn-primary w-full mt-4 text-xs" onClick={() => setIsMenuOpen(false)}>
            <Download size={13} /> download_cv
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
