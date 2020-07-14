import {types} from "mobx-state-tree";
import {ProductsCollection} from "./Products/ProductsCollection";

export const EntitiesStore = types.model('EntitiesStore', {
  products: ProductsCollection,
})
