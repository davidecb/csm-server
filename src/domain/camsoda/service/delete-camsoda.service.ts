import { CamsodaRepository } from '../port/repository/camsoda-repository';
import { Camsoda } from '../model/camsoda';
import { UnexistentUserError } from 'src/domain/errors/unexistent-user.error';

export class DeleteCamsodaService {
  constructor(private readonly _camsodaRepository: CamsodaRepository) {}

  async run(id: string): Promise<Camsoda> {
    const deletedCamsoda = await this._camsodaRepository.delete(id);

    if (deletedCamsoda) {
      return deletedCamsoda;
    }
    throw new UnexistentUserError();
  }
}
