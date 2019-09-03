import "reflect-metadata";
import Vue from "vue";
import Component from "vue-class-component";
import {inject} from "vue-typescript-inject";

import WithRender from "./top-bar.component.html";
import "./top-bar.component.less";

import {LogService} from "../../core";


@WithRender
@Component({
  providers: [LogService]
})
export class TopBarComponent extends Vue {
  public searchValue: string = "";

  @inject(LogService) private readonly logService: LogService;

  constructor() {
    super();
  }

  public searchValueChanged($event: any): void {
    if ($event && $event.target) {
      this.searchValue = $event.target.value;
      this.logService.info(this.searchValue);
      // search
    }
  }
}
