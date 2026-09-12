"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Globe,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "NoteSpace AI",
    description:
      "A production-grade RAG system with semantic reranking, hybrid retrieval, multi-source ingestion, and source-cited answers.",
    technologies: ["React", "Node.js", "MongoDB", "Qdrant"],
    image: "/notespace.png",
    github: "#",
    live: "#",
    status: "Building",
  },
  {
    number: "02",
    title: "Maya-Agent",
    description:
      "Open-source AI Agent SDK with modular support for LLM agents, function calling, tools, memory and multi-agent workflows.",
    technologies: ["JavaScript", "OpenAI", "Zod", "Node.js"],
    image: "/maya-agent.png",
    github: "#",
    live: "#",
    status: "Building",
  },
  {
    number: "03",
    title: "Connectly",
    description:
      "A skill-based networking platform with real-time messaging, user matching and efficient backend APIs.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
    image: "/connectly.png",
    github: "https://github.com/SumanX08/Connectly",
    live: "https://connectly-mu.vercel.app/",
    status: "Operational",
  },
  {
    number: "04",
    title: "Mimic AI",
    description:
      "Persona-based AI conversation platform for interacting with custom AI personalities through LLM-powered conversations.",
    technologies: ["React", "Node.js", "OpenAI", "LLMs"],
    image: "/mimic-ai.png",
    github: "#",
    live: "#",
    status: "Operational",
  },
  {
    number: "05",
    title: "Self-Consistency",
    description:
      "Multi-model answer engine that combines responses from multiple LLMs and uses an evaluator to produce more reliable answers.",
    technologies: ["OpenAI", "Gemini", "Claude", "Groq"],
    image: "/self-consistency.png",
    github: "#",
    live: "#",
    status: "Building",
  },
  {
    number: "06",
    title: "TinyLink",
    description:
      "A modern URL shortening application designed with a clean interface and efficient backend architecture.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    image: "/tinylink.png",
    github: "#",
    live: "#",
    status: "Operational",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="border-x border-b border-[var(--border)]"
    >
      {/* Section heading */}
      <div className="section-heading">
        <h2>Projects</h2>

        <span className="ml-auto hidden font-mono text-[10px] text-[var(--muted)] sm:block">
        </span>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.number}
            initial={
              showAll && index >= 4
                ? { opacity: 0, y: 15 }
                : false
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -2 }}
            className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)]"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
              <Image
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />

              <span className="absolute left-2 top-2 rounded-md border border-[var(--border)] bg-[var(--background)]/90 px-2 py-1 font-mono text-[9px] text-[var(--muted)] backdrop-blur-sm">
                {project.number}
              </span>
            </div>

            {/* Content */}
            <div className="p-3.5">

              {/* Title + links */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="truncate font-mono text-sm font-bold">
                  {project.title}
                </h3>

                <div className="flex shrink-0 items-center gap-1">

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="rounded-md border border-[var(--border)] p-1.5 text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                    >
                      <Globe size={12} />
                    </a>
                  )}

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub ${project.title}`}
                      className="rounded-md border border-[var(--border)] p-1.5 text-[var(--muted)] transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                    >
                      <Github size={12} />
                    </a>
                  )}

                </div>
              </div>

              {/* Description */}
              <p className="mt-2 line-clamp-3 text-[11px] leading-[1.55] text-[var(--muted)]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-3">
                <p className="mb-1.5 font-mono text-[8px] uppercase tracking-wider text-[var(--muted)]">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 font-mono text-[8px] text-[var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-3 flex items-center justify-between border-t border-[var(--border)] pt-2.5">

                <span className="flex items-center gap-1.5 font-mono text-[8px] text-[var(--muted)]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.status === "Operational"
                        ? "bg-emerald-500"
                        : "bg-pink-500"
                    }`}
                  />

                  {project.status}
                </span>

                <button
                  type="button"
                  className="flex items-center gap-1 font-mono text-[8px] text-[var(--muted)] transition-all hover:gap-2 hover:text-[var(--foreground)]"
                >
                  View Details
                  <ArrowUpRight size={11} />
                </button>

              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Load more */}
      {!showAll && projects.length > 4 && (
        <div className="flex justify-center border-t border-[var(--border)] p-5">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="group flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] transition hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            Load More Projects

            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;