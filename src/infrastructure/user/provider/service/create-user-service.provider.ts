import { UserRepository } from 'src/domain/user/port/repositorio/user-repository';
import { CreateUserService } from 'src/domain/user/service/create-user.service';

export function createUserServiceProvider(userRepository: UserRepository) {
  return new CreateUserService(userRepository);
}
