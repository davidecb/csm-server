import { AddPlatformNameCommand } from 'src/application/performer/command/add-platform-name.command';
import { UpdatePerformerCommand } from 'src/application/performer/command/update-performer.command';
import { Performer } from '../../model/performer';

export abstract class PerformerRepository {
  abstract performerNameExists(performerName: string): Promise<boolean>;
  abstract create(performer: Performer): Promise<Performer>;
  abstract delete(id: string): Promise<Performer>;
  abstract update(
    id: string,
    updatePerformerCommand: UpdatePerformerCommand,
  ): Promise<Performer>;
  abstract addPlatformName(
    id: string,
    addPlatformNameCommand: AddPlatformNameCommand,
  ): Promise<Performer>;
}
