import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function AllProjectsPage({
  projects,
  onBack,
  onSelectProject,
  lang,
  footerText,
  buttons,
  nickname,
  sections,
}) {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 border-x border-slate-200 min-h-screen flex flex-col">
      {/* Top bar */}
      <nav className="py-6 md:py-8 border-b border-slate-200 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">{nickname}</h1>
        <Button variant="ghost" onClick={onBack} icon={ArrowLeft} className="uppercase rtl:flex-row-reverse">
          {buttons.backToHome}
        </Button>
      </nav>

      {/* Projects list — same style as home page but with square image instead of "Selected Works" label */}
      <section className="flex-1">
        {projects.map((project, i) => (
          <div
            key={i}
            onClick={() => onSelectProject(project)}
            className="group grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            {/* Square image on the left (replaces the "Selected Works" sidebar) */}
            <div className="md:col-span-3 md:border-e border-slate-200">
              {project.image ? (
                <div className="aspect-square md:aspect-auto md:h-full bg-slate-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="aspect-square md:aspect-auto md:h-full bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-300 text-4xl font-bold">{project.title[0]}</span>
                </div>
              )}
            </div>

            {/* Project info on the right */}
            <div className="md:col-span-9 flex flex-col md:flex-row md:items-start justify-between py-10 px-0 md:px-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono font-medium px-2 py-1 bg-slate-100 text-slate-600">
                    {project.year}
                  </span>
                </div>
                <p className="text-slate-500 font-semibold mb-4 text-lg leading-relaxed">
                  {project.desc}
                </p>
                <p className="text-sm font-semibold text-blue-600 tracking-wide">
                  {project.tech}
                </p>
              </div>
              <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                <ArrowUpRight size={64} className="text-blue-600" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer text={footerText} />
    </div>
  );
}
