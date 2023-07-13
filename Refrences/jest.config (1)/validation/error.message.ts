export class errorMessage {
  inValidAgeRange: string = "Age must be between 18 to 100.";
  inValidNameLength: string = "Name must contain 6 characters.";
  inValidNameRegex: string =
    "Name must not contain special character or digit.";

  inValidPasswordRegex: string =
    "Password must contain special character, Mixed case and digit.";

  required(field: string): string {
    return field + " is required ";
  }
  inValid(field: string): string {
    return field + " is Invalid ";
  }
}
