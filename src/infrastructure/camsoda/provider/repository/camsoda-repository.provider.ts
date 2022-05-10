import { CamsodaRepositoryMongoDB } from './../../adapter/repository/camsoda-repository-mongodb';
import { CamsodaRepository } from 'src/domain/camsoda/port/repository/camsoda-repository';

export const camsodaRepositoryProvider = {
  provide: CamsodaRepository,
  useClass: CamsodaRepositoryMongoDB,
};
