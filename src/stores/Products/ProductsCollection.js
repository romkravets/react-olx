import {ProductModel} from "./ProductModel";
import {asyncModel, createCollection} from '../utils';
import Api from 'src/api';
import {useStore} from "../createStore";

export function  useProductsCollection() {
  const store = useStore();
  return store.entities.products;
}

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
});

function getProduct(id) {
  return async function getProductFlow(flow, store, Root) {
    try {
      const res = await Api.Products.getById(id);
      Root.entities.users.add(res.data.owner.id, res.data.owner);
      console.log(res.data);
      store.add(res.data.id, {
        ...res.data,
        owner: +res.data.owner.id,
      });
    } catch (err) {
      console.log(err);

    }

  }

}

