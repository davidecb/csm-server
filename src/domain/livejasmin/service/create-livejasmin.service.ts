import { LivejasminRepository } from '../port/repository/livejasmin-repository';
import { Livejasmin } from '../model/livejasmin';
import { DataLoadedExistsError } from 'src/domain/errors/data-loaded-exists.error';

export class CreateLivejasminService {
  constructor(private readonly _livejasminRepository: LivejasminRepository) {}

  async run(livejasmin: Livejasmin) {
    const livejasminExists =
      await this._livejasminRepository.transactionIdExists(
        livejasmin.transactionId,
      );

    if (livejasminExists) {
      throw new DataLoadedExistsError(
        'transactionId: ' + livejasmin.transactionId,
      );
    }
    await this._livejasminRepository.create(livejasmin);
  }
}
