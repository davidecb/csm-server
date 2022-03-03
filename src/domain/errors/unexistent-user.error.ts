import { BusinessError } from './business-error.error';

export class UnexistentUserError extends BusinessError {
  constructor() {
    super(`El usuario no existe.`, 'UNEXISTENT_USER');
  }
}
