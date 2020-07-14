import {ProductModel} from "./ProductModel";
import {asyncModel, createCollection} from '../utils';
import Api from 'src/api';
import {useStore} from "../createStore";

export function  useProductsCollection() {
  const store = useStore();
  return store.entities.products;
}

function getProduct(id) {
  return async  function getProductFlow(flow, store) {
    const  res = await Api.Products.getById(id);
    store.add(res.data.id, res.data);
  }

}

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
});

/*function productById(id) {
  return (flow, store) => {
    if(store.get(id)) {
      return store.get(id);
    }
    return async  () => {
      const res = await Api.Products.getById(id);

      store.add(res.data.id, res.data);
    }
  }

}*/


