import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';
import { User } from '../resources/entities/user.intity';
import { Board } from '../resources/entities/board.entity'

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const config = {
  type: 'postgres',
  host: process.env['POSTGRES_HOST'],
  port: process.env['POSTGRES_PORT'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASS'],
  database: process.env['POSTGRES_NAME'],
  synchronize: true,
  entities: [User, Board],
} as ConnectionOptions;
