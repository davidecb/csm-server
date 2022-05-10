import { Document } from 'mongoose';

export interface LivejasminInterface extends Document {
  readonly performerName: string;
  readonly endTime: Date;
  readonly totalTime: number;
  readonly performerEarned: number;
  readonly transactionId: string;
}
