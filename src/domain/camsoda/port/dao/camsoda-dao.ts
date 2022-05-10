import { CamsodaDto } from 'src/application/camsoda/query/dto/camsoda.dto';

export abstract class CamsodaDao {
  abstract lists(searchOptions: object): Promise<CamsodaDto[]>;
}
