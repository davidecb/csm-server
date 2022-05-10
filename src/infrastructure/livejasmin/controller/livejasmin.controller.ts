import { CreateLivejasminCommand } from './../../../application/livejasmin/command/create-livejasmin.command';
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
import { CreateLivejasminHandler } from 'src/application/livejasmin/command/create-livejasmin.handler';
import { AuthGuard } from '@nestjs/passport';
import { ListsLivejasminHandler } from 'src/application/livejasmin/query/lists-livejasmin.handler';
import { DeleteLivejasminHandler } from 'src/application/livejasmin/command/delete-livejasmin.handler';

@Controller('livejasmin')
@UseGuards(AuthGuard('jwt'))
export class LivejasminController {
  constructor(
    private readonly _createLivejasminHandler: CreateLivejasminHandler,
    private readonly _deleteLivejasminHandler: DeleteLivejasminHandler,
    private readonly _listsLivejasminHandler: ListsLivejasminHandler,
  ) {}

  @Get('')
  async getLivejasmin(
    @Query('to') listsTo: string,
    @Query('from') listsFrom: string,
    @Res() res,
  ) {
    try {
      const livejasmin = await this._listsLivejasminHandler.run(
        listsTo,
        listsFrom,
      );
      return res.status(HttpStatus.OK).json(livejasmin);
    } catch (error) {
      return res.status(HttpStatus.CONFLICT).json(error);
    }
  }

  @Post()
  async createLivejasmin(
    @Body() createLivejasminCommand: CreateLivejasminCommand,
  ) {
    await this._createLivejasminHandler.run(createLivejasminCommand);
  }

  @Delete('/delete')
  async deleteLivejasmin(@Request() req, @Query('id') id: string) {
    await this._deleteLivejasminHandler.run({ id }, req.user.role);
  }
}
