// import { createConnection } from 'typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import config from '../configOrm';

// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     imports: [ConfigModule],
//     useFactory: async () => await createConnection(config),
//     inject: [ConfigService],
//   },
// ];

import { createConnection } from 'typeorm';
import { User } from '../src/users/entities/user.entity';
import { Board } from '../src/boards/entities/board.entity';
import { Task } from '../src/tasks/entities/task.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) =>
      await createConnection({
      type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [User, Board, Task],
        synchronize: false,
        migrationsTableName: 'REST-service',
        migrations: ['../migrations/**/*{.ts,.js}'],
        cli: {
          migrationsDir: '/src/migrations',
        },
        // synchronize: true,
      }),
    inject: [ConfigService],
  },
];