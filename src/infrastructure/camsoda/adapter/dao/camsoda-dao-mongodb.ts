import { CamsodaInterface } from './../../interface/camsoda.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CamsodaDao } from 'src/domain/camsoda/port/dao/camsoda-dao';
import { CamsodaDto } from 'src/application/camsoda/query/dto/camsoda.dto';

@Injectable()
export class CamsodaDaoMongodb implements CamsodaDao {
  constructor(
    @InjectModel('Camsoda')
    private readonly camsodaModel: Model<CamsodaInterface>,
  ) {}

  async lists(searchOptions: object): Promise<CamsodaDto[]> {
    const res = await this.camsodaModel.find(searchOptions, {
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    });
    return res.map((data) => {
      return {
        performerName: data.performerName,
        endTime: data.endTime,
        totalTime: data.totalTime,
        performerEarned: data.performerEarned,
        transactionId: data.transactionId,
        platform: 'camsoda',
      };
    });
  }
}
