import { ValidateUserService } from 'src/domain/user/service/validate-user.service';
import { JwtStrategy } from './../../auth/strategies/jwt.strategy';
import { streamateRepositoryProvider } from './repository/streamate-repository.provider';
import { StreamateSchema } from './../schema/streamate.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateStreamateService } from 'src/domain/streamate/service/create-streamate.service';
import { StreamateRepository } from 'src/domain/streamate/port/repository/streamate-repository';
import { createStreamateServiceProvider } from './service/create-streamate-service.provider';
import { CreateStreamateHandler } from 'src/application/streamate/command/create-streamate.handler';
import { streamateDaoProvider } from './dao/streamate-dao.provider';
import { ListsStreamateHandler } from 'src/application/streamate/query/lists-streamate.handler';
import { DeleteStreamateService } from 'src/domain/streamate/service/delete-streamate.service';
import { deleteStreamateServiceProvider } from './service/delete-streamate-service.provider';
import { DeleteStreamateHandler } from 'src/application/streamate/command/delete-streamate.handler';
import { UserModule } from 'src/infrastructure/user/user.module';
import { userRepositoryProvider } from 'src/infrastructure/user/provider/repository/user-repository.provider';
import { validateUserServiceProvider } from 'src/infrastructure/user/provider/service/validate-user-service.provider';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { UserSchema } from 'src/infrastructure/user/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Streamate', schema: StreamateSchema },
      { name: 'User', schema: UserSchema },
    ]),
    UserModule,
  ],
  providers: [
    {
      provide: CreateStreamateService,
      inject: [StreamateRepository],
      useFactory: createStreamateServiceProvider,
    },
    {
      provide: DeleteStreamateService,
      inject: [StreamateRepository],
      useFactory: deleteStreamateServiceProvider,
    },
    {
      provide: ValidateUserService,
      inject: [UserRepository],
      useFactory: validateUserServiceProvider,
    },
    JwtStrategy,
    userRepositoryProvider,
    streamateRepositoryProvider,
    streamateDaoProvider,
    CreateStreamateHandler,
    DeleteStreamateHandler,
    ListsStreamateHandler,
  ],
  exports: [
    CreateStreamateService,
    CreateStreamateHandler,
    DeleteStreamateService,
    DeleteStreamateHandler,
    ListsStreamateHandler,
    StreamateRepository,
  ],
})
export class StreamateProviderModule {}
