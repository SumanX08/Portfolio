"use client";

import { useState, useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";

type NavbarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("about");
  const sections = ["about", "projects", "skills", "contact"];

  // Scroll into view on click
  const handleClick = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 4/3 && rect.bottom >= window.innerHeight / 4/3) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--background)]/80 border-[var(--shadow)]">
  <div className="max-w-5xl mx-auto flex justify-between items-center py-3 px-3 md:px-6">
    {/* Left - Logo */}
    <h1 className="text-3xl font-semibold text-[var(--foreground)] hidden sm:block">
      Portfolio
    </h1>

    {/* Center - Section Buttons */}
    <LayoutGroup>
      <div className="flex items-center gap-3 sm:gap-8 text-sm md:text-lg bg-[var(--background)]/70 backdrop-blur-sm rounded-2xl px-4 md:px-6 py-2 md:py-3 shadow-[0_0_15px_var(--shadow)] text-[var(--foreground)]">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleClick(section)}
            className="relative px-2 py-1 cursor-pointer"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {activeSection === section && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 w-full bg-[var(--foreground)] rounded"
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </LayoutGroup>

    {/* Right - Theme Toggle */}
    <motion.button
      whileHover={{
        backgroundColor: "var(--foreground)",
        color: "var(--background)",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      onClick={toggleTheme}
      className="ml-3 md:ml-6 bg-[var(--background)] px-3 py-2 rounded-lg shadow-[0_0_15px_var(--shadow)] cursor-pointer text-[var(--foreground)]"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </motion.button>
  </div>
</nav>

  );
};

export default Navbar;
