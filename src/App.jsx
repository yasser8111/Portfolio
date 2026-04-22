import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import portfolioData from "./data.json";
import Button from "./components/Button";

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const BackArrow = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rtl:rotate-180"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ProjectButtons = ({ project, buttons }) => (
  <div className="flex flex-wrap gap-3 mt-6">
    <Button
      href={project.demoUrl || "#"}
      external
      variant="primary"
      className="hover-dark"
      icon={ExternalLinkIcon}
    >
      {buttons.liveDemo}
    </Button>
    <Button
      href={project.repoUrl || "#"}
      external
      variant="dark"
      className="hover-blue"
      icon={CodeIcon}
    >
      {buttons.sourceCode}
    </Button>
  </div>
);

const ProjectDetails = ({ project, onBack, lang, footerText, buttons }) => {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 border-x border-slate-200 min-h-screen flex flex-col">
      <nav className="py-6 md:py-8 border-b border-slate-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-slate-600 hover:text-blue-600 transition-colors"
        >
          <BackArrow />
          {lang === "ar" ? "العودة للمشاريع" : "Back to Projects"}
        </button>
      </nav>

      <section className="py-12 md:py-16 lg:py-24 border-b border-slate-200 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-[1.1] mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-sm font-mono font-medium px-3 py-1 bg-slate-100 text-slate-600">
                {project.year}
              </span>
              <span className="text-sm font-semibold text-blue-600 tracking-wide">
                {project.tech}
              </span>
            </div>
            <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
              {project.desc.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ProjectButtons project={project} buttons={buttons} />
          </div>
          {project.image && (
            <div className="w-full bg-slate-100 rounded-lg overflow-hidden border border-slate-200 aspect-[4/3]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      <footer className="py-8 mt-auto border-t border-slate-200 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-slate-500 font-medium text-sm tracking-wide">
          &copy; {new Date().getFullYear()} {footerText}
        </p>
      </footer>
    </div>
  );
};

const AllProjectsPage = ({
  projects,
  onBack,
  onSelectProject,
  lang,
  footerText,
  buttons,
  nickname,
}) => {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 border-x border-slate-200 min-h-screen flex flex-col">
      <nav className="py-6 md:py-8 border-b border-slate-200 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">{nickname}</h1>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-slate-600 hover:text-blue-600 transition-colors"
        >
          <BackArrow />
          {buttons.backToHome}
        </button>
      </nav>

      <section className="py-12 md:py-16 flex-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-4">
          {lang === "ar" ? "جميع المشاريع" : "All Projects"}
        </h2>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl">
          {lang === "ar"
            ? "استعرض جميع الأعمال والمشاريع التي قمت بتطويرها."
            : "Browse all the projects and works I've built."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300"
            >
              {project.image && (
                <div
                  className="aspect-[16/10] bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    className="text-xl font-bold tracking-tight text-slate-900 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => onSelectProject(project)}
                  >
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 bg-slate-100 text-slate-500">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm font-semibold text-blue-600 tracking-wide mb-3">
                  {project.tech}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>
                <ProjectButtons project={project} buttons={buttons} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 mt-12 border-t border-slate-200 flex justify-center items-center">
        <p className="text-slate-500 font-medium text-sm tracking-wide">
          &copy; {new Date().getFullYear()} {footerText}
        </p>
      </footer>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState(portfolioData.lang || "en");
  const {
    personal,
    hero,
    about,
    projects,
    expertise,
    footer,
    nav,
    buttons,
    sections,
  } = portfolioData[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        block: "center",
      });
    }
  };

  if (selectedProject) {
    return (
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
      >
        <ProjectDetails
          project={selectedProject}
          onBack={() => {
            setSelectedProject(null);
            if (!showAllProjects) {
              setTimeout(() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "auto", block: "start" });
              }, 0);
            }
          }}
          lang={lang}
          footerText={footer.text}
          buttons={buttons}
        />
      </div>
    );
  }

  if (showAllProjects) {
    return (
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
      >
        <AllProjectsPage
          projects={projects}
          onBack={() => {
            setShowAllProjects(false);
            setTimeout(() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "auto", block: "start" });
            }, 0);
          }}
          onSelectProject={(p) => {
            setSelectedProject(p);
            window.scrollTo({ top: 0, behavior: "auto" });
          }}
          lang={lang}
          footerText={footer.text}
          buttons={buttons}
          nickname={personal.nickname}
        />
      </div>
    );
  }

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white "
    >
      {portfolioData.isUnderConstruction && (
        <div className="bg-blue-600 text-white py-2 px-4 text-center text-xs font-bold tracking-widest uppercase">
          {personal.underConstructionText}
        </div>
      )}

      {/* Container */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 border-x border-slate-200 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="py-6 md:py-8 border-b border-slate-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {personal.nickname}
              </h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden sm:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-slate-600">
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
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className="hover:text-blue-600 transition-colors"
              >
                {nav.skills}
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
              {/* Mobile Menu Button */}
              <button
                className="text-slate-900 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </>
                  )}
                </svg>
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
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className="hover:text-blue-600 transition-colors"
              >
                {nav.skills}
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

        {/* Hero */}
        <section className="py-12 md:py-16 lg:py-20 border-b border-slate-200">
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

              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10">
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
                  variant="outline"
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
            <div className="md:col-span-3 py-12 md:py-16 md:border-e border-slate-200 md:pe-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                {sections.selectedWorks}
              </h3>
            </div>
            <div className="md:col-span-9">
              {projects.map((project, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedProject(project);
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  className="group flex flex-col md:flex-row md:items-start justify-between py-12 px-0 md:px-8 border-t border-slate-200 first:border-t-0 hover:bg-slate-50 transition-colors cursor-pointer"
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
                    <p className="text-slate-500 font-semibold mb-4 text-lg leading-relaxed">
                      {project.desc}
                    </p>
                    <p className="text-sm font-semibold text-blue-600 tracking-wide">
                      {project.tech}
                    </p>
                    {/* <ProjectButtons project={project} buttons={buttons} /> */}
                  </div>
                  <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-sharp text-[80px] text-blue-600">
                      arrow_outward
                    </span>
                  </div>
                </div>
              ))}
              <div className="py-12 px-0 md:px-8 border-t border-slate-200 flex justify-center md:justify-start">
                <Button
                  onClick={() => {
                    setShowAllProjects(true);
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  variant="outline"
                  icon={({ className }) => (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`rtl:rotate-180 ${className}`}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
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
              className="md:col-span-5 py-16 md:border-e border-slate-200 md:pe-12"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
                {sections.about}
              </h3>
              {about.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-slate-700 mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div
              id="skills"
              className="md:col-span-7 py-16 md:ps-12 border-t md:border-t-0 border-slate-200"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
                {sections.expertise}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {expertise.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 uppercase tracking-wide text-sm">
                      {item.category}
                    </h4>
                    <ul className="space-y-3 text-slate-600 font-medium">
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
        <section id="contact" className="py-24 mt-auto">
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

        {/* Footer */}
        <footer className="py-8 mt-12 border-t border-slate-200 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-slate-500 font-medium text-sm tracking-wide">
            &copy; {new Date().getFullYear()} {footer.text}
          </p>
        </footer>
      </div>
    </div>
  );
}
