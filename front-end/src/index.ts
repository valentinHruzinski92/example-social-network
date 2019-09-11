import Vue from "vue";
import VueTypeScriptInject from "vue-typescript-inject";
import store from "./store";

import "./assets/colors.less";
import "./assets/constants.less";
import "./assets/layout.less";
import "./assets/dom.less";

import {App} from "./app.component";

Vue.use(VueTypeScriptInject);

new Vue({
  store,
  el: "#app",
  render: (h) => h(App)
});
