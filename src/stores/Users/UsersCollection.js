import {asyncModel, createCollection} from '../utils';
import Api from 'src/api';
import {useStore} from "../createStore";
import {UserModel} from "./UserModel";
import {getParent} from "mobx-state-tree";


export function  useUsersCollection() {
  const store = useStore();
  return store.entities.users;
}

export const UsersCollection = createCollection(UserModel, {
  //getById: asyncModel(getProduct),
});
