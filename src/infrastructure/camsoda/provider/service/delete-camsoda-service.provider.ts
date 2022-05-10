import { CamsodaRepository } from 'src/domain/camsoda/port/repository/camsoda-repository';
import { DeleteCamsodaService } from 'src/domain/camsoda/service/delete-camsoda.service';

export function deleteCamsodaServiceProvider(
  camsodaRepository: CamsodaRepository,
) {
  return new DeleteCamsodaService(camsodaRepository);
}
