import {applySnapshot, types} from 'mobx-state-tree';
import {AuthStore} from "./Auth/AuthStore";
import {ViewerStore} from './ViewerStore';
import { LatestProductsStore } from './Products/LatestProductsStore';
import Api from 'src/api';
import {EntitiesStore} from "./EntitiesStore";
export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),

    entities: types.optional(EntitiesStore, {}),
  })

  .actions((store) => ({
   async bootstrap() {
     try {
      const token = window.localStorage.getItem('___token');

      if (!token) {
        return
        //return new Error("Unauthorized");
      }

       Api.Auth.setToken(token);

       const res = await Api.Account.getUser();

       store.viewer.setViewer(res.data);
       store.auth.setIsLoggedIn(true);
     } catch (err) {
        console.log(err);
        applySnapshot({});
     }

    },
  }));
