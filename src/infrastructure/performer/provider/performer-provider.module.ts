import { CamsodaSchema } from './../../camsoda/schema/camsoda.schema';
import { streamateDaoProvider } from './../../streamate/provider/dao/streamate-dao.provider';
import { livejasminDaoProvider } from './../../livejasmin/provider/dao/livejasmin-dao.provider';
import { imLiveDaoProvider } from './../../imLive/provider/dao/imLive-dao.provider';
import { camsodaDaoProvider } from './../../camsoda/provider/dao/camsoda-dao.provider';
import { ValidateUserService } from 'src/domain/user/service/validate-user.service';
import { JwtStrategy } from './../../auth/strategies/jwt.strategy';
import { performerRepositoryProvider } from './repository/performer-repository.provider';
import { PerformerSchema } from './../schema/performer.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatePerformerService } from 'src/domain/performer/service/create-performer.service';
import { PerformerRepository } from 'src/domain/performer/port/repository/performer-repository';
import { createPerformerServiceProvider } from './service/create-performer-service.provider';
import { CreatePerformerHandler } from 'src/application/performer/command/create-performer.handler';
import { performerDaoProvider } from './dao/performer-dao.provider';
import { ListsPerformersHandler } from 'src/application/performer/query/lists-performers.handler';
import { DeletePerformerService } from 'src/domain/performer/service/delete-performer.service';
import { deletePerformerServiceProvider } from './service/delete-performer-service.provider';
import { DeletePerformerHandler } from 'src/application/performer/command/delete-performer.handler';
import { UpdatePerformerService } from 'src/domain/performer/service/update-performer.service';
import { updatePerformerServiceProvider } from './service/update-performer-service.provider';
import { UpdatePerformerHandler } from 'src/application/performer/command/update-performer.handler';
import { UserModule } from 'src/infrastructure/user/user.module';
import { userRepositoryProvider } from 'src/infrastructure/user/provider/repository/user-repository.provider';
import { validateUserServiceProvider } from 'src/infrastructure/user/provider/service/validate-user-service.provider';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { UserSchema } from 'src/infrastructure/user/schema/user.schema';
import { PerformersTotalsHandler } from 'src/application/performer/query/performers-totals.handler';
import { ListsCamsodaHandler } from 'src/application/camsoda/query/lists-camsoda.handler';
import { ListsImLiveHandler } from 'src/application/imLive/query/lists-imLive.handler';
import { ListsLivejasminHandler } from 'src/application/livejasmin/query/lists-livejasmin.handler';
import { ListsStreamateHandler } from 'src/application/streamate/query/lists-streamate.handler';
import { ImLiveSchema } from 'src/infrastructure/imLive/schema/imLive.schema';
import { LivejasminSchema } from 'src/infrastructure/livejasmin/schema/livejasmin.schema';
import { StreamateSchema } from 'src/infrastructure/streamate/schema/streamate.schema';
import { AddPlatformNameService } from 'src/domain/performer/service/add-platform-name.service';
import { addPlatformNameServiceProvider } from './service/add-platform-name-service.provider';
import { AddPlatformNameHandler } from 'src/application/performer/command/add-platform-name.handler';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Performer', schema: PerformerSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Camsoda', schema: CamsodaSchema },
      { name: 'ImLive', schema: ImLiveSchema },
      { name: 'Livejasmin', schema: LivejasminSchema },
      { name: 'Streamate', schema: StreamateSchema },
    ]),
    UserModule,
  ],
  providers: [
    {
      provide: CreatePerformerService,
      inject: [PerformerRepository],
      useFactory: createPerformerServiceProvider,
    },
    {
      provide: UpdatePerformerService,
      inject: [PerformerRepository],
      useFactory: updatePerformerServiceProvider,
    },
    {
      provide: AddPlatformNameService,
      inject: [PerformerRepository],
      useFactory: addPlatformNameServiceProvider,
    },
    {
      provide: DeletePerformerService,
      inject: [PerformerRepository],
      useFactory: deletePerformerServiceProvider,
    },
    {
      provide: ValidateUserService,
      inject: [UserRepository],
      useFactory: validateUserServiceProvider,
    },
    JwtStrategy,
    userRepositoryProvider,
    performerRepositoryProvider,
    performerDaoProvider,
    camsodaDaoProvider,
    imLiveDaoProvider,
    livejasminDaoProvider,
    streamateDaoProvider,
    CreatePerformerHandler,
    UpdatePerformerHandler,
    AddPlatformNameHandler,
    DeletePerformerHandler,
    ListsPerformersHandler,
    ListsCamsodaHandler,
    ListsImLiveHandler,
    ListsLivejasminHandler,
    ListsStreamateHandler,
    PerformersTotalsHandler,
  ],
  exports: [
    CreatePerformerService,
    CreatePerformerHandler,
    UpdatePerformerService,
    UpdatePerformerHandler,
    AddPlatformNameService,
    AddPlatformNameHandler,
    DeletePerformerService,
    DeletePerformerHandler,
    ListsPerformersHandler,
    PerformersTotalsHandler,
    PerformerRepository,
  ],
})
export class PerformerProviderModule {}
