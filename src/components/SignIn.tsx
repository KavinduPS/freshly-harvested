import React from "react";
import { Formik } from "formik";
import * as Yup from "Yup";

interface SigninProps {
  email: string;
  password: string;
}

export const SignIn = () => {
  const initialSigninValues: SigninProps = {
    email: "",
    password: "",
  };

  const signinSchema = Yup.object({
    email: Yup.string().required("Enter an email"),
    password: Yup.string().required("Enter password"),
  });

  return (
    <Formik
      initialValues={initialSigninValues}
      validationSchema={signinSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="p-5 flex flex-col items-center justify-center h-12/12">
        <div className="h-3/12 w-10/12 flex flex-col justify-center">
          <input
            className="bg-gray-800 h-6/12 w-12/12 rounded-2xl "
            placeholder="Email"
          ></input>
        </div>
        <div className="h-3/12 w-10/12 flex flex-col justify-center">
          <input
            className="bg-gray-800 h-6/12 w-12/12 rounded-2xl "
            placeholder="Password"
          ></input>
        </div>
        <div className="bg-emerald-500 w-12/12 h-3/12">
          <button>Log in</button>
        </div>
      </div>
    </Formik>
  );
};
