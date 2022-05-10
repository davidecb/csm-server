import { Camsoda } from '../../model/camsoda';

export abstract class CamsodaRepository {
  abstract transactionIdExists(transactionId: string): Promise<boolean>;
  abstract isCSMPerformer(performerName: string): Promise<boolean>;
  abstract create(camsoda: Camsoda): Promise<Camsoda>;
  abstract delete(id: string): Promise<Camsoda>;
}
