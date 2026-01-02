import React from "react";
import Title from "../Title";
import Box from "../Box";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: "2024 - Present",
      role: "Lead Full Stack Developer",
      company: "Tech Solutions Inc.",
      description:
        "Leading the development of high-performance web applications and mentoring junior developers.",
    },
    {
      id: 2,
      year: "2022 - 2024",
      role: "Game Developer",
      company: "Indie Studio X",
      description:
        "Developed immersive 3D environments and implemented core gameplay mechanics using Unity & C#.",
    },
    {
      id: 3,
      year: "2020 - 2022",
      role: "UI/UX Designer",
      company: "Creative Agency",
      description:
        "Designed user-centric interfaces for mobile and web platforms, focusing on seamless user journeys.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 bg-white text-black px-6 overflow-hidden border-t border-zinc-900"
    >
      <Title
        subtitle="Professional"
        subtitleClassName="font-black tracking-wider font-prie text-red-500 text-5xl"
        animationDuration={0.8}
        ease="expo.out"
        scrollStart="top bottom-=10%"
        scrollEnd="bottom center"
        stagger={0.03}
        containerClassName="m-20"
        textClassName="py-1 trelative text-black text-[4rem] md:text-[6rem] font-black leading-[0.75] tracking-tighter"
      >
        Experience
      </Title>

      <Box className="max-w-4xl mx-auto flex flex-col bg-white px-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group relative flex flex-col py-16 border-b border-neutral-100 last:border-0"
          >
            {/* Background ID */}
            <span className="absolute top-8 right-0 text-9xl font-black italic text-neutral-50/50 select-none">
              0{exp.id}
            </span>

            <div className="relative z-10">
              <span className="text-red-600 font-bold text-sm tracking-widest uppercase">
                {exp.year}
              </span>

              <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase mt-2 group-hover:text-red-600 transition-colors duration-300">
                {exp.role}
              </h3>

              <p className="text-neutral-400 font-bold text-xs uppercase tracking-widest mt-1 mb-6">
                {exp.company}
              </p>

              <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </Box>
    </section>
  );
};

export default Experience;
