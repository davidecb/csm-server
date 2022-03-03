import { UserDto } from 'src/application/user/query/dto/user.dto';

export abstract class UserDao {
  abstract lists(): Promise<UserDto[]>;
}
