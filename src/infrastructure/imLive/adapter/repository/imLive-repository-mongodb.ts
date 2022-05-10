import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImLiveRepository } from 'src/domain/imLive/port/repository/imLive-repository';
import { ImLiveInterface } from './../../interface/imLive.interface';
import { ImLive } from 'src/domain/imLive/model/imLive';

@Injectable()
export class ImLiveRepositoryMongoDB implements ImLiveRepository {
  constructor(
    @InjectModel('ImLive')
    private readonly imLiveModel: Model<ImLiveInterface>,
  ) {}

  async transactionIdExists(transactionId: string): Promise<boolean> {
    return (await this.imLiveModel.count({ transactionId })) > 0;
  }

  async create(imLive: ImLive): Promise<ImLive> {
    const createdImLive = new this.imLiveModel({
      performerName: imLive.performerName,
      endTime: imLive.endTime,
      totalTime: imLive.totalTime,
      performerEarned: imLive.performerEarned,
      transactionId: imLive.transactionId,
    });
    await createdImLive.save();
    return imLive;
  }

  async delete(id: string): Promise<ImLive> {
    return await this.imLiveModel.findByIdAndDelete(id);
  }
}
