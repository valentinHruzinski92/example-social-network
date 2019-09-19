import {Vue, Component} from "vue-property-decorator";
// import {Prop, Watch} from "vue-property-decorator";

import WithRender from "./hello.component.html";
import "./hello.component.less";


@WithRender
@Component({})
export class HelloComponent extends Vue {
  public name: string = "";

  // @Prop({default: 'Example'}) name: string
  // @Watch('myProperty') onPropertyChanged(value: string, oldValue: string) {  }
  constructor() {
    super();

  }

  public beforeCreate() {
    console.log("beforeCreate");
  }

  public mounted() {
    console.log("mounted");
  }


}

