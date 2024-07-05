import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

export const Card = (props) => {
  const [currentState, setCurrentState] = useState(false);

  const handleClick = () => {
    setCurrentState(!currentState);
  }

  const renderZoomin = () => {
    if(currentState){
      return(
        <div className='h-[100vh] w-[100vw] z-[999] bg-zinc-950 dark:bg-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-30 flex justify-center items-center flex-col absolute top-0 '>
            <IoMdClose onClick={handleClick} className='text-4xl text-zinc-950 dark:text-zinc-100 absolute top-14 right-80 cursor-pointer '/>
            <img src={props.image} alt={props.title + " image"} className='h-[90%] border-2'/>
        </div>
      )
    }
  }
    return (
      <>
        <div className='h-[60vh] w-[24vw] relative hover:border-black border-2 rounded-2xl flex justify-center items-center flex-col gap-6 transition-[border] group'>
          <img onClick={handleClick} src={props.image} alt={props.title + " image"} className='h-[80%] cursor-zoom-in border-2'/>
          <h1 className='text-xl underline'>{props.title}</h1>
          <button onClick={() => {
            window.location.href='/';
          }} className='hidden group-hover:inline-block absolute bottom-32 rounded-full px-8 py-2 bg-zinc-950 text-zinc-100'>Continue</button>
        </div>
        {renderZoomin()}
        </>
    )
  }