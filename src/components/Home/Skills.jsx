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
        className="grid grid-cols-2 lg:grid-cols-3 overflow-hidden py-10"
      >
        {SKILLS.map((skill) => (
          <div
            key={skill.id}
            className="group relative flex flex-col py-3 md:py-6 px-4 md:px-8 overflow-hidden transition-all duration-500 cursor-default"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

            <span
              style={{
                top: skill.topOffset || "-24px",
                right: skill.rightOffset || "-10px",
              }}
              className="absolute -right-5 -top-4 md:-top-8 text-[4rem] md:text-[9rem] font-black text-white/20  select-none pointer-events-none transition-all duration-500 italic z-0"
            >
              {skill.id < 10 ? `0${skill.id}` : skill.id}
            </span>

            <div className="relative flex flex-col space-y-2 md:space-y-4 z-10">
              <h3 className="text-lg md:text-3xl font-black uppercase leading-tight text-white group-hover:text-black transition-colors duration-500">
                {skill.category}
              </h3>
              <p className="text-zinc-500 text-[10px] md:text-lg leading-relaxed font-medium max-w-full md:max-w-[280px] group-hover:text-zinc-800 transition-colors duration-500">
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
