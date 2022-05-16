import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NoteRepository } from 'src/domain/note/port/repository/note-repository';
import { NoteInterface } from './../../interface/note.interface';
import { Note } from 'src/domain/note/model/note';

@Injectable()
export class NoteRepositoryMongoDB implements NoteRepository {
  constructor(
    @InjectModel('Note') private readonly noteModel: Model<NoteInterface>,
  ) {}

  async existsNoteId(noteId: string): Promise<boolean> {
    return (await this.noteModel.count({ noteId })) > 0;
  }

  async create(note: Note): Promise<Note> {
    const createdNote = new this.noteModel({
      type: note.type,
      performer: note.performer,
      createdBy: note.createdBy,
      date: note.date,
      noteId: note.noteId,
    });
    await createdNote.save();
    return note;
  }

  async delete(id: string): Promise<Note> {
    return await this.noteModel.findByIdAndDelete(id);
  }
}
