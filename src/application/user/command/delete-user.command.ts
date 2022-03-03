import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserCommand {
  @IsString()
  @ApiProperty()
  public id: string;
}
