import React from "react";
import s from './Auth.module.scss'
import Header from "../../components/Header/Header";
import { Switch} from "react-router-dom";
import {PrivateRoute, routes} from "../routes";
import Login from "../Login/Login";
import Register from "../Register/Register";

function Auth() {
  return (
    <>
    {/*<Header/>*/}

     <Switch>
       <PrivateRoute path={routes.login} component={Login}/>
       <PrivateRoute path={routes.register} component={Register}/>
     </Switch>
    </>
  )
}

export default Auth;
