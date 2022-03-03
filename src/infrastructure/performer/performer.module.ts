import { Module } from '@nestjs/common';
import { PerformerController } from './controller/performer.controller';
import { PerformerProviderModule } from './provider/performer-provider.module';

@Module({
  imports: [PerformerProviderModule],
  controllers: [PerformerController],
})
export class PerformerModule {}
