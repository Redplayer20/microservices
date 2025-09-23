// user-service/src/app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './service/user/user.module';
import { User } from './service/user/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',         // 👈 Your PostgreSQL username
      password: 'your_password',    // 👈 Your PostgreSQL password
      database: 'microservice_db',  // 👈 Your database name
      models: [User],
      autoLoadModels: true,
      synchronize: true, // Only for development
    }),
    UserModule,
  ],
})
export class AppModule {}