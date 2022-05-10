import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteStreamateCommand {
  @IsString()
  @ApiProperty()
  public id: string;
}
