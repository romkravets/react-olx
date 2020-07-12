import React from "react";
import s from './Auth.module.scss'
import Header from "../../components/Header/Header";
import {Route, Switch} from "react-router-dom";
import {routes} from "../routes";
import Login from "../Login/Login";
import Register from "../Register/Register";

function Auth() {
  return (
    <>
    <Header/>
     <Switch>
       <Route path={routes.login} component={Login}/>
       <Route path={routes.register} component={Register}/>
     </Switch>
    </>
  )
}

export default Auth;
