import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black isolate">
      <div className="max-w-[90%] m-auto relative p-12 border-2 border-dashed border-white">
        <div className="absolute -top-2.5 -left-2.5 w-5 h-5 bg-white"></div>
        <div className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-white"></div>
        <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 bg-white"></div>
        <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 bg-white"></div>
        <h1 className="font-black text-white tracking-wider text-[10rem] leading-none flex items-center bg-fixed">
          Portf
          <div className="relative flex items-center justify-center w-[12rem] h-[10rem] mx-[-1rem]">
            <div className="w-32 h-32 bg-white rounded-full z-20"></div>

            <img
              src="/src/assets/img/hand.png"
              alt="Hands"
              className="absolute bottom-[-70%] w-full h-auto z-10 pointer-events-none grayscale brightness-150 [mask-image:linear-gradient(to_top,transparent,black_30%)]"
            />
          </div>
          lio
        </h1>

        <h2 className="absolute font-black bottom-10 right-4 font-prie text-red-600 text-5xl z-3">
          Yasser Tariq
        </h2>
      </div>
    </section>
  );
};

export default Hero;
