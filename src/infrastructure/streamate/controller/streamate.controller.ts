import { CreateStreamateCommand } from './../../../application/streamate/command/create-streamate.command';
import {
  Body,
  Controller,
  Post,
  Res,
  HttpStatus,
  Get,
  UseGuards,
  Request,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateStreamateHandler } from 'src/application/streamate/command/create-streamate.handler';
import { AuthGuard } from '@nestjs/passport';
import { ListsStreamateHandler } from 'src/application/streamate/query/lists-streamate.handler';
import { DeleteStreamateHandler } from 'src/application/streamate/command/delete-streamate.handler';

@Controller('streamate')
@UseGuards(AuthGuard('jwt'))
export class StreamateController {
  constructor(
    private readonly _createStreamateHandler: CreateStreamateHandler,
    private readonly _deleteStreamateHandler: DeleteStreamateHandler,
    private readonly _listsStreamateHandler: ListsStreamateHandler,
  ) {}

  @Get('')
  async getStreamate(
    @Query('to') listsTo: string,
    @Query('from') listsFrom: string,
    @Res() res,
  ) {
    const streamate = await this._listsStreamateHandler.run(listsTo, listsFrom);
    return res.status(HttpStatus.OK).json(streamate);
  }

  @Post()
  async createStreamate(
    @Body() createStreamateCommand: CreateStreamateCommand,
    @Res() res,
  ) {
    const streamate = await this._createStreamateHandler.run(
      createStreamateCommand,
    );
    console.log(streamate);
    return res.status(HttpStatus.CREATED).json(streamate);
  }

  @Delete('/delete')
  async deleteStreamate(@Request() req, @Query('id') id: string) {
    await this._deleteStreamateHandler.run({ id }, req.user.role);
  }
}
