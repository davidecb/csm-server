import { CreateNoteCommand } from './create-note.command';
import { Injectable } from '@nestjs/common';
import { CreateNoteService } from 'src/domain/note/service/create-note.service';
import { Note } from 'src/domain/note/model/note';

@Injectable()
export class CreateNoteHandler {
  constructor(private _createNoteService: CreateNoteService) {}

  async run(createNoteCommand: CreateNoteCommand) {
    const noteDate = new Date(createNoteCommand.date);
    noteDate.setUTCHours(0, 0, 0);
    const noteId =
      createNoteCommand.performer +
      createNoteCommand.type +
      noteDate.toISOString();
    await this._createNoteService.run(
      new Note(
        createNoteCommand.type,
        createNoteCommand.performer,
        createNoteCommand.createdBy,
        noteDate,
        Buffer.from(noteId).toString('hex'),
      ),
    );
  }
}
