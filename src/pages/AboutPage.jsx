import React from "react";
import { useNavigate } from "react-router-dom";
import { Award, Cpu, Lightbulb, Code, Target } from "lucide-react";
import NavBack from "../components/layout/NavBack";
import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import PageBanner from "../components/ui/PageBanner";
import { TextBlock } from "../components/ui/TextBlockEffect";

const AboutPage = ({
  lang,
  personal,
  about,
  philosophy,
  certificates,
  expertise,
  footer,
  buttons,
  sections,
}) => {
  const navigate = useNavigate();

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto w-full border-x border-slate-200 min-h-screen flex flex-col">
        <NavBack 
          onBack={() => navigate("/")} 
          backText={buttons.backToHome} 
          lang={lang} 
        />

        <main className="flex-1">
          {/* ── Page Banner ────────────────────────────────────────────────── */}
          <PageBanner 
            title={sections.about} 
            subtitle={philosophy.split("\n")[0]} 
          />

          {/* Detailed About & Skills */}
          <section className="border-b border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Story */}
              <div className="lg:col-span-7 py-16 px-6 md:px-12 lg:border-e border-slate-200">
                <div className="flex items-center gap-3 mb-10 text-slate-400">
                    <Lightbulb size={20} />
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">{sections.myStory}</span>
                </div>
                <div className="space-y-8">
                  {about.map((paragraph, i) => (
                    <p key={i} className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                      <TextBlock blockColor="#475569" className="block">
                        {paragraph}
                      </TextBlock>
                    </p>
                  ))}
                </div>

                {/* Textual Certificates Section */}
                <div className="mt-24">
                  <div className="flex items-center gap-3 mb-12 text-slate-400">
                    <Award size={20} />
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">{sections.certifications}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, i) => (
                      <div key={i} className="group p-8 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 relative overflow-hidden">
                        {/* Decorative Year Background */}
                        <span className="absolute -right-4 -bottom-4 text-7xl font-black text-slate-100/50 group-hover:text-blue-100/50 transition-colors pointer-events-none">
                          {cert.year.match(/\d{4}/)?.[0] || ""}
                        </span>
                        
                        <div className="relative z-10 h-full flex flex-col">
                          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center mb-8 rounded-none">
                            <Award size={20} />
                          </div>
                          
                          <h4 className="text-xl font-black text-slate-900 mb-3 leading-tight flex-grow">
                            <TextBlock blockColor="#2563eb">
                              {cert.title}
                            </TextBlock>
                          </h4>
                          
                          <div className="mt-auto">
                            <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">
                              {cert.issuer}
                            </p>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                              {cert.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Skills */}
              <div className="lg:col-span-5 py-16 px-6 md:px-12 bg-white">
                <div className="flex items-center gap-3 mb-10 text-slate-400">
                    <Code size={20} />
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">{sections.technicalStack}</span>
                </div>
                <div className="space-y-12">
                  {expertise.map((item, i) => (
                    <div key={i}>
                      <h4 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6 border-b border-slate-100 pb-2">
                        <TextBlock blockColor="#2563eb">
                          {item.category}
                        </TextBlock>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.skills.map((skill, j) => (
                          <li key={j} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-none shrink-0" />
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

export default AboutPage;
