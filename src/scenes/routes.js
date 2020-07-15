import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {useStore} from "../stores/createStore";
import {observer} from "mobx-react";
import Auth from './Auth/Auth';
import Main from "./Main/Main";
import NotFound from "./NotFound/NotFound";
import Inbox from "./Inbox/Inbox";


export const routes = {
  home: '/',
  login: '/auth/login',
  auth: '/auth',
  register: '/auth/register',
  product: '/products/:productId',
  inbox: '/inbox',
}
export const PrivateRoute = observer(({component: Component, ...props})  => {
  const  store = useStore();
  return (
    <Route
      {...props}
      render={ (...renderProps) =>
        store.auth.isLoggedIn
          ?
          (<Redirect to={routes.home}/>)
          :
          (<Component {...renderProps}/>)
      }
    />
  )
})

function  Router() {
  return (
  <BrowserRouter>
 {/*   <Header/>*/}

    <Switch>
      <Route path={routes.auth} component={Auth}/>
      <Route exact path={routes.home} component={Main} />
      <Route  path={routes.inbox} component={Inbox} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  )
}

export default Router;
