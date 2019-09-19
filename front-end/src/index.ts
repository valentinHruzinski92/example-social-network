import "reflect-metadata";
import VueTypeScriptInject from "vue-typescript-inject";
import VueRouter from "vue-router";
import {Vue} from "vue-property-decorator";

import store from "./app/store";
import router from "./app/router/app.router";

import "./assets/colors.less";
import "./assets/constants.less";
import "./assets/layout.less";
import "./assets/dom.less";

import {App} from "./app.component";

Vue.use(VueTypeScriptInject);
Vue.use(VueRouter);

new Vue({
  store,
  router,
  el: "#app",
  render: (h) => h(App)
});
