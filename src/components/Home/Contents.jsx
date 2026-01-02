import React from "react";
import Box from "../Box";
import Title from "../Title";

const TableOfContents = () => {
  const contents = [
    { id: "01", title: "Home", link: "#home" },
    { id: "02", title: "About", link: "#about" },
    { id: "03", title: "My Work", link: "#projects" },
    { id: "04", title: "Skills", link: "#skills" },
    { id: "05", title: "Experience", link: "#experience" },
    { id: "06", title: "Contact", link: "#contact" },
  ];

  return (
    <section className="py-10 bg-white text-black overflow-hidden">
      <Title
        subtitle="Table Of"
        subtitleClassName="font-black tracking-wider font-prie text-red-500 text-5xl"
        animationDuration={0.8}
        ease="expo.out"
        scrollStart="top bottom-=10%"
        scrollEnd="bottom center"
        stagger={0.03}
        containerClassName="m-10 lg:m-20"
        title="Contents"
        textClassName="py-1 trelative text-black text-[4rem] md:text-[6rem] font-black leading-[0.75] tracking-tighter"
      >
        Contents!
      </Title>

      <Box className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {contents.map((content) => (
            <a
              key={content.id}
              href={content.link}
              className="group relative block p-3 md:p-7 lg:p-10 overflow-hidden transition-all duration-700"
            >
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]" />

              {/* Content ID Background */}
              <span className="absolute -top-4 -right-4 text-[6rem] lg:text-[10rem] font-black text-gray-200/30 transition-all duration-500 leading-none select-none z-0 italic">
                {content.id.toString().padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  {/* Minimal Icon or Tag */}

                  <h3 className="lg:text-5xl md:text-4xl text-2xl font-black text-neutral-900 leading-tight tracking-tighter group-hover:text-white transition-colors duration-500 uppercase">
                    {content.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Box>
    </section>
  );
};

export default TableOfContents;
