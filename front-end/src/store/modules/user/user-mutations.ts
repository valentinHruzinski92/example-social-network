import { MutationTree } from "vuex";

import {UserState} from "./user-state.interface";
import {User} from "../../../models/user";

export const mutations: MutationTree<UserState> = {
  updateCurrentUser(state, payload: User) {
    state.currentUser = payload;
  }
};
