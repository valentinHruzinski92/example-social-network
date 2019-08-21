import {HelloComponent} from './components/hello/hello.component.ts'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    'hello-component': HelloComponent
  }
})
export class App extends Vue {
}