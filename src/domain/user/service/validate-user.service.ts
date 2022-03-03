import { UserRepository } from '../port/repository/user-repository';
import { User } from '../model/user';

export class ValidateUserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async run(payload: any): Promise<User> {
    return await this._userRepository.validateUser(payload);
  }
}
