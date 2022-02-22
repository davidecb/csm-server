import { UserRepository } from '../port/repositorio/user-repository';
import { User } from '../model/user';
import { BusinessError } from 'src/domain/errors/business-error';

export class CreateUserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async run(user: User) {
    if (await this._userRepository.usernameExists(user.username)) {
      throw new BusinessError(`username: ${user.username}, already exists`);
    }
    await this._userRepository.create(user);
  }
}
