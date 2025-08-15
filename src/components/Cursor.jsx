import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    const mouseEnterLink = () => setCursorVariant("link");
    const mouseLeaveLink = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink);
      link.addEventListener("mouseleave", mouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink);
        link.removeEventListener("mouseleave", mouseLeaveLink);
      });
    };
  }, []);

  const variants = {
    default: {
      inner: {
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        scale: 0.75,
      },
      outer: {
        x: mousePosition.x - 18,
        y: mousePosition.y - 18,
        scale: 0.8,
      },
    },
    link: {
      inner: {
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        scale: 0.5,
      },
      outer: {
        x: mousePosition.x - 18,
        y: mousePosition.y - 18,
        scale: 1.5,
      },
    },
  };

  return (
    <>
      {/* Custom cursor elements */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] "
        style={{
          transform: `translate3d(${variants[cursorVariant].outer.x}px, ${variants[cursorVariant].outer.y}px, 0) scale(${variants[cursorVariant].outer.scale})`,
          transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-9 h-9 border-2 border-brand-purple rounded-full opacity-50" />
      </div>

      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] "
        style={{
          transform: `translate3d(${variants[cursorVariant].inner.x}px, ${variants[cursorVariant].inner.y}px, 0) scale(${variants[cursorVariant].inner.scale})`,
          transition: "transform 0.1s ease-out",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-2 h-2 bg-brand-purple rounded-full" />
      </div>
    </>
  );
};

export default CustomCursor;
