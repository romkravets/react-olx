import React from "react";
import s from './Header.module.scss'
import {useHistory, NavLink, Link, withRouter} from "react-router-dom";
import {routes} from "../../scenes/routes";
import {observer} from "mobx-react";
import {useStore} from "../../stores/createStore";
import Login from "../../scenes/Login/Login";
import {compose, withHandlers} from "recompose";
import Api from 'src/api';

/*
const  UserInfo = observer(() => {
  const store = useStore();

  return (
    <div>
      {store.viewer.user.fullName}{' '}
      <button type="button" onClick={store.auth.logout}>Logout</button>
    </div>
  )
})
*/

function Header({handleLogout}) {
    const history = useHistory();
   /*
       const store = useStore();*/

  function  navigateToLogin() {
    history.push(routes.login);
  }

  return (
    <header className={s.container}>
      <div className={s.left}>
        <NavLink to={routes.home}>Marcetplace</NavLink>
      </div>
      <div className={s.right}>
        {Api.Auth.isLoggedIn ? (
          <button type="button" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to={routes.login}>Login</Link>
        )}
      </div>
    </header>
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

export default enhancer(Header);
