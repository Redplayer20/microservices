import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.userService.findAllUsers({});
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: number) {
    return this.userService.findOneUser(id);
  }
}
