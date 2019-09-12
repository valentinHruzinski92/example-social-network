import {User} from "../../../models/user.model";

export interface LoginState {
  isAuthorized?: boolean;
  user?: User;
  token?: string;
  isError?: boolean;
}
