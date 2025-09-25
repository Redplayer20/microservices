// api-gateway/src/app.module.ts

// import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { UserController } from './api/user/user.controller';

// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'USER_SERVICE', // The token to inject the client
//         transport: Transport.TCP,
//         options: { host: 'localhost', port: 3001 }, // The address of your user-service
//       },
//     ]),
//   ],
//   controllers: [UserController], // The controller that handles HTTP requests
//   providers: [], // The API Gateway has no providers/services
// })
// export class AppModule {}

// api-gateway/src/app.module.ts

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './api/user/user.controller';
import { UserService } from './api/user/user.service'; // 1. Import the service

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3001 },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService], // 2. Add the service to providers
})
export class AppModule {}