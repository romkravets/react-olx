import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useStore} from "../../stores/createStore";


const Home = observer(() => {
  const store = useStore();

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, []);

  if ( store.latestProducts.fetchLatest.inProgress) {
  return  <div>Loading...</div>
  }

  return (
      <div>
        <h1>Home page</h1>
        <ul>
          {store.latestProducts.items.map(item => <li>{item.title}</li>)}
        </ul>
      </div>
  )
});

export default Home;
