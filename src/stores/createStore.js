import {RootStore} from "./RootStore";
import {useContext, createContext} from "react";
import {createPersist} from "./utils";

export function createStore() {
  const root = RootStore.create();

  const persistor = createPersist(root);

  persistor.rehydrate();

  return root;
}

const MSTContext = createContext(null);

export const Provider = MSTContext.Provider;

export function useStore(mapStateToProps) {
  const store = useContext(MSTContext);

  if (mapStateToProps === 'function') {
    return mapStateToProps(store);
  }

  return store;
}
