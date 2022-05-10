import { LivejasminRepository } from 'src/domain/livejasmin/port/repository/livejasmin-repository';
import { DeleteLivejasminService } from 'src/domain/livejasmin/service/delete-livejasmin.service';

export function deleteLivejasminServiceProvider(
  livejasminRepository: LivejasminRepository,
) {
  return new DeleteLivejasminService(livejasminRepository);
}
