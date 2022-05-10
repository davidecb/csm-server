import { DeleteLivejasminCommand } from './delete-livejasmin.command';
import { Injectable } from '@nestjs/common';
import { DeleteLivejasminService } from 'src/domain/livejasmin/service/delete-livejasmin.service';
import { Livejasmin } from 'src/domain/livejasmin/model/livejasmin';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class DeleteLivejasminHandler {
  constructor(private _deleteLivejasminService: DeleteLivejasminService) {}

  async run(
    deleteLivejasminCommand: DeleteLivejasminCommand,
    role: string,
  ): Promise<Livejasmin> {
    if (role !== 'admin' && role !== 'ceo') {
      throw new UnauthorizedUserError();
    }
    return await this._deleteLivejasminService.run(deleteLivejasminCommand.id);
  }
}
