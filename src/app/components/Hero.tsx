import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { AiOutlineDownload, AiOutlineGithub } from "react-icons/ai";
import { IconsGlobe } from "./IconsGlobe";
import { motion } from "framer-motion";

type HeroProps = {
  theme: "light" | "dark";
};

const Hero = ({ theme }: HeroProps) => {
  return (
    <section
      id="about"
      className="w-full mx-auto mt-24 md:grid grid-cols-3 justify-between items-center"
    >
      <div className="col-span-2 flex flex-col items-start gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="md:text-5xl text-3xl font-bold text-foreground">Suman</h1>
          <h2 className="md:text-xl text-lg text-muted">Fullstack Developer</h2>
        </div>

        <div className="flex flex-col md:flex-row items-start sm:items-center gap-3 text-muted mt-3">
          <a
            href="mailto:sumanpreetsingh998@gmail.com"
            className="flex items-center gap-1 transition"
          >
            <HiOutlineMail className="w-5 h-5 " />
            <span className="md:text-sm text-xs">sumanpreetsingh998@gmail.com</span>
          </a>

          <div className="flex items-center gap-1">
            <GoLocation className="w-5 h-5" />
            <span className="md:text-sm text-xs">Visakhapatnam, Andhra Pradesh</span>
          </div>
        </div>

        <p className="max-w-lg md:text-lg text-sm text-muted mt-3 leading-relaxed text-justify">
          I am a passionate web developer specializing in building modern,
          responsive, and user-friendly applications. I enjoy crafting clean
          designs with a futuristic touch and turning ideas into reality.
        </p>

      <div className="mt-4 flex gap-4">
  <motion.a
    href="https://drive.google.com/file/d/1ImG1CZgjt3fwoZNRet9PYfQR9AZtGZsP/view?usp=drive_link"
    target="_blank"
    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium shadow-[0_0_15px_#6b7280]"
    whileHover={{
      backgroundColor: "var(--foreground)", 
      color: "var(--background)", 
      transition: { duration: 0.5,ease: "easeInOut" },
    }}
  >
    <AiOutlineDownload className="w-5 h-5" />
    Resume
  </motion.a>

  <motion.a
    href="https://github.com/SumanX08"
    target="_blank"
    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg  font-medium shadow-[0_0_15px_#6b7280]"
    whileHover={{
      backgroundColor: "var(--foreground)", 
      color: "var(--background)",
      transition: { duration: 0.5,ease: "easeInOut" },
    }}
  >
    <AiOutlineGithub className="w-5 h-5" />
    GitHub
  </motion.a>
</div>
      </div>
      <IconsGlobe theme={theme} />
    </section>
  );
};

export default Hero;
