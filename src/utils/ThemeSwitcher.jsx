import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  useEffect(() => {
    if (isDark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [isDark]);

  const toggle = () => {
    localStorage.setItem("isDark", !isDark);
    setIsDark((prev) => !prev);
  };

  if (isDark) {
    return (
      <button onClick={toggle}>
        <MdOutlineLightMode className="text-3xl text-zinc-100 active:translate-y-1 transition-[transform]" />
      </button>
    );
  } else {
    return (
      <button onClick={toggle} className="flex items-center justify-center">
          <MdOutlineDarkMode className="text-3xl text-zinc-950 active:translate-y-1 transition-[transform]  rounded-full absolute" />
          <AnimatePresence>
          {isDark && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="h-[1rem] w-[1rem] -z-[9999999] bg-zinc-800 rounded-full absolute"
            ></motion.div>)}
          </AnimatePresence>
        </button>
    );
  }
};
