import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Btn } from "./ui/Btn.jsx";
import { motion } from "framer-motion";

export const Card = (props) => {
  const [currentState, setCurrentState] = useState(false);

  const handleClick = () => {
    setCurrentState(!currentState);
  };

  const renderZoomin = () => {
    if (currentState) {
      return (
        <div className="h-[100vh] w-[100vw] z-[999] bg-zinc-950 backdrop-filter backdrop-blur-sm bg-opacity-30 flex justify-center items-center flex-col absolute top-0 ">
          <IoMdClose
            onClick={handleClick}
            className="text-4xl text-zinc-950 dark:text-zinc-100 absolute top-14 right-80 cursor-pointer "
          />
          <img
            src={props.image}
            alt={props.title + " image"}
            className="h-[90%] border-2"
          />
        </div>
      );
    }
  };

  const [hover, setHover] = useState(false);

  return (
    <>
      <motion.div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="overflow-hidden flex justify-center items-center border-2 border-zinc-500 h-[22rem] w-[18rem] relative bg-zinc-200 hover:scale-105 transition-[transform] dark:bg-zinc-700 rounded-3xl py-4 group"
      >
        <img
          onClick={handleClick}
          src={props.image}
          alt={props.title + " image"}
          className="h-[130%] cursor-zoom-in absolute top-0 opacity-95 z-0 hover:shadow-[inset_0_0_60px_-15px_rgba(0,0,0,0.3)]"
        />

        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 50 }}
          className="absolute bottom-32"
        >
          <Btn title="Continue" to="/generate" variant="primary" />
        </motion.span>
        <div className="h-[20%] w-[100%] bg-zinc-800 flex justify-center items-center absolute bottom-0">
          <h1 className="text-xl text-center text-zinc-100">{props.title}</h1>
        </div>
      </motion.div>
      {renderZoomin()}
    </>
  );
};
