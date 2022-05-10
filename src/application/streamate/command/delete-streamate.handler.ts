import { DeleteStreamateCommand } from './delete-streamate.command';
import { Injectable } from '@nestjs/common';
import { DeleteStreamateService } from 'src/domain/streamate/service/delete-streamate.service';
import { Streamate } from 'src/domain/streamate/model/streamate';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class DeleteStreamateHandler {
  constructor(private _deleteStreamateService: DeleteStreamateService) {}

  async run(
    deleteStreamateCommand: DeleteStreamateCommand,
    role: string,
  ): Promise<Streamate> {
    if (role !== 'admin' && role !== 'ceo') {
      throw new UnauthorizedUserError();
    }
    return await this._deleteStreamateService.run(deleteStreamateCommand.id);
  }
}
