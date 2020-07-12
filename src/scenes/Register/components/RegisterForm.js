import React from "react";
import {Formik} from 'formik';
import Input from "../../../components/Form/Input/Input";
import Submit from "../../../components/Form/Submit/Submit";


function RegisterForm({onSubmit}) {
  const formikProps = {
    initialValue: {
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
        </form>
      </Formik>
      </div>
  )
}

export default RegisterForm;
