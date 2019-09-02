import Vue from "vue";
import Component from "vue-class-component";

import WithRender from "./app.component.html";
import "./app.component.less";

import {HelloComponent} from "./app/components/hello/hello.component";
import {LoginPageComponent} from "./app/pages/login-page/login-page.component";
import {TopBarComponent} from "./app/components/top-bar/top-bar.component";


@WithRender
@Component({
  components: {
    "hello": HelloComponent,
    "login": LoginPageComponent,
    "top-bar": TopBarComponent,
  }
})
export class App extends Vue {
}
