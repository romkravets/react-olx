import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Auth from './Auth/Auth';
import Home from "./Home/Home";


export const routes = {
  home: '/',
  login: '/auth/login',
  auth: '/auth',
  register: '/auth/register'
}

function  Router() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path={routes.auth} component={Auth}/>

      <Route  component={Home}/>
    </Switch>
  </BrowserRouter>
  )
}

export default Router;
