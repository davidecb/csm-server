import { BusinessError } from './business-error.error';

export class PasswordWrongError extends BusinessError {
  constructor() {
    super('La contraseña ingresada es incorrecta.', 'PASSWORD_WRONG');
  }
}
