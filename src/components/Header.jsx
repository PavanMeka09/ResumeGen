import { SiGithub } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <div className="w-screen h-20 border-b-2 flex items-center justify-between px-20">
        <h1 className="text-3xl"><a href="">ResumeGen</a></h1>
        <div className="flex gap-10">
          <a href=""><SiGithub className="text-3xl"/></a>
          <button><MdOutlineDarkMode className="text-3xl"/></button>
          <button><MdOutlineLightMode className="text-3xl"/></button>
        </div>
      </div>
    </>
  )
}