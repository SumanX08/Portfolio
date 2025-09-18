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
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
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
      <div className="w-4/5 md:w-3/5 mx-auto flex justify-between items-center py-3">
        <div className="text-2xl font-semibold text-[var(--foreground)]">Portfolio</div>

        <LayoutGroup>
          <div className="flex items-center gap-8 text-md bg-[var(--background)]/70 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-[0_0_15px_var(--shadow)] text-[var(--foreground)] relative">
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
                    className="absolute left-0 bottom-0 w-full h-1 bg-[var(--foreground)] rounded"
                    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </button>
            ))}
          </div>
        </LayoutGroup>

        <motion.button
        whileHover={{
      backgroundColor: "var(--foreground)", // hover background
      color: "var(--background)", // hover text
      transition: { duration: 0.3,ease: "easeInOut" },
    }}
          onClick={toggleTheme}
          className="bg-[var(--background)] px-4 py-2 rounded-lg shadow-[0_0_15px_var(--shadow)] cursor-pointer text-[var(--foreground)] "
        >
          {theme === "light" ? "🌙 " : "☀️ "}
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
