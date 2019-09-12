import {Module} from "vuex";

import {RootState} from "../../root-state.interface";
import {LoginState} from "./login.state";
import {getters} from "./login.getters";
import {mutations} from "./login.mutations";
import {actions} from "./login.actions";

const state: LoginState = {
  isAuthorized: false,
  user: null,
  token: "",
  isError: false
};

export const loginModule: Module<LoginState, RootState> = {
  state,
  getters,
  actions,
  mutations
};
