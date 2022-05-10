import { Livejasmin } from '../../model/livejasmin';

export abstract class LivejasminRepository {
  abstract transactionIdExists(transactionId: string): Promise<boolean>;
  abstract create(livejasmin: Livejasmin): Promise<Livejasmin>;
  abstract delete(id: string): Promise<Livejasmin>;
}
