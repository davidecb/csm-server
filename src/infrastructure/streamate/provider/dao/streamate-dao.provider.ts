import { StreamateDao } from 'src/domain/streamate/port/dao/streamate-dao';
import { StreamateDaoMongodb } from '../../adapter/dao/streamate-dao-mongodb';

export const streamateDaoProvider = {
  provide: StreamateDao,
  useClass: StreamateDaoMongodb,
};
