import { StreamateInterface } from './../../interface/streamate.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StreamateDao } from 'src/domain/streamate/port/dao/streamate-dao';
import { StreamateDto } from 'src/application/streamate/query/dto/streamate.dto';

@Injectable()
export class StreamateDaoMongodb implements StreamateDao {
  constructor(
    @InjectModel('Streamate')
    private readonly streamateModel: Model<StreamateInterface>,
  ) {}

  async lists(searchOptions: object): Promise<StreamateDto[]> {
    const res = await this.streamateModel.find(searchOptions, {
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
        platform: 'streamate',
      };
    });
  }
}
