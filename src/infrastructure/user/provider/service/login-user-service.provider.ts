import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { LoginUserService } from 'src/domain/user/service/login-user.service';

export function loginUserServiceProvider(userRepository: UserRepository) {
  return new LoginUserService(userRepository);
}
