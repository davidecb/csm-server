import { LivejasminDto } from 'src/application/livejasmin/query/dto/livejasmin.dto';

export abstract class LivejasminDao {
  abstract lists(startDate: Date, endDate: Date): Promise<LivejasminDto[]>;
}
