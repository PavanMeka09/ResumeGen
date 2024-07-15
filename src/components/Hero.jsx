import React from 'react'
import { Primary } from "./ui/Buttons/Primary.jsx";
import { RiScrollToBottomLine } from "react-icons/ri";
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className='h-[100vh] w-screen flex justify-center items-center flex-col bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100'>
      <div className='flex justify-center items-center flex-col gap-20'>
        <h1 className='text-5xl text-center'>Free tool to Generate ATS Friendly Resume</h1>
        <Primary title='Create a New Resume' to='/generate' className=''/>
      </div>
      <motion.div onClick={() => {window.location.href='#'}} animate={{ y: [0, 20, 0]}} transition={{duration: 2, repeat: Infinity}} className='cursor-pointer absolute bottom-8 opacity-[.7]'>
        <RiScrollToBottomLine />
      </motion.div>
    </div>
  )
}