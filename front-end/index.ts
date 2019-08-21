import Vue from 'vue'
import {App} from './src/app.component.ts'
import './src/assets/app.less'

new Vue({
  el: '#app',
  render: (h) => h(App)
});
