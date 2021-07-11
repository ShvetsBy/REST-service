import { Task } from './src/tasks/entities/task.entity';
import { Board } from './src/boards/entities/board.entity';
import { User } from './src/users/entities/user.entity';
import { ConnectionOptions } from 'typeorm';

const config = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_NAME,
  entities: [User, Board, Task],
  keepConnectionAlive: true,
  migrationsTableName: 'REST-service',
  migrations: [__dirname + '../migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
} as ConnectionOptions;

export default config;
