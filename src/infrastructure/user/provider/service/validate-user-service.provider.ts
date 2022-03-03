import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { ValidateUserService } from 'src/domain/user/service/validate-user.service';

export function validateUserServiceProvider(userRepository: UserRepository) {
  return new ValidateUserService(userRepository);
}
