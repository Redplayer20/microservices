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
      username: 'postgres',        // your PostgreSQL username
      password: 'admin',   // your PostgreSQL password
      database: 'microservice_db', // your database name
      models: [User],
      autoLoadModels: true,
      synchronize: true, // Only for dev
    }),
    UserModule,
  ],
})
export class AppModule {}
