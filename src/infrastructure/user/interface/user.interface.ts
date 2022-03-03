import { Document } from 'mongoose';

export interface UserInterface extends Document {
  readonly name: string;
  readonly username: string;
  readonly password: string;
  readonly role: string;
  readonly location: string;
  readonly userShift: string;
  readonly comparePassword: (password: string) => Promise<boolean>;
}
