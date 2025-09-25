// // user-service/src/service/user/user.controller.ts
// import { Controller } from '@nestjs/common';
// import { MessagePattern, Payload } from '@nestjs/microservices';
// import { UserService } from './user.service';
// import { CreateUserDto, UpdateUserDto } from './dto';

// @Controller()
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @MessagePattern({ cmd: 'create_user' })
//   create(@Payload() createUserDto: CreateUserDto) {
//     return this.userService.create(createUserDto);
//   }

//   @MessagePattern({ cmd: 'find_all_users' })
//   findAll() {
//     return this.userService.findAll();
//   }

//   @MessagePattern({ cmd: 'find_user_by_id' })
//   findOne(@Payload() id: number) {
//     return this.userService.findOne(id);
//   }

//   @MessagePattern({ cmd: 'update_user' })
//   update(@Payload() payload: { id: number } & UpdateUserDto) {
//     const { id, ...updateUserDto } = payload;
//     return this.userService.update(id, updateUserDto);
//   }

//   @MessagePattern({ cmd: 'delete_user' })
//   remove(@Payload() id: number) {
//     return this.userService.remove(id);
//   }
// }
import { Controller, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service'; // It injects the LOCAL service
import { CreateUserDto, UpdateUserDto } from './dto';
;

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {} // Correct dependency

  @MessagePattern({ role: 'users', cmd: 'create' })
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern({ role: 'users', cmd: 'find_all' })
  // Example of using the AuthGuard
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern({ role: 'users', cmd: 'find_one' })
  findOne(@Payload() id: number) {
    return this.userService.findOne(id);
  }

  @MessagePattern({ role: 'users', cmd: 'update' })
  update(@Payload() payload: { id: number } & UpdateUserDto) {
    const { id, ...updateUserDto } = payload;
    return this.userService.update(id, updateUserDto);
  }

  @MessagePattern({ role: 'users', cmd: 'remove' })
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}