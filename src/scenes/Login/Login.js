import React from "react";
import s from './Login.module.scss'
import {useHistory, withRouter} from 'react-router';
import { routes } from "../routes";
import LoginForm from "./components/LoginForm";
import {compose, withHandlers} from "recompose";
import Api from 'src/api';
import {Link} from "react-router-dom";

function Login({handleLogin}) {
  const history = useHistory();
/*  const store = useStore();*/

  async function onSubmit({email, password}) {
    Api.Auth.login();

    //await store.auth.login.run({email, password});

   /* await store.auth.login.run({email, password});*/

    /*const res = await Api.Auth.login({email, password});
    console.log(res.data, 'res.data');*/
    history.push(routes.home);
  }
  return (
    <main>
      <div>
        <button onClick={handleLogin}>Login test</button>
       {/* <LoginForm onSubmit={onSubmit}/>*/}
      {/*  {store.auth.login.isLoading ? (
          <div>Loading...</div>
        ) : (
          <LoginForm onSubmit={onSubmit}/>
        )}*/}
      </div>
    </main>
  )
}

const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogin: props => () => {
      Api.Auth.login();
      props.history.push(routes.home);
    }
  }),
)

export default enhancer(Login);
