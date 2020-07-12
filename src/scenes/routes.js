import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Auth from './Auth/Auth';

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
      <Route exact path={routes.home} component={() => <div>Home</div>}/>
      <Route path={routes.auth} component={Auth}/>
    </Switch>
  </BrowserRouter>
  )
}

export  default  Router;
