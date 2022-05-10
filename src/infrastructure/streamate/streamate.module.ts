import { Module } from '@nestjs/common';
import { StreamateController } from './controller/streamate.controller';
import { StreamateProviderModule } from './provider/streamate-provider.module';

@Module({
  imports: [StreamateProviderModule],
  controllers: [StreamateController],
})
export class StreamateModule {}
