import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import ProjectsGallery from "../components/ProjectsGallery";
import { createSlug } from "../lib/utils";

const AllProjectsPage = ({
  projects,
  lang,
  buttons,
  gallery,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative bg-white overflow-hidden">
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 md:top-10 md:left-12 z-[100] pointer-events-auto rtl:left-auto rtl:right-6 rtl:md:right-12">
        <Button
          onClick={() => navigate("/")}
          variant="secondary"
          icon={({ className }) => (
            <ArrowLeft size={18} className={`rtl:rotate-180 ${className}`} />
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
