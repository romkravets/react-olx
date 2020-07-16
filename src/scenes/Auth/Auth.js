import React from "react";
import s from './Auth.module.scss'
import Header from "../../components/Header/HeaderContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../routes";
import Login from "../Login/LoginContainer";
import Register from "../Register/Register";
import Api from 'src/api';

function Auth() {
  return (
    <>
    <Header/>

     <Switch>
       {Api.Auth.isLoggedIn && <Redirect to={routes.home}/>}
       <Route path={routes.login} component={Login}/>
       <Route path={routes.register} component={Register}/>
     </Switch>
    </>
  )
}

export default Auth;
