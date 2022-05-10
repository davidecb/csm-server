import { CamsodaDao } from 'src/domain/camsoda/port/dao/camsoda-dao';
import { CamsodaDaoMongodb } from '../../adapter/dao/camsoda-dao-mongodb';

export const camsodaDaoProvider = {
  provide: CamsodaDao,
  useClass: CamsodaDaoMongodb,
};
