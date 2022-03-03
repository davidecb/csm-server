import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeletePerformerCommand {
  @IsString()
  @ApiProperty()
  public id: string;
}
