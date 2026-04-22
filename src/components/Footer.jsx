import React from "react";

const Footer = ({ text }) => {
  return (
    <footer className="py-8 mt-12 border-t border-slate-200 flex flex-col md:flex-row justify-center items-center gap-4">
      <p className="text-slate-500 font-medium text-sm tracking-wide">
        &copy; {new Date().getFullYear()} {text}
      </p>
    </footer>
  );
};

export default Footer;
