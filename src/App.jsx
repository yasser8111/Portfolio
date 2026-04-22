import React, { useState, useEffect } from "react";
import portfolioData from "./data.json";

// Pages
import HomePage from "./pages/HomePage";
import AllProjectsPage from "./pages/AllProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

export default function App() {
  const [lang, setLang] = useState(portfolioData.lang || "en");
  const {
    personal,
    hero,
    about,
    projects,
    expertise,
    footer,
    nav,
    buttons,
    sections,
  } = portfolioData[lang];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: id === "projects" ? "start" : "center",
      });
    }
  };

  if (selectedProject) {
    return (
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
      >
        <ProjectDetailsPage
          project={selectedProject}
          onBack={() => {
            setSelectedProject(null);
            if (!showAllProjects) {
              setTimeout(() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "auto", block: "start" });
              }, 0);
            }
          }}
          lang={lang}
          footerText={footer.text}
          buttons={buttons}
        />
      </div>
    );
  }

  if (showAllProjects) {
    return (
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
      >
        <AllProjectsPage
          projects={projects}
          onBack={() => {
            setShowAllProjects(false);
            setTimeout(() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "auto", block: "start" });
            }, 0);
          }}
          onSelectProject={(p) => {
            setSelectedProject(p);
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
          lang={lang}
          footerText={footer.text}
          buttons={buttons}
          nickname={personal.nickname}
        />
      </div>
    );
  }

  return (
    <HomePage
      lang={lang}
      setLang={setLang}
      personal={personal}
      hero={hero}
      about={about}
      projects={projects}
      expertise={expertise}
      footer={footer}
      nav={nav}
      buttons={buttons}
      sections={sections}
      isUnderConstruction={portfolioData.isUnderConstruction}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      onSelectProject={(p) => {
        setSelectedProject(p);
        window.scrollTo({ top: 0, behavior: "instant" });
      }}
      onViewAllProjects={() => {
        setShowAllProjects(true);
        window.scrollTo({ top: 0, behavior: "instant" });
      }}
      scrollToSection={scrollToSection}
    />
  );
}
