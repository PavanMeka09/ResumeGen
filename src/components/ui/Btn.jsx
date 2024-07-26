import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Btn = ({ variant = 'primary', to, className, title, hoverEffect }) => {
  variant = variant.toLowerCase();

  const baseClasses = `py-2 px-4 rounded-md ${
    hoverEffect ? "hover:scale-105" : null
  } active:scale-90 transition-all`;
  let specificClasses = "";

  switch (variant) {
    case "ghost":
      specificClasses =
        "text-zinc-950 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800";
      break;
    case "primary":
      specificClasses =
        "bg-zinc-950 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-300";
      break;
    case "secondary":
      specificClasses =
        "bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-950 hover:bg-zinc-300 dark:hover:bg-zinc-800";
      break;
    case "outline":
      specificClasses =
        "text-zinc-950 dark:text-zinc-100 hover:bg-zinc-200 border-[1px] border-zinc-300 dark:border-zinc-400 dark:hover:bg-zinc-800";
      break;
    case "left":
      specificClasses =
        "text-2xl on rounded-full hover:bg-zinc-300/50 p-4 active:bg-zinc-300";
      title = <FaArrowLeft />;
      break;
    case "right":
      specificClasses =
        "text-2xl on rounded-full hover:bg-zinc-300/50 p-4 active:bg-zinc-300";
      title = <FaArrowRight />;
      break;
    default:
      specificClasses = "";
  }

  return (
    <Link to={to} className={`${className} ${baseClasses} ${specificClasses}`} onClick={(e) => {
      e.preventDefault()}}>
      {title}
    </Link>
  );
};
