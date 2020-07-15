import {getParent, types} from "mobx-state-tree";
import {ProductModel} from "./ProductModel";
import {asyncModel} from "../utils";
import Api from 'src/api';
import {OwnProductsSchema} from "../schemas";

export const OwnProducts = types.model("OwnProductsStore", {
  items: types.array(types.reference(types.late(() => ProductModel)),
    ),
  fetch: asyncModel(fetchOwnerProducts),
})
.actions((store) => ({
  setItems(items) {
    store.items = items;
  },
}));

function fetchOwnerProducts() {
  return async function fetchOwnerProductsFlow(flow, store) {
    const res = await Api.Products.byUserId(getParent(store).id);

    const result = flow.merge(res.data.list, OwnProductsSchema);

    store.setItems(result);
  }

}
