import {injectable} from "vue-typescript-inject";

import {User} from "../../../models/user.model";
import {LoginState} from "../../../store/modules/login/login.state";
import store from "../../../store";

@injectable()
export class LoginService {
  constructor() {}

  public login(username: string, password: string): Promise<any> {
    // should be request on backend
    return new Promise((resolve, reject) => {
      if (true) {

        const user: User = {id: 1, email: username, firstName: "Valentin", lastName: "Hruzinski"};
        const payload: LoginState = {user, token: "token123"};

        store.dispatch("login", payload);
        resolve(user);

        return;
      }

      store.dispatch("loginError");
      reject();
    });
  }

  public logout(): void {
    store.dispatch("logout");
  }
}
