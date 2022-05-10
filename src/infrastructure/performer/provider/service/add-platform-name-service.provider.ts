import { PerformerRepository } from 'src/domain/performer/port/repository/performer-repository';
import { AddPlatformNameService } from 'src/domain/performer/service/add-platform-name.service';

export function addPlatformNameServiceProvider(
  performerRepository: PerformerRepository,
) {
  return new AddPlatformNameService(performerRepository);
}
