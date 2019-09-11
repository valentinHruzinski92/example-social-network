import Vue from "vue";
import Component from "vue-class-component";

import WithRender from "./hello.component.html";
import "./hello.component.less";


@WithRender
@Component({
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
export class HelloComponent extends Vue {
  constructor() {
    super();

    this.$store.dispatch("setCurrentUser", {id: 2});
  }

  public getUser() {
    return this.$store.getters.getCurrentUser;
  }

}

