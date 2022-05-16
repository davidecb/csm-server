import { NoteDao } from 'src/domain/note/port/dao/note-dao';
import { NoteDaoMongodb } from '../../adapter/dao/note-dao-mongodb';

export const noteDaoProvider = {
  provide: NoteDao,
  useClass: NoteDaoMongodb,
};
