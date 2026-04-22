import React from "react";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";

const AllProjectsPage = ({
  projects,
  onBack,
  onSelectProject,
  lang,
  footerText,
  buttons,
  nav,
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
                <ProjectCard
                  key={i}
                  project={project}
                  onSelectProject={onSelectProject}
                  isFirst={i === 0}
                />
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
