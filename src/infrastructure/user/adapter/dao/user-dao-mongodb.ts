import { UserInterface } from './../../interface/user.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDao } from 'src/domain/user/port/dao/user-dao';
import { UserDto } from 'src/application/user/query/dto/user.dto';

@Injectable()
export class UserDaoMongodb implements UserDao {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
  ) {}

  async lists(): Promise<UserDto[]> {
    return await this.userModel.find(
      {},
      {
        password: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      },
    );
  }
}
