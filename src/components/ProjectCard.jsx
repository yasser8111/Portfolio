import React from "react";

const ProjectCard = ({ project, onSelectProject, isFirst = false }) => {
  return (
    <div
      onClick={() => onSelectProject(project)}
      className={`flex flex-col md:flex-row md:items-start justify-between py-12 ps-8 pe-6 md:pe-12 border-t border-slate-200 ${
        isFirst ? "md:border-t-0" : ""
      } cursor-pointer relative`}
    >
      <div className="max-w-2xl relative z-10">
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

    </div>
  );
};

export default ProjectCard;
