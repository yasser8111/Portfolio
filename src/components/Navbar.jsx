import React from "react";
import { Menu, X } from "lucide-react";

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
    <nav className="py-6 md:py-8 border-b border-slate-200 px-6 md:px-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {personal.nickname}
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-slate-500">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="hover:text-blue-600 transition-colors"
          >
            {nav.about}
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="hover:text-blue-600 transition-colors"
          >
            {nav.projects}
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="hover:text-blue-600 transition-colors"
          >
            {nav.services}
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hover:text-blue-600 transition-colors"
          >
            {nav.contact}
          </a>
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 sm:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="font-bold text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            className="text-slate-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col gap-6 mt-6 pt-6 border-t border-slate-100 text-sm font-semibold tracking-wide uppercase text-slate-600">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="hover:text-blue-600 transition-colors"
          >
            {nav.about}
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="hover:text-blue-600 transition-colors"
          >
            {nav.projects}
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="hover:text-blue-600 transition-colors"
          >
            {nav.services}
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hover:text-blue-600 transition-colors"
          >
            {nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
