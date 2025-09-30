// user-service/src/service/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module'; // Import UserModule to access UserService

@Module({
  imports: [
    UserModule, // This provides UserService
    JwtModule.register({
      secret: 'abc123',
      signOptions: { expiresIn: '1h' },
    }),
   UserModule
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
