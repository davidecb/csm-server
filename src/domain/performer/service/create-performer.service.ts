import { PerformerRepository } from '../port/repository/performer-repository';
import { Performer } from '../model/performer';
import { UsernameExistsError } from 'src/domain/errors/username-exists.error';

export class CreatePerformerService {
  constructor(private readonly _performerRepository: PerformerRepository) {}

  async run(performer: Performer) {
    const performerExists = await this._performerRepository.performerNameExists(
      performer.performerName,
    );

    if (performerExists) {
      throw new UsernameExistsError(performer.performerName);
    }
    await this._performerRepository.create(performer);
  }
}
