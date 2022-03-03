import { LoginUserCommand } from './login-user.command';
import { Injectable } from '@nestjs/common';
import { LoginUserService } from 'src/domain/user/service/login-user.service';

@Injectable()
export class LoginUserHandler {
  constructor(private _loginUserService: LoginUserService) {}

  async run(loginUserCommand: LoginUserCommand): Promise<string> {
    return await this._loginUserService.run(
      loginUserCommand.username,
      loginUserCommand.password,
    );
  }
}
