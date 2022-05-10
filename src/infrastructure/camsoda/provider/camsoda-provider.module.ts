import { ValidateUserService } from 'src/domain/user/service/validate-user.service';
import { JwtStrategy } from './../../auth/strategies/jwt.strategy';
import { camsodaRepositoryProvider } from './repository/camsoda-repository.provider';
import { CamsodaSchema } from './../schema/camsoda.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateCamsodaService } from 'src/domain/camsoda/service/create-camsoda.service';
import { CamsodaRepository } from 'src/domain/camsoda/port/repository/camsoda-repository';
import { createCamsodaServiceProvider } from './service/create-camsoda-service.provider';
import { CreateCamsodaHandler } from 'src/application/camsoda/command/create-camsoda.handler';
import { camsodaDaoProvider } from './dao/camsoda-dao.provider';
import { ListsCamsodaHandler } from 'src/application/camsoda/query/lists-camsoda.handler';
import { DeleteCamsodaService } from 'src/domain/camsoda/service/delete-camsoda.service';
import { deleteCamsodaServiceProvider } from './service/delete-camsoda-service.provider';
import { DeleteCamsodaHandler } from 'src/application/camsoda/command/delete-camsoda.handler';
import { UserModule } from 'src/infrastructure/user/user.module';
import { userRepositoryProvider } from 'src/infrastructure/user/provider/repository/user-repository.provider';
import { validateUserServiceProvider } from 'src/infrastructure/user/provider/service/validate-user-service.provider';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { UserSchema } from 'src/infrastructure/user/schema/user.schema';
import { PerformerSchema } from 'src/infrastructure/performer/schema/performer.schema';
import { PerformerModule } from 'src/infrastructure/performer/performer.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Camsoda', schema: CamsodaSchema },
      { name: 'Performer', schema: PerformerSchema },
      { name: 'User', schema: UserSchema },
    ]),
    UserModule,
    PerformerModule,
  ],
  providers: [
    {
      provide: CreateCamsodaService,
      inject: [CamsodaRepository],
      useFactory: createCamsodaServiceProvider,
    },
    {
      provide: DeleteCamsodaService,
      inject: [CamsodaRepository],
      useFactory: deleteCamsodaServiceProvider,
    },
    {
      provide: ValidateUserService,
      inject: [UserRepository],
      useFactory: validateUserServiceProvider,
    },
    JwtStrategy,
    userRepositoryProvider,
    camsodaRepositoryProvider,
    camsodaDaoProvider,
    CreateCamsodaHandler,
    DeleteCamsodaHandler,
    ListsCamsodaHandler,
  ],
  exports: [
    CreateCamsodaService,
    CreateCamsodaHandler,
    DeleteCamsodaService,
    DeleteCamsodaHandler,
    ListsCamsodaHandler,
    CamsodaRepository,
  ],
})
export class CamsodaProviderModule {}
