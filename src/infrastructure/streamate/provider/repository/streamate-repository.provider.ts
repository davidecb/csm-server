import { StreamateRepositoryMongoDB } from './../../adapter/repository/streamate-repository-mongodb';
import { StreamateRepository } from 'src/domain/streamate/port/repository/streamate-repository';

export const streamateRepositoryProvider = {
  provide: StreamateRepository,
  useClass: StreamateRepositoryMongoDB,
};
