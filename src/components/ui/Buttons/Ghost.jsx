import { Link } from "react-router-dom"

export const Ghost = (props) => {
  return (
    <Link to={props.to} className={props.className + ' text-zinc-950 dark:text-zinc-100 py-2 px-4 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 active:scale-95'}>{props.title}</Link>
  )
}