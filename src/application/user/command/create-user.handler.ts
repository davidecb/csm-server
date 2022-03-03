import { CreateUserCommand } from './create-user.command';
import { Injectable } from '@nestjs/common';
import { CreateUserService } from 'src/domain/user/service/create-user.service';
import { User } from 'src/domain/user/model/user';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class CreateUserHandler {
  constructor(private _createUserService: CreateUserService) {}

  async run(createUserCommand: CreateUserCommand, role: string) {
    if (role !== 'admin' && role !== 'ceo') {
      throw new UnauthorizedUserError();
    }
    await this._createUserService.run(
      new User(
        createUserCommand.name,
        createUserCommand.username,
        createUserCommand.password,
        createUserCommand.role,
        createUserCommand.location,
        createUserCommand.userShift,
      ),
    );
  }
}
