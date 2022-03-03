import { UpdatePerformerCommand } from './update-performer.command';
import { Injectable } from '@nestjs/common';
import { UpdatePerformerService } from 'src/domain/performer/service/update-performer.service';
import { Performer } from 'src/domain/performer/model/performer';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';
import { InvalidPropertiesError } from 'src/domain/errors/invalid-properties.error';

@Injectable()
export class UpdatePerformerHandler {
  constructor(private _updatePerformerService: UpdatePerformerService) {}

  async run(
    id: string,
    role: string,
    updatePerformerCommand: UpdatePerformerCommand,
  ): Promise<Performer> {
    if (role === 'monitor') {
      throw new UnauthorizedUserError();
    }
    const updates = Object.keys(updatePerformerCommand);
    const allowedUpdates = [
      'name',
      'performerName',
      'platformNames',
      'location',
      'performerShift',
      'performerId',
      'accountId',
      'accountType',
      'bank',
      'email',
      'retention',
      'status',
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      throw new InvalidPropertiesError();
    }
    return await this._updatePerformerService.run(id, updatePerformerCommand);
  }
}
