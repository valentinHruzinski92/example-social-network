import * as _ from "lodash";
import {injectable} from "vue-typescript-inject";

import store from "../../store";

export enum StoreNamespace {
  LOGIN = "login"
}

export enum StoreAction {
  LOGIN = "login",
  LOGOUT = "logout",
  LOGIN_ERROR = "loginError",
}

const StoreActionMap = {
  [StoreNamespace.LOGIN]: [
    StoreAction.LOGIN,
    StoreAction.LOGOUT,
    StoreAction.LOGIN_ERROR,
  ]
};

@injectable()
export class StoreService {
  constructor() {}

  public dispatch(storeNamespace: any, storeAction: any, payload?: any): void {
    if (_.includes(StoreActionMap[storeNamespace], storeAction)) {
      store.dispatch(`${storeNamespace}/${storeAction}`, payload);
    }
  }
}
