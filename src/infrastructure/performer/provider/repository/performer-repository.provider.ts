import { PerformerRepositoryMongoDB } from './../../adapter/repository/performer-repository-mongodb';
import { PerformerRepository } from 'src/domain/performer/port/repository/performer-repository';

export const performerRepositoryProvider = {
  provide: PerformerRepository,
  useClass: PerformerRepositoryMongoDB,
};
