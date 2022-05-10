import { InvalidDates } from './../../../domain/errors/invalid-dates.error';
import { Injectable } from '@nestjs/common';
import { CamsodaDao } from 'src/domain/camsoda/port/dao/camsoda-dao';
import { CamsodaDto } from './dto/camsoda.dto';

@Injectable()
export class ListsCamsodaHandler {
  constructor(private _camsodaDao: CamsodaDao) {}

  async run(listsTo: string, listsFrom: string): Promise<CamsodaDto[]> {
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
    return this._camsodaDao.lists(searchQuery);
  }
}
