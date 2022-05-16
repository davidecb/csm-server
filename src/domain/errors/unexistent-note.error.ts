import { BusinessError } from './business-error.error';

export class UnexistentNoteError extends BusinessError {
  constructor() {
    super(`Esta nota no existe.`, 'UNEXISTENT_USER');
  }
}
