import { BusinessError } from './business-error.error';

export class InvalidDates extends BusinessError {
  constructor() {
    super(`Fechas inexistentes o mal formateadas`, InvalidDates.name);
  }
}
