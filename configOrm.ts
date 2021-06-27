import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';
import { User } from './src/resources/entities/user.intity';
import { Board } from './src/resources/entities/board.entity';
import { Task } from './src/resources/entities/task.entity';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const config = {
  type: 'postgres',
  host: process.env['POSTGRES_HOST'],
  port: process.env['POSTGRES_PORT'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASS'],
  database: process.env['POSTGRES_NAME'],
  synchronize: false,
  entities: [User, Board, Task],
  migrationsTableName: 'REST-service',
  migrations: [path.join(__dirname, '../migrations/**/*{.ts,.js}')],
  cli: {
    migrationsDir: '/src/migrations',
  },

} as ConnectionOptions;

export default config;
