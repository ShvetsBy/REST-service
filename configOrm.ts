import { Task } from './src/tasks/entities/task.entity';
import { Board } from './src/boards/entities/board.entity';
import { User } from './src/users/entities/user.entity';
import { ConnectionOptions } from 'typeorm';

const config = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASS || 'postgres',
  database: process.env.POSTGRES_NAME || 'postgres',
  synchronize: false,
  migrationsRun: true,
  entities: [User, Board, Task],
  migrations: ['dist/src/migrations/*.js'],
  cli: {
    migrationsDir: './src/migrations',
  },
} as ConnectionOptions;

export default config;
