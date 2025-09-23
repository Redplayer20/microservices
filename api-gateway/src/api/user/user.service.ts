import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [];

  create(user: CreateUserDto): CreateUserDto {
    this.users.push(user);
    return user;
  }

  findAll(): CreateUserDto[] {
    return this.users;
  }

  findOne(id: number): CreateUserDto | undefined {
    return this.users.find(u => u.id === id);
  }

  update(id: number, updateUser: UpdateUserDto): CreateUserDto | null {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUser };
      return this.users[userIndex];
    }
    return null;
  }

  delete(id: number): CreateUserDto | null {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex > -1) {
      const removed = this.users.splice(userIndex, 1);
      return removed[0];
    }
    return null;
  }
}
