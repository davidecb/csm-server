import { StreamateRepository } from 'src/domain/streamate/port/repository/streamate-repository';
import { CreateStreamateService } from 'src/domain/streamate/service/create-streamate.service';

export function createStreamateServiceProvider(
  streamateRepository: StreamateRepository,
) {
  return new CreateStreamateService(streamateRepository);
}
