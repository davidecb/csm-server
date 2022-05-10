import { CreatePerformerCommand } from './../../../application/performer/command/create-performer.command';
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
  Patch,
} from '@nestjs/common';
import { CreatePerformerHandler } from 'src/application/performer/command/create-performer.handler';
import { AuthGuard } from '@nestjs/passport';
import { ListsPerformersHandler } from 'src/application/performer/query/lists-performers.handler';
import { DeletePerformerHandler } from 'src/application/performer/command/delete-performer.handler';
import { UpdatePerformerHandler } from 'src/application/performer/command/update-performer.handler';
import { UpdatePerformerCommand } from 'src/application/performer/command/update-performer.command';
import { PerformersTotalsHandler } from 'src/application/performer/query/performers-totals.handler';
import { AddPlatformNameCommand } from 'src/application/performer/command/add-platform-name.command';
import { AddPlatformNameHandler } from 'src/application/performer/command/add-platform-name.handler';

@Controller('performer')
@UseGuards(AuthGuard('jwt'))
export class PerformerController {
  constructor(
    private readonly _createPerformerHandler: CreatePerformerHandler,
    private readonly _updatePerformerHandler: UpdatePerformerHandler,
    private readonly _addPlatformNameHandler: AddPlatformNameHandler,
    private readonly _deletePerformerHandler: DeletePerformerHandler,
    private readonly _listsPerformersHandler: ListsPerformersHandler,
    private readonly _performersTotalsHandler: PerformersTotalsHandler,
  ) {}

  @Get('/info')
  async getPerformers(@Request() req, @Res() res) {
    const performers = await this._listsPerformersHandler.run(req.user);
    return res.status(HttpStatus.OK).json(performers);
  }

  @Get('/totals')
  async getPerformersTotals(
    @Query('to') listsTo: string,
    @Query('from') listsFrom: string,
    @Request() req,
    @Res() res,
  ) {
    const performers = await this._performersTotalsHandler.run(
      req.user,
      listsTo,
      listsFrom,
    );
    return res.status(HttpStatus.OK).json(performers);
  }

  @Post()
  async createPerformer(
    @Body() createPerformerCommand: CreatePerformerCommand,
    @Request() req,
  ) {
    await this._createPerformerHandler.run(
      createPerformerCommand,
      req.user.role,
    );
  }

  @Patch('/update')
  async updatePerformer(
    @Request() req,
    @Query('id') id: string,
    @Body() updatePerformerCommand: UpdatePerformerCommand,
  ) {
    await this._updatePerformerHandler.run(
      id,
      req.user.role,
      updatePerformerCommand,
    );
  }

  @Patch('/addtag')
  async addTag(
    @Request() req,
    @Query('id') id: string,
    @Body() addPlatformNameCommand: AddPlatformNameCommand,
  ) {
    await this._addPlatformNameHandler.run(
      id,
      req.user.role,
      addPlatformNameCommand,
    );
  }

  @Delete('/delete')
  async deletePerformer(@Request() req, @Query('id') id: string) {
    await this._deletePerformerHandler.run({ id }, req.user.role);
  }
}
