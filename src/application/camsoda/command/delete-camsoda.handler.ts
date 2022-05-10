import { DeleteCamsodaCommand } from './delete-camsoda.command';
import { Injectable } from '@nestjs/common';
import { DeleteCamsodaService } from 'src/domain/camsoda/service/delete-camsoda.service';
import { Camsoda } from 'src/domain/camsoda/model/camsoda';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class DeleteCamsodaHandler {
  constructor(private _deleteCamsodaService: DeleteCamsodaService) {}

  async run(
    deleteCamsodaCommand: DeleteCamsodaCommand,
    role: string,
  ): Promise<Camsoda> {
    if (role !== 'admin' && role !== 'ceo') {
      throw new UnauthorizedUserError();
    }
    return await this._deleteCamsodaService.run(deleteCamsodaCommand.id);
  }
}
