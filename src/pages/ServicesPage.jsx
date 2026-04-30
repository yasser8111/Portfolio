import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings, Database, Layout, Smartphone, Globe, Shield } from "lucide-react";
import Button from "../components/Button";
import NavBack from "../components/NavBack";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { TextBlock } from "../components/TextBlockEffect";

const ServicesPage = ({
  lang,
  personal,
  services,
  nav,
  footer,
  buttons,
  sections,
}) => {
  const navigate = useNavigate();

  // Mapping icons to services if needed, or just using a default
  const getIcon = (index) => {
    const icons = [<Layout size={24} />, <Database size={24} />, <Smartphone size={24} />, <Globe size={24} />, <Shield size={24} />, <Settings size={24} />];
    return icons[index % icons.length];
  };

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
          <section className="py-24 px-6 md:px-12 border-b border-slate-200 bg-slate-50/30">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-slate-900 mb-8">
                <TextBlock blockColor="#2563eb" className="block">
                  {sections.services}
                </TextBlock>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                <TextBlock blockColor="#94a3b8" className="block">
                  {lang === "ar" 
                    ? "أقدم حلولاً رقمية متكاملة تركز على الأداء العالي، واجهة المستخدم العصرية، وتجربة المستخدم السلسة." 
                    : "I provide end-to-end digital solutions focused on high performance, modern UI, and seamless user experience."}
                </TextBlock>
              </p>
            </div>
          </section>

          <section className="py-20 px-6 md:px-12 border-b border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, i) => (
                <div key={i} className="group p-8 border border-slate-100 bg-white hover:border-blue-600 transition-all duration-500">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {getIcon(i)}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">
                    <TextBlock blockColor="#2563eb">
                      {service.title}
                    </TextBlock>
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    <TextBlock blockColor="#cbd5e1" className="block">
                      {service.desc}
                    </TextBlock>
                  </p>
                  
                  {/* Detailed features - just generic placeholders for now */}
                  <ul className="space-y-3 pt-6 border-t border-slate-50">
                    {(lang === "ar" ? ["أداء عالي", "تصميم متجاوب", "كود نظيف"] : ["High Performance", "Responsive Design", "Clean Code"]).map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <div className="w-1 h-1 bg-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

export default ServicesPage;
