import React from "react";
import { Formik } from 'formik';
import Input from "../../../components/Form/Input/Input";
import Submit from "../../../components/Form/Submit/Submit";
import {NavLink} from "react-router-dom";
import {routes} from "../../routes";


function RegisterForm({ onSubmit }) {
  const formikProps = {
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      passwordAgain: '',
    },
    onSubmit,
  };
  return(
      <div className="App">
      <Formik {...formikProps}>
        <form>
          <Input name='email' label='Email'/>
          <Input name='fullName' label='Full name'/>
          <Input name='password' label='Password'/>
          <Input name='passwordAgain' label='Password Again'/>
          <Submit text='Register'/>
          <p>To<NavLink to={routes.login}>Login</NavLink></p>
        </form>
      </Formik>
      </div>
  )
}

export default RegisterForm;
