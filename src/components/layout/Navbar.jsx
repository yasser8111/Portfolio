import React from "react";
import MaterialIcon from "../ui/MaterialIcon";
import { Link } from "react-router-dom";

const Navbar = ({
  personal,
  nav,
  lang,
  setLang,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  return (
    <nav className="sticky top-0 z-50 bg-white py-4 md:py-6 border-b border-slate-200 px-4 md:px-12">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight cursor-pointer flex items-center gap-2">
              <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 shadow-sm"></div>
              {personal.nickname}
            </h1>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-slate-500">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {nav.about}
          </a>
          <Link
            to="/projects"
            className="hover:text-blue-600 transition-colors uppercase cursor-pointer"
          >
            {nav.projects}
          </Link>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {nav.services}
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {nav.contact}
          </a>
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 sm:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="font-bold text-sm text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            className="text-slate-900 p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MaterialIcon icon="close" size={24} /> : <MaterialIcon icon="menu" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-slate-100 text-sm font-semibold tracking-wide uppercase text-slate-600">
          <a
            href="#about"
            onClick={(e) => {
              scrollToSection(e, "about");
              setIsMenuOpen(false);
            }}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {nav.about}
          </a>
          <Link
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-600 transition-colors uppercase text-start cursor-pointer"
          >
            {nav.projects}
          </Link>
          <a
            href="#services"
            onClick={(e) => {
              scrollToSection(e, "services");
              setIsMenuOpen(false);
            }}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {nav.services}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              scrollToSection(e, "contact");
              setIsMenuOpen(false);
            }}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
