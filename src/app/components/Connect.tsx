import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin,  } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareXTwitter } from "react-icons/fa6";


const Connect = () => {
  const links = [
    {
      name: "GitHub",
      icon: <AiOutlineGithub className="w-6 h-6" />,
      url: "https://github.com/SumanX08",
      color: "background",
    },
    {
      name: "LinkedIn",
      icon: <AiOutlineLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/bagal-suman-preet-singh-4257b22b6",
      color: "#0A66C2",
    },
    {
      name: "Twitter",
      icon: <FaSquareXTwitter className="w-6 h-6" />,
      url: "https://x.com/Suman_twts",
      color: "var(--foreground)",
    },
    {
      name: "Email",
      icon: <HiOutlineMail className="w-6 h-6" />,
      url: "mailto:sumanpreetsingh998@gmail.com",
      color: "#EF4444",
    },
  ];

  return (
   <div id="connect" className="mt-12 ">
  <h1 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">
    Connect with Me
  </h1>

  <div className="flex flex-col md:flex-row justify-around">
    <div className="grid grid-cols-2 gap-8 place-items-center justify-around">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="flex flex-col items-center justify-center w-28 h-28 rounded-lg shadow-[0_0_10px_var(--shadow)] hover:scale-110 transition-transform bg-[var(--background)]/60"
        >
 {React.cloneElement(link.icon, {
          color: link.color === "background" ? "var(--foreground)" : link.color,
          size: 32,
        })}          <span className="text-[var(--foreground)] mt-2 text-sm font-semibold">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  </div>
</div>

  );
};

export default Connect;
