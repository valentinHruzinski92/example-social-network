import Vue from "vue";
import Component from "vue-class-component";
import {inject} from "vue-typescript-inject";

import WithRender from "./login-page.component.html";
import "./login-page.component.less";

import {LoginService} from "../../core";
import {User} from "../../models/user.model";

@WithRender
@Component({
  providers: [LoginService]
})
export class LoginPageComponent extends Vue {
  public username: string = "";
  public password: string = "";
  public user: User = {};

  @inject(LoginService) private readonly loginService: LoginService;

  constructor() {
    super();
  }

  public async login(): Promise<void> {
    this.user = await this.loginService.login(this.username, this.password);
  }
}

