import { BusinessError } from './business-error.error';

export class NoteExistsError extends BusinessError {
  constructor() {
    super(`Esta nota ya existe.`, NoteExistsError.name);
  }
}
