import { DbContext } from "../db/db-context";
import { User } from "../models/user.model";
import { UserRepository } from "../repository/user.repository";
import { errorMessage } from "../validation/error.message";

export class UserDomain {
  userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  error = new errorMessage();

  getAll() {
    return this.userRepository.getAll();
  }

  register(user: User) {
    // Age
    if (!user.age) {
      return this.error.required("age");
    }

    if (user.age < 18 || user.age >= 100) {
      return this.error.inValidAgeRange;
    }

    if (isNaN(user.age)) {
      return this.error.inValid("age");
    }

    // Email
    const emailId = user.emailId;
    const isValidEmail = emailId.includes("@");
    // "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

    if (!emailId) {
      return this.error.required("username");
    }
    if (!isValidEmail) {
      return this.error.inValid("email");
    }

    // User Name
    const userName = user.fullName;
    const userNamePattern = new RegExp(/[0-9]/);
    if (!userName) {
      return this.error.required("username");
    }

    if (userNamePattern.test(userName)) {
      return this.error.inValidNameRegex;
    }

    // Password
    const userPassword = user.password;
    const passwordPattern = new RegExp(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/);

    if (!userPassword) {
      return this.error.required("password");
    }

    if (!passwordPattern.test(userPassword)) {
      return this.error.inValidPasswordRegex;
    }

    this.userRepository.create(user);
    return user;
  }
}
