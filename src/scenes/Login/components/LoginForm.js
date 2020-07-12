import React from "react";
import { Formik } from 'formik';
import Input from "../../../components/Form/Input/Input";
import Submit from "../../../components/Form/Submit/Submit";
import {NavLink} from "react-router-dom";
import {routes} from "../../routes";


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
          <Input type="text" name="email" label="Email"/>
          <Input type="password" name="password" label="Password"/>
          <Submit text="Login"/>
          <p>To<NavLink to={routes.register}>Register</NavLink></p>
        </form>
      </Formik>
    </div>
  )
}

export default LoginForm;
