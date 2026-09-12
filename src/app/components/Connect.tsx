import { ArrowUpRight, Mail } from "lucide-react";

export default function Connect() {
  return (
    <section className="section-shell border-b border-[var(--border)]">
      <div className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            I&apos;m currently open to full-time opportunities in AI Full-Stack
            Development, Full-Stack Engineering, and GenAI.
          </p>
        </div>

        <a href="mailto:sumanpreetsingh998@gmail.com" className="action-button px-6 py-4">
          <Mail size={17} />
          Get in Touch
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
