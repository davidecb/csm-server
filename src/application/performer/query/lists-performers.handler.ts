import { User } from 'src/domain/user/model/user';
import { Injectable } from '@nestjs/common';
import { PerformerDao } from 'src/domain/performer/port/dao/performer-dao';
import { PerformerDto } from './dto/performer.dto';

@Injectable()
export class ListsPerformersHandler {
  constructor(private _performerDao: PerformerDao) {}

  async run(user: User): Promise<PerformerDto[]> {
    const { location, userShift } = user;
    const searchOptions = {};
    if (location !== '*') {
      searchOptions['location'] = location;
      searchOptions['performerShift'] = userShift;
    }
    return this._performerDao.lists(searchOptions);
  }
}
