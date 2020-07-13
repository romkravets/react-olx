import {applySnapshot, getParent, onSnapshot, types, getRoot} from "mobx-state-tree";
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
        const promise = thank(...args)(store, getParent(store), getRoot(store));

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

export function createPersist(store) {
  onSnapshot(store, (snapshot) => {
    console.log(snapshot);
    window.localStorage.setItem('___persist', JSON.stringify({
      auth: {
        isLoggedIn: snapshot.auth.isLoggedIn,
      },
      viewer: {
        user: snapshot.viewer.user,
      }
    }));
  });

  function rehydrate() {
   const snapshot =  window.localStorage.getItem('___persist');

   if (snapshot) {
      applySnapshot(store, JSON.parse(snapshot));
    }
  }

  return {
    rehydrate,
  }
}

export function createCollection(ofModel, asyncModels = {}) {
  const collection = types.model('CollectionModel', {
    collection: types.map(ofModel),
    ...asyncModels,
  })
    .actions((store) => ({
      add(key, value) {
        store.collection.set(String(key), value);
      },
    }));
  return types.optional(collection, {});
}
