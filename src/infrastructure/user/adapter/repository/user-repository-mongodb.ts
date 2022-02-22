import { UserRepository } from 'src/domain/user/port/repositorio/user-repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './../../interface/user.interface';
import { User } from 'src/domain/user/model/user';

@Injectable()
export class UserRepositoryMongoDB implements UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
  ) {}

  async usernameExists(username: string): Promise<boolean> {
    return (await this.userModel.count({ username })) > 0;
  }

  async create(user: User): Promise<UserInterface> {
    const createdUser = new this.userModel({
      name: user.name,
      username: user.username,
      password: user.password,
      role: user.role,
    });
    return await createdUser.save();
  }
}
