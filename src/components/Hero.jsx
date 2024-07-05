import React from 'react'
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className='h-[90vh] w-screen flex justify-center items-center flex-col'>
      <h1 className='text-4xl mb-10'>Free tool to Generate a AI Based ATS Friendly Resume</h1>
      <Link to='/generate' className='cursor-pointer bg-zinc-950 dark:bg-zinc-200 dark:text-black text-white px-8 py-3 rounded-md hover:bg-zinc-800'>Create a New Resume</Link>
    </div>
  )
}