import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteLivejasminCommand {
  @IsString()
  @ApiProperty()
  public id: string;
}
