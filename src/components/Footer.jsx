import React from "react";
import { SiGithub } from "react-icons/si";
import { RiInformation2Line } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="h-[10vh] w-screen border-t-[1px] bg-zinc-100 dark:bg-[#18181b] text-zinc-950 dark:text-zinc-100 flex justify-between items-center px-32">
      <div>
        made by
        <a
          href="https://github.com/PavanMeka09"
          target="_blank"
          className="ml-1 hover:text-blue-600"
        >
          @PavanMeka09
        </a>
      </div>
      <div className="gap-x-10 flex justify-center items-center">
        <a href="https://pavanmeka09.github.io" target="_blank">
          <RiInformation2Line className="text-4xl  text-zinc-950 dark:text-zinc-100"/>
        </a>
        <a href="https://github.com/PavanMeka09/ResumeGen" target="_blank">
          <SiGithub className="text-3xl text-zinc-950 dark:text-zinc-100" />
        </a>
      </div>
    </footer>
  );
};
