import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ResponseDto } from '../../dto/response.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE')
    private authMicroService: ClientProxy,
  ) {}

  async login(body): Promise<ResponseDto> {
    return await firstValueFrom(
      this.authMicroService.send({ role: 'auth', cmd: 'login' }, body),
    );
  }

  async validateToken(token): Promise<ResponseDto> {
    return await firstValueFrom(
      this.authMicroService.send({ role: 'auth', cmd: 'validate_token' }, token),
    );
  }
}
