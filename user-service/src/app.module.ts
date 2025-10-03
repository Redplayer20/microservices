// user-service/src/app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './service/user/user.module';
import { User } from './service/user/user.model';
import { AuthModule } from './service/auth/auth.module';
import { MailModule } from './mail/mail.module';
import { BullModule } from '@nestjs/bull';

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
    BullModule.forRoot({
      redis: {
        host: Config.redis.host,
        port: Config.redis.port as any,
      },
    }),
    UserModule,AuthModule, MailModule,BullModule
  ],
})
export class AppModule {}
