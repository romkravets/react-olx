import {types} from "mobx-state-tree";

export function asyncModel(thank) {
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

        return promise;
      }
    }));
  //return model.create({});
  return types.optional(model, {});
}
