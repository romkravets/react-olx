import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from "react-redux";
import store  from './stores/createStore';
import s from "./App.module.scss";
import Router from "./scenes/routes";
import Api from 'src/api';
import { appOperations } from './modules/app';


class App extends Component{
  constructor(props) {
    super(props);

    props.dispatch(appOperations.init());
  }
  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <main>
        <div className={s.app}>
          <Router />
        </div>
      </main>
    )
  }
}

store.subscribe(() => {
  console.log("State:", {state: store.getState()});
})

function mapStateToProps(state) {
  return {
    isLoading: state.app.isLoading,
  }
}

const  AppConnected = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
       <AppConnected/>
  </Provider>, document.getElementById('root'))

