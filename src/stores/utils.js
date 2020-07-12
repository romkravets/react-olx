import {types} from "mobx-state-tree";
import Api from "../api";

export function asyncModel(thank, auto = true) {
  const model = types.model('AsincModel', {
    isLoading: false,
    isError: false,
  })
    .actions(store => ({
      statrt() {
        store.isLoading = true;
        store.isError = false;
      },
      success() {
        store.isLoading = false;
      },

      error(err) {
        store.isLoading = false;
        store.isError = true;
      },

      run(...args) {
        const promise = thank(...args)(store);

        if (auto) {
          return store._auto(promise);
        }

        return promise;
      },
      async _auto(promise) {
        try {
          store.start();

          await promise;

          store.success();
        } catch (err) {
          store.error(err);
        }
      }
    }));
  //return model.create({});
  return types.optional(model, {});
}
