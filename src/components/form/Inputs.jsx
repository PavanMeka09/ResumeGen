import data from "./initialValues.json";
import { IoMdPerson } from "react-icons/io";
import { BsPersonVcardFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { Btn } from "../ui/Btn.jsx";

export const Inputs = () => {
  const feilds = [
    <IoMdPerson />,
    <BsPersonVcardFill />,
    <FaGear />,
    <IoSchool />,
    <GrProjects />,
  ];
  return (
    <div className="border-2 flex justify-center items-center gap-20 flex-col">
      <span className="flex justify-center items-center gap-32">
        {feilds.map((feild) => (
          <div className="text-[50px] p-4 rounded-full border-[1px] border-zinc-400 hover:-translate-y-1 transition-all">
            {feild}
          </div>
        ))}
      </span>

      <form className="flex justify-evenly items-center flex-col">
        <div>
          <div>
            <label
              htmlFor="photo"
              className="px-[4rem] py-[3rem] cursor-pointer border-[1px] border-zinc-950 rounded-full text-4xl"
            >
              +
            </label>
            <input type="file" id="photo" className="invisible" />
          </div>
          <div>
            <label htmlFor="fullName">Full Name: </label>
            <input id="fullName" />
          </div>
        </div>
        <button type="submit">
          <Btn title="Submit" />
        </button>
      </form>
    </div>
  );
};
