import { User } from "../models/user.model";

export class userValidation {
  isValid(user: User) {
    if (!user) {
      return false;
    }
    return true;
  }
}
