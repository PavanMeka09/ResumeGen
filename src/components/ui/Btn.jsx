import { Link } from "react-router-dom";

export const Btn = (props) => {
  let { variant, to, className, title } = props;
  variant = variant.toLowerCase();

  const baseClasses = 'py-2 px-4 rounded-md active:scale-95';
  let specificClasses = '';

  switch (variant) {
    case 'ghost':
      specificClasses = 'text-zinc-950 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800';
      break;
    case 'primary':
      specificClasses = 'bg-zinc-950 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-300';
      break;
    case 'secondary':
      specificClasses = 'bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-950 hover:bg-zinc-300 dark:hover:bg-zinc-800';
      break;
    case 'outline':
    case 'left':
    case 'right':
      specificClasses = 'text-zinc-950 dark:text-zinc-100 hover:bg-zinc-200 border-[1px] border-zinc-300 dark:border-zinc-400 dark:hover:bg-zinc-800';
      break;
    default:
      specificClasses = '';
  }

  return (
    <Link to={to} className={`${className} ${baseClasses} ${specificClasses}`}>
      {title}
    </Link>
  );
};
