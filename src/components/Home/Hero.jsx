import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black isolate"
    >
      <motion.img
        initial={{ width: "0", height: "0" }}
        animate={{
          width: ["0px", "100px", "0"],
          height: ["0", "100px", "0"],
        }}
        transition={{ duration: 2, ease: "circInOut" }}
        src="/img/light_logo.png"
        alt="logo"
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
      />
      <motion.div
        initial={{ width: 0, height: 0, padding: 0, opacity: 0 }}
        animate={{
          width: ["0px", "auto"],
          height: ["0px", "auto"],
          padding: ["0px", "48px"],
          opacity: [0, 1],
        }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="relative border-2 border-dashed border-white flex items-center justify-center p-12"
      >
        <div className="absolute -top-2.5 -left-2.5 w-5 h-5 bg-white"></div>
        <div className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-white"></div>
        <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 bg-white"></div>
        <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 bg-white"></div>
        <motion.h1
          initial={{ fontSize: 0, opacity: 0 }}
          animate={{ fontSize: "10rem", opacity: 1 }}
          transition={{ duration: 1, ease: "circInOut", delay: 3 }}
          className="font-black text-white tracking-wider text-[10rem] leading-none"
        >
          Portf
        </motion.h1>
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={{ width: "128px", height: "128px" }}
            transition={{ duration: 1, ease: "circInOut", delay: 1 }}
            className="bg-white rounded-full z-20"
          ></motion.div>
          <motion.img
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 90 }}
            transition={{ duration: 1, ease: "circInOut", delay: 2 }}
            src="/img/hand.png"
            alt="Hands"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto z-10 pointer-events-none grayscale brightness-150 [mask-image:linear-gradient(to_top,transparent,black_20%)]"
          />
        </div>

        <motion.h1
          initial={{ fontSize: 0, opacity: 0 }}
          animate={{ fontSize: "10rem", opacity: 1 }}
          transition={{ duration: 1, ease: "circInOut", delay: 3 }}
          className="font-black text-white tracking-wider leading-none"
        >
          lio
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;
