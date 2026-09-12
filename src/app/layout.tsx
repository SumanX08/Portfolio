"use client";

import { useEffect, useState } from "react";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Inter, Space_Grotesk } from "next/font/google";

const setInitialTheme = `
  (function() {
    try {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = saved || (prefersDark ? 'dark' : 'light');
      document.documentElement.classList.add(theme);
    } catch (e) {}
  })();
`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);

      document.documentElement.classList.add(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable}`}
    >
      <body>
        <div className="site-shell">

          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
            {children}

            <Footer />
          </div>

        </div>
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
              <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />

      <body className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} />
        <Projects />
        <Skills />
        <Connect />
        <Footer />
      </body>
    </html>
  );
}