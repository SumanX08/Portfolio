const About = () => {
  return (
    <section
      id="about"
      className="border-x border-b border-[var(--border)]"
    >
      <div className="section-heading">
        <h2>About</h2>
      </div>

      <div className="grid lg:grid-cols-[1fr_240px]">

        <div className="p-6 sm:p-8 lg:p-10">

          <p className="max-w-4xl font-mono text-sm leading-7 text-[var(--muted)] sm:text-base">
            I&apos;m an AI Full-Stack Developer focused on building modern
            web applications and intelligent systems.
          </p>

          <p className="mt-5 max-w-4xl font-mono text-sm leading-7 text-[var(--muted)] sm:text-base">
            I work across the stack with React, Next.js, Node.js, Express,
            MongoDB and PostgreSQL, while exploring RAG pipelines,
            LLM applications and AI agent systems.
          </p>

          <p className="mt-5 max-w-4xl font-mono text-sm leading-7 text-[var(--muted)] sm:text-base">
            I enjoy turning complex ideas into practical products with
            clean interfaces, efficient APIs and well-structured backend
            systems.
          </p>

        </div>

        <div className="hidden border-l border-[var(--border)] p-8 lg:flex lg:items-center">

          <div className="border border-[var(--border)] p-6 font-mono text-xs leading-6 text-[var(--muted)]">
            <span className="text-[var(--foreground)]">01</span>
            <br />
            BUILD
            <br />
            <span className="text-[var(--foreground)]">02</span>
            <br />
            LEARN
            <br />
            <span className="text-[var(--foreground)]">03</span>
            <br />
            EXPERIMENT
            <br />
            <span className="text-[var(--foreground)]">04</span>
            <br />
            SHIP
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;