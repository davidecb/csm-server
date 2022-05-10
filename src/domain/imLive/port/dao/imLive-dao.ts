import { ImLiveDto } from 'src/application/imLive/query/dto/imLive.dto';

export abstract class ImLiveDao {
  abstract lists(searchOptions: object): Promise<ImLiveDto[]>;
}
