import React from "react";
import Title from "../Title";
import Box from "../Box";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: "Frontend",
      items: "React.js / Next.js / TypeScript / Tailwind CSS / Framer Motion",
    },
    {
      id: 2,
      category: "Backend",
      items: "Node.js / Express / MongoDB / PostgreSQL / Firebase",
    },
    {
      id: 3,
      category: "Game Dev",
      items: "Unity / C# / Shaders / Game Physics / Level Design",
    },
    {
      id: 4,
      category: "UI/UX Design",
      items: "Figma / Adobe XD / Prototyping / User Research",
    },
    {
      id: 5,
      category: "Mobile App",
      items: "React Native / Flutter / Expo / Mobile UI",
    },
    {
      id: 6,
      category: "Graphics",
      items: "Photoshop / Illustrator / After Effects / 3D Blender",
    },
    {
      id: 7,
      category: "DevOps",
      items: "Git / Docker / CI/CD / Vercel / AWS",
    },
    {
      id: 8,
      category: "AI & Data",
      items: "Python / Prompt Engineering / OpenAI API / Data Viz",
    },
    {
      id: 9,
      category: "Soft Skills",
      items: "Agile / Project Management / Leadership / Fluent English",
    },
  ];

  return (
    <section id="skills" className="py-10 bg-black text-white overflow-hidden">
      <Title
        subtitle="My"
        subtitleClassName="font-black tracking-wider font-prie text-red-500 text-5xl"
        animationDuration={0.8}
        ease="expo.out"
        scrollStart="top bottom-=10%"
        scrollEnd="bottom center"
        stagger={0.03}
        containerClassName="m-20"
        textClassName="py-1 trelative text-white text-[4rem] md:text-[6rem] font-black leading-[0.75] tracking-tighter"
      >
        Skills
      </Title>

      <Box
        color="white"
        className="grid grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 px-4 md:px-10  overflow-hidden py-10"
      >
        {skillCategories.map((skill) => (
          <div
            key={skill.id}
            className="relative flex flex-col space-y-6 group cursor-default border-l-2 border-zinc-800 pl-8 py-2 hover:border-red-600 transition-all duration-500"
          >
            <span className="absolute -right-2 -top-12 text-[9rem] font-black text-transparent opacity-10 select-none pointer-events-none text-white">
              0{skill.id}
            </span>

            <div className="flex flex-col space-y-4 z-10">
              <h3 className="text-3xl font-black transition-colors group-hover:text-red-500 uppercase">
                {skill.category}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium max-w-[280px]">
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
