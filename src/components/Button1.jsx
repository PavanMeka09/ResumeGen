export const Button1 = (props) => {
  return (
    <>
      <a className="cursor-pointer bg-black text-white px-8 py-2 rounded-md border-transparent border-2 hover:bg-white hover:text-black hover:border-black">{props.text}</a>
    </>
  )
}