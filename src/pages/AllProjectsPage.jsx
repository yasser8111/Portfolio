import React from "react";
import { ArrowLeft } from "lucide-react";
import ProjectButtons from "../components/ProjectButtons";

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
      <nav className="py-6 md:py-8 border-b border-slate-200 flex justify-between items-center edge-to-edge">
        <h1 className="text-2xl font-bold tracking-tight">{nickname}</h1>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={18} className="rtl:rotate-180" />
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
              className="group overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300"
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

      <footer className="py-8 mt-12 border-t border-slate-200 flex justify-center items-center edge-to-edge">
        <p className="text-slate-500 font-medium text-sm tracking-wide">
          &copy; {new Date().getFullYear()} {footerText}
        </p>
      </footer>
    </div>
  );
};

export default AllProjectsPage;
