import { UserRepository } from '../port/repository/user-repository';
import { User } from '../model/user';
import { UnexistentUserError } from 'src/domain/errors/unexistent-user.error';

export class UpdateUserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async run(id: string, updateUserCommand: object): Promise<User> {
    const updatedUser = await this._userRepository.update(
      id,
      updateUserCommand,
    );

    if (updatedUser) {
      return updatedUser;
    }
    throw new UnexistentUserError();
  }
}
