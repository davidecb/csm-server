import { AddPlatformNameCommand } from './add-platform-name.command';
import { Injectable } from '@nestjs/common';
import { AddPlatformNameService } from 'src/domain/performer/service/add-platform-name.service';
import { Performer } from 'src/domain/performer/model/performer';
import { UnauthorizedUserError } from 'src/domain/errors/unauthorized-user.error';

@Injectable()
export class AddPlatformNameHandler {
  constructor(private _addPlatformNameService: AddPlatformNameService) {}

  async run(
    id: string,
    role: string,
    addPlatformNameCommand: AddPlatformNameCommand,
  ): Promise<Performer> {
    if (role === 'monitor') {
      throw new UnauthorizedUserError();
    }
    return await this._addPlatformNameService.run(id, addPlatformNameCommand);
  }
}
