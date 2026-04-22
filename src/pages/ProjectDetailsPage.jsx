import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ProjectButtons from "../components/ProjectButtons";

export default function ProjectDetailsPage({
  project,
  onBack,
  lang,
  footerText,
  buttons,
}) {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 border-x border-slate-200 min-h-screen flex flex-col">
      <nav className="py-6 md:py-8 border-b border-slate-200">
        <Button variant="ghost" onClick={onBack} icon={ArrowLeft} className="uppercase rtl:flex-row-reverse">
          {lang === "ar" ? "العودة للمشاريع" : "Back to Projects"}
        </Button>
      </nav>

      <section className="py-12 md:py-16 lg:py-24 border-b border-slate-200 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-[1.1] mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-sm font-mono font-medium px-3 py-1 bg-slate-100 text-slate-600">
                {project.year}
              </span>
              <span className="text-sm font-semibold text-blue-600 tracking-wide">
                {project.tech}
              </span>
            </div>
            <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
              {project.desc.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ProjectButtons project={project} buttons={buttons} />
          </div>

          {project.image && (
            <div className="w-full bg-slate-100 rounded-lg overflow-hidden border border-slate-200 aspect-[4/3]">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </section>

      <Footer text={footerText} />
    </div>
  );
}
