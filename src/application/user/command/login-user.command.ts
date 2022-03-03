import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserCommand {
  @IsString()
  @ApiProperty({ example: 'david.cortes' })
  public username: string;

  @IsString()
  @ApiProperty({ minLength: 8, example: '12345678' })
  public password: string;
}
