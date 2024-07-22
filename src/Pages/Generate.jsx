import { FloatNavbar } from "../components/FloatNavbar.jsx";
import { Inputs } from "../components/form/Inputs.jsx";

export const Generate = () => {
  return (
    <>
      <FloatNavbar />
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-zinc-100 dark:bg-[#18181b] text-zinc-950 dark:text-zinc-100 ">
        <Inputs />
      </div>
    </>
  );
};
