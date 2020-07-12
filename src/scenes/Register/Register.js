import React from "react";
import s from './Register.module.scss'
import Header from "../../components/Header/Header";
import {Route, Switch, useHistory} from "react-router-dom";
import {routes} from "../routes";
import RegisterForm from "./components/RegisterForm";

function Register() {
  const history = useHistory();

  function onSubmit() {
    history.push(routes.home);
  }
  return (
   <main>
     <div>
       <RegisterForm onSubmit={onSubmit}/>
     </div>
   </main>
  )
}

export default Register;
