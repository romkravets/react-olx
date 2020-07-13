import {applySnapshot, types} from 'mobx-state-tree';
import {AuthStore} from "./Auth/AuthStore";
import {ViewerStore} from './ViewerStore';
import Api from 'src/api';
export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
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
