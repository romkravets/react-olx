import {types} from "mobx-state-tree";
import {asyncModel} from "../utils";
import Api from "../../api";

export const AuthStore = types.model('AuthStore', {
  login: asyncModel(loginFlow),
});

function loginFlow({email, password}) {
  return async (flow) => {
      const res =  await Api.Auth.login({password, email});
      console.log(res.data);
  }
}

