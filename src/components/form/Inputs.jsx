import data from "./initialValues.json";
import { IoMdPerson } from "react-icons/io";
import { BsPersonVcardFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { Btn } from "../ui/Btn.jsx";
import { useState } from "react";

export const Inputs = () => {
  const feilds = [
    <IoMdPerson />,
    <BsPersonVcardFill />,
    <FaGear />,
    <IoSchool />,
    <GrProjects />
  ];
  const [currentView, setCurrentView] = useState("personal")

  return (
    <div className="flex justify-center items-center gap-20 flex-col">
      <span className="flex justify-center items-center gap-32">
        {feilds.map((feild) => (
          <div className="text-[50px] p-4 rounded-full border-[1px] border-zinc-400 hover:-translate-y-1 transition-all">
            {feild}
          </div>
        ))}
      </span>

      <currentView />
    </div>
  );
};
