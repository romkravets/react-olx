import React, {Component} from "react";
import s from './App.module.scss'
import Router from "./scenes/routes";
import Api from 'src/api';

class App extends Component{
  constructor(props) {
    super(props);

    Api.init();
  }
  render() {
    return (
      <main>
        {/*  <Provider value={store}>*/}
        <div className={s.app}>
          <Router />
        </div>
        {/*   </Provider>*/}
      </main>
    )
  }
}

export default App;
