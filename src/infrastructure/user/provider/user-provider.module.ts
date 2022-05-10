import { JwtStrategy } from './../../auth/strategies/jwt.strategy';
import { userRepositoryProvider } from './repository/user-repository.provider';
import { UserSchema } from './../schema/user.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserService } from 'src/domain/user/service/create-user.service';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { createUserServiceProvider } from './service/create-user-service.provider';
import { CreateUserHandler } from 'src/application/user/command/create-user.handler';
import { LoginUserService } from 'src/domain/user/service/login-user.service';
import { loginUserServiceProvider } from './service/login-user-service.provider';
import { LoginUserHandler } from 'src/application/user/command/login-user.handler';
import { ValidateUserService } from 'src/domain/user/service/validate-user.service';
import { validateUserServiceProvider } from './service/validate-user-service.provider';
import { userDaoProvider } from './dao/user-dao.provider';
import { ListsUsersHandler } from 'src/application/user/query/lists-users.handler';
import { DeleteUserService } from 'src/domain/user/service/delete-user.service';
import { deleteUserServiceProvider } from './service/delete-user-service.provider';
import { DeleteUserHandler } from 'src/application/user/command/delete-user.handler';
import { UpdateUserService } from 'src/domain/user/service/update-user.service';
import { updateUserServiceProvider } from './service/update-user-service.provider';
import { UpdateUserHandler } from 'src/application/user/command/update-user.handler';
import { ValidateUserHandler } from 'src/application/user/command/validate-user.handler';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [
    {
      provide: CreateUserService,
      inject: [UserRepository],
      useFactory: createUserServiceProvider,
    },
    {
      provide: UpdateUserService,
      inject: [UserRepository],
      useFactory: updateUserServiceProvider,
    },
    {
      provide: DeleteUserService,
      inject: [UserRepository],
      useFactory: deleteUserServiceProvider,
    },
    {
      provide: LoginUserService,
      inject: [UserRepository],
      useFactory: loginUserServiceProvider,
    },
    {
      provide: ValidateUserService,
      inject: [UserRepository],
      useFactory: validateUserServiceProvider,
    },
    JwtStrategy,
    userRepositoryProvider,
    userDaoProvider,
    CreateUserHandler,
    ValidateUserHandler,
    UpdateUserHandler,
    DeleteUserHandler,
    LoginUserHandler,
    ListsUsersHandler,
  ],
  exports: [
    CreateUserService,
    CreateUserHandler,
    UpdateUserService,
    UpdateUserHandler,
    DeleteUserService,
    DeleteUserHandler,
    LoginUserService,
    LoginUserHandler,
    ListsUsersHandler,
    ValidateUserService,
    ValidateUserHandler,
    UserRepository,
  ],
})
export class UserProviderModule {}
