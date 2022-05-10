import { CamsodaRepository } from '../port/repository/camsoda-repository';
import { Camsoda } from '../model/camsoda';
import { DataLoadedExistsError } from 'src/domain/errors/data-loaded-exists.error';
import { NoOwnPerformerError } from 'src/domain/errors/no-own-performer.error';

export class CreateCamsodaService {
  constructor(private readonly _camsodaRepository: CamsodaRepository) {}

  async run(camsoda: Camsoda) {
    const CSMPerformer = await this._camsodaRepository.isCSMPerformer(
      camsoda.performerName,
    );
    console.log('@CSMPerformer:', camsoda.performerName, CSMPerformer);
    if (!CSMPerformer) {
      throw new NoOwnPerformerError(camsoda.performerName);
    }
    const camsodaExists = await this._camsodaRepository.transactionIdExists(
      camsoda.transactionId,
    );

    if (camsodaExists) {
      throw new DataLoadedExistsError(
        'transactionId: ' + camsoda.transactionId,
      );
    }
    
    await this._camsodaRepository.create(camsoda);
  }
}
