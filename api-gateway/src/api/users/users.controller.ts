// api-gateway/src/api/users/users.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.userService.findAllUsers({});
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOneUser(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() body) {
    return this.userService.createUser(body);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.userService.updateUserInfo({ id, ...body });
  }

 
  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {  // id comes as string
    return this.userService.deleteUser(id); // convert inside service
  }
}
