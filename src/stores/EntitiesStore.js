import {types} from "mobx-state-tree";
import {ProductsCollection} from "./Products/ProductsCollection";
import {UsersCollection} from "./Users/UsersCollection";


export const EntitiesStore = types.model('EntitiesStore', {
  products: ProductsCollection,
  users: UsersCollection,

})
/*  .actions((store)=> ({
    merge(entities) {
      Object.keys(entities).forEach((collectionName) => {
        const collectionEntities = entities[collectionName];

        Object.keys(collectionEntities).forEach((id) => {
          const value = collectionEntities[id];
          store[collectionName].add(id, value);
        })

      })
    }
  }))*/
