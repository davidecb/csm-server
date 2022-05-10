import { CreateImLiveCommand } from './create-imLive.command';
import { Injectable } from '@nestjs/common';
import { CreateImLiveService } from 'src/domain/imLive/service/create-imLive.service';
import { ImLive } from 'src/domain/imLive/model/imLive';

@Injectable()
export class CreateImLiveHandler {
  constructor(private _createImLiveService: CreateImLiveService) {}

  async run(createImLiveCommand: CreateImLiveCommand) {
    const endTime = new Date(createImLiveCommand.endTime);
    const performerEarned = parseFloat(
      createImLiveCommand.performerEarned.replace('$', ''),
    );
    const avgEarn = parseFloat(
      createImLiveCommand.avgEarnings.replace('$', ''),
    );
    const totalTime: number =
      avgEarn !== 0
        ? parseInt(((performerEarned / avgEarn) * 3600).toFixed())
        : 0;
    const transactionId =
      createImLiveCommand.performerName +
      createImLiveCommand.endTime +
      totalTime;
    await this._createImLiveService.run(
      new ImLive(
        createImLiveCommand.performerName,
        endTime,
        totalTime,
        performerEarned,
        Buffer.from(transactionId).toString('hex'),
      ),
    );
  }
}
