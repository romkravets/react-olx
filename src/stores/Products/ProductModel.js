import {types} from "mobx-state-tree";

export const ProductModel = types.model("ProductModel", {
  id: types.identifierNumber,
  ownerId: types.number,
  title: types.string,
  description: types.maybeNull(types.string),
  photos: types.maybeNull(types.array(types.string)),
  location: types.string,
  saved: false,
  price: types.number,
  createdAt: types.string,
  updatedAt: types.string,
})
