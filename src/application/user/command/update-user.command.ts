import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserCommand {
  @IsOptional()
  @ApiProperty({ example: 'David Cortes' })
  public name: string;

  @IsOptional()
  @ApiProperty({ example: 'david.cortes' })
  public username: string;

  @IsOptional()
  @ApiProperty({ minLength: 8, example: '12345678' })
  public password: string;

  @IsOptional()
  @ApiProperty({ example: 'tesoro' })
  public location: string;

  @IsOptional()
  @ApiProperty({ example: 'mañana' })
  public userShift: string;
}
