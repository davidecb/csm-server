import { ApiProperty } from '@nestjs/swagger';

export class StreamateDto {
  @ApiProperty({ example: 'Nombre modelo' })
  public performerName: string;

  @ApiProperty({ example: new Date() })
  public endTime: Date;

  @ApiProperty({ example: 1234 })
  public totalTime: number;

  @ApiProperty({ example: 123.4 })
  public performerEarned: number;

  @ApiProperty({ example: '123456789' })
  public transactionId: string;

  @ApiProperty({ example: 'Streamate' })
  public platform: string;
}
