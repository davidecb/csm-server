import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StreamateRepository } from 'src/domain/streamate/port/repository/streamate-repository';
import { StreamateInterface } from './../../interface/streamate.interface';
import { Streamate } from 'src/domain/streamate/model/streamate';

@Injectable()
export class StreamateRepositoryMongoDB implements StreamateRepository {
  constructor(
    @InjectModel('Streamate')
    private readonly streamateModel: Model<StreamateInterface>,
  ) {}

  async transactionIdExists(transactionId: string): Promise<boolean> {
    return (await this.streamateModel.count({ transactionId })) > 0;
  }

  async create(streamate: Streamate): Promise<Streamate> {
    const createdStreamate = new this.streamateModel({
      performerName: streamate.performerName,
      endTime: streamate.endTime,
      totalTime: streamate.totalTime,
      performerEarned: streamate.performerEarned,
      transactionId: streamate.transactionId,
    });
    await createdStreamate.save();
    return streamate;
  }

  async delete(id: string): Promise<Streamate> {
    return await this.streamateModel.findByIdAndDelete(id);
  }
}
