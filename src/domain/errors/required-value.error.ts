import { BusinessError } from './business-error.error';

export class RequiredValueError extends BusinessError {
  constructor(message: string) {
    super(message, RequiredValueError.name);
  }
}
