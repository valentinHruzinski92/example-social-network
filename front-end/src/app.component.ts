import Vue from "vue";
import Component from "vue-class-component";
import {inject} from "vue-typescript-inject";

import WithRender from "./app.component.html";
import "./app.component.less";

import {HelloComponent} from "./app/components/hello/hello.component";
import {LoginPageComponent} from "./app/pages/login-page/login-page.component";
import {TopBarComponent} from "./app/components/top-bar/top-bar.component";
import {LoginService, LocalStorageService, StoreService, LoginApiService} from "./app/core";


@WithRender
@Component({
  components: {
    "hello": HelloComponent,
    "login": LoginPageComponent,
    "top-bar": TopBarComponent,
  },
  providers: [LoginService, LocalStorageService, StoreService, LoginApiService]
})
export class App extends Vue {
  // todo temporary solution.
  @inject(LoginService) private readonly loginService: LoginService;
  @inject(LocalStorageService) private readonly localStorageService: LocalStorageService;
  @inject(StoreService) private readonly storeService: StoreService;
  @inject(LoginApiService) private readonly loginApiService: LoginApiService;
}
