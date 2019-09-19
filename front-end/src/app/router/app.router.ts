import VueRouter from "vue-router";

import {HelloComponent} from "../components/hello/hello.component";
import {LoginPageComponent} from "../pages/login-page/login-page.component";

export default new VueRouter({
  routes: [
    {path: "/login", component: LoginPageComponent},
    {path: "/hello/:name", component: HelloComponent}
  ]
});
