import { InvalidDates } from './../../../domain/errors/invalid-dates.error';
import { Injectable } from '@nestjs/common';
import { StreamateDao } from 'src/domain/streamate/port/dao/streamate-dao';
import { StreamateDto } from './dto/streamate.dto';

@Injectable()
export class ListsStreamateHandler {
  constructor(private _streamateDao: StreamateDao) {}

  async run(listsTo: string, listsFrom: string): Promise<StreamateDto[]> {
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
    return this._streamateDao.lists(searchQuery);
  }
}
