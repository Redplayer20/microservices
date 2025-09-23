import { Sequelize } from 'sequelize-typescript';
import { User } from '../service/user/user.model';
import { Auth } from '../service/auth/auth.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres', // Change as needed
        password: 'postgres', // Change as needed
        database: 'microservice_db', // Change as needed
        models: [User, Auth],
        autoLoadModels: true,
        synchronize: true,
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];
