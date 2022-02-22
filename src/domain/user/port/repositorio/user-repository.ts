import { UserInterface } from './../../../../infrastructure/user/interface/user.interface';
import { User } from '../../model/user';

export abstract class UserRepository {
  abstract usernameExists(username: string): Promise<boolean>;
  abstract create(user: User): Promise<UserInterface>;
}
