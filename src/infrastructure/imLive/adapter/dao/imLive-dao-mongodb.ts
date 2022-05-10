import { ImLiveInterface } from './../../interface/imLive.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImLiveDao } from 'src/domain/imLive/port/dao/imLive-dao';
import { ImLiveDto } from 'src/application/imLive/query/dto/imLive.dto';

@Injectable()
export class ImLiveDaoMongodb implements ImLiveDao {
  constructor(
    @InjectModel('ImLive')
    private readonly imLiveModel: Model<ImLiveInterface>,
  ) {}

  async lists(searchOptions: object): Promise<ImLiveDto[]> {
    const res = await this.imLiveModel.find(searchOptions, {
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
        platform: 'imlive',
      };
    });
  }
}
