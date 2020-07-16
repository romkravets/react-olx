import React from "react";
import s from './Header.module.scss'
import {useHistory, NavLink, Link, withRouter} from "react-router-dom";
import {routes} from "../../scenes/routes";
import {compose, withHandlers} from "recompose";
import Api from 'src/api';

/*const  UserInfo = ({handleLogout})=> {

  return (
    <div>
      {this.props.isLoading}{' '}
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  )
}*/

function Header({handleLogout, isLoading}) {
 /*   const history = useHistory();


  function  navigateToLogin() {
    history.push(routes.login);
  }*/

  return (
    <header className={s.container}>
      <div className={s.left}>
        <NavLink to={routes.home}>Marcetplace</NavLink>
      </div>
      <div className={s.right}>
        {console.log(isLoading, 'isLoading')}
        {isLoading ? (
           /* {}*/
          <button type="button" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to={routes.login}>Login</Link>
        )}
      </div>
    </header>
  );
}

/*const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.history.push(routes.home);
    }
  })
)*/

export default Header;
