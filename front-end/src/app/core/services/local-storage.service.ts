import "reflect-metadata";
import * as _ from "lodash";
import {injectable} from "vue-typescript-inject";

@injectable()
export class LocalStorageService {
  public set(key: string, value: any): void {
    if (_.isObject(value) || _.isString(value)) {
      value = JSON.stringify(value);
    }

    if (_.isUndefined(value)) {
      value = null;
      console.warn("something went wrong. trying to set `undefined` value");
    }

    localStorage.setItem(key, value);
  }

  public get(key: string): any {
    const item: string = localStorage.getItem(key);

    try {
      return JSON.parse(item);
    } catch (e) {

      return item;
    }
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }
}
