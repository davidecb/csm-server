import { DeleteNoteCommand } from './delete-note.command';
import { Injectable } from '@nestjs/common';
import { DeleteNoteService } from 'src/domain/note/service/delete-note.service';
import { Note } from 'src/domain/note/model/note';

@Injectable()
export class DeleteNoteHandler {
  constructor(private _deleteNoteService: DeleteNoteService) {}

  async run(deleteNoteCommand: DeleteNoteCommand): Promise<Note> {
    return await this._deleteNoteService.run(deleteNoteCommand.id);
  }
}
