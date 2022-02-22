import { CreateUserCommand } from './../../../application/user/command/create-user.command';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserHandler } from 'src/application/user/command/create-user.handler';

@Controller('user')
export class UserController {
  constructor(private readonly _createUserHandler: CreateUserHandler) {}

  @Post()
  async createUser(@Body() createUserCommand: CreateUserCommand) {
    await this._createUserHandler.run(createUserCommand);
  }
}
