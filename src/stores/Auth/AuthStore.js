import {types} from "mobx-state-tree";
import {LoginStore} from "./LoginStore";

export const AuthStore = types.model('AuthStore', {
  login: types.optional(LoginStore, {}),
});
