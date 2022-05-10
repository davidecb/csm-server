import { Module } from '@nestjs/common';
import { LivejasminController } from './controller/livejasmin.controller';
import { LivejasminProviderModule } from './provider/livejasmin-provider.module';

@Module({
  imports: [LivejasminProviderModule],
  controllers: [LivejasminController],
})
export class LivejasminModule {}
