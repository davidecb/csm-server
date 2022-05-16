import { Document } from 'mongoose';
import { Note } from 'src/domain/note/model/note';

export interface PerformerInterface extends Document {
  readonly name: string;
  readonly performerName: string;
  readonly platformNames: string[];
  readonly location: string;
  readonly performerShift: string;
  readonly performerId: string;
  readonly accountId: string;
  readonly accountType: string;
  readonly bank: string;
  readonly email: string;
  readonly retention: number;
  readonly status: boolean;
  readonly notes: Note[];
}
