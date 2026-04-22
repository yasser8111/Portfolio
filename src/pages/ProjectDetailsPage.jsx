import React from "react";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import ProjectButtons from "../components/ProjectButtons";

const ProjectDetailsPage = ({ project, onBack, lang, footerText, buttons }) => {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 border-x border-slate-200 min-h-screen flex flex-col">
      <nav className="py-6 md:py-8 border-b border-slate-200 edge-to-edge">
        <Button
          onClick={onBack}
          variant="secondary"
          icon={({ className }) => (
            <ArrowLeft size={18} className={`rtl:rotate-180 ${className}`} />
          )}
          iconPosition="end"
          className="uppercase"
        >
          {buttons.backToHome}
        </Button>
      </nav>

      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-24 border-b border-slate-200 edge-to-edge">
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
            <div className="w-full bg-slate-100 overflow-hidden aspect-4/3">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>
      </main>

      <footer className="py-8 mt-auto border-t border-slate-200 flex flex-col md:flex-row justify-center items-center gap-4 edge-to-edge">
        <p className="text-slate-500 font-medium text-sm tracking-wide">
          &copy; {new Date().getFullYear()} {footerText}
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetailsPage;
