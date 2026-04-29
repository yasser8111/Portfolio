import React, { useRef, useEffect, useState } from "react";
import { Move } from "lucide-react";

const CELL_WIDTH = 480;
const CELL_HEIGHT = 270;
const GAP = 32;
const TOTAL_WIDTH = CELL_WIDTH + GAP;
const TOTAL_HEIGHT = CELL_HEIGHT + GAP;

const ProjectsGallery = ({ projects, onSelectProject, lang = "en", gallery }) => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);

  const currentOffset = useRef({ x: 0, y: 0 });
  const targetOffset = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(null);
  const animationRef = useRef(null);
  const cellsRef = useRef(new Map());

  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const applySnapEffect = () => {
    const screenCenterX = dimensions.width / 2;
    const screenCenterY = dimensions.height / 2;

    const targetCol = Math.round(
      (screenCenterX - CELL_WIDTH / 2 - currentOffset.current.x) / TOTAL_WIDTH,
    );
    const targetRow = Math.round(
      (screenCenterY - CELL_HEIGHT / 2 - currentOffset.current.y) /
        TOTAL_HEIGHT,
    );

    targetOffset.current.x =
      screenCenterX - CELL_WIDTH / 2 - targetCol * TOTAL_WIDTH;
    targetOffset.current.y =
      screenCenterY - CELL_HEIGHT / 2 - targetRow * TOTAL_HEIGHT;
  };

  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent default scrolling when hovering the gallery
      e.preventDefault();
      targetOffset.current.x -= e.deltaX * 1.5;
      targetOffset.current.y -= e.deltaY * 1.5;

      currentOffset.current.x -= e.deltaX * 0.2;
      currentOffset.current.y -= e.deltaY * 0.2;

      clearTimeout(window.snapTimeout);
      window.snapTimeout = setTimeout(() => {
        applySnapEffect();
      }, 300);
    };

    const container = wrapperRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) container.removeEventListener("wheel", handleWheel);
    };
  }, [dimensions]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    hasDragged.current = false;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    velocity.current = { x: 0, y: 0 };
    lastTime.current = performance.now();
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const now = performance.now();
    const dt = now - lastTime.current;

    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      hasDragged.current = true;
    }

    if (dt > 0) {
      velocity.current = { x: dx / dt, y: dy / dt };
    }

    targetOffset.current.x += dx;
    targetOffset.current.y += dy;

    currentOffset.current.x = targetOffset.current.x;
    currentOffset.current.y = targetOffset.current.y;

    lastMousePos.current = { x: e.clientX, y: e.clientY };
    lastTime.current = now;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = "grab";

    const momentumX = velocity.current.x * 300;
    const momentumY = velocity.current.y * 300;

    const projectedX = currentOffset.current.x + momentumX;
    const projectedY = currentOffset.current.y + momentumY;

    const screenCenterX = dimensions.width / 2;
    const screenCenterY = dimensions.height / 2;

    const targetCol = Math.round(
      (screenCenterX - CELL_WIDTH / 2 - projectedX) / TOTAL_WIDTH,
    );
    const targetRow = Math.round(
      (screenCenterY - CELL_HEIGHT / 2 - projectedY) / TOTAL_HEIGHT,
    );

    targetOffset.current.x =
      screenCenterX - CELL_WIDTH / 2 - targetCol * TOTAL_WIDTH;
    targetOffset.current.y =
      screenCenterY - CELL_HEIGHT / 2 - targetRow * TOTAL_HEIGHT;
  };

  const createCellElement = (col, row) => {
    const N = projects.length;
    if (N === 0) return null;
    const index = (((col + row * 3) % N) + N) % N;
    const project = projects[index];

    const el = document.createElement("div");
    el.className =
      "absolute top-0 left-0 overflow-hidden transition-colors duration-300 group cursor-pointer bg-white pointer-events-auto hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5";
    el.style.width = `${CELL_WIDTH}px`;
    el.style.height = `${CELL_HEIGHT}px`;
    el.style.willChange = "transform";

    el.onclick = (e) => {
      if (!hasDragged.current && onSelectProject) {
        onSelectProject(project);
      }
    };

    el.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none grayscale-[0.2] group-hover:grayscale-0" draggable="false" />
      <div class="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <div class="absolute inset-0 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-4 group-hover:translate-y-0" dir="rtl">
        <div class="flex items-center gap-3 mb-3">
           <span class="text-[10px] text-white bg-blue-600 px-2 py-0.5 uppercase tracking-widest font-bold">${project.tech.split("/")[0].trim()}</span>
           <span class="text-[10px] text-slate-500 font-medium">${project.year}</span>
        </div>
        <h3 class="text-slate-900 text-2xl font-black mb-2 uppercase tracking-tight">${project.title}</h3>
        <p class="text-slate-600 text-sm line-clamp-3 leading-relaxed font-medium">${project.desc}</p>
      </div>
    `;

    return el;
  };

  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowHint(true), 500);
    const hideTimer = setTimeout(() => setShowHint(false), 6500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (projects.length === 0) return;
    const renderGrid = () => {
      if (!containerRef.current) return;

      const { width, height } = dimensions;

      const offsetX = currentOffset.current.x;
      const offsetY = currentOffset.current.y;

      const startCol = Math.floor((-offsetX - CELL_WIDTH) / TOTAL_WIDTH) - 2;
      const endCol = Math.floor((width - offsetX) / TOTAL_WIDTH) + 2;

      const startRow = Math.floor((-offsetY - CELL_HEIGHT) / TOTAL_HEIGHT) - 2;
      const endRow = Math.floor((height - offsetY) / TOTAL_HEIGHT) + 2;

      const activeKeys = new Set();

      for (let col = startCol; col <= endCol; col++) {
        for (let row = startRow; row <= endRow; row++) {
          const key = `${col},${row}`;
          activeKeys.add(key);

          let el = cellsRef.current.get(key);
          if (!el) {
            el = createCellElement(col, row);
            if (el) {
              containerRef.current.appendChild(el);
              cellsRef.current.set(key, el);
            }
          }

          if (el) {
            const x = offsetX + col * TOTAL_WIDTH;
            const y = offsetY + row * TOTAL_HEIGHT;
            el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          }
        }
      }

      for (const [key, el] of cellsRef.current.entries()) {
        if (!activeKeys.has(key)) {
          if (containerRef.current.contains(el)) {
            containerRef.current.removeChild(el);
          }
          cellsRef.current.delete(key);
        }
      }
    };

    const update = () => {
      if (!isDragging.current) {
        currentOffset.current.x +=
          (targetOffset.current.x - currentOffset.current.x) * 0.1;
        currentOffset.current.y +=
          (targetOffset.current.y - currentOffset.current.y) * 0.1;
      }

      renderGrid();
      animationRef.current = requestAnimationFrame(update);
    };

    if (
      currentOffset.current.x === 0 &&
      currentOffset.current.y === 0 &&
      !isDragging.current
    ) {
      setTimeout(() => applySnapEffect(), 100);
    }

    animationRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, projects]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-full min-h-[600px] bg-white overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.5] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      <div
        ref={containerRef}
        className="absolute inset-0 touch-none cursor-grab"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />

      <div 
        className={`pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-1000 ease-in-out ${
          showHint 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 px-6 py-3 shadow-2xl flex items-center gap-4">
          <div className="flex items-center justify-center shrink-0 text-blue-600">
            <Move size={18} />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
            {gallery?.hint}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
