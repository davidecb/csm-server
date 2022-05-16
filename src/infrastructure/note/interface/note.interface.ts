import { Document } from 'mongoose';

export interface NoteInterface extends Document {
  readonly type: string;
  readonly performer: string;
  readonly createdBy: string;
  readonly date: Date;
  readonly noteId: string;
}
