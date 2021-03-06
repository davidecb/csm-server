import { CreateUserCommand } from './../../../application/user/command/create-user.command';
import {
  Body,
  Controller,
  Post,
  Res,
  HttpStatus,
  Get,
  UseGuards,
  Request,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { CreateUserHandler } from 'src/application/user/command/create-user.handler';
import { LoginUserCommand } from 'src/application/user/command/login-user.command';
import { LoginUserHandler } from 'src/application/user/command/login-user.handler';
import { AuthGuard } from '@nestjs/passport';
import { ListsUsersHandler } from 'src/application/user/query/lists-users.handler';
import { DeleteUserHandler } from 'src/application/user/command/delete-user.handler';
import { UpdateUserHandler } from 'src/application/user/command/update-user.handler';
import { UpdateUserCommand } from 'src/application/user/command/update-user.command';
import { ValidateUserCommand } from 'src/application/user/command/validate-user.command';
import { ValidateUserHandler } from 'src/application/user/command/validate-user.handler';

@Controller('user')
export class UserController {
  constructor(
    private readonly _createUserHandler: CreateUserHandler,
    private readonly _loginUserHandler: LoginUserHandler,
    private readonly _updateUserHandler: UpdateUserHandler,
    private readonly _deleteUserHandler: DeleteUserHandler,
    private readonly _listsUsersHandler: ListsUsersHandler,
    private readonly _validateUserHandler: ValidateUserHandler,
  ) {}

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  async getUsers(@Request() req, @Res() res) {
    const users = await this._listsUsersHandler.run(req.user.role);
    return res.status(HttpStatus.OK).json(users);
  }

  @Post('/me/validate')
  @UseGuards(AuthGuard('jwt'))
  async validateUser(
    @Request() req,
    @Res() res,
    @Body() validateUserCommand: ValidateUserCommand,
  ) {
    await this._validateUserHandler.run(validateUserCommand, req.user);
    return res.status(HttpStatus.ACCEPTED).json({});
  }

  @Post()
  async createUser(
    @Body() createUserCommand: CreateUserCommand,
    @Request() req,
  ) {
    await this._createUserHandler.run(createUserCommand, req.user.role);
  }

  @Post('/login')
  async loginUser(@Res() res, @Body() loginUserCommand: LoginUserCommand) {
    const loginStatus = await this._loginUserHandler.run(loginUserCommand);
    if (loginStatus.error) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        msg: 'Username or password is wrong',
      });
    }
    res.status(HttpStatus.OK).json(loginStatus);
  }

  @Post('/logout')
  @UseGuards(AuthGuard('jwt'))
  async logouUser(@Res() res) {
    const token = '';
    res.status(HttpStatus.OK).json({
      token,
    });
  }

  @Patch('/update')
  @UseGuards(AuthGuard('jwt'))
  async updateUser(
    @Request() req,
    @Query('id') id: string,
    @Body() updateUserCommand: UpdateUserCommand,
  ) {
    await this._updateUserHandler.run(id, req.user.role, updateUserCommand);
  }

  @Delete('/delete')
  @UseGuards(AuthGuard('jwt'))
  async deleteUser(@Request() req, @Query('id') id: string) {
    await this._deleteUserHandler.run({ id }, req.user.role);
  }
}
