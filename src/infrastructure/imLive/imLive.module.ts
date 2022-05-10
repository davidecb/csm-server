import { Module } from '@nestjs/common';
import { ImLiveController } from './controller/imLive.controller';
import { ImLiveProviderModule } from './provider/imLive-provider.module';

@Module({
  imports: [ImLiveProviderModule],
  controllers: [ImLiveController],
})
export class ImLiveModule {}
