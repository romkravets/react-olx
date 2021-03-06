import {getParent, types} from "mobx-state-tree";
import {ProductModel} from "./ProductModel";
import {asyncModel} from "../utils";
import Api from 'src/api';
import {LatestProductCollection} from "../schemas";
import { normalize, schema } from 'normalizr';

export const LatestProductsStore = types.model('LatestProductsStore.js', {
  items: types.array(types.reference(ProductModel)),

  fetchLatest: asyncModel(fetchLatest),
})
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    }
  }))

function fetchLatest() {
  return async function fetchLatestFlow(flow, store, Root) {
    const res = await Api.Products.fetchLatest();

    const {result, entities} = normalize(
      res.data, LatestProductCollection
    );

    Root.entities.merge(entities);

  /* const ids =  res.data.map((item) => {
      Root.entities.products.add(item.id, item);
      return item.id;
    })*/
    store.setItems(result);

  }
}


