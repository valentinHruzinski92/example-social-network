import {ActionTree} from "vuex";

import {UserState} from "./user-state.interface";
import {User} from "../../../models/user";
import {RootState} from "../../root-state.interface";

export const actions: ActionTree<UserState, RootState> = {
  setCurrentUser(ctx, payload: User) {

    ctx.commit("updateCurrentUser", payload);
  }
};
