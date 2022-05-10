import { ImLiveRepository } from '../port/repository/imLive-repository';
import { ImLive } from '../model/imLive';
import { UnexistentUserError } from 'src/domain/errors/unexistent-user.error';

export class DeleteImLiveService {
  constructor(private readonly _imLiveRepository: ImLiveRepository) {}

  async run(id: string): Promise<ImLive> {
    const deletedImLive = await this._imLiveRepository.delete(id);

    if (deletedImLive) {
      return deletedImLive;
    }
    throw new UnexistentUserError();
  }
}
