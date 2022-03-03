import { PerformerRepository } from '../port/repository/performer-repository';
import { Performer } from '../model/performer';
import { UnexistentUserError } from 'src/domain/errors/unexistent-user.error';

export class DeletePerformerService {
  constructor(private readonly _performerRepository: PerformerRepository) {}

  async run(id: string): Promise<Performer> {
    const deletedPerformer = await this._performerRepository.delete(id);

    if (deletedPerformer) {
      return deletedPerformer;
    }
    throw new UnexistentUserError();
  }
}
