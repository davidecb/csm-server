import { NoteRepository } from '../port/repository/note-repository';
import { Note } from '../model/note';
import { UnexistentNoteError } from 'src/domain/errors/unexistent-note.error';

export class DeleteNoteService {
  constructor(private readonly _noteRepository: NoteRepository) {}

  async run(id: string): Promise<Note> {
    const deletedNote = await this._noteRepository.delete(id);

    if (deletedNote) {
      return deletedNote;
    }
    throw new UnexistentNoteError();
  }
}
