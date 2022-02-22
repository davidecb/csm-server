/* import { AppLogger } from './configuracion/ceiba-logger.service';
import * as Joi from '@hapi/joi';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NodeEnv } from './configuracion/environment/env-node.enum';
import { databaseConfigFactory } from './configuracion/database.config'; */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  //providers: [AppLogger],
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/csm', {
      useNewUrlParser: true,
    }),
    /* ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
          .required(),
      }),
    }), */
    UserModule,
  ],
})
export class InfrastructureModule {}