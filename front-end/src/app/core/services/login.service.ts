import {injectable} from "vue-typescript-inject";

@injectable()
export class LoginService {
  constructor() {}

  public login(username: string, password: string): string {
    console.log("login");
    return "token";
  }
}
