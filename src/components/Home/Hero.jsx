import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black isolate px-4"
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
          width: ["0px", "clamp(40px, 14vw, 128px)", "auto"],
          height: ["0px", "clamp(40px, 10vw, 128px)", "auto"],
          padding: ["0px", "48px"],
          opacity: [0, 1],
        }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="relative border-2 border-dashed border-white flex flex-row items-center justify-center"
      >
        <div className="absolute -top-1.5 -left-1.5 md:-top-2.5 md:-left-2.5 w-3 h-3 md:w-5 md:h-5 bg-white"></div>
        <div className="absolute -top-1.5 -right-1.5 md:-top-2.5 md:-right-2.5 w-3 h-3 md:w-5 md:h-5 bg-white"></div>
        <div className="absolute -bottom-1.5 -left-1.5 md:-bottom-2.5 md:-left-2.5 w-3 h-3 md:w-5 md:h-5 bg-white"></div>
        <div className="absolute -bottom-1.5 -right-1.5 md:-bottom-2.5 md:-right-2.5 w-3 h-3 md:w-5 md:h-5 bg-white"></div>

        <motion.h1
          initial={{ fontSize: 0, opacity: 0 }}
          animate={{ fontSize: "clamp(3rem, 15vw, 10rem)", opacity: 1 }}
          transition={{ duration: 1, ease: "circInOut", delay: 3 }}
          className="font-black text-white tracking-wider leading-none"
        >
          Portf
        </motion.h1>

        <div className="relative flex items-center justify-center mx-2 md:mx-4">
          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={{
              width: ["0px", "clamp(40px, 12vw, 128px)"],
              height: ["0px", "clamp(40px, 12vw, 128px)"],
            }}
            transition={{ duration: 1, ease: "circInOut", delay: 1 }}
            className="bg-white rounded-full z-20"
          ></motion.div>

          <motion.img
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: "70%" }}
            transition={{ duration: 1, ease: "circInOut", delay: 2 }}
            src="/img/hand.png"
            alt="Hands"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] max-w-none h-auto z-10 pointer-events-none grayscale brightness-150 [mask-image:linear-gradient(to_top,transparent,black_20%)]"
          />
        </div>

        <motion.h1
          initial={{ fontSize: 0, opacity: 0 }}
          animate={{ fontSize: "clamp(3rem, 15vw, 10rem)", opacity: 1 }}
          transition={{ duration: 1, ease: "circInOut", delay: 3 }}
          className="font-black text-white tracking-wider leading-none"
        >
          lio
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "circInOut", delay: 4 }}
          className="font-prie text-red-500 font-black text-3xl absolute bottom-10 right-10"
        >
          Yasser Al-Nahdi
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default Hero;
