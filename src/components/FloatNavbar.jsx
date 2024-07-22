import { SiGithub } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const FloatNavbar = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  const toggle = () => {
    localStorage.setItem("isDark", !isDark);
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [isDark]);

  const renderThemeIcon = () => {
    if (isDark) {
      return (
        <button onClick={toggle}>
          <MdOutlineLightMode className="text-3xl text-zinc-100 active:translate-y-1 transition-[transform]" />
        </button>
      );
    } else {
      return (
        <button onClick={toggle}>
          <MdOutlineDarkMode className="text-3xl text-zinc-950 active:translate-y-1 transition-[transform]" />
        </button>
      );
    }
  };

  return (
    <div className="h-[10vh] w-screen flex items-center justify-center bg-zinc-100 dark:bg-[#18181b]">
      <motion.nav initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} className="w-[70%] h-[8vh] border-[1px] rounded-full flex items-center justify-between px-20 backdrop-filter backdrop-blur-md bg-zinc-100 text-zinc-950 border-zinc-400 dark:bg-[#18181b] dark:text-zinc-100">
        <Link to="/" className="text-3xl">
          ResumeGen
        </Link>
        <div className="flex gap-10">
          <Link to="https://github.com/PavanMeka09/ResumeGen" target="_blank">
            <SiGithub className="text-3xl text-zinc-950 dark:text-zinc-100" />
          </Link>
          {renderThemeIcon()}
        </div>
      </motion.nav>
    </div>
  );
};
