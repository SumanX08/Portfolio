import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import Image from "next/image";


const projectsData = [
  {
    title: "Connecly",
    description:
      "A skill-based networking platform that helps users build meaningful connections based on their skills, interests, and goals.",
    techStack: ["Tailwind CSS", "React", "Express", "Mongo DB", "Socket IO"],
    github: "https://github.com/SumanX08/Connectly",
    live: "https://connectly-mu.vercel.app/",
    image: "/connectly.png",
    features: [
          "Swipe-based Connect/Skip interface",
    "Smart Filters by skills, location, and age",
    "Real-time messaging with Socket.IO",
    "Authentication with Auth0",
    ],
  },
{
  title: "Chat App",
  description:
    "A real-time chat application with personal chats, group messaging, scheduled messages, and media sharing, built with React, TailwindCSS, and Firebase.",
  techStack: ["React", "Tailwind CSS", "Firebase Auth", "Firestore", "Firebase Storage"],
  github: "https://github.com/SumanX08/ChiChat", // replace with your repo link
  image: "/ChitChat.png",
  features: [
    "Real-time 1-on-1 and group messaging",
    "Scheduled messages with auto delivery",
    "Delete messages for specific member in groups",
    "Media/file sharing",
  ],
},

];

const Projects = () => {
  return (
   <div className="mt-10">
  <h1 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">
    Projects
  </h1>

  <div className="flex flex-col gap-8">
    {projectsData.map((project, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row bg-[var(--background)]/80 rounded-xl shadow-[0_0_18px_var(--shadow)]  overflow-hidden hover:scale-105 transition-transform"
      >
        {/* Left: Image */}
        <div className="flex items-center md:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            width={1549}
            height={907}
            className="w-auto h-full rounded-3xl p-2"
            priority
          />
        </div>

        {/* Right: Project Details */}
        <div className="md:w-2/3 pl-6 py-6 flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              {project.title}
            </h2>
            <p className="text-[var(--foreground)]/80 mb-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm shadow-[0_0_5px_var(--shadow)] border border-[var(--shadow)] px-2 py-1 rounded-xl text-[var(--foreground)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-[var(--foreground)] font-semibold mb-1">
                Features:
              </h3>
              <ul className="list-none text-[var(--foreground)]/80 text-sm flex flex-col gap-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg  text-[var(--foreground)] font-medium shadow-[0_0_10px_var(--shadow)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
            >
              <AiOutlineGithub className="w-4 h-4" />
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg  text-[var(--foreground)] font-medium shadow-[0_0_10px_var(--shadow)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
              >
                <AiOutlineLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Projects;
