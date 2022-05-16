import { NoteRepository } from 'src/domain/note/port/repository/note-repository';
import { CreateNoteService } from 'src/domain/note/service/create-note.service';

export function createNoteServiceProvider(noteRepository: NoteRepository) {
  return new CreateNoteService(noteRepository);
}
