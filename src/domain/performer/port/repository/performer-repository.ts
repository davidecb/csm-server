import { Performer } from '../../model/performer';

export abstract class PerformerRepository {
  abstract performerNameExists(performerName: string): Promise<boolean>;
  abstract create(performer: Performer): Promise<Performer>;
  abstract delete(id: string): Promise<Performer>;
  abstract update(
    id: string,
    updatePerformerCommand: object,
  ): Promise<Performer>;
}
