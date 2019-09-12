import {injectable} from "vue-typescript-inject";

import {User} from "../../models/user.model";
import {LoginState} from "../../store/modules/login/login.state";
import store from "../../store";

@injectable()
export class StoreService {
  constructor() {}
}