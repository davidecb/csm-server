import { CreateUserCommand } from './create-user.command';
import { Injectable } from '@nestjs/common';
import { CreateUserService } from 'src/domain/user/service/create-user.service';
import { User } from 'src/domain/user/model/user';

@Injectable()
export class CreateUserHandler {
  constructor(private _createUserService: CreateUserService) {}

  async run(createUserCommand: CreateUserCommand) {
    console.log('@HandlerUser:', createUserCommand);
    await this._createUserService.run(
      new User(
        createUserCommand.name,
        createUserCommand.username,
        createUserCommand.password,
        createUserCommand.role,
      )
    );
  }
}
