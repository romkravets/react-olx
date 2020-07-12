import {types, flow} from "mobx-state-tree";
import Api from 'src/api';

export const LoginStore = types.model('LoginStore', {
  isLoading: false,
  isError: false,
})
  .actions(store => ({
    run: flow(function* run({email, password}) {
      try {
        store.isLoading = true;
        store.siError = false;

        const res =  yield Api.Auth.login({password, email});
        console.log(res.data);
        store.isLoading = false;
      } catch (err) {
        store.isError = true;
      }

      })
    })
  );
