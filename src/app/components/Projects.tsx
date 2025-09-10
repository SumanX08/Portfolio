import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";

const projectsData = [
  {
    title: "Connecly",
    description:
      "A personal portfolio to showcase my projects and skills, built with React and Tailwind CSS.",
    techStack: [ "Tailwind CSS","React", "Express", "Mongo DB","Socket IO"],
    github: "https://github.com/SumanX08/Connectly",
    live: "https://connectly-mu.vercel.app/",
    image: "/images/portfolio.png",
    features: [
      "Responsive design",
      "Dark mode toggle",
      "Animated skill sections",
    ],
  },
  {
    title: "Chit Chat",
    description:
      "An online store with product listings, shopping cart, and checkout functionality.",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/SumanX08/ChitChat",
    image: "/images/ecommerce.png",
    features: [
      "Product search and filtering",
      "User authentication",
      "Stripe payment integration",
    ],
  },
  
];

const Projects = () => {
  return (
    <div className=" mt-10">
      <h1 className="text-3xl font-bold text-gray-200 mb-8 text-center ">
        Projects
      </h1>

      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-black/20 rounded-xl shadow-[0_0_10px_#6b7280] border border-gray-500 overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="md:w-1/3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full p-32   h-full object-cover"
              />
            </div>

            {/* Right: Project Details */}
            <div className="md:w-2/3 p-6 flex flex-col justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-200 mb-">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm shadow-[0_0_5px_#6b7280] border border-gray-500 px-2 py-1 rounded-xl text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="">
                  <h3 className="text-gray-200 font-semibold mb-1">Features:</h3>
                  <ul className="list-none text-gray-300 text-sm flex flex-col gap-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <BsCheckCircle className="text-gray-300 w-4 h-4 flex-shrink-0" />
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
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-500 text-gray-200 font-medium shadow-[0_0_10px_#6b7280] hover:bg-gray-300 hover:text-black transition"
                >
                  <AiOutlineGithub className="w-4 h-4" />
                  GitHub
                </a>
                {project.live?<a href={project.live} target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-500 text-gray-200 font-medium shadow-[0_0_10px_#6b7280] hover:bg-gray-300 hover:text-black transition">
                  <AiOutlineLink className="w-4 h-4" />
                  Live Demo
                </a>:<></>

                }
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
