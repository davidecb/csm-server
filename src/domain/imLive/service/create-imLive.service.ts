import { ImLiveRepository } from '../port/repository/imLive-repository';
import { ImLive } from '../model/imLive';
import { DataLoadedExistsError } from 'src/domain/errors/data-loaded-exists.error';

export class CreateImLiveService {
  constructor(private readonly _imLiveRepository: ImLiveRepository) {}

  async run(imLive: ImLive) {
    const imLiveExists = await this._imLiveRepository.transactionIdExists(
      imLive.transactionId,
    );

    if (imLiveExists) {
      throw new DataLoadedExistsError('transactionId: ' + imLive.transactionId);
    }
    await this._imLiveRepository.create(imLive);
  }
}
