import React from 'react'
import { Primary } from "./ui/Buttons/Primary.jsx";
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className='h-[80vh] w-screen flex justify-center items-center flex-col bg-zinc-100 text-zinc-950 dark:bg-[#18181b] dark:text-zinc-100'>
      <div className='flex justify-center items-center flex-col gap-10'>
        <h1 className='text-4xl text-center'>Free tool to Generate ATS Friendly Resume</h1>
        <motion.h2>no ads, no signup, fill data, get resume, available in latex and pdf</motion.h2>
        <Primary title='Create a New Resume' to='/templates' className=''/>
      </div>
    </div>
  )
}