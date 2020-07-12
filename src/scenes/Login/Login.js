import React from "react";
import s from './Login.module.scss'
import { useHistory } from 'react-router';
import { routes } from "../routes";
import Api from 'src/api';
import LoginForm from "./components/LoginForm";


function Login() {
  const history = useHistory();

  async function onSubmit({email, password}) {
    const res = await Api.Auth.login({email, password});
    console.log(res.data, 'res.data');
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
