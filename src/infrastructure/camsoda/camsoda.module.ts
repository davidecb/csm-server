import { Module } from '@nestjs/common';
import { CamsodaController } from './controller/camsoda.controller';
import { CamsodaProviderModule } from './provider/camsoda-provider.module';

@Module({
  imports: [CamsodaProviderModule],
  controllers: [CamsodaController],
})
export class CamsodaModule {}
