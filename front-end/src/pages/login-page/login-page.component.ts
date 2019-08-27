import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./login-page.component.html";
import "./login-page.component.less";


@WithRender
@Component({
  props: {
  }
})
export class LoginPageComponent extends Vue {
  constructor() {
    super();
  }

}

