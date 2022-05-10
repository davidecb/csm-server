import { UserInterface } from './../../../infrastructure/user/interface/user.interface';
import { ValidateUserCommand } from './validate-user.command';
import { Injectable } from '@nestjs/common';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class ValidateUserHandler {
  async run(
    validateUserCommand: ValidateUserCommand,
    user: UserInterface,
  ): Promise<any> {
    const { id, username } = validateUserCommand;
    if (id === user._id.toString() && username === user.username) {
      return true;
    }
    throw new UnauthorizedUserError();
  }
}
