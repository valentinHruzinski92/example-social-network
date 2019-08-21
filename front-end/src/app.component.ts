import {HelloComponent} from './components/hello/hello.component'
import Vue from 'vue'
import Component from 'vue-class-component'
import WithRender from './app.component.html';

@WithRender
@Component({
  components: {
    'hello-component': HelloComponent
  }
})
export class App extends Vue {
}