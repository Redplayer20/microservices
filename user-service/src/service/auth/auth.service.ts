// user-service/src/service/auth/auth.service.ts
import { Injectable, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // Use your existing UserService

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(msg: { email: string; password: string }) {
    const user = await this.userService.findOneByEmail(msg.email);

    if (!user) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        response: { msg: 'User not found' },
      };
    }

    // Assuming you store plain password (not recommended in production)
    if (msg.password === (user as any).password) {
      const payload = { userId: user.id, name: user.name, email: user.email };
      return {
        status: HttpStatus.OK,
        response: { access_token: this.jwtService.sign(payload) },
      };
    }

    return {
      status: HttpStatus.UNAUTHORIZED,
      response: { msg: 'User is not authorized' },
    };
  }

  async validateToken(token: string) {
    try {
      const decoded = await this.jwtService.verify(token);
      return {
        status: HttpStatus.OK,
        response: {
          userId: decoded.userId,
          name: decoded.name,
          email: decoded.email,
        },
      };
    } catch (err) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        response: { msg: 'User is Unauthorized' },
      };
    }
  }
}
