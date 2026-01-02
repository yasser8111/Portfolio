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
    <footer className="py-10 bg-black">
      <Box color="white" className="flex flex-col space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              PORTFOLIO
            </h2>
          </div>

          <nav className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-3">
            {contents.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="text-xs font-medium text-zinc-500 hover:text-white transition-colors duration-300 uppercase tracking-widest"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
