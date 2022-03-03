import { IsArray, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePerformerCommand {
  @IsString()
  @ApiProperty({ example: 'Nombre real' })
  public name: string;

  @IsString()
  @ApiProperty({ example: 'Nombre artistico' })
  public performerName: string;

  @IsArray()
  @ApiProperty({ example: ['nombre en plataformas'] })
  public platformNames: string[];

  @IsString()
  @ApiProperty({ example: 'tesoro' })
  public location: string;

  @IsString()
  @ApiProperty({ example: 'mañana' })
  public performerShift: string;

  @IsString()
  @ApiProperty({ example: '123456789' })
  public performerId: string;

  @IsString()
  @ApiProperty({ example: '12345678765432' })
  public accountId: string;

  @IsString()
  @ApiProperty({ example: 'ahorros, nequi, etc' })
  public accountType: string;

  @IsString()
  @ApiProperty({ example: 'Bancoxxx' })
  public bank: string;

  @IsString()
  @ApiProperty({ example: 'correo@csm.com.co' })
  public email: string;

  @IsNumber()
  @ApiProperty({ example: 0.6 })
  public retention: number;
}
