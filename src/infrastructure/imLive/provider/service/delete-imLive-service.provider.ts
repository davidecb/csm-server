import { ImLiveRepository } from 'src/domain/imLive/port/repository/imLive-repository';
import { DeleteImLiveService } from 'src/domain/imLive/service/delete-imLive.service';

export function deleteImLiveServiceProvider(
  imLiveRepository: ImLiveRepository,
) {
  return new DeleteImLiveService(imLiveRepository);
}
