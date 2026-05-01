import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TextBlock } from "../ui/TextBlockEffect";

const MenuIcon = ({ isOpen }) => (
  <div className="relative w-6 h-5 flex flex-col justify-center items-center">
    <span 
      className={`h-[2px] w-full bg-slate-900 transition-all duration-300 absolute ${
        isOpen ? 'rotate-45' : '-translate-y-1.5'
      }`}
    ></span>
    <span 
      className={`h-[2px] w-full bg-slate-900 transition-all duration-300 absolute ${
        isOpen ? '-rotate-45' : 'translate-y-1.5'
      }`}
    ></span>
  </div>
);

const Navbar = ({
  personal,
  nav,
  lang,
  setLang,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-[60] bg-white py-2 md:py-4 border-b border-slate-200 px-4 md:px-12">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight cursor-pointer flex items-center gap-2">
                <span className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 shadow-sm block"></span>
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
              className="text-slate-900 p-2 cursor-pointer z-[70]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[50] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          <a
            href="#about"
            onClick={(e) => {
              scrollToSection(e, "about");
              setIsMenuOpen(false);
            }}
            className="text-3xl font-black tracking-tighter text-slate-900 uppercase"
          >
            {isMenuOpen && (
              <TextBlock blockColor="#2563eb" className="block">
                {nav.about}
              </TextBlock>
            )}
          </a>
          <Link
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-black tracking-tighter text-slate-900 uppercase"
          >
            {isMenuOpen && (
              <TextBlock blockColor="#2563eb" className="block">
                {nav.projects}
              </TextBlock>
            )}
          </Link>
          <a
            href="#services"
            onClick={(e) => {
              scrollToSection(e, "services");
              setIsMenuOpen(false);
            }}
            className="text-3xl font-black tracking-tighter text-slate-900 uppercase"
          >
            {isMenuOpen && (
              <TextBlock blockColor="#2563eb" className="block">
                {nav.services}
              </TextBlock>
            )}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              scrollToSection(e, "contact");
              setIsMenuOpen(false);
            }}
            className="text-3xl font-black tracking-tighter text-slate-900 uppercase"
          >
            {isMenuOpen && (
              <TextBlock blockColor="#2563eb" className="block">
                {nav.contact}
              </TextBlock>
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
