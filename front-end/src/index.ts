import Vue from 'vue'
import {App} from './app.component.ts'
import './assets/app.less'

new Vue({
  el: '#app',
  render: (h) => h(App)
});
