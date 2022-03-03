import { Document } from 'mongoose';

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
}
