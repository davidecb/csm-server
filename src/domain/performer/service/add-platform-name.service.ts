import { PerformerRepository } from '../port/repository/performer-repository';
import { Performer } from '../model/performer';
import { UnexistentUserError } from 'src/domain/errors/unexistent-user.error';
import { AddPlatformNameCommand } from 'src/application/performer/command/add-platform-name.command';

export class AddPlatformNameService {
  constructor(private readonly _performerRepository: PerformerRepository) {}

  async run(
    id: string,
    addPlatformNameCommand: AddPlatformNameCommand,
  ): Promise<Performer> {
    const updatedPerformer = await this._performerRepository.addPlatformName(
      id,
      addPlatformNameCommand,
    );

    if (updatedPerformer) {
      return updatedPerformer;
    }
    throw new UnexistentUserError();
  }
}
