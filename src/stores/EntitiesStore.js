import {types} from "mobx-state-tree";
import {ProductsCollection} from "./Products/ProductsCollection";
import {UsersCollection} from "./Users/UsersCollection";


export const EntitiesStore = types.model('EntitiesStore', {
  products: ProductsCollection,
  users: UsersCollection,
})
