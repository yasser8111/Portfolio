import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import MaterialIcon from "../components/ui/MaterialIcon";
import Button from "../components/ui/Button";
import NavBack from "../components/layout/NavBack";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectsGallery from "../components/projects/ProjectsGallery";
import { createSlug } from "../lib/utils";

const AllProjectsPage = ({
  projects,
  lang,
  buttons,
  gallery,
  nav,
}) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      gsap.fromTo(
        ".mobile-project-card",
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power4.out",
          delay: 0.2 
        }
      );
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-white pb-20" dir={lang === "ar" ? "rtl" : "ltr"}>
        <NavBack 
          onBack={() => navigate("/")} 
          backText={buttons.backToHome} 
          lang={lang} 
        />

        <div className="px-2">
          {projects.map((project, index) => (
            <div key={index} className="mobile-project-card opacity-0">
              <ProjectCard 
                project={project} 
                isFirst={index === 0}
                onSelectProject={(p) => navigate(`/projects/${createSlug(p.title)}`)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative bg-white overflow-hidden">
      {/* Floating Back Button (Desktop) */}
      <div className="fixed top-6 left-6 md:top-10 md:left-12 z-[100] pointer-events-auto rtl:left-auto rtl:right-6 rtl:md:right-12">
        <Button
          onClick={() => navigate("/")}
          variant="secondary"
          icon={({ size, className }) => (
            <MaterialIcon 
              icon="arrow_back" 
              size={18} 
              className={`rtl:rotate-180 ${className}`} 
            />
          )}
          iconPosition="start"
          className="uppercase shadow-2xl bg-white/80 backdrop-blur-md border border-slate-200"
        >
          {buttons.backToHome}
        </Button>
      </div>

      <main className="w-full h-full">
        <ProjectsGallery 
          projects={projects} 
          onSelectProject={(p) => navigate(`/projects/${createSlug(p.title)}`)} 
          lang={lang} 
          gallery={gallery}
        />
      </main>
    </div>
  );
};

export default AllProjectsPage;
