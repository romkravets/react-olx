import {compose, withHandlers, withStateHandlers} from 'recompose';
import {connect} from 'react-redux';
import LoginView from "./Header";
import {authOperations} from "../../modules/auth";
import {routes} from "../../scenes/routes";
import {withRouter} from "react-router-dom";
import Api from "../../api";

function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
  /*  viewerName: state.viewer.user.fullName,*/
  }
}

const maoDispatchToProps = {
  login: authOperations.login,
}


const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    maoDispatchToProps
  ),
  withHandlers({
    handleLogout: (props) => () => {
      Api.Auth.logout();
      props.history.push(routes.home);
    }
  })
);

export  default enhancer(LoginView);

