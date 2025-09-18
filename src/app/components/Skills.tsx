import { color } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, 
  SiGit, SiVercel, 
  SiGithub,
  SiTypescript,
  SiFirebase,
  SiNextdotjs
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Next.js", icon: SiNextdotjs, color: "var(--foreground)" }
    ],
  },
  {
    category: "Languages & Others",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Github", icon: SiGithub, color: "var(--foreground)" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#6B7280" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  }
];


const Skills = () => {
  return (
  <div id="skills" className="w-full mt-10">
  <h1 className="text-2xl font-medium text-[var(--foreground)] mb-6 text-center">
    Skills
  </h1>

  <div className="flex flex-col md:flex-row gap-6">
    {skillCategories.map((category) => (
      <div
        key={category.category}
        className="flex-1 bg-[var(--background)]/80 rounded-xl p-6 shadow-[0_0_10px_var(--shadow)]  hover:scale-105 transition-transform"
      >
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4 text-center">
          {category.category}
        </h2>

        {/* Grid with 3 columns */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {category.skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 p-3 rounded-lg shadow-[0_0_10px_var(--shadow)]hover:scale-110 transition-transform w-full"
              >
                <Icon size={36} color={skill.color} />
                <p className="text-[var(--foreground)] text-sm text-center">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Skills;
