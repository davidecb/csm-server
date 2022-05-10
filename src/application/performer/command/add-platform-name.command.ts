import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddPlatformNameCommand {
  @IsString()
  @ApiProperty({ example: 'nombre en plataformas' })
  public platformName: string;
}
