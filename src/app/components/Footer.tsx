import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-x border-[var(--border)]">

      <div className="grid border-b border-[var(--border)] md:grid-cols-[1fr_260px]">

        <div className="p-7 sm:p-10">

          <p className="font-mono text-lg font-semibold">
            Let&apos;s build something intelligent.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">
            I&apos;m currently open to opportunities in AI Full-Stack
            Development, Full-Stack Engineering and GenAI.
          </p>

        </div>

        <a
          href="mailto:sumanpreetsingh998@gmail.com"
          className="flex items-center justify-center gap-2 border-t border-[var(--border)] p-7 font-mono text-sm transition hover:bg-[var(--foreground)] hover:text-[var(--background)] md:border-l md:border-t-0"
        >
          Get in Touch
          <ArrowUpRight size={16} />
        </a>

      </div>

      <div className="flex flex-col justify-between gap-3 px-6 py-5 font-mono text-[10px] text-[var(--muted)] sm:flex-row">
        <span>© 2026 Suman Preet Singh Bagal</span>

        <span>
          Built with Next.js & React
        </span>
      </div>

    </footer>
  );
};

export default Footer;