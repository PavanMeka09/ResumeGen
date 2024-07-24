import { Card } from "../components/Card.jsx";
import { motion } from "framer-motion";
import { FloatNavbar } from "../components/FloatNavbar.jsx";

export const Templates = () => {
  return (
    <>
      <FloatNavbar />
      <div className="min-h-[90vh] bg-zinc-100 text-zinc-950 dark:bg-[#18181b] dark:text-zinc-100">
        <h1 className="text-2xl p-8 text-center">Select a template</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center flex-wrap gap-20 w-[80vw] mx-auto"
        >
          <Card title="Vertical" image="vertical.jpg" />
          {/* <Card title="Horizontal" image="horizontal.jpeg" /> */}
        </motion.div>
      </div>
    </>
  );
};
