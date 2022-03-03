import { DeleteUserCommand } from './delete-user.command';
import { Injectable } from '@nestjs/common';
import { DeleteUserService } from 'src/domain/user/service/delete-user.service';
import { User } from 'src/domain/user/model/user';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class DeleteUserHandler {
  constructor(private _deleteUserService: DeleteUserService) {}

  async run(deleteUserCommand: DeleteUserCommand, role: string): Promise<User> {
    if (role !== 'admin' && role !== 'ceo') {
      throw new UnauthorizedUserError();
    }
    return await this._deleteUserService.run(deleteUserCommand.id);
  }
}
