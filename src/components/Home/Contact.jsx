import React from "react";
import Title from "../Title";
import Box from "../Box";
import { PERSONAL_INFO } from "../../constants";

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-white text-black overflow-hidden">
      <Title
        subtitle="Get In"
        subtitleClassName="font-black tracking-wider font-prie text-red-500 text-3xl md:text-5xl"
        animationDuration={0.8}
        ease="expo.out"
        scrollStart="top bottom-=10%"
        scrollEnd="bottom center"
        stagger={0.03}
        title="Touch"
        containerClassName="m-5 md:m-10 lg:m-20"
        textClassName="py-1 relative text-black text-[14vw] md:text-[6rem] font-black leading-[0.8] md:leading-[0.75] tracking-tighter"
      >
        Touch
      </Title>

      <Box
        color="black"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-15"
      >
        <div className="space-y-8 md:space-y-12">
          <div className="relative group">
            <div className="relative z-10 pl-4 border-l-4 border-black group-hover:border-red-600 transition-colors duration-500">
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-2">
                Email Me
              </h3>
              <a
                href="mailto:yasser.alnahdi@mail.com"
                className="text-lg sm:text-2xl md:text-4xl font-black hover:text-red-600 transition-colors break-words block"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="relative z-10 pl-4 border-l-4 border-black group-hover:border-red-600 transition-colors duration-500">
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-2">
                Socials
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm sm:text-xl font-bold">
                {PERSONAL_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 md:space-y-8 bg-neutral-50 p-6 md:p-12 relative overflow-hidden group ">
          <h3 className="text-2xl md:text-4xl font-black leading-tight">
            Want to start a <br />
            <span className="text-red-600 italic font-prie text-3xl md:text-5xl">
              New Project?
            </span>
          </h3>
          <p className="text-sm md:text-lg text-neutral-600 font-medium leading-relaxed">
            I am always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div className="flex-shrink-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={PERSONAL_INFO.socials[0].link}
              className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden bg-black transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
              <span className="relative z-10 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase transition-colors duration-500">
                LET'S TALK
              </span>
            </a>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Contact;
