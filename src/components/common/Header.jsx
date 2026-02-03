import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSettingsFiles } from "../../context/settingsFilesContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const { settingsFiles } = useSettingsFiles();

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="font-asimovian bg-white fixed top-0 left-0 w-full z-50 shadow-md border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={() => {
            setIsDropdownOpen(false);
            setIsMenuOpen(false);
          }}
        >
          <img
            src={settingsFiles?.logo}
            alt="Logo"
            className="h-8 w-auto"
          />
          <span className="text-gray-700 text-2xl font-bold">
            Wahidul Islam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            onClick={() => setIsDropdownOpen(false)}
            className="text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            Home
          </Link>

          <Link
            to="/projects"
            onClick={() => setIsDropdownOpen(false)}
            className="text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            My Works
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsDropdownOpen(false)}
            className="text-gray-700 hover:text-gray-900 text-sm font-medium"
          >
            Contact
          </Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Others
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                <Link
                  to="/blog"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Blog
                </Link>

                <Link
                  to="/experience"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Experience
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsDropdownOpen(false);
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              My Works
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Contact
            </Link>

            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              My Blog
            </Link>

            <Link
              to="/experience"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Experience
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
