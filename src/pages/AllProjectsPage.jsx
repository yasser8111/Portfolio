import { useNavigate } from "react-router-dom";
import NavBack from "../components/NavBack";
import ProjectsGallery from "../components/ProjectsGallery";
import { createSlug } from "../lib/utils";

const AllProjectsPage = ({
  projects,
  lang,
  buttons,
}) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1400px] mx-auto w-full border-x border-slate-200 h-screen flex flex-col bg-white">
      <NavBack onBack={() => navigate("/")} backText={buttons.backToHome} lang={lang} />

      <main className="flex-1 relative overflow-hidden flex flex-col">
        <ProjectsGallery 
          projects={projects} 
          onSelectProject={(p) => navigate(`/projects/${createSlug(p.title)}`)} 
          lang={lang} 
        />
      </main>
    </div>
  );
};

export default AllProjectsPage;
