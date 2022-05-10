import { ValidateUserService } from 'src/domain/user/service/validate-user.service';
import { JwtStrategy } from './../../auth/strategies/jwt.strategy';
import { livejasminRepositoryProvider } from './repository/livejasmin-repository.provider';
import { LivejasminSchema } from './../schema/livejasmin.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateLivejasminService } from 'src/domain/livejasmin/service/create-livejasmin.service';
import { LivejasminRepository } from 'src/domain/livejasmin/port/repository/livejasmin-repository';
import { createLivejasminServiceProvider } from './service/create-livejasmin-service.provider';
import { CreateLivejasminHandler } from 'src/application/livejasmin/command/create-livejasmin.handler';
import { livejasminDaoProvider } from './dao/livejasmin-dao.provider';
import { ListsLivejasminHandler } from 'src/application/livejasmin/query/lists-livejasmin.handler';
import { DeleteLivejasminService } from 'src/domain/livejasmin/service/delete-livejasmin.service';
import { deleteLivejasminServiceProvider } from './service/delete-livejasmin-service.provider';
import { DeleteLivejasminHandler } from 'src/application/livejasmin/command/delete-livejasmin.handler';
import { UserModule } from 'src/infrastructure/user/user.module';
import { userRepositoryProvider } from 'src/infrastructure/user/provider/repository/user-repository.provider';
import { validateUserServiceProvider } from 'src/infrastructure/user/provider/service/validate-user-service.provider';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { UserSchema } from 'src/infrastructure/user/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Livejasmin', schema: LivejasminSchema },
      { name: 'User', schema: UserSchema },
    ]),
    UserModule,
  ],
  providers: [
    {
      provide: CreateLivejasminService,
      inject: [LivejasminRepository],
      useFactory: createLivejasminServiceProvider,
    },
    {
      provide: DeleteLivejasminService,
      inject: [LivejasminRepository],
      useFactory: deleteLivejasminServiceProvider,
    },
    {
      provide: ValidateUserService,
      inject: [UserRepository],
      useFactory: validateUserServiceProvider,
    },
    JwtStrategy,
    userRepositoryProvider,
    livejasminRepositoryProvider,
    livejasminDaoProvider,
    CreateLivejasminHandler,
    DeleteLivejasminHandler,
    ListsLivejasminHandler,
  ],
  exports: [
    CreateLivejasminService,
    CreateLivejasminHandler,
    DeleteLivejasminService,
    DeleteLivejasminHandler,
    ListsLivejasminHandler,
    LivejasminRepository,
  ],
})
export class LivejasminProviderModule {}
