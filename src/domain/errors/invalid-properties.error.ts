import { BusinessError } from './business-error.error';

export class InvalidPropertiesError extends BusinessError {
  constructor() {
    super(
      'Algunas propiedades que intenta modificar, no existen.',
      InvalidPropertiesError.name,
    );
  }
}
