import { UserRepository } from '../port/repository/user-repository';
import { User } from '../model/user';
import { UsernameExistsError } from 'src/domain/errors/username-exists.error';

export class CreateUserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async run(user: User) {
    if (await this._userRepository.usernameExists(user.username)) {
      throw new UsernameExistsError(user.username);
    }
    await this._userRepository.create(user);
  }
}
