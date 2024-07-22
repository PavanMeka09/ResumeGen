import { Card } from "../components/Card.jsx";
import { motion } from "framer-motion";
import { FloatNavbar } from "../components/FloatNavbar.jsx";

export const Templates = () => {
  return (
    <>
      <FloatNavbar />
      <div className="h-[90vh] flex justify-center items-center flex-col flex-wrap bg-zinc-100 text-zinc-950 dark:bg-[#18181b] dark:text-zinc-100">
        <h1 className="text-2xl m-6">Select a template</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-4"
        >
          <Card title="Vertical" image="vertical.jpg" />
          <Card title="Horizontal" image="horizontal.jpeg" />
        </motion.div>
      </div>
    </>
  );
};
