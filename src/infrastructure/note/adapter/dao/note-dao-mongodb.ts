import { NoteInterface } from './../../interface/note.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NoteDao } from 'src/domain/note/port/dao/note-dao';
import { NoteDto } from 'src/application/note/query/dto/note.dto';

@Injectable()
export class NoteDaoMongodb implements NoteDao {
  constructor(
    @InjectModel('Note') private readonly noteModel: Model<NoteInterface>,
  ) {}

  async lists(): Promise<NoteDto[]> {
    return await this.noteModel.find(
      {},
      {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      },
    );
  }
}
