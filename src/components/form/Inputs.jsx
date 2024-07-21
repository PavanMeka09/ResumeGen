import { Formik, Form, Field } from "formik";
import data from './initialValues.json';
import { inputsValidation } from "./inputsValidation.jsx";

export const Inputs = () => {
    return (
    <Formik
      initialValues={data}
      validationSchema={ inputsValidation }
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors }) => (
        <Form className="h-[80%] w-[80%] flex justify-evenly items-center flex-col">
          <div className="relative">
            <label htmlFor="fullName">Full Name: </label>
            {(errors.fullName) ? <h1 className="text-sm text-red-600 absolute -top-6 right-2">{errors.fullName}</h1> : null}
            <Field name="fullName"/>
          </div>
          <button type="submit" className=" bg-zinc-950 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-950 py-2 px-4 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-300 active:scale-95">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
