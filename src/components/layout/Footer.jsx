import React from "react";
import Box from "../Box";

const Footer = () => {
  const contents = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Projects", link: "#projects" },
    { title: "Skills", link: "#skills" },
    { title: "Experience", link: "#experience" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <footer className="py-12 md:py-20 bg-black overflow-hidden">
      <Box color="white">
        <div className="flex flex-col gap-6 md:gap-12 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-[0.2em] text-white">
              PORTFOLIO
            </h2>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 md:gap-x-12">
            {contents.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="text-[10px] md:text-xs font-black text-zinc-500 hover:text-red-500 transition-all duration-300 uppercase tracking-[0.2em] text-center md:text-left"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-5 md:mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest italic">
            Designed with Passion
          </p>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
