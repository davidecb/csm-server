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

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Performer', schema: PerformerSchema },
      { name: 'User', schema: UserSchema },
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
    CreatePerformerHandler,
    UpdatePerformerHandler,
    DeletePerformerHandler,
    ListsPerformersHandler,
  ],
  exports: [
    CreatePerformerService,
    CreatePerformerHandler,
    UpdatePerformerService,
    UpdatePerformerHandler,
    DeletePerformerService,
    DeletePerformerHandler,
    ListsPerformersHandler,
    PerformerRepository,
  ],
})
export class PerformerProviderModule {}
