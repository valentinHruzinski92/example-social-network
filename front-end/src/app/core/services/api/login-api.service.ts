import "reflect-metadata";
import {injectable} from "vue-typescript-inject";

@injectable()
export class LoginApiService {
  public login(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve({
        token: "token123",
        user: {id: 1, email: username, firstName: "Valentin", lastName: "Hruzinski"}
      });
    });
  }
}
