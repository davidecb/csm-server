import { ImLive } from '../../model/imLive';

export abstract class ImLiveRepository {
  abstract transactionIdExists(transactionId: string): Promise<boolean>;
  abstract create(imLive: ImLive): Promise<ImLive>;
  abstract delete(id: string): Promise<ImLive>;
}
