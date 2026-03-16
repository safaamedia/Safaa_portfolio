"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type NavbarProps = {
  darkMode: boolean;
};

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ darkMode }: NavbarProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const activeElementRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getOffsetLeft = (element: HTMLElement) => {
    const navElement = navRef.current;
    const activeElement = activeElementRef.current;

    if (!navElement || !activeElement) return 0;

    const elementRect = element.getBoundingClientRect();

    return (
      elementRect.left -
      navElement.getBoundingClientRect().left +
      (elementRect.width - activeElement.offsetWidth) / 2
    );
  };

  const moveIndicator = (index: number, animate = true) => {
    const button = buttonRefs.current[index];
    const activeElement = activeElementRef.current;

    if (!button || !activeElement) return;

    const x = getOffsetLeft(button);

    if (animate) {
      gsap.to(activeElement, {
        x,
        duration: 0.25,
        ease: "power2.out",
      });
    } else {
      gsap.set(activeElement, { x });
    }
  };

  useEffect(() => {
    const sections = navItems.map((item) => item.id);

    const updateActiveFromScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveIndex(i);
          moveIndicator(i, true);
          break;
        }
      }
    };

    const handleResize = () => {
      moveIndicator(activeIndex, false);
    };

    const readyFonts = async () => {
      if ("fonts" in document) {
        await document.fonts.ready;
      }
      moveIndicator(activeIndex, false);
    };

    readyFonts();
    window.addEventListener("scroll", updateActiveFromScroll);
    window.addEventListener("resize", handleResize);

    updateActiveFromScroll();

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex]);

  return (
    <>
      <style jsx>{`
        .nav {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          padding: 8px;
          border-radius: 999px;
          backdrop-filter: blur(16px);
        }

        .nav-link {
          position: relative;
          z-index: 2;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .active-element {
          position: absolute;
          z-index: 1;
          top: 8px;
          left: 0;
          width: 88px;
          height: calc(100% - 16px);
          border-radius: 999px;
          pointer-events: none;
        }
      `}</style>

      <nav
        ref={navRef}
        className={`nav border shadow-sm ${
          darkMode
            ? "border-violet-800/40 bg-[#120d1f]/80"
            : "border-violet-200 bg-white/80"
        }`}
      >
        <div
          ref={activeElementRef}
          className={`active-element ${
            darkMode
              ? "bg-gradient-to-r from-violet-500 to-fuchsia-400 shadow-[0_8px_24px_rgba(139,92,246,0.35)]"
              : "bg-gradient-to-r from-violet-500 to-fuchsia-400 shadow-[0_8px_24px_rgba(139,92,246,0.25)]"
          }`}
        />

        {navItems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <a
              key={item.id}
              href={item.href}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              className={`nav-link ${
                isActive
                  ? "text-white"
                  : darkMode
                  ? "text-violet-200/80 hover:text-white"
                  : "text-[#5f4b80] hover:text-violet-700"
              }`}
              onClick={() => {
                setActiveIndex(index);
                moveIndicator(index, true);
              }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </>
  );
}