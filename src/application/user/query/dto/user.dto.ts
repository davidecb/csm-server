import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'David Cortes' })
  public name: string;

  @ApiProperty({ example: 'david.cortes' })
  public username: string;

  @ApiProperty({ example: 'monitor' })
  public role: string;

  @ApiProperty({ example: 'tesoro' })
  public location: string;

  @ApiProperty({ example: 'mañana' })
  public userShift: string;
}
