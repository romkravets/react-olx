import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {useStore} from "../stores/createStore";
import {observer} from "mobx-react";
import Auth from './Auth/Auth';
import Home from "./Home/Home";


export const routes = {
  home: '/',
  login: '/auth/login',
  auth: '/auth',
  register: '/auth/register'
}

export  const PrivateRoute = observer(({component: Component, ...props})  => {
  const  store = useStore();
  return (
    <Route
      {...props}
      render={ (...renderProps) =>
      store.auth.isLoggedIn ? (<Redirect to={routes.home}/>) : (<Component {...renderProps}/>)
    }
    />
  )

})
function  Router() {
  return (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path={routes.auth} component={Auth}/>

      <Route  component={Home}/>
    </Switch>
  </BrowserRouter>
  )
}

export default Router;
