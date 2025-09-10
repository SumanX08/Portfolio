import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-1 left-1 w-full z-50 backdrop-blur-md bg-gray-800/10">
      <div className="w-4/5 md:w-3/5 mx-auto flex justify-between items-center py-3">
        <div className="text-2xl font-semibold text-gray-200">Portfolio</div>

        <div className="flex items-center gap-8 text-md bg-black/20 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-[0_0_10px_#6b7280]">
          <Link href="#home" className=" ">About</Link>
          <Link href="#skills" className="">Skills</Link>
          <Link href="#projects" className="">Projects</Link>
          <Link href="#contact" className="">Contact</Link>
        </div>

        {/* Theme Button */}
        <div>
          <button className="bg-gray-800/30 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-700/40 transition">
            Theme
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
