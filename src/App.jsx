import React, { useState, Suspense, lazy } from "react";
import portfolioData from "./data.json";

// Lazy Load Pages for Performance
const HomePage = lazy(() => import("./pages/HomePage"));
const AllProjectsPage = lazy(() => import("./pages/AllProjectsPage"));
const ProjectDetailsPage = lazy(() => import("./pages/ProjectDetailsPage"));

export default function App() {
  const [lang, setLang] = useState(portfolioData.lang || "en");
  const {
    personal,
    hero,
    about,
    projects,
    expertise,
    services,
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

  const renderPage = () => {
    if (selectedProject) {
      return (
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
      );
    }

    if (showAllProjects) {
      return (
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
          nav={nav}
        />
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
        services={services}
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
  };

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
    >
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        {renderPage()}
      </Suspense>
    </div>
  );
}
