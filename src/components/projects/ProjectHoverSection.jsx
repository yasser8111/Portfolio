import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createSlug } from "../../lib/utils";
import { TextBlock } from "../ui/TextBlockEffect";

// Simple utility to merge class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

const ProjectHoverSection = ({
  projects,
  className,
  thumbnailWidth = 480,
  thumbnailHeight = 270,
}) => {
  const containerRef = useRef(null);
  const mouseViewport = useRef({ x: 0, y: 0 }); // تتبع الماوس بالنسبة للشاشة
  const [isDesktop, setIsDesktop] = useState(true);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [smoothMousePos, setSmoothMousePos] = useState({ x: 0, y: 0 });

  // Detect desktop vs mobile
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // تتبع الماوس عالمياً لتحديث الإحداثيات حتى أثناء السكرول
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      mouseViewport.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // Smooth mouse follow logic (Scroll-aware)
  useEffect(() => {
    if (!isDesktop || !modal.active) return;

    let frameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateSmoothPos = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // نحسب المكان بالنسبة للحاوية في كل إطار (Frame)
        // هذا يضمن أنه إذا تحركت الحاوية (بسبب السكرول) سيتغير الموقع تلقائياً
        const targetX = mouseViewport.current.x - rect.left;
        const targetY = mouseViewport.current.y - rect.top;

        setSmoothMousePos((prev) => ({
          x: lerp(prev.x, targetX, 0.15),
          y: lerp(prev.y, targetY, 0.15),
        }));
      }
      frameId = requestAnimationFrame(updateSmoothPos);
    };

    frameId = requestAnimationFrame(updateSmoothPos);
    return () => cancelAnimationFrame(frameId);
  }, [isDesktop, modal.active]);

  if (isDesktop) {
    return (
      <div
        ref={containerRef}
        onMouseLeave={() => setModal({ active: false, index: 0 })}
        className={cn("relative flex flex-col w-full mt-48", className)}
      >
        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/projects/${createSlug(project.title)}`}
              onMouseEnter={(e) => {
                // ضبط الموقع فوراً عند الدخول لمنع القفزة المفاجئة
                const rect = containerRef.current.getBoundingClientRect();
                setSmoothMousePos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
                setModal({ active: true, index });
              }}
              className={cn(
                "w-full flex flex-col md:flex-row md:items-center justify-between px-6 md:px-12 py-12 border-t border-slate-200 cursor-pointer transition-all duration-300 hover:bg-slate-50"
              )}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-3 md:mb-0">
                <TextBlock blockColor="#2563eb">
                  {project.title}
                </TextBlock>
              </h2>

            </Link>
          ))}
          <div className="w-full h-px bg-slate-200" />
        </div>

        {/* Thumbnail Modal */}
        <div
          className="pointer-events-none absolute z-50 overflow-hidden shadow-2xl border border-white/20"
          style={{
            width: thumbnailWidth,
            height: thumbnailHeight,
            left: smoothMousePos.x,
            top: smoothMousePos.y,
            transform: `translate(-50%, -50%) scale(${modal.active ? 1 : 0})`,
            opacity: modal.active ? 1 : 0,
            transition: "transform 0.4s ease, opacity 0.3s ease",
          }}
        >
          <div
            className="relative w-full h-full transition-transform duration-500 ease-out"
            style={{
              transform: `translateY(${-modal.index * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full h-full shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Mobile version (كما هو بدون تغيير)
  return (
    <div className={cn("flex flex-col w-full py-4", className)}>
      {projects.map((project, index) => (
        <Link
          key={index}
          to={`/projects/${createSlug(project.title)}`}
          className="flex flex-col border-b border-slate-200 last:border-b-0"
        >
          <div className="w-full px-6 py-8 active:bg-slate-50 transition-colors">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
              <TextBlock blockColor="#2563eb">
                {project.title}
              </TextBlock>
            </h2>
            <p className="text-slate-500 text-base font-medium line-clamp-2 mb-6">
              <TextBlock blockColor="#cbd5e1" className="block">
                {project.desc}
              </TextBlock>
            </p>
            <div className="w-full aspect-video overflow-hidden border border-slate-200 shadow-sm">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectHoverSection;
