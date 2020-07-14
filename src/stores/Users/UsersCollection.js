import {asyncModel, createCollection} from '../utils';
import Api from 'src/api';
import {useStore} from "../createStore";
import {UserModel} from "../UserModel";


export function  useUsersCollection() {
  const store = useStore();
  return store.entities.users;
}

export const UsersCollection = createCollection(UserModel, {
  //getProduct: asyncModel(getProduct),
});
