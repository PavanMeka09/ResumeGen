import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

export const ThemeSwitcher = () => {
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
}
