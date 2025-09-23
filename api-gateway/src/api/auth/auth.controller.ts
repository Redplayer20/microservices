import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  getAuth() {
    return { message: 'Auth endpoint in API Gateway' };
  }
}
