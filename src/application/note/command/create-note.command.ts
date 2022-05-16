import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteCommand {
  @IsOptional()
  @ApiProperty({ example: 'inhability' })
  public type: string;

  @IsString()
  @ApiProperty()
  public performer: string;

  @IsString()
  @ApiProperty({ example: 'tesoro.mañana' })
  public createdBy: string;

  @IsString()
  @ApiProperty({ example: '2022-05-06 00.00:00' })
  public date: string;
}
