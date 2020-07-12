import React from "react";
import s from './Login.module.scss'
import { useHistory } from 'react-router';
import {useStore} from "../../stores/createStore";
import { routes } from "../routes";
import LoginForm from "./components/LoginForm";
import { observer } from "mobx-react";

function Login() {
  const history = useHistory();
  const store = useStore();

  async function onSubmit({email, password}) {

    //await store.auth.login.run({email, password});

    await store.auth.login.run({email, password});

    /*const res = await Api.Auth.login({email, password});
    console.log(res.data, 'res.data');*/
    history.push(routes.home);
  }
  return (
    <main>
      <div>
        {store.auth.login.isLoading ? (
          <div>Loading...</div>
        ) : (
          <LoginForm onSubmit={onSubmit}/>
        )}
      </div>
    </main>
  )
}

export default observer(Login);
