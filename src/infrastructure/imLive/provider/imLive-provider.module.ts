import { ValidateUserService } from 'src/domain/user/service/validate-user.service';
import { JwtStrategy } from './../../auth/strategies/jwt.strategy';
import { imLiveRepositoryProvider } from './repository/imLive-repository.provider';
import { ImLiveSchema } from './../schema/imLive.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateImLiveService } from 'src/domain/imLive/service/create-imLive.service';
import { ImLiveRepository } from 'src/domain/imLive/port/repository/imLive-repository';
import { createImLiveServiceProvider } from './service/create-imLive-service.provider';
import { CreateImLiveHandler } from 'src/application/imLive/command/create-imLive.handler';
import { imLiveDaoProvider } from './dao/imLive-dao.provider';
import { ListsImLiveHandler } from 'src/application/imLive/query/lists-imLive.handler';
import { DeleteImLiveService } from 'src/domain/imLive/service/delete-imLive.service';
import { deleteImLiveServiceProvider } from './service/delete-imLive-service.provider';
import { DeleteImLiveHandler } from 'src/application/imLive/command/delete-imLive.handler';
import { UserModule } from 'src/infrastructure/user/user.module';
import { userRepositoryProvider } from 'src/infrastructure/user/provider/repository/user-repository.provider';
import { validateUserServiceProvider } from 'src/infrastructure/user/provider/service/validate-user-service.provider';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { UserSchema } from 'src/infrastructure/user/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ImLive', schema: ImLiveSchema },
      { name: 'User', schema: UserSchema },
    ]),
    UserModule,
  ],
  providers: [
    {
      provide: CreateImLiveService,
      inject: [ImLiveRepository],
      useFactory: createImLiveServiceProvider,
    },
    {
      provide: DeleteImLiveService,
      inject: [ImLiveRepository],
      useFactory: deleteImLiveServiceProvider,
    },
    {
      provide: ValidateUserService,
      inject: [UserRepository],
      useFactory: validateUserServiceProvider,
    },
    JwtStrategy,
    userRepositoryProvider,
    imLiveRepositoryProvider,
    imLiveDaoProvider,
    CreateImLiveHandler,
    DeleteImLiveHandler,
    ListsImLiveHandler,
  ],
  exports: [
    CreateImLiveService,
    CreateImLiveHandler,
    DeleteImLiveService,
    DeleteImLiveHandler,
    ListsImLiveHandler,
    ImLiveRepository,
  ],
})
export class ImLiveProviderModule {}
