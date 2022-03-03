import { PerformerRepository } from '../port/repository/performer-repository';
import { Performer } from '../model/performer';
import { UnexistentUserError } from 'src/domain/errors/unexistent-user.error';

export class UpdatePerformerService {
  constructor(private readonly _performerRepository: PerformerRepository) {}

  async run(id: string, updatePerformerCommand: object): Promise<Performer> {
    const updatedPerformer = await this._performerRepository.update(
      id,
      updatePerformerCommand,
    );

    if (updatedPerformer) {
      return updatedPerformer;
    }
    throw new UnexistentUserError();
  }
}
