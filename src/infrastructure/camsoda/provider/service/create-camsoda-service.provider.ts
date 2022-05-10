import { CamsodaRepository } from 'src/domain/camsoda/port/repository/camsoda-repository';
import { CreateCamsodaService } from 'src/domain/camsoda/service/create-camsoda.service';

export function createCamsodaServiceProvider(
  camsodaRepository: CamsodaRepository,
) {
  return new CreateCamsodaService(camsodaRepository);
}
