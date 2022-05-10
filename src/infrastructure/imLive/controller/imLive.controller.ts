import { CreateImLiveCommand } from './../../../application/imLive/command/create-imLive.command';
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
import { CreateImLiveHandler } from 'src/application/imLive/command/create-imLive.handler';
import { AuthGuard } from '@nestjs/passport';
import { ListsImLiveHandler } from 'src/application/imLive/query/lists-imLive.handler';
import { DeleteImLiveHandler } from 'src/application/imLive/command/delete-imLive.handler';

@Controller('imlive')
@UseGuards(AuthGuard('jwt'))
export class ImLiveController {
  constructor(
    private readonly _createImLiveHandler: CreateImLiveHandler,
    private readonly _deleteImLiveHandler: DeleteImLiveHandler,
    private readonly _listsImLiveHandler: ListsImLiveHandler,
  ) {}

  @Get('')
  async getImLive(
    @Query('to') listsTo: string,
    @Query('from') listsFrom: string,
    @Res() res,
  ) {
    const imLive = await this._listsImLiveHandler.run(listsTo, listsFrom);
    return res.status(HttpStatus.OK).json(imLive);
  }

  @Post()
  async createImLive(@Body() createImLiveCommand: CreateImLiveCommand) {
    await this._createImLiveHandler.run(createImLiveCommand);
  }

  @Delete('/delete')
  async deleteImLive(@Request() req, @Query('id') id: string) {
    await this._deleteImLiveHandler.run({ id }, req.user.role);
  }
}
