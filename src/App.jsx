import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import portfolioData from "./data.json";

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

export default function App() {
  const { personal, hero, about, projects, expertise, footer } = portfolioData;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-12">
      
      {personal.isUnderConstruction && (
        <div className="bg-blue-600 text-white py-2 px-4 text-center text-xs font-bold tracking-widest uppercase">
          Site under development
        </div>
      )}

      {/* Container */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 border-x border-slate-200 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{personal.name}</h1>
            {/* <p className="text-sm text-slate-500 font-medium mt-1">
              {personal.role}
            </p> */}
          </div>
          <div className="flex gap-4 sm:gap-8 text-sm font-semibold tracking-wide uppercase text-slate-600">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-12 md:py-16 lg:py-20 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8 text-slate-900 whitespace-pre-line">
                {hero.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line.includes("Code") ? (
                      <>
                        {line.split("Code")[0]}
                        <span className="text-blue-600">Code</span>
                        {line.split("Code")[1]}
                      </>
                    ) : (
                      line
                    )}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-normal max-w-3xl">
                {hero.subtitle}
              </p>
            </div>
            
            {/* Image Column */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
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
            <div className="md:col-span-3 py-12 md:py-16 md:border-r border-slate-200 md:pr-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Selected Works
              </h3>
            </div>
            <div className="md:col-span-9">
              {projects.map((project, i) => (
                <div
                  key={i}
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
                    <p className="text-slate-600 mb-4 text-lg leading-relaxed">
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
            </div>
          </div>
        </section>

        {/* Skills & About */}
        <section className="border-b border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* About */}
            <div
              id="about"
              className="md:col-span-5 py-16 md:border-r border-slate-200 md:pr-12"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
                About
              </h3>
              {about.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-slate-700 mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div
              id="skills"
              className="md:col-span-7 py-16 md:pl-12 border-t md:border-t-0 border-slate-200"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
                Expertise
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
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900">
                Let's build
                <br />
                something useful.
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
              <div className="flex gap-4">
                <a
                  href={personal.socials.github}
                  className="p-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-colors"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  className="p-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-colors"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a
                  href={personal.socials.instagram}
                  className="p-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-colors"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 mt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-medium text-sm tracking-wide">
            &copy; {new Date().getFullYear()} {footer.text}
          </p>
          <div className="text-xs font-bold tracking-widest uppercase text-slate-400">
            {personal.name}
          </div>
        </footer>
      </div>
    </div>
  );
}
