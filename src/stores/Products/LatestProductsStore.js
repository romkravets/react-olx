import {getParent, types} from "mobx-state-tree";
import {ProductModel} from "./ProductModel";
import {asyncModel} from "../utils";
import Api from 'src/api';

export const LatestProductsStore = types.model('LatestProductsStore.js', {
  items: types.array(ProductModel),

  fetchLatest: asyncModel(fetchLatest),
})
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    }
  }))

function fetchLatest() {
  return async function fetchlatestFlow(flow, store, Root) {
    const res = await Api.Products.fetchLatest();

    store.setItems(res.data);

  }

}
