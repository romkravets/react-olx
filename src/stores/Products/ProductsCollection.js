import {ProductModel} from "./ProductModel";
import {asyncModel, createCollection} from '../utils';

export const ProductsCollection = createCollection(ProductModel, {
  getProduct: asyncModel(getProduct)
});

function getProduct(id) {
  return async  function getProductFlow(flow, store) {
    //ToDo Fetch product and store insore the collection
    //const res = await Api...
    //store.add(res.data.id, res.data);
  }

}
