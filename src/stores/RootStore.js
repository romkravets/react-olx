import {types} from 'mobx-state-tree';
import {AuthStore} from "./Auth/AuthStore";
import {ViewerStore} from './ViewerStore';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
  })
  .actions((store) => ({
   async bootstrap() {
     /* try {
      const token = window.localStorage.getItem('___token');

       //ToDo: check for undefined token

       Api.Auth.setToken(token);
       const res = await Api.Accaunt.getUser();

       store.viewer.setViewer(res.data);

     } cetch (err) {

     }*/

    },
  }));
