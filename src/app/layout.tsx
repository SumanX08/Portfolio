"use client";

import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './globals.css'
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import { Inter, Space_Grotesk } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

 useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // fallback: system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
    }
  }, []);

  // 2️⃣ Every time theme changes, update <html> and localStorage
  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3️⃣ Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!theme) return null;
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
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
