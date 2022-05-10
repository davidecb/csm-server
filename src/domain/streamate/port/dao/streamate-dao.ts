import { StreamateDto } from 'src/application/streamate/query/dto/streamate.dto';

export abstract class StreamateDao {
  abstract lists(searchOptions: object): Promise<StreamateDto[]>;
}
