import Vue from "vue";
import Component from "vue-class-component";

import WithRender from "./app.component.html";

import {HelloComponent} from "./components/hello/hello.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

@WithRender
@Component({
  components: {
    "hello": HelloComponent,
    "login": LoginPageComponent,
  }
})
export class App extends Vue {
}
