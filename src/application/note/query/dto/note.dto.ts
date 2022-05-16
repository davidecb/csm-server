import { ApiProperty } from '@nestjs/swagger';

export class NoteDto {
  @ApiProperty({ example: 'David Cortes' })
  public type: string;

  @ApiProperty({ example: 'david.cortes' })
  public performer: string;

  @ApiProperty({ example: 'monitor' })
  public createdBy: string;

  @ApiProperty({ example: 'tesoro' })
  public date: Date;

  @ApiProperty({ example: 'mañana' })
  public noteId: string;
}
