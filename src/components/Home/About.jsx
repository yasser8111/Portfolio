import React from "react";
import Title from "../Title";
import { ABOUT , PERSONAL_INFO } from "../../constants"

const About = () => {
  return (
    <section
      id="about"
      className="relative flex items-center min-h-screen overflow-hidden bg-white"
    >
      <div className="container m-auto">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 pointer-events-none">
          <img
            src="/img/me.png"
            alt="Yasser Al-Nahdi"
            className="w-full h-full object-contain object-right grayscale contrast-125 mix-blend-multiply opacity-50 sm:opacity-80"
          />
        </div>

        <div className="px-5 sm:px-10 md:px-20 grid grid-cols-1 md:grid-cols-12 z-10">
          <div className="md:col-span-8">
            <div className="space-y-0">
              <Title
                subtitle="About Me"
                subtitleClassName="font-black tracking-wider font-prie text-red-500 text-3xl md:text-5xl"
                animationDuration={0.8}
                ease="expo.out"
                scrollStart="top bottom-=10%"
                scrollEnd="bottom center"
                stagger={0.03}
                textClassName="trelative text-black text-[12vw] md:text-[6rem] font-black leading-[0.8] md:leading-[0.75] tracking-tighter"
              >
                Hello
              </Title>
              <p className="text-black text-xl md:text-3xl font-bold tracking-tight mt-6">
                {"I'm " + PERSONAL_INFO.fullName}
              </p>
            </div>

            <div className="pt-5">
              <p className="max-w-2xl text-[18px] md:text-[20px] leading-[1.4] lg:leading-[1.8] text-neutral-800 font-medium text-justify [text-justify:inter-word] tracking-tight opacity-90">
                {ABOUT.Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
