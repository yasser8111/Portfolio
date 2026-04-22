import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../components/BrandIcons";

const HomePage = ({
  lang,
  setLang,
  personal,
  hero,
  about,
  projects,
  expertise,
  footer,
  nav,
  buttons,
  sections,
  isUnderConstruction,
  isMenuOpen,
  setIsMenuOpen,
  onSelectProject,
  onViewAllProjects,
  scrollToSection,
}) => {
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

        {/* Hero */}
        <section className="py-12 md:py-16 lg:py-20 border-b border-slate-200 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-start">
            {/* Text Column */}
            <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-6 lg:mb-8 text-slate-900 whitespace-pre-line">
                {hero.title.split(/(Code|الكود)/g).map((part, i) =>
                  part === "Code" || part === "الكود" ? (
                    <span key={i} className="text-blue-600">
                      {part}
                    </span>
                  ) : (
                    part
                  ),
                )}
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10">
                {hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                <Button
                  href="#projects"
                  onClick={(e) => scrollToSection(e, "projects")}
                  variant="primary"
                  size="lg"
                  className="hover-dark"
                >
                  {buttons.viewProjects}
                </Button>
                <Button
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  variant="secondary"
                  size="lg"
                  className="hover-blue"
                >
                  {buttons.contactMe}
                </Button>
              </div>
            </div>

            {/* Image Column */}
            <div className="order-2 lg:order-2 flex justify-center items-center">
              <DotLottieReact
                src="https://lottie.host/1ded89c3-1b8c-4c49-ad73-ab8a1b542e6e/Yreu2zYzef.lottie"
                loop
                autoplay
                className="w-[80%] max-w-[600px] aspect-square"
                renderConfig={{
                  devicePixelRatio: window.devicePixelRatio,
                }}
              />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-3 py-12 md:py-16 md:border-e border-slate-200 ps-6 md:ps-12 pe-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
                {sections.selectedWorks}
              </h3>
            </div>
            <div className="md:col-span-9">
              {projects.map((project, i) => (
                <div
                  key={i}
                  onClick={() => onSelectProject(project)}
                  className="group flex flex-col md:flex-row md:items-start justify-between py-12 ps-8 pe-6 md:pe-12 border-t border-slate-200 first:border-t-0 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-3">
                      <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                        {project.title}
                      </h4>
                      <span className="text-xs font-mono font-medium px-2 py-1 bg-slate-100 text-slate-600">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-slate-400 font-semibold mb-4 text-lg leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                    <p className="text-sm font-semibold text-blue-600 tracking-wide">
                      {project.tech}
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-sharp text-[80px] text-blue-600">
                      arrow_outward
                    </span>
                  </div>
                </div>
              ))}
              <div className="py-12 ps-8 pe-6 md:pe-12 border-t border-slate-200 flex justify-center md:justify-start">
                <Button
                  onClick={onViewAllProjects}
                  variant="outline"
                  icon={({ className }) => (
                    <ArrowLeft size={16} className={`rtl:rotate-180 ${className}`} />
                  )}
                  iconPosition="end"
                  className="uppercase"
                >
                  {buttons.viewAll}
                </Button>
              </div>
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
                {sections.about}
              </h3>
              {about.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-slate-400 mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div
              id="skills"
              className="md:col-span-7 py-16 ps-12 pe-6 md:pe-12 border-t md:border-t-0 border-slate-200"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
                {sections.expertise}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {expertise.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 uppercase tracking-wide text-sm">
                      {item.category}
                    </h4>
                    <ul className="space-y-3 text-slate-400 font-medium">
                      {item.skills.map((skill, j) => (
                        <li key={j}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <section id="contact" className="py-24 px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900 whitespace-pre-line">
                {sections.letsBuild.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-3 text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <i className="ri-mail-line"></i>
                {personal.email}
                <span className="material-symbols-sharp text-[20px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  arrow_outward
                </span>
              </a>
            </div>

            <div className="flex flex-col items-start md:items-end gap-8">
              <div className="flex gap-0 border border-slate-200 overflow-hidden">
                <Button
                  href={personal.socials.github}
                  external
                  variant="social"
                  shape="squareIcon"
                  className="border-e border-slate-200 hover-github"
                >
                  <GithubIcon className="w-5 h-5" />
                </Button>
                <Button
                  href={personal.socials.linkedin}
                  external
                  variant="social"
                  shape="squareIcon"
                  className="border-e border-slate-200 hover-linkedin"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </Button>
                <Button
                  href={personal.socials.instagram}
                  external
                  variant="social"
                  shape="squareIcon"
                  className="hover-instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer text={footer.text} />
      </div>
    </div>
  );
};

export default HomePage;
