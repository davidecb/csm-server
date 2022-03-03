import { PerformerInterface } from './../../interface/performer.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PerformerDao } from 'src/domain/performer/port/dao/performer-dao';
import { PerformerDto } from 'src/application/performer/query/dto/performer.dto';

@Injectable()
export class PerformerDaoMongodb implements PerformerDao {
  constructor(
    @InjectModel('Performer')
    private readonly performerModel: Model<PerformerInterface>,
  ) {}

  async lists(searchOptions: object): Promise<PerformerDto[]> {
    return await this.performerModel.find(searchOptions, {
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    });
  }
}
