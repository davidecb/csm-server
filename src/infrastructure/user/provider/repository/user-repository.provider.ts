import { UserRepositoryMongoDB } from './../../adapter/repository/user-repository-mongodb';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';

export const userRepositoryProvider = {
  provide: UserRepository,
  useClass: UserRepositoryMongoDB,
};
