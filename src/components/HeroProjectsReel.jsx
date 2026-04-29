import React, { useRef, useEffect, useCallback } from "react";

/**
 * HeroProjectsReel
 * Multi-column auto-scrolling mosaic with 3D perspective tilt.
 *
 * Props:
 * - projects: array of project objects with image/title
 * - cardWidth: width of each card (default: 220)
 * - cardHeight: height of each card (default: 140)
 * - cardGap: gap between cards (default: 0)
 * - skewY: Y-axis rotation in degrees (default: -42)
 * - skewX: X-axis rotation in degrees (default: 12)
 * - skewZ: Z-axis rotation in degrees (default: -3)
 * - perspective: CSS perspective value (default: 800)
 * - reelScale: scale multiplier (default: 1.3)
 */

const HeroProjectsReel = ({
  projects = [],
  cardWidth = 220,
  cardHeight = 140,
  cardGap = 0,
  skewY = -45,
  skewX = 20,
  skewZ = 0,
  perspective = 800,
  reelScale = 1.3,
}) => {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const animRef = useRef(null);
  const pos = useRef([0, 0, 0]);

  const columns = [
    { ref: col1Ref, dir: -1, speed: 0.4 },
    { ref: col2Ref, dir: -1, speed: 0.4 },
    { ref: col3Ref, dir: -1, speed: 0.4 },
  ];

  const getColumnItems = useCallback(
    (colIndex) => {
      if (projects.length === 0) return [];
      const filtered = projects.filter((_, i) => i % 3 === colIndex);
      const base = filtered.length > 0 ? filtered : projects;
      return [...base, ...base, ...base, ...base, ...base, ...base, ...base, ...base];
    },
    [projects]
  );

  const animate = useCallback(() => {
    columns.forEach((col, i) => {
      const el = col.ref.current;
      if (!el) return;

      pos.current[i] += col.speed * col.dir;

      const totalChildren = el.children.length;
      const setsCount = 8;
      const oneSetPx = (totalChildren / setsCount) * (cardHeight + cardGap);

      if (col.dir === -1 && Math.abs(pos.current[i]) >= oneSetPx) {
        pos.current[i] += oneSetPx;
      }
      if (col.dir === 1 && pos.current[i] >= oneSetPx) {
        pos.current[i] -= oneSetPx;
      }

      el.style.transform = `translateY(${pos.current[i]}px)`;
    });

    animRef.current = requestAnimationFrame(animate);
  }, [cardHeight, cardGap]);

  useEffect(() => {
    pos.current[0] = 0;
    // Middle column offset by half a card for staggered randomness
    pos.current[1] = -(cardHeight / 2);
    pos.current[2] = 0;

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [animate, cardHeight, cardGap]);

  if (projects.length === 0) return null;

  const col1Items = getColumnItems(0);
  const col2Items = getColumnItems(1);
  const col3Items = getColumnItems(2);

  const renderColumn = (items, ref, keyPrefix) => (
    <div className="relative overflow-hidden" style={{ height: "200%", width: `${cardWidth}px`, flexShrink: 0 }}>
      <div
        ref={ref}
        className="flex flex-col will-change-transform"
        style={{ gap: `${cardGap}px` }}
      >
        {items.map((project, i) => (
          <div
            key={`${keyPrefix}-${i}`}
            className="shrink-0 overflow-hidden bg-slate-100"
            style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              draggable="false"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="absolute top-0 right-0 w-[55%] h-full overflow-hidden pointer-events-none select-none"
      style={{
        perspective: `${perspective}px`,
        perspectiveOrigin: "30% 50%",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `rotateY(${skewY}deg) rotateX(${skewX}deg) rotateZ(${skewZ}deg) scale(${reelScale})`,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        <div
          className="absolute inset-0 flex justify-center items-start"
          style={{ gap: `${cardGap}px`, padding: "0 2px" }}
        >
          {renderColumn(col1Items, col1Ref, "c1")}
          {renderColumn(col2Items, col2Ref, "c2")}
          {renderColumn(col3Items, col3Ref, "c3")}
        </div>
      </div>
    </div>
  );
};

export default HeroProjectsReel;