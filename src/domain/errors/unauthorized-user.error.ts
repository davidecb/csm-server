import { BusinessError } from './business-error.error';

export class UnauthorizedUserError extends BusinessError {
  constructor() {
    super('No tienes permisos para realizar esta accion.', 'UNAUTHORIZED_USER');
  }
}
