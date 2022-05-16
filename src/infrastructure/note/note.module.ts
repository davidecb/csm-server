import { Module } from '@nestjs/common';
import { NoteController } from './controller/note.controller';
import { NoteProviderModule } from './provider/note-provider.module';

@Module({
  imports: [NoteProviderModule],
  controllers: [NoteController],
})
export class NoteModule {}
