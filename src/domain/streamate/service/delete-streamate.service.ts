import { StreamateRepository } from '../port/repository/streamate-repository';
import { Streamate } from '../model/streamate';
import { UnexistentUserError } from 'src/domain/errors/unexistent-user.error';

export class DeleteStreamateService {
  constructor(private readonly _streamateRepository: StreamateRepository) {}

  async run(id: string): Promise<Streamate> {
    const deletedStreamate = await this._streamateRepository.delete(id);

    if (deletedStreamate) {
      return deletedStreamate;
    }
    throw new UnexistentUserError();
  }
}
