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
  const modalRef = useRef(null);
  const containerRect = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [modal, setModal] = useState({ active: false, index: 0 });

  // Detect desktop vs mobile
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // تحديث إحداثيات الحاوية عند السكرول أو تغيير الحجم فقط لمنع الـ Reflow المتكرر
  useEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        containerRect.current = containerRef.current.getBoundingClientRect();
      }
    };
    window.addEventListener("scroll", updateRect, { passive: true });
    window.addEventListener("resize", updateRect);
    updateRect();
    return () => {
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, [isDesktop]);

  // تحسين الأداء: استخدام الإحداثيات المخزنة لتجنب Forced Reflow أثناء الحركة
  const handleMouseMove = (e) => {
    if (!isDesktop || !modal.active || !modalRef.current || !containerRect.current) return;
    
    const x = e.clientX - containerRect.current.left;
    const y = e.clientY - containerRect.current.top;
    
    modalRef.current.style.translate = `${x}px ${y}px`;
  };

  if (isDesktop) {
    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          if (containerRef.current) {
            containerRect.current = containerRef.current.getBoundingClientRect();
          }
        }}
        onMouseLeave={() => setModal({ active: false, index: 0 })}
        className={cn("relative flex flex-col w-full mt-12", className)}
      >
        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/projects/${createSlug(project.title)}`}
              onMouseEnter={() => setModal({ active: true, index })}
              className={cn(
                "w-full flex flex-col md:flex-row md:items-center justify-between px-6 md:px-12 py-12 border-t border-slate-200 cursor-pointer transition-all duration-300 hover:bg-slate-50",
              )}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-3 md:mb-0">
                <TextBlock blockColor="#2563eb">{project.title}</TextBlock>
              </h2>
            </Link>
          ))}
          <div className="w-full h-px bg-slate-200" />
        </div>

        {/* Thumbnail Modal */}
        <div
          ref={modalRef}
          className="pointer-events-none absolute z-50 overflow-hidden shadow-2xl border border-white/20"
          style={{
            width: thumbnailWidth,
            height: thumbnailHeight,
            left: 0,
            top: 0,
            transform: `translate(-50%, -50%) scale(${modal.active ? 1 : 0})`,
            opacity: modal.active ? 1 : 0,
            transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease, translate 0.15s ease-out",
            willChange: "transform, translate",
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
                  loading="lazy"
                  decoding="async"
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
              <TextBlock blockColor="#2563eb">{project.title}</TextBlock>
            </h2>
            <p className="text-slate-500 text-base font-medium line-clamp-2 mb-6">
              <TextBlock blockColor="#cbd5e1" className="block">
                {project.desc}
              </TextBlock>
            </p>
            <div className="w-full aspect-video overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectHoverSection;
