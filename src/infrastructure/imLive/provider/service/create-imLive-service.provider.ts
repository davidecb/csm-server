import { ImLiveRepository } from 'src/domain/imLive/port/repository/imLive-repository';
import { CreateImLiveService } from 'src/domain/imLive/service/create-imLive.service';

export function createImLiveServiceProvider(
  imLiveRepository: ImLiveRepository,
) {
  return new CreateImLiveService(imLiveRepository);
}
