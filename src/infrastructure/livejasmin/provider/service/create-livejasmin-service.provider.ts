import { LivejasminRepository } from 'src/domain/livejasmin/port/repository/livejasmin-repository';
import { CreateLivejasminService } from 'src/domain/livejasmin/service/create-livejasmin.service';

export function createLivejasminServiceProvider(
  livejasminRepository: LivejasminRepository,
) {
  return new CreateLivejasminService(livejasminRepository);
}
