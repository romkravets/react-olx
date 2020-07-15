import {getIdentifier, isStateTreeNode, resolveIdentifier, types} from "mobx-state-tree";
import {UserModel} from './Users/UserModel';

export function safeReference(T) {
  return types.reference(T, {
    get(identifier, parent) {
      if (isStateTreeNode(identifier)) {
        identifier = getIdentifier(identifier);
      }

      return resolveIdentifier(T, parent, identifier);
    },
      set(value) {
        return value;
      },
    });
}

const ViewerModel = UserModel.named('ViewerModel');

export const ViewerStore = types.model('ViewerStore', {
  user: types.maybe(ViewerModel),
  userModel: types.maybe(UserModel),
})
  .actions((store) => ({
      setViewer(user) {
        store.user = user;
     console.log(user, "view Owner");
        /*  store.userModel = user;
       store.user = +user.id;*/
      },
  }));
