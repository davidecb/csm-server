import { ImLiveRepositoryMongoDB } from './../../adapter/repository/imLive-repository-mongodb';
import { ImLiveRepository } from 'src/domain/imLive/port/repository/imLive-repository';

export const imLiveRepositoryProvider = {
  provide: ImLiveRepository,
  useClass: ImLiveRepositoryMongoDB,
};
