import {ProductModel} from "./ProductModel";
import {asyncModel, createCollection} from '../utils';
import Api from 'src/api';
import {useStore} from "../createStore";
/*import {normalize} from "normalizr";
import {Product} from "../schemas";*/

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
      store.add(res.data.id, {
        ...res.data,
        owner: +res.data.owner.id,
      });

    /*  const { entities } = normalize(res.data, Product);
      console.log(entities);
      debugger;
      Root.entities.merge(entities);*/


        /*Root.entities.users.add(res.data.owner.id, res.data.owner);
        /!*console.log( Root.entities.users.add(res));*!/
        store.add(res.data.id, {
          ...res.data,
          owner: +res.data.owner.id,
        });*/
    } catch (err) {
      console.log(err);
    }

  }

}

