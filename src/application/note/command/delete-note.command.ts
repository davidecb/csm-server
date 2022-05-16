import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteNoteCommand {
  @IsString()
  @ApiProperty()
  public id: string;
}
