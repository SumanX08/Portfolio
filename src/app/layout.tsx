import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Suman | Portfolio",
  description: "Personal portfolio of Suman – Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        
        <Projects />
        <Skills />
        <Connect />
        <Footer />
      </body>
    </html>
  );
}
