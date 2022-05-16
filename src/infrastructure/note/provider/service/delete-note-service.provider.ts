import { NoteRepository } from 'src/domain/note/port/repository/note-repository';
import { DeleteNoteService } from 'src/domain/note/service/delete-note.service';

export function deleteNoteServiceProvider(noteRepository: NoteRepository) {
  return new DeleteNoteService(noteRepository);
}
