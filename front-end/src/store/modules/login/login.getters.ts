import {GetterTree} from "vuex";

import {LoginState} from "./login.state";
import {RootState} from "../../root-state.interface";
import {User} from '../../../models/user.model';

export const getters: GetterTree<LoginState, RootState> = {
  getLoginUser(state: LoginState): User {
    return state.user;
  },
  isAuthorized(state: LoginState): boolean {
    return state.isAuthorized;
  },
  isError(state: LoginState): boolean {
    return state.isError;
  },
};
