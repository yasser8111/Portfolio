import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Award, Cpu, Lightbulb, Code, Target } from "lucide-react";
import Button from "../components/Button";
import NavBack from "../components/NavBack";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { TextBlock } from "../components/TextBlockEffect";

const AboutPage = ({
  lang,
  setLang,
  personal,
  about,
  philosophy,
  certificates,
  expertise,
  nav,
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
      {/* Container */}
      <div className="max-w-[1400px] mx-auto w-full border-x border-slate-200 min-h-screen flex flex-col">
        <NavBack 
          onBack={() => navigate("/")} 
          backText={buttons.backToHome} 
          lang={lang} 
        />

        <main className="flex-1">
          {/* Hero Section - Philosophy */}
          <section className="py-32 px-6 md:px-12 border-b border-slate-200 bg-slate-50/30">
             <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-10 text-blue-600">
                    <Target size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{lang === "ar" ? "فلسفتي" : "Philosophy"}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-slate-900 mb-10">
                  <TextBlock blockColor="#2563eb" className="block">
                    {philosophy.split("\n")[0]}
                  </TextBlock>
                </h1>

                <div className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                   {philosophy.split("\n").slice(1).map((part, i) => (
                      <p key={i} className="mb-4 last:mb-0">
                        <TextBlock blockColor="#94a3b8" className="block">
                          {part}
                        </TextBlock>
                      </p>
                   ))}
                </div>
             </div>
          </section>

          {/* Detailed About & Skills */}
          <section className="border-b border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Story */}
              <div className="lg:col-span-7 py-16 px-6 md:px-12 lg:border-e border-slate-200">
                <div className="flex items-center gap-3 mb-10 text-slate-400">
                    <Lightbulb size={20} />
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">{lang === "ar" ? "قصتي" : "My Story"}</span>
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
              </div>

              {/* Right Column: Skills */}
              <div className="lg:col-span-5 py-16 px-6 md:px-12 bg-white">
                <div className="flex items-center gap-3 mb-10 text-slate-400">
                    <Code size={20} />
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">{lang === "ar" ? "المهارات التقنية" : "Technical Stack"}</span>
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

          {/* Certificates Section */}
          <section className="py-24 px-6 md:px-12 border-b border-slate-200">
             <div className="flex items-center gap-3 mb-16 text-slate-400">
                <Award size={20} />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">{lang === "ar" ? "الشهادات والإنجازات" : "Certifications & Achievements"}</span>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert, i) => (
                  <div key={i} className="group p-8 border border-slate-200 hover:border-blue-600 transition-all duration-500 bg-slate-50/30">
                    <div className="mb-6 text-slate-300 group-hover:text-blue-600 transition-colors">
                        <Award size={40} strokeWidth={1} />
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2 block">{cert.year}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
                    <p className="text-sm text-slate-500 font-medium">{cert.issuer}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* CTA Section - Replaced with ContactSection */}
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
