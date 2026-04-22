import React from "react";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";

const AllProjectsPage = ({
  projects,
  onBack,
  onSelectProject,
  lang,
  footerText,
  buttons,
}) => {
  return (
    <div className="max-w-[1400px] mx-auto w-full border-x border-slate-200 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="py-6 md:py-8 border-b border-slate-200 flex items-center px-6 md:px-12">
        <Button
          onClick={onBack}
          variant="secondary"
          icon={ArrowLeft}
          iconPosition="start"
          className="uppercase"
        >
          {buttons.backToHome}
        </Button>
      </nav>

      <main className="flex-1">
        <section id="projects" className="border-b border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-3 py-12 md:py-16 md:border-e border-slate-200 ps-6 md:ps-12 pe-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
                {nav.allProjects}
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
                    <p className="text-slate-500 font-semibold mb-4 text-lg leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                    <p className="text-sm font-semibold text-blue-600 tracking-wide">
                      {project.tech}
                    </p>
                  </div>
                  <div
                    className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    <span className="material-symbols-sharp text-[80px] text-blue-600">
                      arrow_outward
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 flex justify-center items-center">
        <p className="text-slate-500 font-medium text-sm tracking-wide">
          &copy; {new Date().getFullYear()} {footerText}
        </p>
      </footer>
    </div>
  );
};

export default AllProjectsPage;
