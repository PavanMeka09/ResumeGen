import { Primary } from "./ui/Buttons/Primary.jsx";
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className='h-[80vh] w-screen flex justify-center items-center flex-col bg-zinc-100 text-zinc-950 dark:bg-[#18181b] dark:text-zinc-100'>
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className='flex justify-center items-center flex-col gap-10'>
        <h1 className='text-4xl text-center'>AI Based ATS Friendly Resume Generator</h1>
        <h2>no ads, no signup, fill data, get resume, available in latex and pdf</h2>
        <Primary title='Create a New Resume' to='/templates'/>
      </motion.div>
    </div>
  )
}