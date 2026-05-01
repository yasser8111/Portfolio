import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { createSlug } from "../lib/utils";
import Button from "../components/ui/Button";
import ProjectHoverSection from "../components/projects/ProjectHoverSection";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import { TextBlock } from "../components/ui/TextBlockEffect";
import MaterialIcon from "../components/ui/MaterialIcon";

const ArrowIcon = ({ size = 16, className = "" }) => (
  <MaterialIcon
    icon="arrow_back"
    size={size}
    className={`rtl:rotate-180 ${className}`}
  />
);

const HomePage = ({
  lang,
  setLang,
  personal,
  hero,
  about,
  projects,
  expertise,
  services,
  footer,
  nav,
  buttons,
  sections,
  isUnderConstruction,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  const navigate = useNavigate();

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white "
    >
      {isUnderConstruction && (
        <div className="bg-blue-600 text-white py-2 px-4 text-center text-xs font-bold tracking-widest uppercase">
          {personal.underConstructionText}
        </div>
      )}

      {/* Container */}
      <div className="max-w-[1400px] mx-auto w-full border-x border-slate-200 min-h-screen flex flex-col">
        {/* Navigation */}
        <Navbar
          personal={personal}
          nav={nav}
          lang={lang}
          setLang={setLang}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />

        <main className="flex-1">
          <section className="relative overflow-hidden min-h-[calc(100dvh-76px)] border-b border-slate-200 bg-white flex items-center">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-[6fr_4fr] items-stretch min-h-[calc(100dvh-65px)]">
              {/* Left: Text Content */}
              <div className="relative z-10 w-full flex items-center px-6 md:px-12 py-20 lg:py-0 md:border-e border-slate-200">
                <div className="flex flex-col items-start text-start w-full max-w-4xl">
                  <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-slate-900">
                    {hero.title.split("\n").map((line, i) => (
                      <span key={i} className="block w-full">
                        <TextBlock blockColor="#2563eb" className="block">
                          {line.split(/(Code|الكود)/g).map((part, j) =>
                            part === "Code" || part === "الكود" ? (
                              <span key={j} className="text-blue-600">
                                {part}
                              </span>
                            ) : (
                              part
                            ),
                          )}
                        </TextBlock>
                      </span>
                    ))}
                  </h2>

                  <div className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-tight font-medium mb-10 flex flex-col items-start gap-1">
                    {hero.subtitle.split("\n").map((line, i) => (
                      <div key={i} className="block w-full">
                        <TextBlock blockColor="#cbd5e1" className="inline-block py-0">
                          {line}
                        </TextBlock>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-start">
                    <Button
                      href="#projects"
                      onClick={(e) => scrollToSection(e, "projects")}
                      variant="primary"
                      size="lg"
                      className="px-10 py-4 text-lg"
                    >
                      {buttons.viewProjects}
                    </Button>
                    <Button
                      href="#contact"
                      onClick={(e) => scrollToSection(e, "contact")}
                      variant="secondary"
                      size="lg"
                      className="px-10 py-4 text-lg"
                    >
                      {buttons.contactMe}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right: Image Content */}
              <div className="relative overflow-hidden bg-slate-50 hidden md:flex items-center justify-center min-h-[400px] md:min-h-0">
                <img 
                  src="/hero-img2.png" 
                  alt="Hero" 
                  className="w-full h-full object-cover"
                />
                {/* Decorative overlay for premium feel */}
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="border-b border-slate-200">
            <div className="w-full">
              {/* Section Header */}
              <div className=" md:p-12 p-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
                  <TextBlock blockColor="#2563eb">
                    {sections.selectedWorks}
                  </TextBlock>
                </h3>
              </div>

              <ProjectHoverSection projects={projects.slice(0, 3)} />
              <div className="py-12 px-6 md:px-12 border-t border-slate-200 flex justify-end rtl:justify-start md:justify-center md:rtl:justify-center">
                <Link to="/projects">
                  <Button
                    variant="primary"
                    icon={({ className }) => (
                      <ArrowIcon size={16} className={className} />
                    )}
                    iconPosition="start"
                    className="uppercase"
                  >
                    {buttons.viewAll}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Skills & About */}
          <section className="border-b border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* About */}
              <div
                id="about"
                className="md:col-span-5 py-16 md:border-e border-slate-200 ps-6 md:ps-12 pe-12"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
                  <TextBlock blockColor="#2563eb">{sections.about}</TextBlock>
                </h3>
                {about.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg leading-relaxed text-slate-500 mb-6 last:mb-0"
                  >
                    <TextBlock blockColor="#cbd5e1" className="block">
                      {paragraph}
                    </TextBlock>
                  </p>
                ))}
                <div className="mt-10 flex justify-end" dir="ltr">
                  <Link to="/about">
                    <Button
                      variant="outline"
                      icon={({ className }) => (
                        <ArrowIcon size={16} className={className} />
                      )}
                      iconPosition="start"
                      className="uppercase"
                    >
                      {buttons.aboutMe}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Skills */}
              <div
                id="skills"
                className="hidden md:block md:col-span-7 py-16 ps-12 pe-6 md:pe-12 border-t md:border-t-0 border-slate-200"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
                  <TextBlock blockColor="#2563eb">
                    {sections.expertise}
                  </TextBlock>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                  {expertise.slice(0, 4).map((item, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 uppercase tracking-wide text-sm">
                        <TextBlock blockColor="#2563eb">
                          {item.category}
                        </TextBlock>
                      </h4>
                      <ul className="space-y-3 text-slate-500 font-medium">
                        {item.skills.slice(0, 3).map((skill, j) => (
                          <li key={j}>
                            <TextBlock blockColor="#cbd5e1">{skill}</TextBlock>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="border-b border-slate-200 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-3 py-8 md:py-16 md:border-e border-slate-200 ps-6 md:ps-12 pe-8 flex flex-row md:flex-col justify-between items-center md:items-start gap-4" dir="ltr">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 md:mb-8">
                  <TextBlock blockColor="#2563eb">
                    {sections.services}
                  </TextBlock>
                </h3>
                <div className="hidden md:flex justify-end" dir="ltr">
                  <Link to="/services">
                    <Button
                      variant="primary"
                      icon={({ className }) => (
                        <ArrowIcon size={16} className={className} />
                      )}
                      iconPosition="start"
                      className="uppercase"
                    >
                      {buttons.moreServices}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3">
                {services.map((service, i) => {
                  const palette = [
                    {
                      base: "#0284c7",
                      bg: "#f0f9ff",
                      title: "#0c4a6e",
                      desc: "#0369a1",
                    },
                    {
                      base: "#db2777",
                      bg: "#fdf2f8",
                      title: "#831843",
                      desc: "#be185d",
                    },
                    {
                      base: "#059669",
                      bg: "#ecfdf5",
                      title: "#064e3b",
                      desc: "#047857",
                    },
                  ][i % 3];

                  return (
                    <div
                      key={i}
                      className="p-8 md:p-12 border-b md:border-b-0 md:border-e border-slate-200 last:border-e-0 last:border-b-0 cursor-pointer transition-all duration-500"
                      style={{ backgroundColor: palette.bg }}
                    >
                      <div className="mb-8">
                        <span
                          className="text-5xl font-mono font-bold tracking-tighter text-slate-500 opacity-30 transition-all duration-500"
                          style={{ color: palette.base }}
                        >
                          0{i + 1}
                        </span>
                      </div>
                      <h4
                        className="text-xl font-bold mb-4"
                        style={{ color: palette.title }}
                      >
                        <TextBlock blockColor={palette.base}>
                          {service.title}
                        </TextBlock>
                      </h4>
                      <p
                        className="font-medium leading-relaxed"
                        style={{ color: palette.desc }}
                      >
                        <TextBlock blockColor={palette.base} className="block">
                          {service.desc}
                        </TextBlock>
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Only: More Services Button */}
              <div className="md:hidden py-12 px-6 border-t border-slate-200 flex justify-end rtl:justify-start md:justify-center md:rtl:justify-center">
                <Link to="/services">
                  <Button
                    variant="primary"
                    icon={({ className }) => (
                      <ArrowIcon size={16} className={className} />
                    )}
                    iconPosition="start"
                    className="uppercase"
                  >
                    {buttons.moreServices}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <ContactSection personal={personal} sections={sections} lang={lang} />
        </main>

        <Footer text={footer.text} />
      </div>
    </div>
  );
};

export default HomePage;
