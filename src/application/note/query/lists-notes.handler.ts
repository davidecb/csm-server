import { Injectable } from '@nestjs/common';
import { NoteDao } from 'src/domain/note/port/dao/note-dao';
import { NoteDto } from './dto/note.dto';

@Injectable()
export class ListsNotesHandler {
  constructor(private _noteDao: NoteDao) {}

  async run(): Promise<NoteDto[]> {
    return this._noteDao.lists();
  }
}
