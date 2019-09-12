import {ActionTree} from "vuex";

import {LoginState} from "./login.state";
import {RootState} from "../../root-state.interface";

export const actions: ActionTree<LoginState, RootState> = {
  login(ctx, payload: any) {
    ctx.commit("login", payload);
  },
  logout(ctx) {
    ctx.commit("logout");
  },
  loginError(ctx) {
    ctx.commit("loginError");
  }
};
