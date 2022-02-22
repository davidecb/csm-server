import { BusinessError } from './business-error';

export class InvalidLengthError extends BusinessError {
  constructor(message: string) {
    super(message, InvalidLengthError.name);
  }
}
