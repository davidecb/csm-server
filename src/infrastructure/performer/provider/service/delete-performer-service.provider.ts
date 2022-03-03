import { PerformerRepository } from 'src/domain/performer/port/repository/performer-repository';
import { DeletePerformerService } from 'src/domain/performer/service/delete-performer.service';

export function deletePerformerServiceProvider(
  performerRepository: PerformerRepository,
) {
  return new DeletePerformerService(performerRepository);
}
