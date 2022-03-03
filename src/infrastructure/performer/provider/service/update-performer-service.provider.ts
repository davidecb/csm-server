import { PerformerRepository } from 'src/domain/performer/port/repository/performer-repository';
import { UpdatePerformerService } from 'src/domain/performer/service/update-performer.service';

export function updatePerformerServiceProvider(
  performerRepository: PerformerRepository,
) {
  return new UpdatePerformerService(performerRepository);
}
