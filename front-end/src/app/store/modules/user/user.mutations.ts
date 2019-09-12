import { MutationTree } from "vuex";

import {UserState} from "./user.state";
import {User} from "../../../models/user.model";

export const mutations: MutationTree<UserState> = {
  updateCurrentUser(state, payload: User) {
    state.currentUser = payload;
  }
};
