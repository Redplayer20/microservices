//auth.controllers.ts
// user-service/src/service/auth/auth.controller.ts
import { Controller, Body, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // -----------------------------
  // TCP Microservice Endpoints
  // -----------------------------
  @MessagePattern({ role: 'auth', cmd: 'login' })
  login(@Payload() loginDto: { email: string; password: string }) {
    return this.authService.validateUser(loginDto);
  }

  @MessagePattern({ role: 'auth', cmd: 'verify_token' })
  verifyToken(@Payload() token: string) {
    return this.authService.validateToken(token);
  }


  @Post('http/login')
  async httpLogin(@Body() loginDto: { email: string; password: string }) {
    return this.authService.validateUser(loginDto);
  }

  @Post('http/verify')
  async httpVerify(@Body() body: { token: string }) {
    return this.authService.validateToken(body.token);
  }
}
