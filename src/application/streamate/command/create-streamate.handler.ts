import { CreateStreamateCommand } from './create-streamate.command';
import { Injectable } from '@nestjs/common';
import { CreateStreamateService } from 'src/domain/streamate/service/create-streamate.service';
import { Streamate } from 'src/domain/streamate/model/streamate';

@Injectable()
export class CreateStreamateHandler {
  constructor(private _createStreamateService: CreateStreamateService) {}

  async run(
    createStreamateCommand: CreateStreamateCommand,
  ): Promise<Streamate> {
    const endTime = new Date(createStreamateCommand.endTime);
    const totalTime: number =
      createStreamateCommand.totalTime !== 'N/A'
        ? parseInt(createStreamateCommand.totalTime)
        : 0;
    const performerEarned = parseFloat(
      createStreamateCommand.performerEarned.replace('$', ''),
    );
    return this._createStreamateService.run(
      new Streamate(
        createStreamateCommand.performerName,
        endTime,
        totalTime,
        performerEarned,
        createStreamateCommand.transactionId,
      ),
    );
  }
}
