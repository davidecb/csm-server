import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserCommand {
  @IsString()
  @ApiProperty({ example: 'David Cortes' })
  public name: string;

  @IsString()
  @ApiProperty({ example: 'david.cortes' })
  public username: string;

  @IsString()
  @ApiProperty({ minLength: 8, example: '12345678' })
  public password: string;

  @IsString()
  @ApiProperty({ example: 'monitor' })
  public role: string;
}
