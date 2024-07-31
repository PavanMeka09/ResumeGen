import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    isDark
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
    isAnimating
      ? document.querySelector("body").classList.add("overflow-hidden")
      : document.querySelector("body").classList.remove("overflow-hidden");
  }, [isDark, isAnimating]);

  const toggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      localStorage.setItem("isDark", !isDark);
      setIsDark((prev) => !prev);
    }, 290);
  };

  const renderIcon = () => {
    const Icon = isDark ? MdOutlineLightMode : MdOutlineDarkMode;
    return (
      <button onClick={toggle}>
        <Icon className="text-3xl text-zinc-800 dark:text-zinc-100 active:translate-y-1 transition-[transform]" />
      </button>
    );
  };

  return (
    <div className="flex items-center justify-center">
      {renderIcon()}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ scale: 0}}
            animate={{ scale: 1, opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: .3}}
            className="h-[200rem] w-[200rem] bg-[#18181b] dark:bg-zinc-100 rounded-full absolute"
            onAnimationComplete={() => setIsAnimating(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
