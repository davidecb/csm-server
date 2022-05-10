import { StreamateRepository } from '../port/repository/streamate-repository';
import { Streamate } from '../model/streamate';
import { DataLoadedExistsError } from 'src/domain/errors/data-loaded-exists.error';

export class CreateStreamateService {
  constructor(private readonly _streamateRepository: StreamateRepository) {}

  async run(streamate: Streamate): Promise<Streamate> {
    const streamateExists = await this._streamateRepository.transactionIdExists(
      streamate.transactionId,
    );
    if (streamateExists) {
      throw new DataLoadedExistsError(
        'transactionId: ' + streamate.transactionId,
      );
    }
    return this._streamateRepository.create(streamate);
  }
}
