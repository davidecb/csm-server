import { UserDao } from 'src/domain/user/port/dao/user-dao';
import { UserDaoMongodb } from '../../adapter/dao/user-dao-mongodb';

export const userDaoProvider = {
  provide: UserDao,
  useClass: UserDaoMongodb,
};
