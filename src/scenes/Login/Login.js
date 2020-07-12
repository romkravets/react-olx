import React from "react";
import s from './Login.module.scss'
import Header from "../../components/Header/Header";
import {Route, Switch, useHistory} from "react-router-dom";
import {routes} from "../routes";
import LoginForm from "./components/LoginForm";

function Login() {
  const history = useHistory();

  function onSubmit() {
    history.push(routes.home);
  }
  return (
    <main>
      <div>
        <LoginForm onSubmit={onSubmit}/>
      </div>
    </main>
  )
}

export default Login;
