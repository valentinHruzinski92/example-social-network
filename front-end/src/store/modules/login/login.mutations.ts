import {MutationTree} from "vuex";

import {LoginState} from "./login.state";

export const mutations: MutationTree<LoginState> = {
  login(state: LoginState, payload: any): void {
    console.log('actions login');

    state.user = payload.user;
    state.token = payload.token;
    state.isAuthorized = true;
    state.isError = false;
  },
  logout(state: LoginState): void {
    state.user = null;
    state.token = '';
    state.isAuthorized = false;
    state.isError = false;
  },
  loginError(state: LoginState): void {
    state.isError = true;
  }
};
