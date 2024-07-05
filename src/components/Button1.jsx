export const Button1 = (props) => {
  return (
    <a className="cursor-pointer bg-black dark:bg-white dark:text-black text-white px-8 py-3 rounded-md hover:bg-zinc-800">{props.text}</a>
  )
}