import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ personal, nav, lang, setLang, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    setIsMenuOpen(false);
    scrollToSection(e, id);
  };

  const navLinks = [
    { id: "about", label: nav.about },
    { id: "projects", label: nav.projects },
    { id: "skills", label: nav.skills },
    { id: "contact", label: nav.contact },
  ];

  return (
    <nav className="py-6 md:py-8 border-b border-slate-200">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">{personal.nickname}</h1>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-slate-600">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScroll(e, id)}
              className="hover:text-blue-600 transition-colors"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 sm:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="font-bold text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button className="text-slate-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col gap-6 mt-6 pt-6 border-t border-slate-100 text-sm font-semibold tracking-wide uppercase text-slate-600">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScroll(e, id)}
              className="hover:text-blue-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
