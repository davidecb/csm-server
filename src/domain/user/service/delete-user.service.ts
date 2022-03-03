import { UserRepository } from '../port/repository/user-repository';
import { User } from '../model/user';
import { UnexistentUserError } from 'src/domain/errors/unexistent-user.error';

export class DeleteUserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async run(id: string): Promise<User> {
    const deletedUser = await this._userRepository.delete(id);

    if (deletedUser) {
      return deletedUser;
    }
    throw new UnexistentUserError();
  }
}
