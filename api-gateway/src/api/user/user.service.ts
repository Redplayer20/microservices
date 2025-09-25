// api-gateway/src/api/user/user.service.ts

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService { // This is a "Client Service" or "Gateway Service"
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  createUser(createUserDto: any) {
    return firstValueFrom(this.userServiceClient.send({ role: 'users', cmd: 'create' }, createUserDto));
  }

  findAllUsers() {
    return firstValueFrom(this.userServiceClient.send({ role: 'users', cmd: 'find_all' }, {}));
  }

  findUserById(id: number) {
    return firstValueFrom(this.userServiceClient.send({ role: 'users', cmd: 'find_one' }, id));
  }

  updateUser(id: number, updateUserDto: any) {
    return firstValueFrom(this.userServiceClient.send({ role: 'users', cmd: 'update' }, { id, ...updateUserDto }));
  }

  deleteUser(id: number) {
    return firstValueFrom(this.userServiceClient.send({ role: 'users', cmd: 'remove' }, id));
  }
}