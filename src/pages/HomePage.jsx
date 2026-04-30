import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { createSlug } from "../lib/utils";
import Button from "../components/Button";
import ProjectHoverSection from "../components/ProjectHoverSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { TextBlock } from "../components/TextBlockEffect";
import CardSwap, { Card } from "../components/CardSwap";

const HomePage = ({
  lang,
  setLang,
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
  isUnderConstruction,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  const navigate = useNavigate();

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white "
    >
      {isUnderConstruction && (
        <div className="bg-blue-600 text-white py-2 px-4 text-center text-xs font-bold tracking-widest uppercase">
          {personal.underConstructionText}
        </div>
      )}

      {/* Container */}
      <div className="max-w-[1400px] mx-auto w-full border-x border-slate-200 min-h-screen flex flex-col">
        {/* Navigation */}
        <Navbar
          personal={personal}
          nav={nav}
          lang={lang}
          setLang={setLang}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />

        <main className="flex-1">
          <section className="relative overflow-hidden min-h-[calc(100vh-76px)] border-b border-slate-200 px-6 md:px-12 bg-white py-20 lg:py-0 flex items-center">
             <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
               {/* Left: Text Content */}
               <div className="relative z-10 w-full order-2 lg:order-1">
                 <div className="flex flex-col items-start text-start">
                   <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-slate-900">
                     {hero.title.split("\n").map((line, i) => (
                       <TextBlock key={i} blockColor="#2563eb" className="block">
                         {line.split(/(Code|الكود)/g).map((part, j) =>
                           part === "Code" || part === "الكود" ? (
                             <span key={j} className="text-blue-600">
                               {part}
                             </span>
                           ) : (
                             part
                           ),
                         )}
                       </TextBlock>
                     ))}
                   </h2>

                   <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium max-w-2xl mb-10">
                     <TextBlock blockColor="#cbd5e1" className="block">
                       {hero.subtitle}
                     </TextBlock>
                   </p>

                   <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-start">
                     <Button
                       href="#projects"
                       onClick={(e) => scrollToSection(e, "projects")}
                       variant="primary"
                       size="lg"
                       className="px-10 py-4 text-lg"
                     >
                       {buttons.viewProjects}
                     </Button>
                     <Button
                       href="#contact"
                       onClick={(e) => scrollToSection(e, "contact")}
                       variant="secondary"
                       size="lg"
                       className="px-10 py-4 text-lg"
                     >
                       {buttons.contactMe}
                     </Button>
                   </div>
                 </div>
               </div>

               {/* Right: CardSwap Content */}
               <div className="hidden lg:flex absolute right-[-18%] top-[25%] w-[1000px] h-[700px] pointer-events-none">
                 <div className="pointer-events-auto w-full h-full">
                    <CardSwap 
                      width={800} 
                      height={450} 
                      delay={5000}
                      cardDistance={50}
                      verticalDistance={60}
                    >
                      {projects.slice(0, 4).map((project, i) => (
                        <Card key={i} className="overflow-hidden border-white/5 rounded-none shadow-none">
                           <div className="relative w-full h-full">
                             <img 
                               src={project.image} 
                               alt={project.title} 
                               className="w-full h-full object-cover"
                             />
                           </div>
                        </Card>
                      ))}
                    </CardSwap>
                 </div>
               </div>
             </div>
          </section>

          {/* Projects */}
          <section id="projects" className="border-b border-slate-200">
            <div className="w-full">
              <ProjectHoverSection
                projects={projects.slice(0, 3)}
              />
              <div className="py-12 px-6 md:px-12 border-t border-slate-200 flex justify-center md:justify-start">
                <Link to="/projects">
                  <Button
                    variant="outline"
                    icon={({ className }) => (
                      <ArrowLeft
                        size={16}
                        className={`rtl:rotate-180 ${className}`}
                      />
                    )}
                    iconPosition="start"
                    className="uppercase"
                  >
                    {buttons.viewAll}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Skills & About */}
          <section className="border-b border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* About */}
              <div
                id="about"
                className="md:col-span-5 py-16 md:border-e border-slate-200 ps-6 md:ps-12 pe-12"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
                  <TextBlock blockColor="#2563eb">
                    {sections.about}
                  </TextBlock>
                </h3>
                {about.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg leading-relaxed text-slate-500 mb-6 last:mb-0"
                  >
                    <TextBlock blockColor="#cbd5e1" className="block">
                      {paragraph}
                    </TextBlock>
                  </p>
                ))}
                <div className="mt-10">
                  <Link to="/about">
                    <Button
                      variant="outline"
                      icon={({ className }) => (
                        <ArrowLeft
                          size={16}
                          className={`rtl:rotate-180 ${className}`}
                        />
                      )}
                      iconPosition="start"
                      className="uppercase"
                    >
                      {buttons.aboutMe}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Skills */}
              <div
                id="skills"
                className="md:col-span-7 py-16 ps-12 pe-6 md:pe-12 border-t md:border-t-0 border-slate-200"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8">
                  <TextBlock blockColor="#2563eb">
                    {sections.expertise}
                  </TextBlock>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                  {expertise.slice(0, 4).map((item, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 uppercase tracking-wide text-sm">
                        <TextBlock blockColor="#2563eb">
                          {item.category}
                        </TextBlock>
                      </h4>
                      <ul className="space-y-3 text-slate-500 font-medium">
                        {item.skills.slice(0, 3).map((skill, j) => (
                          <li key={j}>
                            <TextBlock blockColor="#cbd5e1">
                              {skill}
                            </TextBlock>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="border-b border-slate-200 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-3 py-12 md:py-16 md:border-e border-slate-200 ps-6 md:ps-12 pe-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
                  <TextBlock blockColor="#2563eb">
                    {sections.services}
                  </TextBlock>
                </h3>
              </div>
              <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="group project-card-fade p-8 md:p-12 border-b md:border-b-0 md:border-e border-slate-200 last:border-e-0 last:border-b-0 cursor-pointer"
                  >
                    <div className="mb-8">
                      <span className="text-5xl font-mono font-bold tracking-tighter text-slate-500 opacity-20 group-hover:opacity-100 group-hover:text-blue-600 transition-all duration-500">
                        0{i + 1}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">
                      <TextBlock blockColor="#2563eb">
                        {service.title}
                      </TextBlock>
                    </h4>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      <TextBlock blockColor="#cbd5e1" className="block">
                        {service.desc}
                      </TextBlock>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ContactSection 
            personal={personal} 
            sections={sections} 
            lang={lang} 
          />
        </main>

        <Footer text={footer.text} />
      </div>
    </div>
  );
};

export default HomePage;
