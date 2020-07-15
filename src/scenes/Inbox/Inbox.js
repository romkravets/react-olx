import React from "react";
import s from './Header.module.scss'
import {useHistory, NavLink, Link, withRouter, Redirect} from "react-router-dom";
import {routes} from "../../scenes/routes";
import {compose, withHandlers} from "recompose";
import Api from 'src/api';

function Inbox() {
/*  const history = useHistory();*/
  /*
      const store = useStore();*/

/*  function  navigateToLogin() {
    history.push(routes.login);
  }*/
  if (!Api.Auth.isLoggedIn) {
    return <Redirect to={routes.login}/>
  }

  return (
    <div>Inbox</div>
  );
}

const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.history.push(routes.home);
    }
  })
)

export default enhancer(Inbox);
