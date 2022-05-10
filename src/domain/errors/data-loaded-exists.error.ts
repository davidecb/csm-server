import { BusinessError } from './business-error.error';

export class DataLoadedExistsError extends BusinessError {
  constructor(data: string) {
    super(
      `Estos datos: [ ${data} ], ya existen en la base de datos.`,
      DataLoadedExistsError.name,
    );
  }
}
