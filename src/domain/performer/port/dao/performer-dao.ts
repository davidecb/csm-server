import { PerformerDto } from 'src/application/performer/query/dto/performer.dto';

export abstract class PerformerDao {
  abstract lists(searchOptions: object): Promise<PerformerDto[]>;
}
