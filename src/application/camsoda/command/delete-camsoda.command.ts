import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteCamsodaCommand {
  @IsString()
  @ApiProperty()
  public id: string;
}
