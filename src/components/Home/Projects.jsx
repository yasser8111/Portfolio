import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title";
import Box from "../Box";
import { PROJECT as projectData } from "../../constants";

const Projects = ({ showMoreBtn = false }) => {
  const displayedProjects = showMoreBtn ? projectData.slice(0, 2) : projectData;

  return (
    <section
      id="projects"
      className="py-10 bg-black text-white overflow-hidden"
    >
      <Title
        subtitle="My"
        subtitleClassName="font-black tracking-wider font-prie text-red-500 text-2xl md:text-5xl"
        animationDuration={0.8}
        ease="expo.out"
        scrollStart="top bottom-=10%"
        scrollEnd="bottom center"
        stagger={0.03}
        title="Works"
        containerClassName="m-5 md:m-10 lg:m-20"
        textClassName="py-1 relative text-white text-[14vw] md:text-[6rem] font-black leading-[0.8] md:leading-[0.75] tracking-tighter"
      >
        Works
      </Title>

      <Box color="white" className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group relative flex flex-col">
              <div className="relative z-10 aspect-video overflow-hidden border border-zinc-900">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-20 mt-4 md:mt-6">
                <p className="text-red-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-1 md:mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-5xl font-black text-white tracking-tighter transition-colors group-hover:text-red-600 leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {showMoreBtn && (
          <Link
            to="/projects"
            className="group relative self-end px-6 py-3 mt-10 overflow-hidden transition-all duration-500 cursor-pointer"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 text-white group-hover:text-black text-xs md:text-sm font-black tracking-[0.2em] uppercase transition-colors duration-500">
              More Projects +
            </span>
          </Link>
        )}
      </Box>
    </section>
  );
};

export default Projects;
