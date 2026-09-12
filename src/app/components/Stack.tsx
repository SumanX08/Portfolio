const skillGroups = [
  {
    number: "01",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
  },
  {
    number: "03",
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "Inngest",
      "MongoDB"
    ],
  },
  {
    number: "04",
    title: "AI / GenAI",
    skills: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Embeddings",
      "Vector Search",
      "Qdrant"
    ],
  },
  {
    number: "06",
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Vercel"],
  },
];

const Stack = () => {
  return (
    <section
      id="stack"
      className="border-x border-b border-[var(--border)]"
    >
      <div className="section-heading">
        <h2>Tech Stack</h2>

        <span className="ml-auto hidden sm:block">
          // TOOLS I WORK WITH
        </span>
      </div>

      <div>
        {skillGroups.map((group) => (
          <div
            key={group.number}
            className="grid border-t border-[var(--border)] md:grid-cols-[260px_1fr]"
          >
            <div className="flex items-center gap-5 border-b border-[var(--border)] px-6 py-6 md:border-b-0 md:border-r">
             

              <h3 className="font-mono text-sm font-semibold">
                {group.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 p-5 sm:p-6">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-xs text-[var(--foreground)] transition hover:border-[var(--foreground)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;