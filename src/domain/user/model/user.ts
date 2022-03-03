import { InvalidLengthError } from 'src/domain/errors/invalid-length.error';

const PASSWORD_MIN_LENGTH = 8;
export class User {
  readonly #name: string;
  readonly #username: string;
  readonly #password: string;
  readonly #role: string;
  readonly #location: string;
  readonly #userShift: string;

  constructor(
    name: string,
    username: string,
    password: string,
    role: string,
    location: string,
    userShift: string,
  ) {
    this.validatePasswordLength(password);
    this.#name = name;
    this.#username = username;
    this.#password = password;
    this.#role = role;
    this.#location = location;
    this.#userShift = userShift;
  }

  private validatePasswordLength(password: string) {
    if (password.length < PASSWORD_MIN_LENGTH) {
      throw new InvalidLengthError(PASSWORD_MIN_LENGTH);
    }
  }

  get name(): string {
    return this.#name;
  }

  get username(): string {
    return this.#username;
  }

  get password(): string {
    return this.#password;
  }

  get role(): string {
    return this.#role;
  }

  get location(): string {
    return this.#location;
  }

  get userShift(): string {
    return this.#userShift;
  }
}
