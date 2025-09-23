import { Injectable, Inject } from '@nestjs/common';
import { Auth } from './auth.model';
import { CreateAuthDto, UpdateAuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('SEQUELIZE') private readonly sequelize: any
  ) {}

  async create(auth: CreateAuthDto): Promise<Auth> {
    return Auth.create(auth);
  }

  async findAll(): Promise<Auth[]> {
    return Auth.findAll();
  }

  async findOne(id: number): Promise<Auth | null> {
    return Auth.findByPk(id);
  }

  async update(id: number, updateAuth: UpdateAuthDto): Promise<[number, Auth[]]> {
    return Auth.update(updateAuth, { where: { id } });
  }

  async remove(id: number): Promise<number> {
    return Auth.destroy({ where: { id } });
  }
}
