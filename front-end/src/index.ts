import Vue from "vue";

import "./assets/colors.less";
import "./assets/constants.less";
import "./assets/layout.less";
import "./assets/dom.less";

import {App} from "./app.component";

new Vue({
  el: "#app",
  render: (h) => h(App)
});
