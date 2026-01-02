import React from "react";
import Title from "../Title";
import Box from "../Box";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 bg-white text-black overflow-hidden"
    >
      <Title
        subtitle="Get In"
        subtitleClassName="font-black tracking-wider font-prie text-red-500 text-5xl"
        animationDuration={0.8}
        ease="expo.out"
        scrollStart="top bottom-=10%"
        scrollEnd="bottom center"
        stagger={0.03}
        containerClassName="m-20"
        textClassName="py-1 trelative text-black text-[4rem] md:text-[6rem] font-black leading-[0.75] tracking-tighter"
      >
        Touch
      </Title>

      <Box
        color="black"
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-15"
      >
        <div className="space-y-12">
          <div className="relative group">
            <div className="relative z-10 pl-4 border-l-4 border-black group-hover:border-red-600 transition-colors duration-500">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-2">
                Email Me
              </h3>
              <a
                href="mailto:yasser@example.com"
                className="text-2xl md:text-4xl font-black hover:text-red-600 transition-colors"
              >
                yasser.alnahdi@mail.com
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="relative z-10 pl-4 border-l-4 border-black group-hover:border-red-600 transition-colors duration-500">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-2">
                Socials
              </h3>
              <div className="flex gap-6 text-xl font-bold">
                <a href="#" className="hover:text-red-600 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Simple Message */}
        <div className="flex flex-col justify-center space-y-8 bg-neutral-50 p-12 relative overflow-hidden group">
          <h3 className="text-4xl font-black leading-tight">
            Want to start a <br />
            <span className="text-red-600 italic font-prie text-5xl">
              New Project?
            </span>
          </h3>
          <p className="text-lg text-neutral-600 font-medium">
            I am always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <button className="bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest self-start hover:bg-red-600 transition-all duration-300 transform cursor-pointer">
            Send Message
          </button>
        </div>
      </Box>
    </section>
  );
};

export default Contact;
