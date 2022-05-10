import { UserRepository } from '../port/repository/user-repository';
import { UsernameWrongError } from 'src/domain/errors/username-wrong.error';
import { PasswordWrongError } from 'src/domain/errors/password-wrong.error';

export class LoginUserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async run(username: string, password: string): Promise<any> {
    if (!(await this._userRepository.usernameExists(username))) {
      throw new UsernameWrongError(username);
    }

    const loginStatus = await this._userRepository.login(username, password);
    if (loginStatus.error) {
      throw new PasswordWrongError();
    }

    return loginStatus;
  }
}
