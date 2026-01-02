import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "circOut", delay: 4 ,duration: 0.5}}
      className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500 py-3 bg-gradient-to-b from-black/50 via-black/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div>
          <img
            src="/src/assets/img/light_logo.png"
            alt="Logo"
            className="h-9 object-contain "
          />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-xs uppercase tracking-widest font-semibold text-white hover:text-red-500 transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="cursor-pointer px-6 py-2 hover:bg-white hover:text-black text-xs font-bold uppercase tracking-tighter rounded-sm bg-transparent text-white border border-white transition-all active:scale-95">
          Hire Me
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
