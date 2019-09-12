import {GetterTree} from "vuex";

import {UserState} from "./user.state";
import {RootState} from "../../root-state.interface";


export const getters: GetterTree<UserState, RootState> = {
  getCurrentUser(state) {
    return state.currentUser;
  }
};
