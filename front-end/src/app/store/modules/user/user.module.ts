import {Module} from "vuex";

import {User} from "../../../models/user.model";
import {RootState} from "../../root-state.interface";
import {UserState} from "./user.state";
import {getters} from "./user.getters";
import {mutations} from "./user.mutations";
import {actions} from "./user.actions";

const user: UserState = {
  currentUser: undefined,
  error: false
};

export const userModule: Module<UserState, RootState> = {
  state: user,
  getters,
  actions,
  mutations
};
