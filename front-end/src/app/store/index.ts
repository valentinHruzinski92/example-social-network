import {Vue} from "vue-property-decorator";
import Vuex, {StoreOptions} from "vuex";

import {RootState} from "./root-state.interface";
import {userModule} from "./modules/user/user.module";
import {loginModule} from "./modules/login/login.module";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    user: {...userModule, namespaced: true},
    login: {...loginModule, namespaced: true},
  }
};

export default new Vuex.Store<RootState>(store);
