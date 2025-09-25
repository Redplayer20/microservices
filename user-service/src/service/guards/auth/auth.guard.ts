import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Implement your authentication logic here
    const request = context.switchToHttp().getRequest();
    const authheader = request.headers['authorization'];
    return authheader === "Bearer mysecrettoken"; // Example check
  }
}
