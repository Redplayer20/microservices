// src/api/users/users.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { PermissionGuard } from '../guards/permission.guard';
import { Permissions } from '../enum/permissions.decorators'; // <- index import
import { Role } from '../enum/roles.enum';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService:UsersService

  ) {
    // Inject any required services here

  }
  @Get()
  @UseGuards(AuthGuard)
  // @Permissions(Role.ADMIN)
  findAll() {
    return this.userService.findAllUsers({});
  }
  @Get('one')
  @UseGuards(AuthGuard)
  findOne() {
    return this.userService.findOneUser({});
  }
  
}
