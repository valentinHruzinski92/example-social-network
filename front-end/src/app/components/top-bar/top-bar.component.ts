import Vue from "vue";
import Component from "vue-class-component";
import WithRender from "./top-bar.component.html";
import "./top-bar.component.less";


@WithRender
@Component({})
export class TopBarComponent extends Vue {
  public searchValue: string = "";

  constructor() {
    super();
  }

  public searchValueChanged($event: any): void {
    if ($event && $event.target) {
      // search
    }
  }
}
