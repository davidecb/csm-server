import { UpdateUserCommand } from 'src/application/user/command/update-user.command';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { sign } from 'jsonwebtoken';
import { Model } from 'mongoose';
import { UserRepository } from 'src/domain/user/port/repository/user-repository';
import { UserInterface } from './../../interface/user.interface';
import { User } from 'src/domain/user/model/user';
import { Payload } from './../../../auth/types/payload';

@Injectable()
export class UserRepositoryMongoDB implements UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
  ) {}

  async usernameExists(username: string): Promise<boolean> {
    return (await this.userModel.count({ username })) > 0;
  }

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel({
      name: user.name,
      username: user.username,
      password: user.password,
      role: user.role,
      location: user.location,
      userShift: user.userShift,
    });
    await createdUser.save();
    return user;
  }

  async login(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    const isMatch = await user.comparePassword(password);

    if (isMatch) {
      const token = sign(
        { id: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: 90000 },
      );
      return {
        token,
        user: {
          _id: user._id,
          name: user.name,
          username: user.username,
          role: user.role,
          location: user.location,
          userShift: user.userShift,
        },
      };
    }
    return {
      error: 'Unauthorized access',
    };
  }

  async validateUser(payload: Payload): Promise<User> {
    const { id } = payload;
    return await this.userModel.findById(id, {
      password: 0,
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    });
  }

  async update(
    id: string,
    updateUserCommand: UpdateUserCommand,
  ): Promise<User> {
    const updatedUser = await this.userModel.findById(id);
    const updates = Object.keys(updateUserCommand);
    updates.forEach((update) => {
      updatedUser[update] = updateUserCommand[update];
    });
    await updatedUser.save();
    return new User(
      updatedUser.name,
      updatedUser.username,
      updatedUser.password,
      updatedUser.role,
      updatedUser.location,
      updatedUser.userShift,
    );
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
