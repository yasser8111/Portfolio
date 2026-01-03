import React from "react";
import Hero from "../components/Home/Hero";
import Contents from "../components/Home/Contents";
import About from "../components/Home/About";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";
import Experience from "../components/Home/Experience";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Contents />
      <About />
      <Projects showMoreBtn={true} />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
