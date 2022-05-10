import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLivejasminCommand {
  @IsString()
  @ApiProperty({ example: 'Nombre modelo' })
  public performerName: string;

  @IsString()
  @ApiProperty({ example: '2022-04-19 14:10:12' })
  public endTime: string;

  @IsString()
  @ApiProperty({ example: '1234' })
  public totalTime: string;

  @IsString()
  @ApiProperty({ example: '$123.4' })
  public performerEarned: string;

  @IsString()
  @ApiProperty({ example: '123456789' })
  public transactionId: string;
}
