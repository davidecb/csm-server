import { BusinessError } from './business-error.error';

export class UsernameWrongError extends BusinessError {
  constructor(username: string) {
    super(`El usuario: ${username}, no existe.`, 'USERNAME_WRONG');
  }
}
