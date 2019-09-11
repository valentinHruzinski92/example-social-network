import Vue from "vue";
import Component from "vue-class-component";
import {inject} from "vue-typescript-inject";

import WithRender from "./login-page.component.html";
import "./login-page.component.less";

import {LoginService} from "../../core";

@WithRender
@Component({
  providers: [LoginService]
})
export class LoginPageComponent extends Vue {
  public username: string = "";
  public password: string = "";


  @inject(LoginService) private readonly loginService: LoginService;

  constructor() {
    super();
  }


  public login() {
    console.log("this.username, this.password", this.username, this.password);
    this.loginService.login(this.username, this.password);

    this.$store.dispatch("setCurrentUser", {id: ++this.$store.getters.getCurrentUser.id});
  }
}

