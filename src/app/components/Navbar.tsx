import Link from "next/link";
type NavbarProps = {

  theme: "light" | "dark";
  toggleTheme: () => void;
};

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--background)]/80 border-[var(--shadow)]">
      <div className="w-4/5 md:w-3/5 mx-auto flex justify-between items-center py-3">
        <div className="text-2xl font-semibold text-[var(--foreground)]">Portfolio</div>

        <div className="flex items-center gap-8 text-md bg-[var(--background)]/70 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-[0_0_15px_var(--shadow)] text-[var(--foreground)]">
          <Link href="#home">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <button
          onClick={toggleTheme}
          className="bg-[var(--background)] px-4 py-2 rounded-lg border border-[var(--shadow)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar