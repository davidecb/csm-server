import { Note } from '../../model/note';

export abstract class NoteRepository {
  abstract existsNoteId(noteId: string): Promise<boolean>;
  abstract create(note: Note): Promise<Note>;
  abstract delete(id: string): Promise<Note>;
}
