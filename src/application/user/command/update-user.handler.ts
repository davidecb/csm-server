import { UpdateUserCommand } from './update-user.command';
import { Injectable } from '@nestjs/common';
import { UpdateUserService } from 'src/domain/user/service/update-user.service';
import { User } from 'src/domain/user/model/user';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';
import { InvalidPropertiesError } from 'src/domain/errors/invalid-properties.error';

@Injectable()
export class UpdateUserHandler {
  constructor(private _updateUserService: UpdateUserService) {}

  async run(
    id: string,
    role: string,
    updateUserCommand: UpdateUserCommand,
  ): Promise<User> {
    if (role === 'monitor') {
      throw new UnauthorizedUserError();
    }
    const updates = Object.keys(updateUserCommand);
    const allowedUpdates = [
      'name',
      'username',
      'password',
      'location',
      'userShift',
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      throw new InvalidPropertiesError();
    }
    return await this._updateUserService.run(id, updateUserCommand);
  }
}
