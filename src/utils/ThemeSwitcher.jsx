import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect} from "react";
import { motion, useAnimation } from 'framer-motion';

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

    
    const controls = useAnimation();
    
    const startAnimation = () => {
      controls.start({
        scale: 200
      });
    };
    
    const toggle = () => {
      localStorage.setItem("isDark", !isDark);
      setIsDark((prev) => !prev);
      startAnimation();
    };
    
    if (isDark) {
      return (
        <button onClick={toggle}>
          <MdOutlineLightMode className="text-3xl text-zinc-100 active:translate-y-1 transition-[transform]" />
        </button>
      );
    } else {
      return (
        <button onClick={toggle} className='relative'>
          <MdOutlineDarkMode className="text-3xl text-zinc-950 active:translate-y-1 transition-[transform]" />
          <motion.div initial={{ scale: 0 }} animate={controls} className='h-[100rem] w-[100rem] z-[-99999999] bg-zinc-800 absolute top-[50%] bottom-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full'></motion.div>
        </button>
      );
    }
}
