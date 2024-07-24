import React from "react";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

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
      <Link to="https://github.com/PavanMeka09/ResumeGen" target="_blank">
        <SiGithub className="text-3xl text-zinc-950 dark:text-zinc-100" />
      </Link>
    </footer>
  );
};
