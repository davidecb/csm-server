import { DeleteImLiveCommand } from './delete-imLive.command';
import { Injectable } from '@nestjs/common';
import { DeleteImLiveService } from 'src/domain/imLive/service/delete-imLive.service';
import { ImLive } from 'src/domain/imLive/model/imLive';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class DeleteImLiveHandler {
  constructor(private _deleteImLiveService: DeleteImLiveService) {}

  async run(
    deleteImLiveCommand: DeleteImLiveCommand,
    role: string,
  ): Promise<ImLive> {
    if (role !== 'admin' && role !== 'ceo') {
      throw new UnauthorizedUserError();
    }
    return await this._deleteImLiveService.run(deleteImLiveCommand.id);
  }
}
