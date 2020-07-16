import {compose, withHandlers, withStateHandlers} from 'recompose';
import {connect} from 'react-redux';
import LoginView from "./LoginView";
import {authOperations} from "../../modules/auth";
import {routes} from "../routes";
import {withRouter} from "react-router-dom";

function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
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
  withStateHandlers({
    fields: {
      email: 'rom@test.com',
      password: '',
    },
  },
    {
    handleFieldChange: (state) => (fieldName, value) => ({
      ...state,
      fields: {
        ...state.fields,
        [fieldName]: value,
      },
    }),
  }),
  withHandlers({
    handleLogin: props => async () => {
     await props.login(props.fields);
      props.history.push(routes.home);
    }
  }),
);

export  default enhancer(LoginView);

