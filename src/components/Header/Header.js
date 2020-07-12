import React from "react";
import s from './Header.module.scss'
import {useHistory, NavLink} from "react-router-dom";
import {routes} from "../../scenes/routes";
import {observer} from "mobx-react";
import {useStore} from "../../stores/createStore";

const  UserInfo = observer(() => {
  const store = useStore();

  return (
    <div>
      {store.viewer.user.fullName}{' '}
      <button type="button" onClick={store.auth.logout}>Logout</button>
    </div>
  )
})

 const Header = observer(() => {
  const history = useHistory();
    const store = useStore();

  function  navigateToLogin() {
    history.push(routes.login);
  }

  return (
    <header className={s.container}>
      <div className={s.left}>
        <NavLink to={routes.home}>Marcetplace</NavLink>
      </div>
      <div className={s.right}>
        {store.auth.isLoggedIn ? (
          <UserInfo/>
        ) : (
          <button type="button" onClick={navigateToLogin}>Login</button>
        )}
      </div>
    </header>
  );
}
)

export default Header;
