import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useStore} from "../../stores/createStore";
import {generatePath, NavLink} from "react-router-dom";
import {routes} from "../routes";


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
          {store.latestProducts.items.map((item) => (
            <li key={item.id}>
              <NavLink to={generatePath(routes.product, {productId: item.id,})}>
                  {item.title}
              </NavLink>
            </li>
            ))}
        </ul>
      </div>
  )
});

export default Home;
