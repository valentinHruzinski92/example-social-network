import "reflect-metadata";
import {injectable} from "vue-typescript-inject";

import {User} from "../../models/user.model";
import {LoginState} from "../../store/modules/login/login.state";
import {LocalStorageItem} from "../../shared/local-storage-item.enum";
import {StoreService, StoreAction, StoreNamespace} from "./store.service";
import {LocalStorageService} from "./local-storage.service";
import {LoginApiService} from "./api/login-api.service";

@injectable()
export class LoginService {
  constructor(
    private storeService: StoreService,
    private localStorageService: LocalStorageService,
    private loginApiService: LoginApiService
  ) {}

  public login(username: string, password: string): Promise<any> {
    return this.loginApiService.login(username, password)
      .then(({token, user}: { token: string, user: User }) => {
        this.localStorageService.set(LocalStorageItem.TOKEN, token);
        const payload: LoginState = {user, token};

        this.storeService.dispatch(StoreNamespace.LOGIN, StoreAction.LOGIN, payload);

        return user;
      })
      .catch((error) => {
        this.storeService.dispatch(StoreNamespace.LOGIN, StoreAction.LOGIN_ERROR);
      });
  }

  public logout(): void {
    this.storeService.dispatch(StoreNamespace.LOGIN, StoreAction.LOGOUT);
    this.localStorageService.set(LocalStorageItem.TOKEN, "");
  }
}
