import { Streamate } from '../../model/streamate';

export abstract class StreamateRepository {
  abstract transactionIdExists(transactionId: string): Promise<boolean>;
  abstract create(streamate: Streamate): Promise<Streamate>;
  abstract delete(id: string): Promise<Streamate>;
}
