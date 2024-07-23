import { Link } from "react-router-dom";
import { ThemeSwitcher } from '../utils/ThemeSwitcher.jsx';

export const Navbar = () => {
  return (
    <nav className="w-screen h-[10vh] border-b-[1px] flex items-center justify-between px-36 backdrop-filter backdrop-blur-md bg-zinc-100 text-zinc-950 border-zinc-400 dark:bg-[#18181b] dark:text-zinc-100">
      <Link to="/" className="text-3xl">
        ResumeGen
      </Link>
      <div className="flex gap-10">
        <ThemeSwitcher/>
      </div>
    </nav>
  );
};
