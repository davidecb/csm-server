import { ImLiveDao } from 'src/domain/imLive/port/dao/imLive-dao';
import { ImLiveDaoMongodb } from '../../adapter/dao/imLive-dao-mongodb';

export const imLiveDaoProvider = {
  provide: ImLiveDao,
  useClass: ImLiveDaoMongodb,
};
