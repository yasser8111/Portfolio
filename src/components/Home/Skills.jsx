import React from "react";
import Title from "../Title";
import Box from "../Box";
import { SKILLS } from "../../constants";

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-black text-white overflow-hidden">
      <Title
        subtitle="My"
        subtitleClassName="font-black tracking-wider font-prie text-red-500 text-2xl md:text-5xl"
        animationDuration={0.8}
        ease="expo.out"
        scrollStart="top bottom-=10%"
        scrollEnd="bottom center"
        stagger={0.03}
        title="Skills"
        containerClassName="m-5 md:m-10 lg:m-20"
        textClassName="py-1 relative text-white text-[14vw] md:text-[6rem] font-black leading-[0.8] md:leading-[0.75] tracking-tighter"
      >
        Skills
      </Title>

      <Box
        color="white"
        className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-4 md:gap-x-12 overflow-hidden py-10"
      >
        {SKILLS.map((skill) => (
          <div
            key={skill.id}
            className="relative flex flex-col space-y-3 md:space-y-6 group cursor-default border-l border-zinc-800 pl-4 md:pl-8 py-2 hover:border-red-600 transition-all duration-500"
          >
            <span className="absolute -right-1 -top-6 md:-top-12 text-[4rem] md:text-[9rem] font-black text-transparent opacity-10 select-none pointer-events-none text-white outline-text">
              {skill.id < 10 ? `0${skill.id}` : skill.id}
            </span>

            <div className="flex flex-col space-y-2 md:space-y-4 z-10">
              <h3 className="text-lg md:text-3xl font-black transition-colors group-hover:text-red-500 uppercase leading-tight">
                {skill.category}
              </h3>
              <p className="text-zinc-500 text-[10px] md:text-lg leading-relaxed font-medium max-w-full md:max-w-[280px]">
                {skill.items}
              </p>
            </div>
          </div>
        ))}
      </Box>
    </section>
  );
};

export default Skills;
