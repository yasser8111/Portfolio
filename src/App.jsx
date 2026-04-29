import React, { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from "react-router-dom";
import portfolioData from "./data.json";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import { createSlug } from "./lib/utils";

// Lazy Load Pages for Performance
const HomePage = lazy(() => import("./pages/HomePage"));
const AllProjectsPage = lazy(() => import("./pages/AllProjectsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectDetailsPage = lazy(() => import("./pages/ProjectDetailsPage"));

// Wrapper for Project Details to handle URL params
const ProjectDetailsWrapper = ({ projects, lang, footerText, buttons }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find((p) => createSlug(p.title) === projectId);

  useEffect(() => {
    if (!project) {
      navigate("/projects", { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <ProjectDetailsPage
      project={project}
      onBack={() => navigate("/projects")}
      lang={lang}
      footerText={footerText}
      buttons={buttons}
    />
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio_lang") || portfolioData.lang || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
  }, [lang]);
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
    gallery,
    philosophy,
    certificates,
  } = portfolioData[lang];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

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

  return (
    <SmoothScroll>
      <BrowserRouter>
        <ScrollToTop />
        <div
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
        >
          <Preloader 
            isLoading={isLoading} 
            text={personal.name} 
            onComplete={handleLoadingComplete} 
          />
          <Suspense fallback={<Preloader isLoading={true} />}>
            <Routes>
              <Route
                path="/"
                element={
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
                    scrollToSection={scrollToSection}
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <AboutPage
                    lang={lang}
                    setLang={setLang}
                    personal={personal}
                    about={about}
                    philosophy={philosophy}
                    certificates={certificates}
                    expertise={expertise}
                    nav={nav}
                    footer={footer}
                    buttons={buttons}
                  />
                }
              />
              <Route
                path="/projects"
                element={
                  <AllProjectsPage
                    projects={projects}
                    lang={lang}
                    footerText={footer.text}
                    buttons={buttons}
                    nav={nav}
                    gallery={gallery}
                  />
                }
              />
              <Route
                path="/projects/:projectId"
                element={
                  <ProjectDetailsWrapper
                    projects={projects}
                    lang={lang}
                    footerText={footer.text}
                    buttons={buttons}
                  />
                }
              />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </SmoothScroll>
  );
}
