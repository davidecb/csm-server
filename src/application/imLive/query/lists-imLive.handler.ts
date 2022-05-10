import { InvalidDates } from './../../../domain/errors/invalid-dates.error';
import { Injectable } from '@nestjs/common';
import { ImLiveDao } from 'src/domain/imLive/port/dao/imLive-dao';
import { ImLiveDto } from './dto/imLive.dto';

@Injectable()
export class ListsImLiveHandler {
  constructor(private _imLiveDao: ImLiveDao) {}

  async run(listsTo: string, listsFrom: string): Promise<ImLiveDto[]> {
    const startDate = new Date(listsFrom);
    const endDate = new Date(listsTo);
    endDate.setDate(endDate.getDate() + 1);

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
    return this._imLiveDao.lists(searchQuery);
  }
}
