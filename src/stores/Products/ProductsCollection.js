import {ProductModel} from "./ProductModel";
import {asyncModel, createCollection} from '../utils';
import Api from 'src/api';
import {useStore} from "../createStore";

export function  useProductsCollection() {
  const store = useStore();
  return store.entities.products;
}

function getProduct(id) {
  return async  function getProductFlow(flow, store, Root) {
    try {
      const res = await Api.Products.getById(id);
      Root.entities.users.add(res.data.owner.id, res.data.owner);
      store.add(res.data.id, {
        ...res.data,
        owner: +res.data.owner.id,
      });
      console.log(res.data.owner.fullName, 'res');
    } catch (err) {
      console.log(err);

    }

  }

}

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct),
});

