import { StreamateRepository } from 'src/domain/streamate/port/repository/streamate-repository';
import { DeleteStreamateService } from 'src/domain/streamate/service/delete-streamate.service';

export function deleteStreamateServiceProvider(
  streamateRepository: StreamateRepository,
) {
  return new DeleteStreamateService(streamateRepository);
}
