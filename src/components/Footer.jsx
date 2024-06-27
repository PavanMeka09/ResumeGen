import { FaInfo } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="w-screen h-14 border-t-2 flex items-center justify-center relative">
        <h1 className="text-sm">text</h1>
        <div className="flex absolute right-4">
          <FaInfo className="text-sm"/>
        </div>
      </div>
    </>
  )
}