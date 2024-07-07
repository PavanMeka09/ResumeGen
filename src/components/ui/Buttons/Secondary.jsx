import { Link } from "react-router-dom"

export const Secondary = (props) => {
  return (
    <Link to={props.to} className={props.className + ' bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-950 py-2 px-4 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-800 active:scale-95'}>{props.title}</Link>
  )
}