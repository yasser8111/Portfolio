import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({
  children,
  subtitle = "",
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  subtitleClassName = "",
  animationDuration = 0.8,
  ease = "expo.out",
  scrollStart = "top bottom+=5%",
  scrollEnd = "bottom center",
  stagger = 0.04,
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block title-char" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  const splitSubtitle = useMemo(() => {
    return subtitle.split("").map((char, index) => (
      <span
        className="inline-block sub-char opacity-0"
        key={index}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [subtitle]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        scrub: true,
      },
    });

    tl.fromTo(
      el.querySelectorAll(".title-char"),
      {
        opacity: 0,
        y: 100,
        rotateX: -90,
        transformOrigin: "50% 0%",
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: animationDuration,
        ease: ease,
        stagger: stagger,
      }
    ).to(
      el.querySelectorAll(".sub-char"),
      {
        opacity: 1,
        stagger: 0.03,
        duration: 0.1,
        ease: "none",
      },
      "-=0.6"
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
    children,
    subtitle,
  ]);

  return (
    <div ref={containerRef} className={`relative ${containerClassName}`}>
      <span
        className={`pointer-events-none select-none z-10 absolute -top-7 left-0 ${subtitleClassName}`}
        style={{ fontFamily: "Priestacy, cursive" }}
      >
        {splitSubtitle}
      </span>

      <h2 ref={titleRef} className={`overflow-hidden block ${textClassName}`}>
        {splitText}
      </h2>
    </div>
  );
};

export default Title;
