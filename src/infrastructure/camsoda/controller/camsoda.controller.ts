import { CreateCamsodaCommand } from './../../../application/camsoda/command/create-camsoda.command';
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
import { CreateCamsodaHandler } from 'src/application/camsoda/command/create-camsoda.handler';
import { AuthGuard } from '@nestjs/passport';
import { ListsCamsodaHandler } from 'src/application/camsoda/query/lists-camsoda.handler';
import { DeleteCamsodaHandler } from 'src/application/camsoda/command/delete-camsoda.handler';

@Controller('camsoda')
@UseGuards(AuthGuard('jwt'))
export class CamsodaController {
  constructor(
    private readonly _createCamsodaHandler: CreateCamsodaHandler,
    private readonly _deleteCamsodaHandler: DeleteCamsodaHandler,
    private readonly _listsCamsodaHandler: ListsCamsodaHandler,
  ) {}

  @Get('')
  async getCamsoda(
    @Query('to') listsTo: string,
    @Query('from') listsFrom: string,
    @Res() res,
  ) {
    const camsoda = await this._listsCamsodaHandler.run(listsTo, listsFrom);
    return res.status(HttpStatus.OK).json(camsoda);
  }

  @Post()
  async createCamsoda(@Body() createCamsodaCommand: CreateCamsodaCommand) {
    await this._createCamsodaHandler.run(createCamsodaCommand);
  }

  @Delete('/delete')
  async deleteCamsoda(@Request() req, @Query('id') id: string) {
    await this._deleteCamsodaHandler.run({ id }, req.user.role);
  }
}
