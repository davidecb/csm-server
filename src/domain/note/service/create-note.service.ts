import { NoteRepository } from '../port/repository/note-repository';
import { Note } from '../model/note';
import { NoteExistsError } from 'src/domain/errors/note-exists.error';

export class CreateNoteService {
  constructor(private readonly _noteRepository: NoteRepository) {}

  async run(note: Note) {
    if (await this._noteRepository.existsNoteId(note.noteId)) {
      throw new NoteExistsError();
    }
    await this._noteRepository.create(note);
  }
}
