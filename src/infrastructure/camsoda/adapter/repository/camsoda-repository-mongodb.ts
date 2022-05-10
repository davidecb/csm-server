import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CamsodaRepository } from 'src/domain/camsoda/port/repository/camsoda-repository';
import { CamsodaInterface } from './../../interface/camsoda.interface';
import { Camsoda } from 'src/domain/camsoda/model/camsoda';
import { PerformerInterface } from 'src/infrastructure/performer/interface/performer.interface';

@Injectable()
export class CamsodaRepositoryMongoDB implements CamsodaRepository {
  constructor(
    @InjectModel('Camsoda')
    private readonly camsodaModel: Model<CamsodaInterface>,
    @InjectModel('Performer')
    private readonly performerModel: Model<PerformerInterface>,
  ) {}

  async transactionIdExists(transactionId: string): Promise<boolean> {
    return (await this.camsodaModel.count({ transactionId })) > 0;
  }

  async isCSMPerformer(performerName: string): Promise<boolean> {
    return (await this.performerModel.count({ platformNames: performerName, status: true })) > 0;
  }

  async create(camsoda: Camsoda): Promise<Camsoda> {
    const createdCamsoda = new this.camsodaModel({
      performerName: camsoda.performerName,
      endTime: camsoda.endTime,
      totalTime: camsoda.totalTime,
      performerEarned: camsoda.performerEarned,
      transactionId: camsoda.transactionId,
    });
    await createdCamsoda.save();
    return camsoda;
  }

  async delete(id: string): Promise<Camsoda> {
    return await this.camsodaModel.findByIdAndDelete(id);
  }
}
