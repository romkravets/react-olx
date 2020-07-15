import {types} from "mobx-state-tree";
import {OwnProducts} from "../Products/OwnProductsStore";


export const UserModel = types.model('ViewerStore', {
  id: types.number,
  fullName: types.string,
  location: types.maybeNull(types.string),
  avatar: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
  createdAt: types.string,
  updatedAt: types.string,
  email: types.maybe(types.string),

  ownProducts: types.optional(OwnProducts, {})

})
