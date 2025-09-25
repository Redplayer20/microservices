// import { Controller, Get, Post, Put, Delete, Body, Param, Inject, OnModuleInit } from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';
// import { firstValueFrom } from 'rxjs';

// @Controller('users')
// export class UserController  {
//   constructor(
//     @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
//   ) {}

//   @Post()
//   async createUser(@Body() createUserDto: any) {
//     return firstValueFrom(this.userServiceClient.send({ cmd: 'create_user' }, createUserDto));
//   }

//   @Get()
//   async findAllUsers() {
//     return firstValueFrom(this.userServiceClient.send({ cmd: 'find_all_users' }, {}));
//   }

//   @Get(':id')
//   async findUserById(@Param('id') id: string) {
//     return firstValueFrom(this.userServiceClient.send({ cmd: 'find_user_by_id' }, +id));
//   }

//   @Put(':id')
//   async updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
//     return firstValueFrom(this.userServiceClient.send({ cmd: 'update_user' }, { id: +id, ...updateUserDto }));
//   }

//   @Delete(':id')
//   async deleteUser(@Param('id') id: string) {
//     return firstValueFrom(this.userServiceClient.send({ cmd: 'delete_user' }, +id));
//   }
// }
// api-gateway/src/api/user/user.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service'; // Import the new service

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService, // Inject the new service
  ) {}

  @Post()
  createUser(@Body() createUserDto: any) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findUserById(@Param('id') id: string) {
    return this.userService.findUserById(+id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}