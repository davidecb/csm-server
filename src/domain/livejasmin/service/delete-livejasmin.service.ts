import { LivejasminRepository } from '../port/repository/livejasmin-repository';
import { Livejasmin } from '../model/livejasmin';
import { UnexistentUserError } from 'src/domain/errors/unexistent-user.error';

export class DeleteLivejasminService {
  constructor(private readonly _livejasminRepository: LivejasminRepository) {}

  async run(id: string): Promise<Livejasmin> {
    const deletedLivejasmin = await this._livejasminRepository.delete(id);

    if (deletedLivejasmin) {
      return deletedLivejasmin;
    }
    throw new UnexistentUserError();
  }
}
