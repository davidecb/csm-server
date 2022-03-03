import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserCommand {
  @IsOptional()
  @ApiProperty({ example: 'David Cortes', default: '' })
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

  @IsOptional()
  @ApiProperty({ example: 'tesoro' })
  public location: string;

  @IsOptional()
  @ApiProperty({ example: 'mañana' })
  public userShift: string;
}
