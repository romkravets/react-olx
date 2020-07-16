import React from "react";
import s from './Login.module.scss'
import {useHistory, withRouter} from 'react-router';
import { routes } from "../routes";
import {compose, withHandlers} from "recompose";
import Api from 'src/api';
import {Link} from "react-router-dom";
import Input from "../../components/Form/Input/Input";

function LoginView({fields, handleLogin, handleFieldChange, isLoading}) {
  const history = useHistory();

  async function onSubmit({email, password}) {
    Api.Auth.login();
    history.push(routes.home);
  }
  return (
    <main>
      <div>
        <Input fields={fields} name="email" label="Email" onChange={handleFieldChange} placeholder="rom@test.com"/>
        <Input fields={fields} name="password" type="password" label="Password" onChange={handleFieldChange}/>
        <button onClick={handleLogin}>Login</button>
        {isLoading ? 'Loading' : 'Login'}
      </div>
    </main>
  )
}

export default LoginView;
