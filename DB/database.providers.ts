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
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASS'),
        database: configService.get<string>('POSTGRES_NAME'),
        entities: [User, Board, Task],
        synchronize: true,
      }),
    inject: [ConfigService],
  },
];
