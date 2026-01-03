import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "circOut", delay: 4, duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500 py-3 bg-gradient-to-b from-black/50 via-black/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <img
            src="/img/light_logo.png"
            alt="Logo"
            className="h-9 object-contain cursor-pointer"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About", path: "/" },
            { name: "Contact", path: "/" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative font-black text-xs uppercase tracking-widest text-white hover:text-red-500 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="group relative self-end px-4 py-2 overflow-hidden transition-all duration-500 cursor-pointer">
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          <span className="relative z-10 text-white group-hover:text-black text-xs md:text-sm font-black tracking-[0.2em] uppercase transition-colors duration-500">
            Hire Me
          </span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
