import { LivejasminDao } from 'src/domain/livejasmin/port/dao/livejasmin-dao';
import { LivejasminDaoAPI } from '../../adapter/dao/livejasmin-dao-api';

export const livejasminDaoProvider = {
  provide: LivejasminDao,
  useClass: LivejasminDaoAPI,
};
