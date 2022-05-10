import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LivejasminRepository } from 'src/domain/livejasmin/port/repository/livejasmin-repository';
import { LivejasminInterface } from './../../interface/livejasmin.interface';
import { Livejasmin } from 'src/domain/livejasmin/model/livejasmin';

@Injectable()
export class LivejasminRepositoryMongoDB implements LivejasminRepository {
  constructor(
    @InjectModel('Livejasmin')
    private readonly livejasminModel: Model<LivejasminInterface>,
  ) {}

  async transactionIdExists(transactionId: string): Promise<boolean> {
    return (await this.livejasminModel.count({ transactionId })) > 0;
  }

  async create(livejasmin: Livejasmin): Promise<Livejasmin> {
    const createdLivejasmin = new this.livejasminModel({
      performerName: livejasmin.performerName,
      endTime: livejasmin.endTime,
      totalTime: livejasmin.totalTime,
      performerEarned: livejasmin.performerEarned,
      transactionId: livejasmin.transactionId,
    });
    await createdLivejasmin.save();
    return livejasmin;
  }

  async delete(id: string): Promise<Livejasmin> {
    return await this.livejasminModel.findByIdAndDelete(id);
  }
}
