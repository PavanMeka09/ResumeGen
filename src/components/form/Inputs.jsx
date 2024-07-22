import { Formik, Form, Field } from "formik";
import data from "./initialValues.json";
import { inputsValidation } from "./inputsValidation.jsx";
import { IoMdPerson } from "react-icons/io";

export const Inputs = () => {
  return (
    <div className="border-2 flex justify-center items-center gap-20 flex-col">
      <span className="flex justify-center items-center gap-32">
        <IoMdPerson className="text-[100px] p-4 rounded-full border-[1px] border-zinc-400 hover:-translate-y-1 transition-all" />
        <IoMdPerson className="text-[100px] p-4 rounded-full border-[1px] border-zinc-400 hover:-translate-y-1 transition-all" />
        <IoMdPerson className="text-[100px] p-4 rounded-full border-[1px] border-zinc-400 hover:-translate-y-1 transition-all" />
        <IoMdPerson className="text-[100px] p-4 rounded-full border-[1px] border-zinc-400 hover:-translate-y-1 transition-all" />
      </span>
      <Formik
        initialValues={data}
        validationSchema={inputsValidation}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors }) => (
          <Form className="flex justify-evenly items-center flex-col gap-20">
            <div className="relative">
              <label htmlFor="fullName">Full Name: </label>
              {errors.fullName ? (
                <h1 className="text-sm text-red-600 absolute -top-6 right-2">
                  {errors.fullName}
                </h1>
              ) : null}
              <Field name="fullName" />
            </div>
            <button
              type="submit"
              className=" bg-zinc-950 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-950 py-2 px-4 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-300 active:scale-95"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
