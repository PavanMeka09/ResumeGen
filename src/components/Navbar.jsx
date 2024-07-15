import { SiGithub } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DiVim } from "react-icons/di";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'true');

  const toggle = () => {
    localStorage.setItem('isDark', !isDark);
    setIsDark(prev => !prev);
  }

  useEffect(() => {
    if (isDark) {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [isDark]);

  const renderThemeIcon = () => {
    if(isDark){
      return(<button onClick={toggle}><MdOutlineLightMode className="text-3xl text-zinc-100 active:translate-y-1 transition-[transform]"/></button>);
    } else {
      return(<button onClick={toggle}><MdOutlineDarkMode className="text-3xl text-zinc-950 active:translate-y-1 transition-[transform]"/></button>);
    }
  }

  return (
      <div className="m-auto w-[90vw] h-[8vh] border-[1px] fixed top-2 left-[50%] translate-x-[-50%] rounded-full flex items-center justify-between px-20 backdrop-filter backdrop-blur-md bg-zinc-100/10 text-zinc-950 border-zinc-400 dark:bg-zinc-950/10 dark:text-zinc-100">
        <Link to='/' className="text-3xl">ResumeGen</Link>
        <div className="flex gap-10">
          <Link to="https://github.com/PavanMeka09/ResumeGen" target="_blank"><SiGithub className="text-3xl text-zinc-950 dark:text-zinc-100"/></Link>
          {renderThemeIcon()}
        </div>
      </div>
  )
}