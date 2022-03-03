import { BusinessError } from './business-error.error';

export class InvalidLengthError extends BusinessError {
  constructor(minLength: number) {
    super(
      `La clave debe tener minimo ${minLength} caracteres.`,
      InvalidLengthError.name,
    );
  }
}
