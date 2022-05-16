import { JwtStrategy } from './../../auth/strategies/jwt.strategy';
import { noteRepositoryProvider } from './repository/note-repository.provider';
import { NoteSchema } from './../schema/note.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateNoteService } from 'src/domain/note/service/create-note.service';
import { NoteRepository } from 'src/domain/note/port/repository/note-repository';
import { createNoteServiceProvider } from './service/create-note-service.provider';
import { CreateNoteHandler } from 'src/application/note/command/create-note.handler';
import { noteDaoProvider } from './dao/note-dao.provider';
import { ListsNotesHandler } from 'src/application/note/query/lists-notes.handler';
import { DeleteNoteService } from 'src/domain/note/service/delete-note.service';
import { deleteNoteServiceProvider } from './service/delete-note-service.provider';
import { DeleteNoteHandler } from 'src/application/note/command/delete-note.handler';
import { ValidateUserService } from 'src/domain/user/service/validate-user.service';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { validateUserServiceProvider } from 'src/infrastructure/user/provider/service/validate-user-service.provider';
import { UserSchema } from 'src/infrastructure/user/schema/user.schema';
import { userRepositoryProvider } from 'src/infrastructure/user/provider/repository/user-repository.provider';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Note', schema: NoteSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  providers: [
    {
      provide: CreateNoteService,
      inject: [NoteRepository],
      useFactory: createNoteServiceProvider,
    },
    {
      provide: DeleteNoteService,
      inject: [NoteRepository],
      useFactory: deleteNoteServiceProvider,
    },
    {
      provide: ValidateUserService,
      inject: [UserRepository],
      useFactory: validateUserServiceProvider,
    },
    JwtStrategy,
    userRepositoryProvider,
    noteRepositoryProvider,
    noteDaoProvider,
    CreateNoteHandler,
    DeleteNoteHandler,
    ListsNotesHandler,
  ],
  exports: [
    CreateNoteService,
    CreateNoteHandler,
    DeleteNoteService,
    DeleteNoteHandler,
    ListsNotesHandler,
    NoteRepository,
  ],
})
export class NoteProviderModule {}
