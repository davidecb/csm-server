import { DeletePerformerCommand } from './delete-performer.command';
import { Injectable } from '@nestjs/common';
import { DeletePerformerService } from 'src/domain/performer/service/delete-performer.service';
import { Performer } from 'src/domain/performer/model/performer';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class DeletePerformerHandler {
  constructor(private _deletePerformerService: DeletePerformerService) {}

  async run(
    deletePerformerCommand: DeletePerformerCommand,
    role: string,
  ): Promise<Performer> {
    if (role !== 'admin' && role !== 'ceo') {
      throw new UnauthorizedUserError();
    }
    return await this._deletePerformerService.run(deletePerformerCommand.id);
  }
}
