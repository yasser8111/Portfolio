import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = ({
  imageSrc = "",
  size = 20,
  speed = 0.1,
  showDot = true,
}) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.style.cursor = "none";

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: speed,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.style.cursor = "default";
    };
  }, [speed]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: size / 2,
        left: size / 2,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
        transform: "translate(-50%, -50%)",
        willChange: "transform",
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="cursor"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            mixBlendMode: "difference",
          }}
        />
      ) : (
        showDot && (
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
        )
      )}
    </div>
  );
};

export default CustomCursor;
