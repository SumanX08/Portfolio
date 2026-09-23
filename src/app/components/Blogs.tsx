import { ArrowUpRight, FileText } from "lucide-react";

const blogs = [
  {
    number: "01",
    title: "Where RAG Fails: Understand the Limitations",
    description:
      "Notes and learnings from building retrieval-augmented generation systems and intelligent knowledge applications.",
    date: "2026",
    tags: ["RAG", "GenAI", "Vector Search"],
    href: "https://btsofai.hashnode.dev/rag-s",
  },
  {
    number: "02",
    title: "What Really Happens After You Press Enter in ChatGPT?",
    description:
      "Understanding how LLM's work",
    date: "2026",
    tags: ["ChatGpt", "LLM", "Prompting"],
    href: "https://btsofai.hashnode.dev/what-really-happens-after-you-press-enter-in-chatgpt",
  },
];

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="border-x border-b border-[var(--border)]"
    >
      <div className="section-heading">
        <h2>Blogs</h2>

        
      </div>

      <div>
        {blogs.map((blog) => (
          <a
            key={blog.number}
            href={blog.href}
            className="group grid border-t border-[var(--border)] md:grid-cols-[80px_1fr_130px] transition hover:bg-[var(--surface)]"
          >

            <div className="flex items-center border-b border-[var(--border)] p-6 font-mono text-xs text-[var(--muted)] md:border-b-0 md:border-r">
              {blog.number}
            </div>

            <div className="p-6">

              <div className="flex items-start gap-4">
                <div className="hidden border border-[var(--border)] p-3 sm:block">
                  <FileText size={18} />
                </div>

                <div>
                  <h3 className="font-mono text-base font-semibold">
                    {blog.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                    {blog.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="flex items-center justify-between border-t border-[var(--border)] p-6 md:flex-col md:items-end md:border-l md:border-t-0">

              <span className="font-mono text-[10px] text-[var(--muted)]">
                {blog.date}
              </span>

              <span className="flex items-center gap-2 font-mono text-xs">
                Read More
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>

            </div>

          </a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;