import {injectable} from "vue-typescript-inject";

import {User} from "../../models/user.model";
import {LoginState} from "../../store/modules/login/login.state";
import {StoreService, StoreAction, StoreNamespace} from "./store.service";
import {LocalStorageService} from "./local-storage.service";

@injectable()
export class LoginService {
  constructor(private storeService: StoreService,
              private localStorageService: LocalStorageService) {}

  public login(username: string, password: string): Promise<any> {
    // should be request on backend
    return new Promise((resolve, reject) => {
      if (true) {

        const user: User = {id: 1, email: username, firstName: "Valentin", lastName: "Hruzinski"};
        const payload: LoginState = {user, token: "token123"};

        this.storeService.dispatch(StoreNamespace.LOGIN, StoreAction.LOGIN, payload);
        resolve(user);

        return;
      }

      this.storeService.dispatch(StoreNamespace.LOGIN, StoreAction.LOGIN_ERROR);
      reject();
    });
  }

  public logout(): void {
    this.storeService.dispatch(StoreNamespace.LOGIN, StoreAction.LOGOUT);
  }
}
