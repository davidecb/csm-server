import { UpdatePerformerCommand } from 'src/application/performer/command/update-performer.command';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PerformerRepository } from 'src/domain/performer/port/repository/performer-repository';
import { PerformerInterface } from './../../interface/performer.interface';
import { Performer } from 'src/domain/performer/model/performer';

@Injectable()
export class PerformerRepositoryMongoDB implements PerformerRepository {
  constructor(
    @InjectModel('Performer')
    private readonly performerModel: Model<PerformerInterface>,
  ) {}

  async performerNameExists(performerName: string): Promise<boolean> {
    return (await this.performerModel.count({ performerName })) > 0;
  }

  async create(performer: Performer): Promise<Performer> {
    const createdPerformer = new this.performerModel({
      name: performer.name,
      performerName: performer.performerName,
      platformNames: performer.platformNames,
      location: performer.location,
      performerShift: performer.performerShift,
      performerId: performer.performerId,
      accountId: performer.accountId,
      accountType: performer.accountType,
      bank: performer.bank,
      email: performer.email,
      retention: performer.retention,
      status: performer.status,
    });
    await createdPerformer.save();
    return performer;
  }

  async update(
    id: string,
    updatePerformerCommand: UpdatePerformerCommand,
  ): Promise<Performer> {
    const updatedPerformer = await this.performerModel.findById(id);
    const updates = Object.keys(updatePerformerCommand);
    updates.forEach((update) => {
      updatedPerformer[update] = updatePerformerCommand[update];
    });
    await updatedPerformer.save();
    return new Performer(
      updatedPerformer.name,
      updatedPerformer.performerName,
      updatedPerformer.platformNames,
      updatedPerformer.location,
      updatedPerformer.performerShift,
      updatedPerformer.performerId,
      updatedPerformer.accountId,
      updatedPerformer.accountType,
      updatedPerformer.bank,
      updatedPerformer.email,
      updatedPerformer.retention,
      updatedPerformer.status,
    );
  }

  async delete(id: string): Promise<Performer> {
    return await this.performerModel.findByIdAndDelete(id);
  }
}
