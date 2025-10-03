// user.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ResponseDto } from '../../dto/response.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MICROSERVICE')
    private userMicroservice: ClientProxy,
  ) {}

  async createUser(data): Promise<ResponseDto> {
    const result: ResponseDto = await firstValueFrom(
      this.userMicroservice.send({ role: 'users', cmd: 'create' }, data),
    ).catch((err) => {
      console.log(err);
    });
    return result;
  }

  async findAllUsers(data): Promise<ResponseDto> {
    const result: ResponseDto = await firstValueFrom(
      this.userMicroservice.send({ role: 'users', cmd: 'find_all' }, {}),
    ).catch((err) => {
      console.log(err);
    });
    return result;
  }

  async findOneUser(id: number): Promise<ResponseDto> {
  return await firstValueFrom(
    this.userMicroservice.send({ role: 'users', cmd: 'find_one' }, id),
  );
}


  async updateUserInfo(data): Promise<ResponseDto> {
    const result: ResponseDto = await firstValueFrom(
      this.userMicroservice.send({ role: 'users', cmd: 'update' }, data),
    ).catch((err) => {
      console.log(err);
    });
    return result;
  }
  async deleteUser(data): Promise<ResponseDto> {  
    const result: ResponseDto = await firstValueFrom(
      this.userMicroservice.send({ role: 'users', cmd: 'delete' }, data),
    ).catch((err) => {
      console.log(err);
    });
    return result;
  }
}