import { CreateCamsodaCommand } from './create-camsoda.command';
import { Injectable } from '@nestjs/common';
import { CreateCamsodaService } from 'src/domain/camsoda/service/create-camsoda.service';
import { Camsoda } from 'src/domain/camsoda/model/camsoda';

@Injectable()
export class CreateCamsodaHandler {
  constructor(private _createCamsodaService: CreateCamsodaService) {}

  async run(createCamsodaCommand: CreateCamsodaCommand) {
    const endTime = new Date(createCamsodaCommand.endTime);
    const performerEarned = parseFloat(
      createCamsodaCommand.performerEarned.replace('$', ''),
    );
    const totalTime: number = parseFloat(createCamsodaCommand.totalTime) * 3600;
    const transactionId =
      createCamsodaCommand.performerName +
      createCamsodaCommand.endTime +
      totalTime;
    await this._createCamsodaService.run(
      new Camsoda(
        createCamsodaCommand.performerName,
        endTime,
        totalTime,
        performerEarned,
        Buffer.from(transactionId).toString('hex'),
      ),
    );
  }
}
