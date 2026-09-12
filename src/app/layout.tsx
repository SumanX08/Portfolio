"use client";

import { useEffect, useState } from "react";
import "./globals.css";

import Navbar from "./components/Navbar";
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
      </body>
    </html>
  );
}