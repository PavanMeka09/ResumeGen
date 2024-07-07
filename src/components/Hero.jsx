import React from 'react'
import { Primary } from "./ui/Buttons/Primary.jsx";

export const Hero = () => {
  return (
    <div className='h-[100vh] w-screen flex justify-center items-center flex-col bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100'>
      <h1 className='text-4xl mb-10'>Free tool to Generate ATS Friendly Resume</h1>
      <Primary title='Create a New Resume' to='/generate'/>
    </div>
  )
}