import { CreateLivejasminCommand } from './create-livejasmin.command';
import { Injectable } from '@nestjs/common';
import { CreateLivejasminService } from 'src/domain/livejasmin/service/create-livejasmin.service';
import { Livejasmin } from 'src/domain/livejasmin/model/livejasmin';

@Injectable()
export class CreateLivejasminHandler {
  constructor(private _createLivejasminService: CreateLivejasminService) {}

  async run(createLivejasminCommand: CreateLivejasminCommand) {
    const endTime = new Date(createLivejasminCommand.endTime);
    endTime.setHours(endTime.getHours() - 5);
    const totalTime: number =
      createLivejasminCommand.totalTime !== 'N/A'
        ? parseInt(createLivejasminCommand.totalTime)
        : 0;
    const performerEarned = parseFloat(
      createLivejasminCommand.performerEarned.replace('$', ''),
    );

    await this._createLivejasminService.run(
      new Livejasmin(
        createLivejasminCommand.performerName,
        endTime,
        totalTime,
        performerEarned,
        createLivejasminCommand.transactionId,
      ),
    );
  }
}
