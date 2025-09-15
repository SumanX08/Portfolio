"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Detect current theme from localStorage or default
  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove(theme === "light" ? "dark" : "light");
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <html lang="en">
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
