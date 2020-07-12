import React from "react";
import s from './Header.module.scss'
import {useHistory} from "react-router-dom";
import {routes} from "../../scenes/routes";

function Header() {
  const history = useHistory();

  function  navigateToLogin() {
    history.push(routes.login);
  }

  return (
    <header className={s.container}>
      <div className={s.left}>Marcetplace</div>
      <div className={s.right}>
        <button type="button" onClick={navigateToLogin}>Login</button>
      </div>
    </header>
  );
}

export  default Header;
