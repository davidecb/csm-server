import { InvalidDates } from './../../../domain/errors/invalid-dates.error';
import { Injectable } from '@nestjs/common';
import { LivejasminDao } from 'src/domain/livejasmin/port/dao/livejasmin-dao';
import { LivejasminDto } from './dto/livejasmin.dto';

@Injectable()
export class ListsLivejasminHandler {
  constructor(private _livejasminDao: LivejasminDao) {}

  async run(listsTo: string, listsFrom: string): Promise<LivejasminDto[]> {
    const startDate = new Date(listsFrom);
    startDate.setUTCHours(0);
    const endDate = new Date(listsTo);
    endDate.setUTCHours(23, 59, 59);

    const searchQuery: {
      endTime?: {
        $gte?: Date;
        $lte?: Date;
      };
    } = {};
    if (listsTo && listsFrom) {
      searchQuery.endTime = {};
      searchQuery.endTime.$gte = startDate;
      searchQuery.endTime.$lte = endDate;
    } else {
      throw new InvalidDates();
    }
    return this._livejasminDao.lists(startDate, endDate);
  }
}
