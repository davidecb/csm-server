import { NoteDto } from 'src/application/note/query/dto/note.dto';

export abstract class NoteDao {
  abstract lists(): Promise<NoteDto[]>;
}
