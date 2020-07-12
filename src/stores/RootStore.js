import {types} from 'mobx-state-tree';
import {AuthStore} from "./Auth/AuthStore";

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
  })
  .actions((store) => ({
    bootstrap() {}
  }));
