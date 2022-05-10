import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteImLiveCommand {
  @IsString()
  @ApiProperty()
  public id: string;
}
