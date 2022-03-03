import { ApiProperty } from '@nestjs/swagger';

export class PerformerDto {
  @ApiProperty({ example: 'Nombre real' })
  public name: string;

  @ApiProperty({ example: 'Nombre artistico' })
  public performerName: string;

  @ApiProperty({ example: ['nombre en plataformas'] })
  public platformNames: string[];

  @ApiProperty({ example: 'tesoro' })
  public location: string;

  @ApiProperty({ example: 'mañana' })
  public performerShift: string;

  @ApiProperty({ example: '123456789' })
  public performerId: string;

  @ApiProperty({ example: '12345678765432' })
  public accountId: string;

  @ApiProperty({ example: 'ahorros, nequi, etc' })
  public accountType: string;

  @ApiProperty({ example: 'Bancoxxx' })
  public bank: string;

  @ApiProperty({ example: 'correo@csm.com.co' })
  public email: string;

  @ApiProperty({ example: 0.6 })
  public retention: number;

  @ApiProperty({ example: true })
  public status: boolean;
}
