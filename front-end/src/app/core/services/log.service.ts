import {injectable} from "vue-typescript-inject";

@injectable()
export class LogService {
  constructor() {}

  public debug(content) {
    console.debug.apply(console, arguments);
  }

  public info(content) {
    console.info.apply(console, arguments);
  }

  public error(error?) {
    console.error.apply(console, arguments);
  }
}
