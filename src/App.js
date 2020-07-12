import React, {useEffect} from "react";
import s from './App.module.scss'
import Router from "./scenes/routes";
import { Provider, createStore } from 'src/stores/createStore';

const store = createStore();

function App() {
  useEffect(() => {
      store.bootstrap();
  }, []);
  return (
    <main>
      <Provider value={store}>
        <Router />
      </Provider>
    </main>
  )
}

export default App;
