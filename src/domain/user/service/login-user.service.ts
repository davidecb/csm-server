import { UserRepository } from '../port/repository/user-repository';
import { UsernameWrongError } from 'src/domain/errors/username-wrong.error';
import { PasswordWrongError } from 'src/domain/errors/password-wrong.error';

export class LoginUserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async run(username: string, password: string): Promise<string> {
    if (!(await this._userRepository.usernameExists(username))) {
      throw new UsernameWrongError(username);
    }
    const userToken = await this._userRepository.login(username, password);

    if (userToken && userToken !== '401') {
      return userToken;
    }
    throw new PasswordWrongError();
  }
}
