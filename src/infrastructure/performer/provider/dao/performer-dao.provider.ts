import { PerformerDao } from 'src/domain/performer/port/dao/performer-dao';
import { PerformerDaoMongodb } from '../../adapter/dao/performer-dao-mongodb';

export const performerDaoProvider = {
  provide: PerformerDao,
  useClass: PerformerDaoMongodb,
};
