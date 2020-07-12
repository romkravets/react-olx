import React, {useEffect, useState} from "react";
import s from './App.module.scss'
import Router from "./scenes/routes";
import { Provider, createStore } from 'src/stores/createStore';

const store = createStore();

function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
      store.bootstrap().then(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <Provider value={store}>
        <Router />
      </Provider>
    </main>
  )
}

export default App;
