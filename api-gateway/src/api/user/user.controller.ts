import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return { message: 'User endpoint in API Gateway' };
  }
}
