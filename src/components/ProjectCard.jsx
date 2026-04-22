import React from "react";

const ProjectCard = ({ project, onSelectProject, isFirst = false }) => {
  return (
    <div
      onClick={() => onSelectProject(project)}
      className={`group project-card-fill flex flex-col lg:flex-row lg:items-center justify-between py-12 ps-8 pe-6 md:pe-12 border-t border-slate-200 ${
        isFirst ? "lg:border-t-0" : ""
      } cursor-pointer relative gap-8`}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center flex-1 relative z-10">
        {/* Project Image Preview */}
        <div className="w-full md:w-48 lg:w-56 aspect-video md:aspect-square overflow-hidden bg-slate-100 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
          />
        </div>

        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-3">
            <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              {project.title}
            </h4>
            <span className="text-xs font-mono font-medium px-2 py-1 bg-slate-100 text-slate-600">
              {project.year}
            </span>
          </div>
          <p className="text-slate-500 font-medium mb-4 text-lg leading-relaxed line-clamp-2">
            {project.desc}
          </p>
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
            {project.tech}
          </p>
        </div>
      </div>

      {/* Arrow Icon */}
      <div
        className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 relative z-10"
        aria-hidden="true"
      >
        <span className="material-symbols-sharp text-[60px] text-blue-600">
          arrow_outward
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
