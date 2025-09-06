import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SettingsFilesProvider, useSettingsFiles } from "../../context/settingsFilesContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { settingsFiles } = useSettingsFiles();


  return (
    <header className="font-asimovian bg-white sticky top-0 z-50 shadow-md border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img src={settingsFiles.logo} alt="Logo" className="h-8" />
            <span className="text-gray-700 text-2xl font-bold">Wahidul Islam</span>
          </Link>

        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
            Home
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
            My Works
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
            Contact
          </Link>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium focus:outline-none transition"
            >
              Others
              <ChevronDown
                className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20">
                <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  My Blog
                </Link>
                <Link to="/experience" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Experience
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Home
            </a>
            <a href="#works" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              My Works
            </a>
            <a href="#case-studies" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Case Studies
            </a>
            <a href="#resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Resources
            </a>
            <button className="w-full px-6 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-900 transition">
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
