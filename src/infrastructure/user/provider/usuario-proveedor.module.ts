import { userRepositoryProvider } from './repository/user-repository.provider';
import { UserSchema } from './../schema/user.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserService } from 'src/domain/user/service/create-user.service';
import { UserRepository } from 'src/domain/user/port/repositorio/user-repository';
import { createUserServiceProvider } from './service/create-user-service.provider';
import { CreateUserHandler } from 'src/application/user/command/create-user.handler';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [
    { provide: CreateUserService, inject: [UserRepository], useFactory: createUserServiceProvider },
    userRepositoryProvider,
    CreateUserHandler,
  ],
  exports: [
    CreateUserService,
    CreateUserHandler,
    UserRepository,
  ],
})
export class UserProviderModule {}
