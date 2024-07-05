import { SiGithub } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState(true);

  const toggle = () => {
    setTheme(!theme);
    (theme ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark'));
  }

  const renderThemeIcon = () => {
    if(theme){
      return(<button onClick={toggle}><MdOutlineLightMode className="text-3xl"/></button>);
    } else {
      return(<button onClick={toggle}><MdOutlineDarkMode className="text-3xl"/></button>);
    }
  }

  return (
    <div className="w-screen h-[10vh] border-b-[1.5px] flex items-center justify-between px-20">
      <Link to='/' className="text-3xl">ResumeGen</Link>
      <div className="flex gap-10">
        <a href="https://github.com/PavanMeka09/ResumeGen" target="_blank"><SiGithub className="text-3xl"/></a>
        {renderThemeIcon()}
      </div>
    </div>
  )
}