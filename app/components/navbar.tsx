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
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ darkMode }: NavbarProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const activeElementRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);
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
        "--active-element-show": "1",
      });
    } else {
      gsap.set(activeElement, {
        x,
        "--active-element-show": "1",
      });
    }
  };

  const scrollToSection = (id: string, index: number) => {
    const element = document.getElementById(id);
    if (!element) return;

    setActiveIndex(index);
    moveIndicator(index, true);

    if (id === "contact") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      return;
    }

    const navbarOffset = 120;
    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      moveIndicator(activeIndex, false);
    };

    document.fonts.ready.then(() => {
      moveIndicator(activeIndex, false);
    });

    window.addEventListener("resize", handleResize);

    return () => {
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
    gap: 2px;
    width: fit-content;
    padding: 5px;
    border-radius: 999px;
    backdrop-filter: blur(16px);
    overflow-x: auto;
    scrollbar-width: none;
    max-width: 100%;
  }

  .nav::-webkit-scrollbar {
    display: none;
  }

  .nav-link {
    position: relative;
    z-index: 2;
    padding: 9px 12px;
    border-radius: 999px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    transition: color 0.2s ease;
    white-space: nowrap;
    cursor: pointer;
    flex: 0 0 auto;
  }

  .active-element {
    --active-element-show: 0;
    position: absolute;
    z-index: 1;
    top: 5px;
    left: 0;
    width: 74px;
    height: calc(100% - 10px);
    border-radius: 999px;
    opacity: var(--active-element-show);
    pointer-events: none;
  }

  @media (min-width: 640px) {
    .nav {
      gap: 8px;
      padding: 8px;
    }

    .nav-link {
      padding: 10px 16px;
      font-size: 14px;
    }

    .active-element {
      top: 8px;
      width: 88px;
      height: calc(100% - 16px);
    }
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
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id, index);
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