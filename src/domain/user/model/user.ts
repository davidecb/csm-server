import { InvalidLengthError } from 'src/domain/errors/invalid-length-error';

const PASSWORD_MIN_LENGTH = 8;
export class User {
  readonly #name: string;
  readonly #username: string;
  readonly #password: string;
  readonly #role: string;

  constructor(name: string, username: string, password: string, role: string) {
    this.validatePasswordLength(password);
    this.#name = name;
    this.#username = username;
    this.#password = password;
    this.#role = role;
  }

  private validatePasswordLength(password: string) {
    if (password.length < PASSWORD_MIN_LENGTH) {
      throw new InvalidLengthError(
        `Password min length must be ${PASSWORD_MIN_LENGTH}`,
      );
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
}
