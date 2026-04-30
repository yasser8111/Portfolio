import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Database,
  Smartphone,
  Globe,
  Shield,
  Settings,
  Paintbrush,
  Puzzle,
  Code,
} from "lucide-react";
import NavBack from "../components/NavBack";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { TextBlock } from "../components/TextBlockEffect";

/* ─── colour palettes (same 3-colour cycle as HomePage) ─────────────────── */
const PALETTES = [
  {
    base: "#0284c7",
    bg: "#f0f9ff",
    bgLight: "#e0f2fe",
    title: "#0c4a6e",
    desc: "#0369a1",
    border: "#bae6fd",
    tag: "#dbeafe",
    tagText: "#1e40af",
  },
  {
    base: "#db2777",
    bg: "#fdf2f8",
    bgLight: "#fce7f3",
    title: "#831843",
    desc: "#be185d",
    border: "#fbcfe8",
    tag: "#fce7f3",
    tagText: "#9d174d",
  },
  {
    base: "#059669",
    bg: "#ecfdf5",
    bgLight: "#d1fae5",
    title: "#064e3b",
    desc: "#047857",
    border: "#a7f3d0",
    tag: "#d1fae5",
    tagText: "#065f46",
  },
];

const ICONS = [Code, Paintbrush, Puzzle, Globe, Shield, Settings];

/* ─── feature lists per service index (3 items each) ────────────────────── */
const getFeatures = (lang, i) => {
  const ar = [
    ["واجهات تفاعلية", "تحسين الأداء", "تصميم متجاوب"],
    ["بنية بيانات قوية", "واجهات برمجية آمنة", "قواعد بيانات سريعة"],
    ["تصميم أصيل للموبايل", "تجربة مستخدم سلسة", "نشر على المتجرين"],
    ["حضور رقمي احترافي", "تحسين محركات البحث", "سرعة تحميل عالية"],
    ["حماية متقدمة", "مصادقة آمنة", "تشفير البيانات"],
    ["أتمتة المهام", "دمج الأنظمة", "صيانة مستمرة"],
  ];
  const en = [
    ["Interactive UIs", "Performance Tuning", "Responsive Design"],
    ["Robust Data Models", "Secure APIs", "Fast Databases"],
    ["Mobile-First Design", "Smooth UX", "App Store Deployment"],
    ["Professional Web Presence", "SEO Optimised", "Fast Load Times"],
    ["Advanced Protection", "Secure Auth", "Data Encryption"],
    ["Task Automation", "System Integration", "Ongoing Maintenance"],
  ];
  return (lang === "ar" ? ar : en)[i % 6];
};

/* ─── component ──────────────────────────────────────────────────────────── */
const ServicesPage = ({ lang, personal, services, nav, footer, buttons, sections }) => {
  const navigate = useNavigate();

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto w-full border-x border-slate-200 min-h-screen flex flex-col">
        <NavBack onBack={() => navigate("/")} backText={buttons.backToHome} lang={lang} />

        <main className="flex-1">

          {/* ── Hero ─────────────────────────────────────────────────────── */}
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

          {/* ── One section per service ───────────────────────────────────── */}
          {services.map((service, i) => {
            const p = PALETTES[i % 3];
            const Icon = ICONS[i % ICONS.length];
            const features = getFeatures(lang, i);
            const isEven = i % 2 === 0;

            return (
              <section
                key={i}
                style={{ backgroundColor: p.bg, borderColor: p.border }}
                className="border-b"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 min-h-[420px]`}
                >
                  {/* ── Left / Right: numbered identity ──────────────────── */}
                  <div
                    className={`flex flex-col justify-between p-10 md:p-16 border-b lg:border-b-0 ${
                      isEven
                        ? "lg:border-e order-1"
                        : "lg:border-s order-1 lg:order-2"
                    }`}
                    style={{ borderColor: p.border }}
                  >
                    {/* Icon + title */}
                    <div>
                      <div
                        className="w-14 h-14 flex items-center justify-center mb-6 rounded-sm"
                        style={{ backgroundColor: p.bgLight, color: p.base }}
                      >
                        <Icon size={26} />
                      </div>

                      <h2
                        className="text-3xl md:text-4xl font-black tracking-tight mb-4"
                        style={{ color: p.title }}
                      >
                        <TextBlock blockColor={p.base}>{service.title}</TextBlock>
                      </h2>

                      <p
                        className="text-lg font-medium leading-relaxed max-w-md"
                        style={{ color: p.desc }}
                      >
                        <TextBlock blockColor={p.base} className="block">
                          {service.desc}
                        </TextBlock>
                      </p>
                    </div>
                  </div>

                  {/* ── Right / Left: feature list ────────────────────────── */}
                  <div
                    className={`flex flex-col justify-center p-10 md:p-16 ${
                      isEven ? "order-2" : "order-2 lg:order-1"
                    }`}
                    style={{ backgroundColor: p.bgLight }}
                  >
                    <h3
                      className="text-xs font-bold uppercase tracking-widest mb-8"
                      style={{ color: p.desc }}
                    >
                      {lang === "ar" ? "ما تحصل عليه" : "What You Get"}
                    </h3>

                    <ul className="space-y-5">
                      {features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-4">
                          {/* Accent dot */}
                          <span
                            className="mt-1.5 w-2 h-2 rounded-sm flex-shrink-0"
                            style={{ backgroundColor: p.base }}
                          />
                          <span
                            className="text-lg font-semibold"
                            style={{ color: p.title }}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Decorative tag strip */}
                    <div className="mt-10 flex flex-wrap gap-2">
                      {features.map((feat, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm"
                          style={{
                            backgroundColor: p.tag,
                            color: p.tagText,
                          }}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          <ContactSection personal={personal} sections={sections} lang={lang} />
        </main>

        <Footer text={footer.text} />
      </div>
    </div>
  );
};

export default ServicesPage;
