import { BusinessError } from './business-error.error';

export class UsernameExistsError extends BusinessError {
  constructor(username: string) {
    super(`El usuario: ${username}, ya existe.`, UsernameExistsError.name);
  }
}
