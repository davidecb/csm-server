import { Injectable } from '@nestjs/common';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';
import { UserDao } from 'src/domain/user/port/dao/user-dao';
import { UserDto } from './dto/user.dto';

@Injectable()
export class ListsUsersHandler {
  constructor(private _userDao: UserDao) {}

  async run(role: string): Promise<UserDto[]> {
    if (role === 'monitor') {
      throw new UnauthorizedUserError();
    }
    return this._userDao.lists();
  }
}
