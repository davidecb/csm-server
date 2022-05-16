import { CreateNoteCommand } from './../../../application/note/command/create-note.command';
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
  Param,
} from '@nestjs/common';
import { CreateNoteHandler } from 'src/application/note/command/create-note.handler';
import { AuthGuard } from '@nestjs/passport';
import { ListsNotesHandler } from 'src/application/note/query/lists-notes.handler';
import { DeleteNoteHandler } from 'src/application/note/command/delete-note.handler';

@UseGuards(AuthGuard('jwt'))
@Controller('note')
export class NoteController {
  constructor(
    private readonly _createNoteHandler: CreateNoteHandler,
    private readonly _deleteNoteHandler: DeleteNoteHandler,
    private readonly _listsNotesHandler: ListsNotesHandler,
  ) {}

  @Get()
  async getNotes(@Request() req, @Res() res) {
    const notes = await this._listsNotesHandler.run();
    return res.status(HttpStatus.OK).json(notes);
  }

  @Post()
  async createNote(@Body() createNoteCommand: CreateNoteCommand) {
    await this._createNoteHandler.run(createNoteCommand);
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteNote(@Request() req, @Param('id') id: string) {
    await this._deleteNoteHandler.run({ id });
  }
}
