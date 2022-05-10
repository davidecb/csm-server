import { StreamateModule } from './streamate/streamate.module';
import { AppLogger } from './config/ceiba-logger.service';
import * as Joi from '@hapi/joi';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NodeEnv } from './config/environment/env-node.enum';
import { databaseConfigFactory } from './config/database.config';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PerformerModule } from './performer/performer.module';
import { ImLiveModule } from './imLive/imLive.module';
import { CamsodaModule } from './camsoda/camsoda.module';
import { LivejasminModule } from './livejasmin/livejasmin.module';

@Module({
  providers: [AppLogger],
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: databaseConfigFactory,
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
          .required(),
      }),
    }),
    UserModule,
    PerformerModule,
    StreamateModule,
    ImLiveModule,
    CamsodaModule,
    LivejasminModule,
  ],
})
export class InfrastructureModule {}
