import React from "react";
import Title from "../Title";
import Box from "../Box";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Kendrick Lamar - GNX",
      img: "/img/2d_game.png",
      category: "Game Dev",
    },
    {
      id: 2,
      title: "Modern Portfolio",
      img: "/img/chat_bot.png",
      category: "Web Design",
    },
  ];

  return (
    <section id="projects" 
      className="py-10 bg-black text-white overflow-hidden">
      <Title
        subtitle="Table Of"
          subtitleClassName="font-black tracking-wider font-prie text-red-500 text-5xl"
          animationDuration={0.8}
          ease="expo.out"
          scrollStart="top bottom-=10%"
          scrollEnd="bottom center"
          stagger={0.03}
          containerClassName="m-20"
          textClassName="py-1 trelative text-white text-[4rem] md:text-[6rem] font-black leading-[0.75] tracking-tighter"
      >
          Works
      </Title>

      <Box color="white" className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
  {projectData.map((project) => (
    <div key={project.id} className="group relative flex flex-col">
      {/* Background ID */}
      <span className="absolute top-0 right-0 text-[12rem] font-black italic text-white/[0.03] leading-none select-none">
        {project.id < 10 ? `0${project.id}` : project.id}
      </span>

      {/* Image */}
      <div className="relative z-10 aspect-video overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Simple Content */}
      <div className="relative z-20 mt-6">
        <p className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
          {project.category}
        </p>
        <h3 className="text-5xl font-black text-white tracking-tighter transition-colors group-hover:text-red-600">
          {project.title}
        </h3>
      </div>
    </div>
  ))}
</Box>
    </section>
  );
};

export default Projects;
