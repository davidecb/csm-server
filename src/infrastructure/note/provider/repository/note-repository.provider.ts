import { NoteRepositoryMongoDB } from './../../adapter/repository/note-repository-mongodb';
import { NoteRepository } from 'src/domain/note/port/repository/note-repository';

export const noteRepositoryProvider = {
  provide: NoteRepository,
  useClass: NoteRepositoryMongoDB,
};
