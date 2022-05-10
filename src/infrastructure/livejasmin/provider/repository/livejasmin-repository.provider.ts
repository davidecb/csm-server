import { LivejasminRepositoryMongoDB } from './../../adapter/repository/livejasmin-repository-mongodb';
import { LivejasminRepository } from 'src/domain/livejasmin/port/repository/livejasmin-repository';

export const livejasminRepositoryProvider = {
  provide: LivejasminRepository,
  useClass: LivejasminRepositoryMongoDB,
};
