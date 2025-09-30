// user-service/src/service/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User
  ) {}

   create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto as any);
  }

   findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

   findOne(id: number): Promise<User | null> {
    return this.userModel.findByPk(id);
  }

   update(id: number, updateUserDto: UpdateUserDto): Promise<[number, User[]]> {
    return this.userModel.update(updateUserDto, { where: { id }, returning: true });
  }

   remove(id: number): Promise<number> {
    return this.userModel.destroy({ where: { id } });
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }
}
