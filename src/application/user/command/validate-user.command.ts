import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ValidateUserCommand {
  @IsString()
  @ApiProperty({ example: 'david.cortes' })
  public username: string;

  @IsString()
  @ApiProperty({ example: '12345678' })
  public id: string;
}
