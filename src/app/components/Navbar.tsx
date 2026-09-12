
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Search } from "lucide-react";

type NavbarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const sections = ["about", "stack", "projects", "blogs"];

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("about");

  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });

    setActiveSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.3 &&
          rect.bottom >= window.innerHeight * 0.3
        ) {
          current = section;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="font-mono text-lg font-bold tracking-[0.18em]"
        >
          SUMAN
        </button>

        {/* Navigation */}
        <div className="hidden items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1 md:flex">
          {sections.map((section) => (
            <button
              key={section}
              type="button"
              onClick={() => handleClick(section)}
              className={`rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                activeSection === section
                  ? "bg-[var(--foreground)] text-[var(--background)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">

          {/* Search */}
          <button
            type="button"
            className="hidden items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 font-mono text-xs text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)] sm:flex"
          >
            <Search size={15} />
            <span>Ctrl K</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="rounded-xl border border-[var(--border)] p-2.5 text-[var(--foreground)] transition hover:border-[var(--foreground)]"
          >
            {theme === "dark" ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;

