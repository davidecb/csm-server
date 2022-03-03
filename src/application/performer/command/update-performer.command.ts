import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePerformerCommand {
  @IsOptional()
  @ApiProperty({ example: 'Nombre real' })
  public name: string;

  @IsOptional()
  @ApiProperty({ example: 'Nombre artistico' })
  public performerName: string;

  @IsOptional()
  @ApiProperty({ example: ['nombre en plataformas'] })
  public platformNames: string[];

  @IsOptional()
  @ApiProperty({ example: 'tesoro' })
  public location: string;

  @IsOptional()
  @ApiProperty({ example: 'mañana' })
  public performerShift: string;

  @IsOptional()
  @ApiProperty({ example: '123456789' })
  public performerId: string;

  @IsOptional()
  @ApiProperty({ example: '12345678765432' })
  public accountId: string;

  @IsOptional()
  @ApiProperty({ example: 'ahorros, nequi, etc' })
  public accountType: string;

  @IsOptional()
  @ApiProperty({ example: 'Bancoxxx' })
  public bank: string;

  @IsOptional()
  @ApiProperty({ example: 'correo@csm.com.co' })
  public email: string;

  @IsOptional()
  @ApiProperty({ example: 0.6 })
  public retention: number;

  @IsOptional()
  @ApiProperty({ example: true })
  public status: boolean;
}
