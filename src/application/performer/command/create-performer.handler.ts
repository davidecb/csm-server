import { CreatePerformerCommand } from './create-performer.command';
import { Injectable } from '@nestjs/common';
import { CreatePerformerService } from 'src/domain/performer/service/create-performer.service';
import { Performer } from 'src/domain/performer/model/performer';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class CreatePerformerHandler {
  constructor(private _createPerformerService: CreatePerformerService) {}

  async run(createPerformerCommand: CreatePerformerCommand, role: string) {
    if (role === 'monitor') {
      throw new UnauthorizedUserError();
    }

    await this._createPerformerService.run(
      new Performer(
        createPerformerCommand.name,
        createPerformerCommand.performerName,
        createPerformerCommand.platformNames,
        createPerformerCommand.location,
        createPerformerCommand.performerShift,
        createPerformerCommand.performerId,
        createPerformerCommand.accountId,
        createPerformerCommand.accountType,
        createPerformerCommand.bank,
        createPerformerCommand.email,
        createPerformerCommand.retention,
        true,
      ),
    );
  }
}
