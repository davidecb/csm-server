import { Payload } from './../../../../infrastructure/auth/types/payload';
import { User } from '../../model/user';

export abstract class UserRepository {
  abstract usernameExists(username: string): Promise<boolean>;
  abstract create(user: User): Promise<User>;
  abstract delete(id: string): Promise<User>;
  abstract update(id: string, updateUserCommand: object): Promise<User>;
  abstract login(username: string, password: string): Promise<string>;
  abstract validateUser(payload: Payload): Promise<User>;
}
