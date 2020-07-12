import {types} from "mobx-state-tree";
import {asyncModel} from "../utils";
import Api from "../../api";

export const AuthStore = types.model('AuthStore', {
  login: asyncModel(loginFlow),
});

function loginFlow({email, password}) {
  return async (flow) => {
    try {
      flow.start();

      const res =  await Api.Auth.login({password, email});

      console.log(res.data);

      flow.success();
    } catch (err) {
      flow.error(err);
    }
  }
}

