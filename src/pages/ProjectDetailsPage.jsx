import React from "react";
import { ArrowLeft } from "lucide-react";
import ProjectButtons from "../components/ProjectButtons";

const ProjectDetailsPage = ({ project, onBack, lang, footerText, buttons }) => {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 border-x border-slate-200 min-h-screen flex flex-col">
      <nav className="py-6 md:py-8 border-b border-slate-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={18} className="rtl:rotate-180" />
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

export default ProjectDetailsPage;
