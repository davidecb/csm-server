import { PerformerRepository } from 'src/domain/performer/port/repository/performer-repository';
import { CreatePerformerService } from 'src/domain/performer/service/create-performer.service';

export function createPerformerServiceProvider(
  performerRepository: PerformerRepository,
) {
  return new CreatePerformerService(performerRepository);
}
