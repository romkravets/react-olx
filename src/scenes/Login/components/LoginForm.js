import React from "react";
import { Formik } from 'formik';
import Input from "../../../components/Form/Input/Input";
import Submit from "../../../components/Form/Submit/Submit";


function LoginForm({ onSubmit }) {
  const formikProps = {
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  };
  return(

    <div className="App">
      <Formik {...formikProps}>
        <form>
          <Input type="email" name="email" label="Email"/>
          <Input type="password" name="password" label="Password"/>
          <Submit text="Login"/>
        </form>
      </Formik>
    </div>
  )
}

export default LoginForm;
