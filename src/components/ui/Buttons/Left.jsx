import { Link } from "react-router-dom"

export const Left = (props) => {
  return (
    <Link to={props.to} className={props.className + ' bg-zinc-950 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-950 py-2 px-4 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-300 active:scale-95'}>{props.title}</Link>
  )
}