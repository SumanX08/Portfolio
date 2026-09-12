"use client";

import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/SumanX08",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bagal-suman-preet-singh-4257b22b6",
    },
    {
      name: "X",
      icon: Twitter,
      href: "https://x.com/Suman_twts",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:sumanpreetsingh998@gmail.com",
    },
  ];

  return (
    <section className="border-x border-b border-[var(--border)] pt-16">

      <div className="grid min-h-[360px] grid-cols-1 lg:grid-cols-[150px_1fr_260px]">

        {/* Profile image */}
        <div className="flex items-center justify-center border-b border-[var(--border)] p-8 lg:border-b-0 ">
          <div className="relative">

            <div className="absolute -inset-2 border border-[var(--border)]" />

            <div className="h-40 w-32 overflow-hidden border border-[var(--foreground)] bg-[var(--surface)] ">
              <Image
                src="/profile.png"
                alt="Suman Preet Singh Bagal"
                className="h-full w-full object-cover grayscale"
              />
            </div>

          </div>
        </div>

        {/* Main information */}
        <div className="relative flex flex-col justify-center p-6 lg:p-8">

          
         

          <h1 className="max-w-3xl font-mono text-2xl font-bold uppercase leading-tight tracking-tight sm:text-2xl lg:text-3xl">
            Suman Preet
            Singh 
          </h1>

 <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            AI Full-Stack Developer
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-5 font-mono text-xs text-[var(--muted)]">
            <span>B.Tech CSE</span>

            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              Visakhaptnam,India
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
 Building intelligent web applications, RAG systems, AI agents and real-time            products.  
</p>

          <div className="mt-2 flex items-center gap-2 font-mono text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[var(--muted)]">
              Open to full-time opportunities
            </span>
          </div>

        </div>

        {/* Socials */}
        <div className="flex flex-col justify-center border-t border-[var(--border)] p-8 lg:border-l lg:border-t-0">

          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Find me online
          </p>

          <div className="grid grid-cols-2 gap-2">

            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="group flex items-center justify-between border border-[var(--border)] px-3 py-3 font-mono text-xs transition hover:border-[var(--foreground)]"
                >
                  <span className="flex items-center gap-2">
                    <Icon size={15} />
                    {social.name}
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-40 transition group-hover:opacity-100"
                  />
                </motion.a>
              );
            })}

            <a
              href="https://drive.google.com/file/d/1ImG1CZgjt3fwoZNRet9PYfQR9AZtGZsP/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 flex items-center justify-center gap-2 border border-[var(--foreground)] px-3 py-3 font-mono text-xs transition hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              <Download size={15} />
              Resume
            </a>

          </div>

         
        </div>

      </div>
    </section>
  );
};

export default Hero;